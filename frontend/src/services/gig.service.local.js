
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

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

_createGig()

async function query(filterBy = {}) {
    var gigs = await storageService.query(STORAGE_KEY)
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     gigs = gigs.filter(gig => regex.test(gig.vendor) || regex.test(gig.description))
    // }
    // if (filterBy.price) {
    //     gigs = gigs.filter(gig => gig.price <= filterBy.price)
    // }
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
        gig.owner = userService.getLoggedinUser()
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
        by: userService.getLoggedinUser(),
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
function _createGig() {
    var gig = localStorage.getItem(STORAGE_KEY)
    if (!gig || !gig.length) {
        const gigs = []
        for (let i = 0; i < 10; i++) {
            gig = demoGig()
            gigs.push(gig)
            console.log('title:', gig.title)
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
        "imgUrl": "https://picsum.photos/100/50",
        "tags": [
            "logo-design",
            "artisitic",
            "proffesional",
            "accessible"
        ],
    }
}


