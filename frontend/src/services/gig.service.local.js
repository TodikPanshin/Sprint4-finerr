
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

import { demoGigs } from '../data/demo.gigs.js'

const STORAGE_KEY = 'gigDB'

export const gigService = {
    query,
    getById,
    save,
    remove,
    getEmptyGig,
    addGigMsg,
    demoGig
}
window.cs = gigService

_createDemoGigs()
// _createGig()

async function query(filterBy = {}) {
    var gigs = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        gigs = gigs.filter(gig => regex.test(gig.title) || regex.test(gig.owner.fullname) || regex.test(gig.tags))
    }

    if (filterBy.tag) {
        const regex = new RegExp(filterBy.tag, 'i')
        gigs = gigs.filter(gig => regex.test(gig.tags))
    }

    if (filterBy.minPrice) {
        gigs = gigs.filter(gig => gig.price >= filterBy.minPrice)
    }

    if (filterBy.maxPrice) {
        gigs = gigs.filter(gig => gig.price <= filterBy.maxPrice)
    }

    if (filterBy.time) {
        gigs = gigs.filter(gig => gig.daysToMake <= filterBy.time)
    }

    if (filterBy.level2) {
        gigs = gigs.filter(gig => gig.owner.level === 2)
    }

    if (filterBy.topRated) {
        gigs = gigs.filter(gig => gig.rating.average > 4.75)
    }

    if (filterBy.pro) {
        gigs = gigs.filter(gig => gig.owner.isPro)
    }

    if (filterBy.local) {
        gigs = gigs.filter(gig => gig.country === 'Israel')
    }

    if (filterBy.online) {
        gigs = gigs.filter(gig => gig.owner.isOnline)
    }

    if (filterBy.sortBy) {
        if (filterBy.sortBy === 'Best Selling') {
            gigs = gigs.sort((a, b) => (a.rating.num < b.rating.num) ? 1 : (a.rating.num > b.rating.num) ? -1 : 0)
        }
        
        if (filterBy.sortBy === 'Recommended') {
            gigs = gigs.sort((a, b) => (a.rating.average < b.rating.average) ? 1 : (a.rating.average > b.rating.average) ? -1 : 0)
        }
        
        if (filterBy.sortBy === 'Price') {
            gigs = gigs.sort((a, b) => (a.price > b.price) ? 1 : (a.price < b.price) ? -1 : 0)
        }
    }




    return gigs
}

function getById(gigId) {
    return storageService.get(STORAGE_KEY, gigId)
}

async function remove(gigId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, gigId)
}

async function save(gig) {
    var savedGig
    if (gig._id) {
        savedGig = await storageService.put(STORAGE_KEY, gig)
    } else {
        // Later, owner is set by the backend
        gig.owner = userService.getLoggedInUser()
        savedGig = await storageService.post(STORAGE_KEY, gig)
    }
    return savedGig
}

async function addGigMsg(gigId, txt) {
    // Later, this is all done by the backend
    const gig = await getById(gigId)
    if (!gig.msgs) gig.msgs = []

    const msg = {
        id: utilService.makeId(),
        by: userService.getLoggedInUser(),
        txt
    }
    gig.msgs.push(msg)
    await storageService.put(STORAGE_KEY, gig)

    return msg
}

function getEmptyGig() {
    return {
        vendor: 'Susita-' + (Date.now() % 1000),
        price: utilService.getRandomIntInclusive(1000, 9000),
    }
}


// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 2', price: 980}).then(x => console.log(x))

function _createDemoGigs() {
    let gigs = localStorage.getItem(STORAGE_KEY)
    if (!gigs || !gigs.length) {
        gigs = demoGigs
        const featuresList = ['Prompt writing', 'Generated image examples', 'Artwork delivery', 'Image upscaling']
        utilService.adToDemoData(gigs, 'featuresList', featuresList)
        utilService.adToDemoData(gigs, 'extras', {})
        localStorage.setItem(STORAGE_KEY, JSON.stringify(gigs))
    }
}

function _createGig() {
    var gig = localStorage.getItem(STORAGE_KEY)

    if (!gig || !gig.length) {
        const gigs = []
        for (let i = 0; i < 10; i++) {
            gig = demoGig()
            gigs.push(gig)
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(gigs))
    }
    gig = JSON.parse(localStorage.getItem(STORAGE_KEY))
}

function demoGig() {
    return {
        "_id": utilService.makeId(),
        "title": utilService.makeLorem(7),
        "price": utilService.getRandomIntInclusive(1, 100),
        "rating": {
            "average": 5,
            "num": 178
        },
        "owner": {
            "_id": utilService.makeId(),
            "fullname": utilService.makeLorem(1) + "_" + utilService.makeLorem(1),
            "imgUrl": 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
            "level": "basic/premium",
            "rate": 4,
            "about": utilService.makeLorem(30)
        },
        "daysToMake": 3,
        "description": utilService.makeLorem(10),
        "imgUrls": ["https://picsum.photos/250/150", "https://picsum.photos/250/150"],
        "tags": [
            _getTag(),
            _getTag(),
            _getTag()
        ],
    }
}

function _getTag() {
    const categories = [
        'Graphic & Design',
        'Digital Marketing',
        'Writing & Translation',
        'Video & Animation',
        'Programming & Tech',
        'Photography',
        'Business',
        'AI Services'
    ]
    return categories[utilService.getRandomIntInclusive(0, 7)]
}


