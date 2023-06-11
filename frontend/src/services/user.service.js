import { storageService } from './async-storage.service'
import { httpService } from './http.service'

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
    changeScore,
    demoUser
}

window.userService = userService


function getUsers() {
    return storageService.query('user')
    // return httpService.get(`user`)
}



async function getById(userId) {
    const user = await storageService.get('user', userId)
    // const user = await httpService.get(`user/${userId}`)
    return user
}

function remove(userId) {
    return storageService.remove('user', userId)
    // return httpService.delete(`user/${userId}`)
}

async function update({ _id, score }) {
    const user = await storageService.get('user', _id)
    user.score = score
    await storageService.put('user', user)

    // const user = await httpService.put(`user/${_id}`, {_id, score})
    // Handle case in which admin updates other user's details
    if (getLoggedInUser()._id === user._id) saveLocalUser(user)
    return user
}

async function login(userCred) {
    const users = await storageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    // const user = await httpService.post('auth/login', userCred)
    if (user) {
        return saveLocalUser(user)
    }
}
async function signup(userCred) {
    if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    const user = await storageService.post('user', userCred)
    if (!user) console.log('+++++++++');
    console.log('user:', user)
    //const user = await httpService.post('auth/signup', userCred)
    return saveLocalUser(user)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    // return await httpService.post('auth/logout')
}

async function changeScore(by) {
    const user = getLoggedInUser()
    if (!user) throw new Error('Not loggedin')
    user.score = user.score + by || by
    await update(user)
    return user.score
}


function saveLocalUser(user) {
    user = { _id: user._id, fullname: user.fullname, imgUrl: user.imgUrl, score: user.score }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedInUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}


(async () => {
    await userService.signup({ fullname: 'Puki Norma', username: 'puki', password: '123', score: 10000, isAdmin: false })
    await userService.signup({ fullname: 'Master Adminov', username: 'admin', password: '123', score: 10000, isAdmin: true })
    await userService.signup({ fullname: 'Muki G', username: 'muki', password: '123', score: 10000 })
})()



function demoUser() {
    return {

        fullname: "frederickkessie",
        imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
        level: "basic/premium",
        rating: {
            average: "4.9",
            num: 178,
            rate: 2
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
        reviews: [
            {
                name: "tobiaspille300",
                country: "Thailand",
                flag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f9-1f1ed.png",
                review: "frederickkessie ist a super kind artist doing the process he was super professional and only took him 1 shot to deliver a perfect result ! Highly recommended work with this guy !",
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
                review: "Frederick is amazing and extremely talented. This is the second time working with him and he has been a pleasure yet again!",
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
                reviewedAt: "Published 2 weeks ago"
            }
        ]
    }
}

