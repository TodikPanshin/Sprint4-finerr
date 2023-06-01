
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

async function query(filterBy = { txt: '', price: 0 }) {
    var gigs = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        gigs = gigs.filter(gig => regex.test(gig.vendor) || regex.test(gig.description))
    }
    if (filterBy.price) {
        gigs = gigs.filter(gig => gig.price <= filterBy.price)
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
function _createGig(){
const gig=JSON.parse(localStorage.getItem(STORAGE_KEY)) 
if(!gig||!gig.length){
    for(let i=0; i<10;i++){
        demoGig()
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gig))
}

}

function demoGig(){
    return{
        _id: utilService.makeId(),
        title: utilService.makeLorem(10),
        price: utilService.getRandomIntInclusive(1,100),
        owner: {
            _id: utilService.makeId(),
            fullname: utilService.makeLorem(2),
            imgUrl: '',
            level: "basic/premium",
            rate: 4,
            about: utilService.makeLorem(30)
        },
        daysToMake: 3,
        description: utilService.makeLorem(10),
        imgUrl: "https://picsum.photos/100",
        tags: [
            "logo-design",
            "artisitic",
            "proffesional",
            "accessible"
        ],
    }
}


