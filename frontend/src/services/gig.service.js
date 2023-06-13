
// import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

const STORAGE_KEY = 'gig/'

export const gigService = {
    query,
    getById,
    save,
    remove,
    getEmptyGig,
    addGigMsg
}
window.cs = gigService


async function query(filterBy = { txt: '' }) {
    const filterQueryParams = '?' + new URLSearchParams(filterBy).toString()
    return httpService.get(STORAGE_KEY, filterBy)
}

function getById(gigId) {
    return httpService.get(`gig/${gigId}`)
}

async function remove(gigId) {
    return httpService.delete(`gig/${gigId}`)
}
async function save(gig) {
    var savedGig
    if (gig._id) {
        savedGig = await httpService.put(`gig/${gig._id}`, gig)

    } else {
        savedGig = await httpService.post('gig', gig)
    }
    return savedGig
}

async function addGigMsg(gigId, txt) {
    const savedMsg = await httpService.post(`gig/${gigId}/msg`, { txt })
    return savedMsg
}


function getEmptyGig() {
    return {
        "title": "",
        "price": utilService.getRandomIntInclusive(10, 200),
        "rating": {
            "average": "5.0",
            "num": utilService.getRandomIntInclusive(200, 999),
        },
        "owner": {
            "_id": "x101",
            "fullname": "Yoni Pels",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
            "level": "1",
            "rate": 4,
            "about": `Hi, My Name is Yoni Pels and in the past 10 years \n
                  Ive been working as a UI/UX designer, \n
                   product manager and creative director \n
                    in the E-commerce field. I offer a wide \n
                     variety of design and development services \n
                      for business owners to help you grow your \n
                       business. I can create any kind of unique  \n
                       design overnight to help businesses attract \n
                        more clients.I am a Shopify official partner \n
                         and Expert and have been part of the Shopify \n
                          Marketplace for nearly 5 years. I am also a  \n
                          skilled WordPress Developer. I have been designing \n
                           and developing WordPress & Shopify websites for \n
                            more than 7 years.`,
        },
        "daysToMake": 3,
        "description": `A logo is what identifies your brand and business.
        If you are looking for a modern minimalist luxury and elegant logo,
         then you are on the right page and a step away to get your brand’s identity logo. 
         With over 2000 satisfied clients, VIP customer care and 
         a creative mind at your service. Where the customer's
          satisfaction is on top of everything, you will be provided
           with a very friendly, yet professional treatment. I always
            prioritise client’s satisfaction because it is the most
             important factor when it comes to work. Having that said,
              I always take client’s requirements and imagination into
               consideration and give my 100% to every projects and work
                until the client is completely satisfied with the work.`,

        "imgUrls": [
            'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/292635463/original/9d87ea3304363c5b203a75758217235a8c28bc9c/do-creative-4-modern-minimalist-logo-design.jpg',
            'https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230326/moc4-Recovered_wf2vw6.jpg',
            'https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230326/2_do473u.jpg',
            'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/9cf8e48e7fa6a09bbd58dd6c064e17f3-1685737363/Logo-A/do-creative-4-modern-minimalist-logo-design.jpg',
        ],
        "likedByUsers": ["mini-user"]
    }
}





