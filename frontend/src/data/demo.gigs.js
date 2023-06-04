import { utilService } from "../services/util.service"

const gig = {
  "_id": "i101",
  "title": "I will design your logo that looks very nice",
  "price": 12,
  "rating": {
    "average": 4.9,
    "num": 178
  },
  "owner": {
    "_id": "u101",
    "fullname": "Dudu Da",
    "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
    "level": "basic/premium",
    "rate": 4
  },
  "daysToMake": 3,
  "description": "Make unique logo...",
  "imgUrls": [
    'https://picsum.photos/300/200?img=1',
    'https://picsum.photos/300/200?img=2',
    'https://picsum.photos/300/200?img=3',
    'https://picsum.photos/300/200?img=4',
  ],
  "tags": [
    "logo-design",
    "artisitic",
    "proffesional",
    "accessible"
  ],
  "likedByUsers": ["mini-user"]
}

export const demoGigs = [
  {
    "_id": "i101",
    "title": "I will design the logo for you that looks very nice",
    "price": 12,
    "rating": {
      "average": 5.0,
      "num": 567
    },
    "owner": {
      "_id": "u101",
      "fullname": "Dudu Da",
      "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      "level": "basic/premium",
      "rate": 4
    },
    "daysToMake": 3,
    "description": "Make unique logo...",
    "imgUrls": [
      'https://picsum.photos/300/200?img=5',
      'https://picsum.photos/300/200?img=6',
      'https://picsum.photos/300/200?img=7',
      'https://picsum.photos/300/200?img=8',
    ],
    "tags": [
      _getTag(),
      _getTag(),
      _getTag(),
      "logo-design",
      "artisitic",
      "proffesional",
      "accessible"
    ],
    "likedByUsers": ["mini-user"]
  },
  {
    "_id": "i102",
    "title": "I will write your blog post that looks very Beautiful",
    "price": 20,
    "rating": {
      "average": 4.8,
      "num": 452
    },
    "owner": {
      "_id": "u102",
      "fullname": "Ava Ava",
      "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      "level": "basic/premium",
      "rate": 5
    },
    "daysToMake": 5,
    "description": "Write informative and engaging blog posts...",
    "imgUrls": [
      'https://picsum.photos/300/200?img=9',
      'https://picsum.photos/300/200?img=10',
      'https://picsum.photos/300/200?img=11',
      'https://picsum.photos/300/200?img=12',
      'https://picsum.photos/300/200?img=13',
    ],
    "tags": [
      _getTag(),
      _getTag(),
      _getTag(),
      "blog-writing",
      "informative",
      "engaging",
      "professional"
    ],
    "likedByUsers": ["mini-user"]
  },
  {
    "_id": "i103",
    "title": "I will create your website so amazing and nice",
    "price": 50,
    "rating": {
      "average": 4.3,
      "num": 669
    },
    "owner": {
      "_id": "u103",
      "fullname": "Kiki Kiki",
      "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      "level": "basic/premium",
      "rate": 3
    },
    "daysToMake": 10,
    "description": "Create a beautiful and responsive website...",
    "imgUrls": [
      'https://picsum.photos/300/200?img=15',
      'https://picsum.photos/300/200?img=16',
      'https://picsum.photos/300/200?img=17',
    ],
    "tags": [
      _getTag(),
      _getTag(),
      _getTag(),
      "website-design",
      "beautiful",
      "responsive",
      "professional"
    ],
    "likedByUsers": ["mini-user"]
  },
  {
    "_id": "i104",
    "title": "I will develop your app To your satisfaction",
    "price": 100,
    "rating": {
      "average": 4.7,
      "num": 455
    },
    "owner": {
      "_id": "u104",
      "fullname": "Lulu Lulu",
      "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      "level": "basic/premium",
      "rate": 2
    },
    "daysToMake": 15,
    "description": "Develop a functional and user-friendly app...",
    "imgUrls": [
      'https://picsum.photos/300/200?img=17',
      'https://picsum.photos/300/200?img=18',
      'https://picsum.photos/300/200?img=19',
      'https://picsum.photos/300/200?img=20',
    ],
    "tags": [
      _getTag(),
      _getTag(),
      _getTag(),
      "app-development",
      "functional",
      "user-friendly",
      "professional"
    ],
    "likedByUsers": ["mini-user"]
  },
  {
    "_id": "i105",
    "title": "I will write your ad copy and you will be satisfied",
    "price": 15,
    "rating": {
      "average": 4.5,
      "num": 894
    },
    "owner": {
      "_id": "u105",
      "fullname": "Mia Mia",
      "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      "level": "basic/premium",
      "rate": 5
    },
    "daysToMake": 2,
    "description": "I will write your ad copy",
    "imgUrls": [
      'https://picsum.photos/300/200?img=21',
      'https://picsum.photos/300/200?img=22',
      'https://picsum.photos/300/200?img=23',
      'https://picsum.photos/300/200?img=24',
    ],
    "tags": [
      _getTag(),
      _getTag(),
      _getTag(),
      "app-development",
      "functional",
      "user-friendly",
      "professional"
    ],
    "likedByUsers": ["mini-user"]
  },
  {
    "_id": "i106",
    "title": "I will create your marketing materials To your satisfaction",
    "price": 30,
    "rating": {
      "average": 4.6,
      "num": 267
    },
    "owner": {
      "_id": "u106",
      "fullname": "Ni Ni",
      "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      "level": "basic/premium",
      "rate": 3
    },
    "daysToMake": 5,
    "description": "Create eye-catching and persuasive marketing materials...",
    "imgUrls": [
      'https://picsum.photos/300/200?img=25',
      'https://picsum.photos/300/200?img=26',
      'https://picsum.photos/300/200?img=27',
      'https://picsum.photos/300/200?img=28',
    ],
    "tags": [
      _getTag(),
      _getTag(),
      _getTag(),
      "marketing-materials",
      "eye-catching",
      "persuasive",
      "professional"
    ],
    "likedByUsers": ["mini-user"]

  },
  {
    "_id": "i107",
    "title": "I will manage your social media To your satisfaction",
    "price": 50,
    "rating": {
      "average": 4.5,
      "num": 556
    },
    "owner": {
      "_id": "u107",
      "fullname": "Oli Oli",
      "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      "level": "basic/premium",
      "rate": 5
    },
    "imgUrls": [
      'https://picsum.photos/300/200?img=29',
      'https://picsum.photos/300/200?img=30',
      'https://picsum.photos/300/200?img=31',
      'https://picsum.photos/300/200?img=32',
    ],
    "daysToMake": 10,
    "description": "Grow your social media following and engagement...",
    "tags": [
      _getTag(),
      _getTag(),
      _getTag(),
      "social-media-management",
      "grow-following",
      "engagement",
      "professional"
    ],
    "likedByUsers": ["mini-user", "mini-user2"]
  },
  {
    "_id": "i108",
    "title": "I will create your email marketing campaigns",
    "price": 25,
    "rating": {
      "average": 4.0,
      "num": 887
    },
    "owner": {
      "_id": "u108",
      "fullname": "Poppy Poppy",
      "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      "level": "basic/premium",
      "rate": 3
    },
    "daysToMake": 3,
    "description": "Create effective email marketing campaigns that convert...",
    "imgUrls": [
      'https://picsum.photos/300/200?img=33',
      'https://picsum.photos/300/200?img=34',
      'https://picsum.photos/300/200?img=35',
      'https://picsum.photos/300/200?img=36',
    ],
    "tags": [
      _getTag(),
      _getTag(),
      _getTag(),
      "email-marketing",
      "effective",
      "convert",
      "professional"
    ],
    "likedByUsers": ["mini-user"]
  },
  {
    "_id": "i109",
    "title": "I will help you with your SEO To your satisfaction",
    "price": 100,
    "rating": {
      "average": 4.8,
      "num": 268
    },
    "owner": {
      "_id": "u109",
      "fullname": "Romy Romy",
      "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      "level": "basic/premium",
      "rate": 2
    },
    "daysToMake": 15,
    "description": "Improve your website's search engine ranking...",
    "imgUrls": [
      'https://picsum.photos/300/200?img=37',
      'https://picsum.photos/300/200?img=38',
      'https://picsum.photos/300/200?img=39',
    ],
    "tags": [
      _getTag(),
      _getTag(),
      _getTag(),
      "seo",
      "improve-ranking",
      "professional"
    ],
    "likedByUsers": []
  },
  {
    "_id": "i110",
    "title": "I will create your video content To your satisfaction",
    "price": 50,
    "rating": {
      "average": 4.5,
      "num": 466
    },
    "owner": {
      "_id": "u110",
      "fullname": "Suki Suki",
      "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      "level": "basic/premium",
      "rate": 5
    },
    "daysToMake": 10,
    "description": "Create engaging and informative video content...",
    "imgUrls": [
      'https://picsum.photos/300/200?img=40',
      'https://picsum.photos/300/200?img=41',
      'https://picsum.photos/300/200?img=42',
    ],
    "tags": [
      _getTag(),
      _getTag(),
      _getTag(),
      "seo",
      "improve-ranking",
      "professional"
    ],
    "likedByUsers": []
  },
  {
    "_id": "i111",
    "title": "I will create your video content To your satisfaction",
    "price": 50,
    "rating": {
      "average": 4.5,
      "num": 466
    },
    "owner": {
      "_id": "u111",
      "fullname": "Suki Suki",
      "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      "level": "basic/premium",
      "rate": 5
    },
    "daysToMake": 10,
    "description": "Create engaging and informative video content...",
    "imgUrls": [
      'https://picsum.photos/300/200?img=43',
      'https://picsum.photos/300/200?img=44',
      'https://picsum.photos/300/200?img=45',
    ],
    "tags": [
      _getTag(),
      _getTag(),
      _getTag(),
      _getTag(),
      "seo",
      "improve-ranking",
    ],
    "likedByUsers": []
  },
  {
    "_id": "i112",
    "title": "I will create your video content To your satisfaction",
    "price": 78,
    "rating": {
      "average": 4.6,
      "num": 490
    },
    "owner": {
      "_id": "u112",
      "fullname": "Suki Suki",
      "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
      "level": "basic/premium",
      "rate": 5
    },
    "daysToMake": 12,
    "description": "Create engaging and informative video content To your satisfaction",
    "imgUrls": [
      'https://picsum.photos/300/200?img=46',
      'https://picsum.photos/300/200?img=47',
      'https://picsum.photos/300/200?img=48',
    ],
    "tags": [
      _getTag(),
      _getTag(),
      _getTag(),
      "improve-ranking",
      "professional"
    ],
    "likedByUsers": []
  },
]






const orders = [
  {
    "_id": "o1225",
    "buyer": "mini-user",
    "seller": "mini-user",
    "gig": {
      "_id": "i101",
      "name": "Design Logo",
      "price": 20
    },
    "status": "pending"
  }
]


const users = [
  {
    "_id": "u101",
    "fullname": "User 1",
    "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
    "username": "user1",
    "password": "secret",
    "level": "basic/premium",
    "reviews": [
      {
        "id": "madeId",
        "gig": "{optional-mini-gig}",
        "txt": "Very kind and works fast",
        "rate": 4,
        "by": {
          "_id": "u102",
          "fullname": "user2",
          "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
        }
      }
    ],
  },
]





const allTags = [
  "logo-design",
  "wordpress",
  "voice-over",
  "artisitic",
  "proffesional",
  "accessible",
]

function isPrimaryTag(tag) {
  return allTags.slice(0, 3).includes(tag)
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

// HomePage
//  list of gigs with link to gig-details

// Gig Details
// <pre>JSON, slowly improve

// UserDetails
//  basic info
//  orderedGigs => orderService.query({userId: 'u101'})
//  ownedGigs => gigService.query({ownerId: 'u103'})

// GigEdit - make it super easy to add Gig for development

// GigList, GigOrder
// Order, confirm Order
// Lastly: GigExplore, Filtering


// function loadApp() {
//   socketService.on(SOCKET_EVENT_ORDER_ADDED, (order) => {
//     showSuccessMsg(`Another order was just made, check it out ${order.gig._id}`)
//   })
// }