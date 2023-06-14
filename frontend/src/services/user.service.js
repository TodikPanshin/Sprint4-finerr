import { storageService } from './async-storage.service'
import { httpService } from './http.service'
import { utilService } from './util.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedInUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    update,
    demoUser,
    calculateAnnualRevenue,
}

window.userService = userService

function getUsers() {
    // return storageService.query('user')
    return httpService.get(`user`)
}

async function getById(userId) {
    // const user = await storageService.get('user', userId)
    const user = await httpService.get(`user/${userId}`)
    return user
}

function remove(userId) {
    // return storageService.remove('user', userId)
    return httpService.delete(`user/${userId}`)
}

async function update({ _id }) {
    // await storageService.put('user', user)
    const user = await httpService.put(`user/${_id}`, { _id })

    // Handle case in which admin updates other user's details
    if (getLoggedInUser()._id === user._id) saveLocalUser(user)
    return user
}

async function login(userCred) {
    // const users = await storageService.query('user')
    // const user = users.find(user => user.username === userCred.username)

    const user = await httpService.post('auth/login', userCred)
    if (user) {
        return saveLocalUser(user)
    }
}

async function signup(userCred) {
    const newUser = _getEmptyUser()
    userCred = { ...userCred, ...newUser }
    if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png'

    // const user = await storageService.post('user', userCred)
    const user = await httpService.post('auth/signup', userCred)
    console.log(userCred)
    return saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // return await httpService.post('auth/logout')
}

function saveLocalUser(user) {
    user = { _id: user._id, fullname: user.fullname, imgUrl: user.imgUrl }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedInUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}


// (async () => {
//     await userService.signup({ fullname: 'Yoni', username: 'yoni', password: '123', isAdmin: true })
//     await userService.signup({ fullname: 'Todik', username: 'todik', password: '123', isAdmin: true })
//     await userService.signup({ fullname: 'Nadav', username: 'nadav', password: '123', isAdmin: true })
// })()

function demoUser() {
    return {
        isSeller: true,
        fullname: "jeff G",

        imgUrl: "https://akns-images.eonline.com/eol_images/Entire_Site/2020910/rs_1200x1200-201010110427-1200-jeff-goldblum.cm.101020.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
        level: "basic/premium",
        rating: {
            average: "4.9",
            num: 178,
            rate: 4.8
        },
        country: "Ghana",
        description: "Hello ! Much obliged for visiting my gig :)\nIn this gig I'm offering you an exceptionally 3 one of a kind, best and reasonable bundles.\nIn case you are thinking for giving somebody uncommon an extremely delightful, eye getting gift( hyper practical hand drawing pencil sketch picture)?\nKindly select the helpful bundle and submit your request at this moment and I'll give you an ideal picture sketch, hand drawing, practical drawing, pencil attracting high goal JPEG/PNG advanced document.\nI will give hand-drawn dark and White or hued reasonable pictures.\nSympathetically give me clear reference photograph however much as could be expected.\nThe material I utilized for Creating pencil representations are:\nDrawing materials: graphite pencil, charcoal, Bristol paper, mono eraser, brush, mixing stump, mechanical pencil, graphite powder and so on .\nYou can give me anything:\nPicture photographs\nFamily photographs\nCreature photographs\nAny item photographs\nScene photographs\nEngineering photographs\nAnything you envision\nKindly reach me prior to submitting your request! Much appreciated.\nI DO NOT DELIVER ORIGINAL PHYSICAL COPY BUT A HIGH RESOLUTION JPEG DIGITA",
        tags: [
            "pencil drawing",
            "realistic drawing",
            "hand drawing",
            "portrait drawing",
            "pencil sketch"
        ],
        likedByUsers: [
            "mini-user"
        ],
        sellerStats: _generateSellerStats(),
        isSeller: true,
        reviews: [
            {
                name: "tobiaspille300",
                country: "Thailand",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f9-1f1ed.png",
                review: "jeff G ist a super kind artist doing the process he was super professional and only took him 1 shot to deliver a perfect result ! Highly recommended work with this guy !",
                reviewedAt: "Published 2 months ago"
            },
            {
                name: "liam31",
                country: "United Kingdom",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
                review: "I requested a slightly earlier delivery on this and once again Frederick came through and provided a fantastic delivery. Thanks so much!",
                reviewedAt: "Published 3 weeks ago"
            },
            {
                name: "liam31",
                country: "United Kingdom",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
                review: "jeff G is amazing and extremely talented. This is the second time working with him and he has been a pleasure yet again!",
                reviewedAt: "Published 3 weeks ago"
            },
            {
                name: "larsonraz",
                country: "United States",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
                review: "Very detailed",
                reviewedAt: "Published 1 week ago"
            },
            {
                name: "stevekaszycki",
                country: "United States",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
                review: "very nice portrait, very good quality.",
                reviewedAt: "Published 2 weeks ago",
                
            }
        ]
    }
}

function calculateAnnualRevenue(monthlyRevenue) {
    const annualRevenue = monthlyRevenue.reduce(
        (totalRevenue, { revenue }) => totalRevenue + revenue,
        0)

    return annualRevenue
}

function _generateSellerStats() {
    const sellerStats = {
        balance: 96543,
        revenue: [],
    }

    const currentYear = new Date().getFullYear()

    for (let year = currentYear - 2; year <= currentYear; year++) {
        const revenue = []


        for (let month = 0; month < 12; month++) {
            const monthName = new Date(year, month).toLocaleString('en-US', { month: 'long' });
            const randomRevenue = utilService.getRandomIntInclusive(500, 1000)
            revenue.push({ month: monthName, revenue: randomRevenue })
        }

        sellerStats.revenue.push({ year: year, monthRevenue: revenue })
    }

    return sellerStats
}

function _getEmptyUser() {
    return {
        isSeller: false,
        level: 1,
        rating: {
            average: 0,
            num: 0,
            rate: 0
        },
        country: "",
        description: "",
        tags: [],
        likedByUsers: [
            "mini-user"
        ],
        sellerStats: {
            balance: 0,
            revenue: [{ year: '', monthRevenue: [{ month: '', revenue: '' }] }]
        },
        reviews: [
            {
                name: "",
                country: "",
                flag: "",
                review: "",
                reviewedAt: ""
            }
        ]
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
        'AI Services',
        'Data',
        'Lifestyle',
        'music & Audio'
    ]
    return categories[utilService.getRandomIntInclusive(0, 10)]
}