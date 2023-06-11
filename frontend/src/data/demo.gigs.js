import { utilService } from "../services/util.service"

const gig = {
  "_id": utilService.makeId(),
  "title": "I will design your logo that looks very nice",
  "price": 12,
  "rating": {
    "average": "4.9",
    "num": 178
  },
  "owner": {
    "_id": "u101",
    "fullname": "Dudu Da",
    "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
    "level": 2,
    "rate": 4,
    "isOnline": true,
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
  "likedByUsers": ["mini-user"],
  "extras": {},
  "isOnline": false
}

export const demoGigs = [
  {
    "_id": utilService.makeId(),
    "title": "I will design your logo that looks very nice",
    "price": 12,
    "rating": {
      "average": "5.0",
      "num": 567
    },
    "owner": {
      "_id": "u101",
      "fullname": "Dudu Vitman",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/42643893/original/aki2.png",
      "level": 1,
      "rate": 4,
      "about": "Hi, My Name is Dudu Da and in the past 10 years I've been working as a UI/UX designer, product manager and creative director in the E-commerce field. I offer variety of design and development services for business owners to help you grow your business. I can create any kind of unique  design overnight to help businesses attract more clients.",
      "isOnline": true,
    },
    "country": "Israel",
    "daysToMake": 3,
    "description": "A logo is what identifies your brand and business. If you are looking for a modern minimalist luxury and elegant logo, then you are on the right page and a step away to get your brand’s identity logo. With over 2000 satisfied clients, VIP customer care and a creative mind at your service. Where the customer's satisfaction is on top of everything, you will be provided with a very friendly, yet professional treatment. I always prioritise client’s satisfaction because it is the most important factor when it comes to work. Having that said, I always take client’s requirements and imagination into consideration and give my 100% to every projects and work until the client is completely satisfied with the work",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/292635463/original/9d87ea3304363c5b203a75758217235a8c28bc9c/do-creative-4-modern-minimalist-logo-design.jpg",
      "https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230326/moc4-Recovered_wf2vw6.jpg",
      "https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230326/2_do473u.jpg",
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/9cf8e48e7fa6a09bbd58dd6c064e17f3-1685737363/Logo-A/do-creative-4-modern-minimalist-logo-design.jpg"
    ],
    "tags": [
      "Graphic & Design",
      "logo-design",
      "artisitic",
      "proffesional",
      "accessible"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will write a unique SEO article or website content",
    "price": 20,
    "rating": {
      "average": "4.8",
      "num": 452
    },
    "owner": {
      "_id": "u102",
      "fullname": "Eva Green",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/f216e27d386793e9421f8589f9951f3c-1652366550519/6436ef8a-2f83-46ef-b8d9-3b17d9bfd89c.jpg",
      "level": 2,
      "rate": 5,
      "about": "For more than 20 years, I've navigated the ever-changing world of optimized content creation as a multi-disciplined freelance writer. I deliver quality website content, blog posts, non-fiction books, unique rewriting, and more. Every piece provides information in an engaging format to attract your target audience. Please contact me for high-quality, unique, and effective writing. I'm a native English speaker from the United States. Thank you. Requests welcome!"
    },
    "country": "United States",
    "daysToMake": 5,
    "description": "Both readers and search engine algorithms demand more from blog posts and articles these days. Competition grows daily in ever-changing global markets. You need content that grabs attention, keeps it, and drives conversions, and you don't have time to do it yourself. You need SEO article writing from a professional content writer who delivers what you and your business need to succeed. Why Choose Me for Blog Post Writing? I've been a professional freelance writer for over 20 years. Every buyer gets a dedicated approach to their blog content or article writing needs. (Check out the 'My Writing Process' page in my portfolio.) What Do You Get with Your Order You need worry-free, high-quality, and optimized blog posts and articles. That is what I deliver. Full research from reputable sources and references Current SEO best practices with your keywords Close attention to grammar, spelling, punctuation, etc. (Native US English) 100% original, no plagiarism, fresh, and unique Human touch writing No AI (Your readers deserve it!) Please contact me with any questions, to check availability, or for higher word count orders. I look forward to working with you.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/1227060/original/4eebb55f7a7d27c93110b4c6d20ac07a5f1d4aa7/write-a-unique-500-word-seo-blog-post.png",
      "https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20180418/Friendly_Post1_b9bif0.jpg",
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c7bdbff98fde1822c85ae1b27de69cb3-1664380630/shutterstock_1085505137/write-a-unique-500-word-seo-blog-post.jpg",
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c2649aedb7ad0a886584d25677e207c3-1624292593/GettyImages-1279869264/write-a-unique-500-word-seo-blog-post.jpg",
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/dcd2d4cc2dc52ba2f39fc2249845aeef-1564706628/GettyImages-516450790/write-a-unique-500-word-seo-blog-post.jpg"
    ],
    "tags": [
      "Digital Marketing",
      "Business",
      "Writing & Translation",
      "blog-writing",
      "informative",
      "engaging",
      "professional"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will build your WordPress website with oxygen",
    "price": 50,
    "rating": {
      "average": "4.3",
      "num": 669
    },
    "owner": {
      "_id": "u103",
      "fullname": "Kika Pens",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/600643c0866d7666ebfc116f4188fc75-1645788859463/ddf415dd-43ce-4fe5-8908-40f718832504.jpg",
      "level": 1,
      "rate": 3,
      "about": "Hi, nice to meet you! My name is Kiki Kiki. I am happy to help you creating your website to promote your business successfully. If there are questions, please just ask me. Talk to you soon :)"
    },
    "country": "Brazil",
    "daysToMake": 1,
    "description": "Each project is unique, please contact me before your order. Thanks ;) Portfolio: https://www.fiverr.com/users/Kiki Kiki/portfolio What is included in this offer? All What You Need.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/263804107/original/13bba12a57e31c3058ce81e40de5e6cea3b3ce8c/build-your-WordPress-website-with-oxygen-builder.png",
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/78e87e4cd477aa4a6efc685b994b953f-1685625555/GoDo/build-your-WordPress-website-with-oxygen-builder.png",
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/a385f08f5b7cce6f080183514f7d9bea-1680233150/Cargo/build-your-WordPress-website-with-oxygen-builder.png"
    ],
    "tags": [
      "Programming & Tech",
      "Digital Marketing",
      "website-design",
      "beautiful",
      "responsive",
      "professional"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will do mobile app development",
    "price": 100,
    "rating": {
      "average": "4.7",
      "num": 455
    },
    "owner": {
      "_id": "u104",
      "fullname": "panium Lust",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c536afed1a3071833cdb28e78042f2cc-1660265160318/d8abcb3c-b531-4d8d-8c35-1aea138663ee.jpg",
      "level": 2,
      "rate": 2,
      "about": "I'm a professional mobile app developer for android app and ios app development with 5+ years of experience. I create fully functional ios apps, games, and android applications for all your needs. I have made over 500+ android apps, ios apps, iPhone apps, react native apps, Flutter apps & hybrid apps & much more! I develop the best UI UX app design and bug-free applications with VIP customer support and 100% customer satisfaction."
    },
    "country": "Kazachstan",
    "daysToMake": 15,
    "description": "If you are looking for Mobile App Development (IOS, Android, Hybrid, Native), you are at the right place. I am a professional android developer and IOS app developer to develop high quality mobile apps for android and iPhone apps development. I can also develop a web based admin panel for your mobile app development. Please contact me before Placing Order. Knowing your needs is important.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/183742032/original/0cf85335095a9237da5d39f324c84f5e765c1ed4/be-ios-app-developer-for-iphone-app-and-android-mobile-app-development.jpg",
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/ff53354f2aed1aa7f6f1e254eee26fa1-1671473394/Change%20Password/be-ios-app-developer-for-iphone-app-and-android-mobile-app-development.jpg",
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/a2eb8b881aa2fa6fb14cfc41ad006d92-1665214431/113/be-ios-app-developer-for-iphone-app-and-android-mobile-app-development.png",
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_gig_pdf_gallery_view_ver4,q_auto,f_auto/attachments/delivery/asset/dcc0d0b091bc320af14395e17279d57f-1626778220/wireframe/be-ios-app-developer-for-iphone-app-and-android-mobile-app-development.pdf",
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/85ab831ac8b7f391140edeb6befbc738-1611913539/Juice%20Screen%201/be-ios-app-developer-for-iphone-app-and-android-mobile-app-development.png"
    ],
    "tags": [
      "Programming & Tech",
      "Digital Marketing",
      "app-development",
      "functional",
      "user-friendly",
      "professional"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will write your ad or content to get results",
    "price": 15,
    "rating": {
      "average": "4.5",
      "num": 894
    },
    "owner": {
      "_id": "u105",
      "fullname": "Mia Piamenta",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/26704082/original/10671246_10154605530890361_257615399364358857_n.jpg",
      "level": 2,
      "rate": 5,
      "about": "25 YEAR PRO WRITER - I have been writing on the Web since it began creating ads, press releases, web copy, sales letters, articles, blog posts, you name it! Join the thousands of happy customers who have been delighted with my hard work and great writing."
    },
    "country": "Israel",
    "daysToMake": 2,
    "description": "24 HOUR RUSH DELIVERY on all orders. PRO WRITER with 20 years experience. See my 8,000 customer reviews.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/1263477/original/18dd94b70047a74cf48b988f61f67c704c35bbdb/write-your-classified-ad-fat-50-words.png",
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/120916459/original/8a92c53361ca6325c7f60c78827aca5b1d7c8a10/write-you-sales-copy-that-really-converts.png",
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/180691472/original/9d72cdbf919a8cec6089006f796e69f91c6b49c6/creative-writing-video-script-creative-script-creative-writer-short-story.jpg",
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/180691472/original/3e4be13fb87d5807da07775cf62342f0a2e59ec8/creative-writing-video-script-creative-script-creative-writer-short-story.jpg"
    ],
    "tags": [
      "Programming & Tech",
      "Digital Marketing",
      "app-development",
      "functional",
      "user-friendly",
      "professional"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will write dog articles and pet blog content",
    "price": 30,
    "rating": {
      "average": "4.6",
      "num": 267
    },
    "owner": {
      "_id": "u106",
      "fullname": "pol Newman",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/09713f9e9eae81e986c392dd25e69539-1650223148753/7cd15136-cfc5-4d71-9efc-fd4a66679771.png",
      "level": 1,
      "rate": 3,
      "about": "Hello, I'm pol! I am a professional freelance content creator, published author, and ghostwriter extraordinaire. I have a B.A. in English and have been a paid writer for 10+ years. I specialize in non-fiction eBooks and SEO-friendly blogs / articles that drive traffic to your website. Additionally, I have extensive experience writing about pets, self-help, gardening, travel, education, spirituality, entrepreneurship, and small businesses. My inbox is always open to new clients!"
    },
    "country": "Canada",
    "daysToMake": 5,
    "description": "Are you looking for a professional freelancer to take your pet content to the next level? Want to drive traffic to your blog? Need social media posts for your dog's Insta page? How about pet product descriptions that = sales? Hello. My name is Jen, and I'd love to help! I am a self-proclaimed 'dog mom' with 10+ years' experience caring for and writing about: dogs (all breeds, but especially Great Danes and Poodles) cats horses (I volunteered in a barn for 5 years) tortoises / turtles birds snakes / reptiles (I'm a herpetology hobbyist) I look forward to working with you!",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/222615986/original/6f5b7c553b6fd09b2bf820ac4496b614349d3a97/write-dog-articles-and-pet-blog-content.jpg",
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/222615986/original/376289b040df9cf53c17c4a7c9bfc8c7bf1dfe20/write-dog-articles-and-pet-blog-content.jpg",
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/005da5fe4613d306b98e908bdc13fc6b-1684984866/Image%206/write-dog-articles-and-pet-blog-content.jpg",
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/6b6bf04fc009c04bbcc04abe751476bc-1681350026/Image%202/write-dog-articles-and-pet-blog-content.jpg",
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/e0f51fa7cbf1829a597b0d43520978ae-1683854260/Image%201/write-dog-articles-and-pet-blog-content.jpg"
    ],
    "tags": [
      "Writing & Translation",
      "Digital Marketing",
      "marketing-materials",
      "eye-catching",
      "persuasive",
      "professional"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will manage your social media To your satisfaction",
    "price": 50,
    "rating": {
      "average": "4.5",
      "num": 556
    },
    "owner": {
      "_id": "u107",
      "fullname": "Oli Benome",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/60adcd04f7664076ae5df46f10d0c683-1647366642713/062ae809-1514-4464-827d-c7bf0d228775.jpg",
      "level": 2,
      "rate": 5,
      "about": "Oli, experienced social media manager. Specializes in creating and executing tailored strategies to drive engagement, increase brand awareness and drive growth. Utilizes the latest trends and best practices for clients in various industries. In free time, enjoys exploring food and fashion trends or reading. Let me help take your brand to the next level on social media."
    },
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20220411/Social%20Media%20Manager_ehdzpg.jpg",
      "https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20220411/Social%20Media%20Content_mbdnib.jpg"
    ],
    "country": "Israel",
    "daysToMake": 1,
    "description": "Looking for a professional social media manager or marketing agency? OUR APPROACH IS WHAT MAKES US DIFFERENT. We craft bespoke, visually compelling, and engaging pieces of content that will make your business stand out and capture the attention of your target audience.",
    "tags": [
      "Digital Marketing",
      "social-media-management",
      "grow-following",
      "engagement",
      "professional"
    ],
    "likedByUsers": [
      "mini-user",
      "mini-user2"
    ],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will write an engaging email marketing campaign",
    "price": 25,
    "rating": {
      "average": "4.0",
      "num": 887
    },
    "owner": {
      "_id": "u108",
      "fullname": "Pop kospy",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/83ef3002756770eeef3051b086d458fd-1578941693552/9f70f359-af93-4a68-b5b2-f85e86c93f5a.jpg",
      "level": 2,
      "rate": 3,
      "about": "I have a Bachelor of Science in Communication, Journalism, & Media and years of professional writing, editing, & social media experience. In the past 4 years, I've written copy for 600+ diverse clients. I specialize in writing clever & engaging social media copy & online courses to add value to your brand. I have experience writing social media captions, articles/blogs, ad & sales copy, website content, email campaigns, press releases, scripts, & online courses. I'm a brand chameleon & can create or adapt my writing voice to match your desired style or tone. Let's work together!"
    },
    "country": "Greece",
    "daysToMake": 3,
    "description": "Hi there! I have a Bachelor of Science in Communication, Journalism, & Media and 4 years of professional experience writing & editing for 600+ diverse clients. Whether it's an email campaign, newsletter, or cold email, I will write an email your readers will have to subscribe to. I will help you create copy into conversions by emulating your strong brand voice & crafting unique, stand-out content.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/199768721/original/3670e9c3a8a821e49dae671cb9baa99d9abfe619/write-an-engaging-subscribe-worthy-email.png",
      "https://picsum.photos/300/200?img=34",
      "https://picsum.photos/300/200?img=35",
      "https://picsum.photos/300/200?img=36"
    ],
    "tags": [
      "Digital Marketing",
      "email-marketing",
      "effective",
      "convert",
      "professional"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will be your website SEO growth manager",
    "price": 100,
    "rating": {
      "average": "4.8",
      "num": 268
    },
    "owner": {
      "_id": "u109",
      "fullname": "Ron Romakof",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/18c7c0738fc034b345a91eca46d8309c-1556973467573/db0dc305-dada-4cc9-b18e-a63070519c15.jpg",
      "level": 1,
      "rate": 2,
      "about": "Hire Ron Algorithm®: 100% results-driven Digital Marketing Experts & Online Business Growth Agency known for its data-driven decisions for online marketing & new business growth opportunities."
    },
    "country": "Israel",
    "daysToMake": 15,
    "description": "Do you want High-quality organic traffic and boost in Google ranking? Hire your Personal SEO Growth Manager and get Professional SEO Services done by Data Algorithm®.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/105758186/original/6ba675143bb053c8479cbbac17c3f6710afc4384/be-your-seo-manager.png",
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/105758186/original/e92b3309a5fb06225c099b4045d43f52859e8b24/be-your-seo-manager.png",
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/105758186/original/f5dfd2abadc2f01d48ac856cfe4e798915afe6fc/be-your-seo-manager.png",
      "https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230408/Search%20Engine%20Optimization%20Services%20On%20Fiverr%20-%20SEO%20growth%20Manager%20Data%20Algorithm_wnwwbo.jpg"
    ],
    "tags": [
      "Digital Marketing",
      "seo",
      "improve-ranking",
      "professional"
    ],
    "likedByUsers": [],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will design amazing children illustrations",
    "price": 50,
    "rating": {
      "average": "4.5",
      "num": 466
    },
    "owner": {
      "_id": "u110",
      "fullname": "Shuki plumx",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/89174dc264ee60c05f181e2285afa827-1567797121524/0920a31e-0751-42e0-a251-e9d21dddb2a6.jpg",
      "level": 2,
      "rate": 5,
      "about": "My work is an extension of myself, the way I look at life. Happy colours swirling, where fantasy comes to life amidst a beautiful natural setting. I find wonder in a variety of things, the smallest of objects and the highest of mountains.I draw my inspiration from both nature and life.I bring all my inspirations with me as I work on my projects. I have 10 years experience in gaming and animation studios . I have worked on a variety of projects and have learnt a lot through this process. I’m passionate with children illustrations."
    },
    "country": "Israel",
    "daysToMake": 1,
    "description": "I offer stylised illustrations for childrens books and also any other illustrations as per your requirements. I also make nature and food illustrations, digitally on Photoshop or procreate. I can do any stylised illustrations appropriate for children.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/196940884/original/f1e5b05d1dc352e5ce5b7038ed505475cee5d3d9/best-quality-illustrations-provided.jpeg",
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/196940884/original/a75bcd3e00823708d152c22d071ab14642b41790/best-quality-illustrations-provided.jpeg",
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/196940884/original/01eab1bc4e204b9ef7b2f068998cca6a8a1ff85f/best-quality-illustrations-provided.jpeg"
    ],
    "tags": [
      "Graphic & Design",
      "Photography",
      "seo",
      "improve-ranking",
      "professional"
    ],
    "likedByUsers": [],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will design an outstanding business card",
    "price": 50,
    "rating": {
      "average": "4.5",
      "num": 466
    },
    "owner": {
      "_id": "u111",
      "fullname": "Caddy Mordechay",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/1ac34fa42a87f719da4eb16f677b0e45-1642104466233/b7fa811e-04cb-4304-ba24-199bd77c4c1e.JPG",
      "level": 2,
      "rate": 5,
      "about": "Brand Designer with 9 years of experience in the field, enthusiastic about Design and with satisfied clients from all over the world. Thanks for considering my gig. I look forward to working with you."
    },
    "country": "United States",
    "daysToMake": 10,
    "description": "A Business Card is an extension of the person/business and should always be treated with honour and respect. It is the primary way to people to present their contact info to others. I will respect your brand, your information and create a high-quality and 100% unique Business Card ready to print.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/107453717/original/cfe63fc33d20dbb4ba776a53f7f9fbc6cb7a2d2d/design-an-outstanding-business-card.jpg",
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/107453717/original/1d4ddf7b208050c4767889f037a9ca6b41733b97/design-an-outstanding-business-card.jpg",
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/107453717/original/da86362b055498cbeda48035d87ce128c4054632/design-an-outstanding-business-card.jpg"
    ],
    "tags": [
      "Business",
      "Graphic & Design",
      "seo",
      "improve-ranking"
    ],
    "likedByUsers": [],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will do excel data entry, data collection",
    "price": 78,
    "rating": {
      "average": "4.6",
      "num": 490
    },
    "owner": {
      "_id": "u112",
      "fullname": "Sam Altman",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/2b749f393a6b2e711622e857543c95f8-875429081642149545663/JPEG_20220114_103905_1223301802428093437.jpg",
      "level": 2,
      "rate": 5,
      "about": "Hello, My name is Sam. I am happy to be a member of the Fiverr community. My goal is to provide the best services possible to all of my clients. I deliver fast, and accurately, and I offer 100% guaranteed satisfaction to all my clients. I will do any type of data entry, web research, copy-paste, file conversion, and typing projects at your fingertips. You can check my reviews to know what other clients think of me. Feel free to contact me and I will reach you as soon as possible. Thanks"
    },
    "country": "Canada",
    "daysToMake": 1,
    "description": "Are you looking for a professional Data Entry Expert or a big data entry project done? Yes, you are at the right place. We are here to help you to promote your business with 100% satisfaction. We will provide you with fast and reliable service and our goal is to provide the best services possible to all of our clients.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/99771034/original/5daa2fdcc0f2b386c09d7803e844f84fdf6fb2eb/do-excel-data-entry.png",
      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/99771034/original/9881e06c67e6d0e36fdb42716b4f5ce10784fd78/do-excel-data-entry.png",
      "https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20220912/Data%20entry_jfvswm.jpg",
      "https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20220912/copy%20paste%20typing_pbwwiw.jpg",
      "https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/79e9d95735d4fc850731608a5d7a81bb-1661438400/Typing%20manualy/do-excel-data-entry.PNG"
    ],
    "tags": [
      "Digital Marketing",
      "Writing & Translation",
      "improve-ranking",
      "professional"
    ],
    "likedByUsers": [],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will do hyper realistic pencil portrait by hand drawing",
    "price": 172,
    "rating": {
      "average": "4.6",
      "num": 490
    },
    "owner": {
      "fullname": "frederickkessie",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
      "level": 1,
      "rate": 2,
      "about": "Hi reader, thanks for your time. I'm an experienced young artist and i specialize in 3D animation, graphic designing and pencil Art. I'm familiar with word processing application. Kindly hit me up if if you need any of my services."
    },
    "country": "Ghana",
    "daysToMake": 26,
    "description": "Hello ! Much obliged for visiting my gig :)In this gig I'm offering you an exceptionally 3 one of a kind, best and reasonable bundles.In case you are thinking for giving somebody uncommon an extremely delightful, eye getting gift( hyper practical hand drawing pencil sketch picture)?Kindly select the helpful bundle and submit your request at this moment and I'll give you an ideal picture sketch, hand drawing, practical drawing, pencil attracting high goal JPEG/PNG advanced document.I will give hand-drawn dark and White or hued reasonable pictures.Sympathetically give me clear reference photograph however much as could be expected.The material I utilized for Creating pencil representations are:Drawing materials: graphite pencil, charcoal, Bristol paper, mono eraser, brush, mixing stump, mechanical pencil, graphite powder and so on .You can give me anything:Picture photographsFamily photographsCreature photographsAny item photographsScene photographsEngineering photographsAnything you envisionKindly reach me prior to submitting your request! Much appreciated.I DO NOT DELIVER ORIGINAL PHYSICAL COPY BUT A HIGH RESOLUTION JPEG DIGITA",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231682055/original/77cc585046a1ceb81a809218fef35ee8252bbb3b.jpg"
    ],
    "tags": [
      "Video Explainer",
      "Graphic & Design",
      "pencil drawing",
      "realistic drawing",
      "hand drawing",
      "portrait drawing",
      "pencil sketch"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "tobiaspille300",
        "country": "Thailand",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f9-1f1ed.png",
        "review": "frederickkessie ist a super kind artist doing the process he was super professional and only took him 1 shot to deliver a perfect result ! Highly recommended work with this guy !",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "liam31",
        "country": "United Kingdom",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "review": "I requested a slightly earlier delivery on this and once again Frederick came through and provided a fantastic delivery. Thanks so much!",
        "reviewedAt": "Published 3 weeks ago"
      },
      {
        "name": "liam31",
        "country": "United Kingdom",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "review": "Frederick is amazing and extremely talented. This is the second time working with him and he has been a pleasure yet again!",
        "reviewedAt": "Published 3 weeks ago"
      },
      {
        "name": "larsonraz",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Very detailed",
        "reviewedAt": "Published 1 week ago"
      },
      {
        "name": "stevekaszycki",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "very nice portrait, very good quality.",
        "reviewedAt": "Published 2 weeks ago"
      }
    ],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will do hyper realistic pencil sketch portrait by hand drawing",
    "price": 151,
    "rating": {
      "average": "4.89",
      "num": 567
    },
    "owner": {
      "fullname": "vividstore",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/83cc7c97f9873bdb052590a94d32f84c-1576419363871/ed47443e-0f9b-42ab-beaf-ec0a0acccfe8.jpeg",
      "level": 2,
      "rate": 4,
      "about": "Hello, this is Masuk, stand up for vividstore,I am a young and enthusiastic graphic artist and realistic pencil sketch artist. I am certified as graphic designer from George Washington University, USA. I have almost 11 years experience in this field since my university life. I really love to work with Adobe Illustrator, Adobe Photoshop, and so on as a full time online freelancer. And also passionate about sketching. Thank you."
    },
    "country": "Bangladesh",
    "daysToMake": 24,
    "description": "Hey ! Thanks for visiting my gig :)In this gig i'm offering you a very 3 unique, preferable and affordable packages.If you are thinking for giving someone special a very beautiful, eye catching gift( hyper realistic hand drawing pencil sketch portrait)?Please select the desirable package and place your order right now and i'll give you a perfect portrait sketch, hand drawing, realistic drawing,pencil drawing in high resolution JPEG/PNG digital file.I will provide hand-drawn black & White or colored realistic portraits.Kindly provide me clear reference photo as much as possible.The material I used for Creating pencil portraits are:Drawing materials: graphite pencil, charcoal, Bristol paper, tombomono eraser, brush, blending stump, mechanical pencil, graphite powder etc .You can give me anything:Portrait photosFamily photosAnimal photosAny product photosLandscape photosArchitecture photosAnything you imaginePlease contact me before placing your order! Thanks.I DO NOT DELIVER ORIGINAL PHYSICAL COPY BUT A HIGH RESOLUTION JPEG DIGITAL FILE, IF YOU WANT THE ORIGINAL ONE THEN MESSAGE ME FOR DETAILS.Feel free to ask me anything! :)Thank You...vividstore",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197422311/original/1907136f4b9684daa164acfa5cfedc6035b771b1.jpg"
    ],
    "tags": [
      "Graphic & Design",
      "pencil drawing",
      "realistic drawing",
      "pencil portrait",
      "sketch",
      "pencil sketch"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will draw a hyperrealistic portrait of face or entire body and animals",
    "price": 198,
    "rating": {
      "average": "4.78",
      "num": 107
    },
    "owner": {
      "fullname": "andreacarvalho_",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5344c10fd4820db3626c4fc24968783d-1588608774469/1e4a3bd9-b71d-48ce-8ac0-0ff6d667caf4.jpeg",
      "level": 1,
      "rate": 5,
      "about": "Hello! I'm a brazilian artist specialized in hyperrealistic drawings and paintings of human figures and animals, i use a diversity of techniques like Oil painting, dry pastel drawing and pencil. I have over 30 years of experience, check out my portfolio."
    },
    "country": "Brazil",
    "daysToMake": 4,
    "description": "Desenho de lápis hiperrealista da sua foto, posso adicionar detalhes de fundo e personalizar o desenho do jeito que você quiser.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/155512325/original/9d62fbdec2b0bffd0318f9af43c2de023b62f5f0.jpg"
    ],
    "tags": [
      "Graphic & Design",
      "pencil",
      "drawing",
      "portrait",
      "realistic",
      "painting"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "rachelrbarnes1",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Incredibly grateful for the amazing experience working with you . You are so talented and a kind soul! I highly recommend if you want high quality art to work with her every time",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "mark001994",
        "country": "Austria",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
        "review": "The artist was very kind and polite also very fast at the communication. The delivery of the project was on time. And her work is worth the money. I'm really excited about the painting she did. I can truely recommend the Aritst and her work. Big Thanks! :)",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "thurstonrobby",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "incredible on how precise that art is, picture perfect. 100% amazing job and I will use your services again ...",
        "reviewedAt": "Published 3 weeks ago"
      },
      {
        "name": "gavrielm",
        "country": "Israel",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f1.png",
        "review": "amazing saller and great work",
        "reviewedAt": "Published 6 days ago"
      },
      {
        "name": "garebear52",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Beautiful drawing! Just what I wanted.",
        "reviewedAt": "Published 1 week ago"
      }
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will write sociology,psychology and social sciences articles",
    "price": 116,
    "rating": {
      "average": "4.91",
      "num": 346
    },
    "owner": {
      "fullname": "winny_writer",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/e34531bf0bbed9d144dba7384f6473b6-1621577835789/60307055-cde9-4dc2-9e9e-4daa421991d3.jpg",
      "level": 2,
      "rate": 2,
      "about": "My name is Mary , a graduate from Mount Kenya University, I am professional writer and my focus is to every single detail. I will transform your dream to reality. I am experienced in article, project/content writing for a couple of years. Furthermore, I have a long history of writing research-focused content and projects. My ultimate goal is to closely with my client to deliver quality and comprehensive project. Let's take your business to the next level. Thank you"
    },
    "country": "Kenya",
    "daysToMake": 28,
    "description": "Hello, welcome to my Gig, I write sociology psychology and all social sciences contentI am an expert writer who can help you with writing essays, research projects, and articles on criminology, sociology, and psychology. I gained so much experience over the time. i can handle papers from undergraduate all the way to PHD in criminology and sociology and psychology.I always strive to provide best quality to my clients and provide plagiarism-free work. I am also familiar with the following reference formats: APA, MLA, HARVARD, CHICAGOPlease contact me before placing an order, thank you.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/207813409/original/9557f50a12d8fccb5c52fb65b35f91cc036f99c6.jpg"
    ],
    "tags": [
      "Writing & Translation",
      "technical writing"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "far832013",
        "country": "Canada",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "review": "I had a bad experience…. The work doesn’t match the requirement at all. Although l sent a specific and detailed question, l received a general answer. Not recommend and will not deal again.",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "rehanmirdk",
        "country": "Denmark",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1f0.png",
        "review": "She was excellent in communicating, using my references to write a proper academic paper in sociology, and finish in only 15 hours after getting questions. Most recommended seller!",
        "reviewedAt": "Published 3 weeks ago"
      },
      {
        "name": "raevyn22",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Exactly what I asked for",
        "reviewedAt": "Published 8 hours ago"
      },
      {
        "name": "raevyn22",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Always gets the job done",
        "reviewedAt": "Published 1 day ago"
      },
      {
        "name": "junyeongcho",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "She could understand the contents and write well",
        "reviewedAt": "Published 3 days ago"
      }
    ],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will do data entry, copy paste, web research as your VA",
    "price": 200,
    "rating": {
      "average": "4.54",
      "num": 268
    },
    "owner": {
      "fullname": "rashin07",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/1fe02234f0b300905f098d1c2eef2599-1621414093019/30dd09bd-748a-49c0-b3bc-ee3071bdfadb.jpg",
      "level": 2,
      "rate": 5,
      "about": "Hello! This is Rashin Faria, a Data Entry Specialist & Virtual Assistant at your service. I have excellent experience in Data Entry, Data Processing, Data Uploading, MS Word/Excel, Google Spreadsheet, PDF, Web Research, Ecommerce Product Entry, Data Scraping and others. With a 24/7 supporting team we work together for the betterment of the projects. We have extensive experience to do our project very fast and professionally. Client satisfaction is our first priority. Order Now! Regards Rashin Faria"
    },
    "country": "Bangladesh",
    "daysToMake": 9,
    "description": "Hello Sir/Ma'am,Have a cordial welcome to Rashin07’s outstanding services on Fiverr.Are you searching for a trustworthy virtual assistant for your projects regarding data entry? I’m here to help. I’m an enthusiastic, hard-working and detail-oriented working person who has developed a mature and responsible approach to any task that I undertake. With excellent teamwork, we always try to work with dedication to achieve a certain objective on time. We are always at your service to provide budget-friendly qualitative work. Check out the following services & Order Now.Our Services:Web ResearchCopy Paste JobsData EntryData ScrapingData Conversion (PDF/Image to excel)Product ListingShopify / Woo-commerce Product EntryLead GenerationMS Excel (Data Cleaning/Formatting /Chart/Macro)Manual TypingAnd more!Our Specialties:24/7 customer serviceUnlimited RevisionsOn-time deliveryWork efficientlyPrompt responseNOTE – Please contact me before placing an order. Feel free to discuss the project & set the right estimations for you.RegardsRashin FariaData Entry | Copy Paste | Web Scraping | Web Research | Product Entry",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/207580502/original/6d05bb9cde191b9423733c6b49d0e11892e35ee0.jpg"
    ],
    "tags": [
      "Writing & Translation",
      "Digital Marketing",
      "web research",
      "manual typing",
      "data entry",
      "copy paste",
      "product listing"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "threeangelsuk",
        "country": "United Kingdom",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "review": "Daisy accept the job. However, I think my job could have been done in the hours set and it was not. I would not use again from this experience.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "kasper711",
        "country": "Netherlands",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
        "review": "Clear communication, did the job!",
        "reviewedAt": "Published 1 day ago"
      },
      {
        "name": "jmorgenstern82",
        "country": "New Zealand",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1ff.png",
        "review": "Provided exactly what was required, quickly, and with great communication. Thank you.",
        "reviewedAt": "Published 2 days ago"
      },
      {
        "name": "philipgrewin",
        "country": "Sweden",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f8-1f1ea.png",
        "review": "Great, faster than expected!",
        "reviewedAt": "Published 4 days ago"
      },
      {
        "name": "beanfiver",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Efficient! Great communicator! Highly recommended!",
        "reviewedAt": "Published 1 week ago"
      }
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will do data entry, web research and lead generation work in excel",
    "price": 134,
    "rating": {
      "average": "4.8",
      "num": 307
    },
    "owner": {
      "about": "Hello fiverr community,my name is Muhammad Waqar and i'm here to help you with your lead generation, web research and data entry projects. We are a group of experts which work together for the betterment of the projects we take from our clients. So don't forget to reach out me for your next project. Thank you very much",
      "fullname": "waqarcreatives",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/7928a9bdb9e68c7dcc870f7dac91d92b-768025031598387384699/JPEG_20200826_012943_1616096493516260103.jpg",
      "level": 2,
      "rate": 4
    },
    "country": "Pakistan",
    "daysToMake": 10,
    "description": "Looking for an experienced data entry expert? don't waste your time, just hire me and relax.We are team of qualified professionals for guaranteed high quality work to our clientsI will provide professional data entry work, data collecting from web, table graphs and all type of internet research like research related to businesses, companies information and enter into excel within fastest possible time.Whether you have big project like thousands of rows entries in excel or very tiny project like minutes of work, i'm here to provide you highly satisfied experience for your project.Here are the services we offer:Data EntryWeb ResearchLead GenerationCopy Paste WorkCompanies Data ResearchInternet ResearchData Conversion into ExcelTyping in ExcelProperty ResearchCopy Paste WorkPDF to ExcelFormatting of excel sheetsWhy hire me?Guaranteed quality workAll time communication during the project within FiverrQuick TurnaroundI will give my best and 100% to the projectI can provide sample for the satisfaction before the orderFeel free and don't hesitate to contact us for superior workNote: All communication and payment should be done via the fiverr platform.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/e7d5d77ffddeb8cbcdb1fed051bdfa42-1680291295/Screenshot%20(23).png",
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/152331386/original/0af0a8b7e461202054f50847592c1583caecdc6d.png"
    ],
    "tags": [
      "Digital Marketing",
      "Graphic & Design",
      "web research",
      "data entry",
      "lead generation",
      "data entry excel",
      "data entry typing"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "elliottbz",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "He cared a lot and asked questions, which showed me he wants to give quality work. That was really appreciated.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "jeradg21",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Muhammad was responsive and did a good job collecting the information for a very reasonable price. His English isn't perfect, but we didn't struggle to communicate. If you give good directions, you'll get good results.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "dustinolsen1",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "This was my second time working with waqarcreatives and I love the quickness and level of accuracy. If he doesn't understand something, he asks for clarification before starting the project.",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "kenneth8239",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Outstanding work. This is the 2nd project that WaqarCreatives completed for me, and I will be back to hire them again!",
        "reviewedAt": "Published 1 week ago"
      },
      {
        "name": "heirloomclean",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Super efficient - Does amazing work. Have several orders with this seller and they always perform. Thank you so much",
        "reviewedAt": "Published 2 months ago"
      }
    ],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will do data entry, copy paste and excel data entry work for you",
    "price": 73,
    "rating": {
      "average": "4.82",
      "num": 253
    },
    "owner": {
      "about": "I've been working as a Data entry operator for many years. I have a big team with so many professional people for managing data entry tasks. We believe that high quality and customer satisfaction is the most important thing for us. Feel free to drop a message for discussing your needs and objectives.",
      "fullname": "masum245",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/8a1623fd3276ad7297d7647a8727bdf0-1589096119095/6c637953-9dc0-4c9c-b04d-c13c947fdc43.jpg",
      "level": 1,
      "rate": 2
    },
    "country": "Bangladesh",
    "daysToMake": 24,
    "description": "Hi, Welcome to my Gig page on Fiverr.com!Note: Please contact me first before placing an order to check the availability and price estimate of your project.Description:Do you need a perfect and professional virtual assistant for Data Entry,Excel Data Entry, Copy Paste Work, Typing Work , Data mining, Data collection using MS Excel, MS Word, Google Spreadsheet or Google doc? Yes, you are in the right place. Please check out my expertise below and the gig extras I'm offering.Data EntryCopy Paste WorkExcel Data EntryProduct ListingShopify Product listingCRM Data EntryData ScrapingData ConversionPDF to Excel or WordJPEG to Excel or WordTyping in Excel or WordBusiness Card EntryWordPress Data EntryE-commerce Products ListingWeb Research and Web ScrappingData Collection from Linkedln/InstagramProperty Research, Public Record SearchReal Estate Research and Data Entry (Name, Email, Phone, Address, etc)Why trust me?Positive Customer ReviewsQuick Reply.On-time deliveryQuality Customer SupportEfficient time of workingP.S. - We don't deal with anything outside of Fiverr. Never share your personal information. Thanks!",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/156250659/original/694e80206bfd8cebf4e950fd073d382ed0fcd20a.jpg"
    ],
    "tags": [
      "Writing & Translation",
      "typing job",
      "excel data entry",
      "virtual assistant",
      "data entry",
      "copy paste"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "rechtlogisch",
        "country": "Germany",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        "review": "There was no communication besides delivering. Receiving a short message with an estimate on delivery time would help to make the process more transparent. Otherwise it seems that the task was forgotten.",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "barcoxx",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Pros: Communication response time was amazing. Project delivered in the time promised. Quick Response to revision requests. Cons: Got a little bit impatient with me for asking for consecutive revisions, which was actually due to his own oversight, but it all worked out in the end.",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "teamcafelist",
        "country": "Singapore",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f8-1f1ec.png",
        "review": "Seller was committed to the task despite the scope stretching beyond the 2hours. He spent more time and completed the sheet, but was very nice about it. I had to tip him because the work done was definitely worth more. Despite having some inaccuracy and formatting issues, I think he did his best",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "brisbanerrr",
        "country": "Singapore",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f8-1f1ec.png",
        "review": "Seller went above and beyond, super fast and did much more work than we expected he would be able to get done within the allotted hours. Reordering immediately.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "treydurden",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Masum really came through on this task, painful and time consuming, he stayed on it and made it happen. So Happy. Thank you a 1000 times.",
        "reviewedAt": "Published 2 weeks ago"
      }
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will do excel data entry, copypaste, and any type of data entry",
    "price": 106,
    "rating": {
      "average": "4.99",
      "num": 1097
    },
    "owner": {
      "about": "I'm glad you're here! My name is Abrar Hussain. I’m a professional Transcriptionist and data entry expert. I’ve a BS degree in Mechanical engineering. From last more than three years, I’ve been working as a Data entry operator and English language transcriptionist. To me, customer satisfaction and providing the best quality work are always my top priorities. I’m really good at MS Office and Transcript. Get yourselves a skillful creator and professional Assistant by simply contacting me. So, drop a message, and let's get started. I am also available for long term projects. Thanks!",
      "fullname": "abrar_029",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/798a61194492b92313c2f5b27d5397bb-1615924783131/a6a1c7f0-0cc0-4c50-95e1-2693d183ee1c.jpg",
      "level": 2,
      "rate": 2
    },
    "country": "Pakistan",
    "daysToMake": 28,
    "description": "I will do excel data entry, copy paste, and any type of data entryHello, Welcome to my Gig. Are you looking for a professional virtual assistant for, Excel Data Entry, Typing Work Copy Paste Work, Data Entry, Data collection, Data mining, using MS Word, MS Excel, Google doc, or Google Spreadsheet? Then, you are at the right place. Following are the services that I'm offering.Excel Data EntryCopy Paste WorkShopify Product listingProduct ListingData EntryData ConversionData ScrapingJPEG to Excel or WordPDF to Excel or WordTyping in Excel or WordWordPress Data EntryWeb Research and Web ScrappingE-commerce Products ListingProperty Research, Public Record SearchData Collection from LinkedIn/InstagramReal Estate Research and Data Entry (Name, Email, Phone, Address, etc.)Why chose me?Extra fast delivery100% Quality assurancelowest possible ratesQuick Reply.Unlimited Revisions to make sure Maximum customer satisfactionData SecurityPlease contact me before placing an order and get my free consultancy about the project how to do it in the best possible way. Also If you need sample work Please feel free to demand.Thanks & Regards,Abrar Hussain",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/199776653/original/b710f145db1a54491e2d777831107c0174c78565.png"
    ],
    "tags": [
      "Writing & Translation",
      "excel data entry",
      "virtual assistant",
      "data entry",
      "copy paste",
      "typing jobs"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "mac_x711",
        "country": "Thailand",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f9-1f1ed.png",
        "review": "As usual, Abrar has been totally amazing in every work that's assigned to him. Words can't be expressed how awesome he is in doing anything that's assigned of him. I'm just thankful that he's always there for me and he goes above and beyond on what I asked of him. He's simply the best. Looking forward to our next projects 😊😊",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "applist22",
        "country": "Austria",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
        "review": "Abrar and his team did an amazing job. The communication was great and he was every time available to discuss the project and when problems popped up he was flexible and agile to solve them with great effort & motivation. He provided first-class delivery and project management skills and is a reliable partner for any kind of project! I will work with him in the near future again - was a great pleasure and I'm very satisfied!",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "brandersongroup",
        "country": "United Kingdom",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "review": "I’ve worked with Abrar before, and once again he did a great job with what I’d asked him to do. Will definitely be working with him again.",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "schneida",
        "country": "Austria",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
        "review": "It was a pleasure to work with Abrar and his team. He is fast responding and an awesome problem solver who always reaches the goals for his clients. He is on my shortlist for other jobs in the future for sure.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "jarrodrandol238",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "This is my second project with him. Delivered on time and exactly how I asked. I would hire him if he lived in Florida!!!",
        "reviewedAt": "Published 2 days ago"
      }
    ]
  },
  {
    "_id": utilService.makeId(),
    "title": "I will design 3 modern minimalist flat logo designs",
    "price": 170,
    "rating": {
      "average": "4.33",
      "num": 603
    },
    "owner": {
      "about": "Hello! My name is VD. I am a connoisseur of art and music. I love being around nature and my pets. I have a team of professional graphic designers with an experience of 8+ years. We specialize in logo designing. We're available exclusively on fiverr to rock your world with our designing skills. Come and experience it for yourself!",
      "fullname": "design_desk",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/044fb5914a845a4eb59fc2b69f7f7b32-1634120039750/4dbc2acb-7322-4cd0-9afb-e5190e8e8a0d.jpg",
      "level": 2,
      "rate": 3
    },
    "country": "India",
    "daysToMake": 16,
    "description": "Hi there ! Thanks for stopping by !!A Team of Talented Graphic Designer with 8+ years of experience in Graphic Industry, expertise as Logo Maker, You'll get creative & AWESOME logo design for your business.My portfolio : https://www.fiverr.com/users/design_desk/portfolio/NjFiYjE4NmMwZTgwMDUwMDAxZTMzMjJh★ Why Us? ★Talented Logo Maker TeamFully custom made, creative, original, UNIQUE and AWESOME designsProfessional customer support 24/7High Quality work100% money back policy if not satisfied★ WHAT DO YOU GET? ★✔ Highly Professional, UNIQUE & High Quality designs✔ UNLIMITED revisions until u r 100% satisfied✔ Fast turn around time 24 to 48 hours only.✔ 100% original & unique vector design from Adobe Illustrator✔ Vector Source Files (scalable without any quality loss) (AI, EPS, PDF) for the final design ✔ PROFESSIONAL Communication & Outstanding Customer Support ✔ Guaranteed High Quality workIf you have any question,Feel free to★ Contact Me! ★I'll be happy to help !Let's get started!-Your Logo Maker",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/103150660/original/e067349cc881304e0a3141d8c9d55d949892b678.png",
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/103150660/original/e55a9f96d1af6739e536a726ed565e8097c61ddc.png",
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/103150660/original/d84b396607c7909b714dbb63a88f1238f1c0f81c.jpg"
    ],
    "tags": [
      "Graphic & Design",
      "minimalist",
      "flat",
      "Logo Design",
      "modern",
      "unique",
      "logo maker"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "airbornesnow",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "The seller's communication was EXCELLENT and the service was exactly as described. When I wanted revisions, they did not hesitate to provide me with alterations of the design. Although they were nice and kind when I asked for the revisions, all the revisions were half a**ed and sloppy. Even when I provided a concept drawing for them to TRACE, the results were still not what I expected. Buyers BEWARE: The seller's communication is excellent, friendly, and VERY kind. However, if you ask for any revisions, the revisions you will receive will be sloppy and half-a**ed.",
        "reviewedAt": "Published 4 days ago"
      },
      {
        "name": "jacobmnb",
        "country": "United Kingdom",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "review": "I thought this service was amazing, I bought the basic option just hoping for a basic logo, but the seller went above my expectations and provided me with a bunch of concepts that were better than I could have imagined, for £7.90 I think this service is a must-buy for anyone needing a professional-looking logo and not wanting to spend a huge amount",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "ashtonpeckham",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "The seller was very responsive. We had revisions after the initial designs were delivered and the seller made them very quickly. The logo we selected is perfect for our current needs. Recommend including your vision in the initial request so you don't end up with ideas that you don't like. There were only 2 real contenders because the Fiverr site wouldn't allow me to attach my hand drawn idea. The paperclip icon was essentially rendered inactive, even after several attempts. This is no fault of the designers; i should have been even more descriptive with my request when I was unable to attach files.",
        "reviewedAt": "Published 1 week ago"
      },
      {
        "name": "borowski10",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Ultimately, I am very happy with the final logo I received. However, the seller's communication could have been better. There were a few times I asked for specific revisions and I was sent the same thing or something else that I didn't ask for. It took about 2 weeks for me to finally get what I was looking for. In the end, I got what I paid for and I am grateful for the service!",
        "reviewedAt": "Published 2 days ago"
      },
      {
        "name": "fowlplay_uk",
        "country": "United Kingdom",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "review": "VD was great. I had a very specific design in mind already that I needed recreating professionally and they did not disappoint. Even when I started to get picky with the design, nothing I requested was ever too much trouble. We went through many revisions to get it to exactly how I wanted it and every interaction we had was effortless. This is the first project I'd commissioned so wasn't really sure on the correct etiquette, yet VD made things so easy for me. Can't recommend these guys enough for that",
        "reviewedAt": "Published 2 months ago"
      }
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will create modern unique and creative logo design",
    "price": 61,
    "rating": {
      "average": "4.95",
      "num": 316
    },
    "owner": {
      "about": "I am a professional graphics designer from PakIsTaN... Designing is not only my job, it's my Passion. All I need from you is a rough sketch of your idea. Then you can just relax and see the magic happening. Not only you'll get stunning and professional designs, but also you'll have top class custome",
      "fullname": "soduzai_gfx1",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/a2dd1a0482bbfe54e61c6c2d6e64696e-1640431251801/943f73b5-dc43-4fe4-9728-9a58f0aafdbc.jpg",
      "level": 1,
      "rate": 3
    },
    "country": "Pakistan",
    "daysToMake": 2,
    "description": "Hi esteemed buyer!Looking for modern unique and creative 2d or 3d logo design? Yes, you're at the right place.Having a vast experience with hundreds of satisfied customers across the globe, I extend my services to design modern unique and creative logo design to represent your brand idea in a befitting manner.What proves my individuality over others?Quick delivery, quality work and transforming your brain idea into a 3d creative unique and modern logo design are my attributes.MY GIG OFFERINGS ARE:Best customer careRevisions within 24 Hours100% satisfaction guaranteedModern unique and creative designing ideasLogically and aesthetically hypnotizing logos1 free revision after completion of orderEditable and re-sizeable vector filesFont download link includedHigh resolution final files in zipNote: For Complex Illustrations and Mascots, please discuss in inbox before placing order! It is also not included in our packages.Have queries? Contact us in inbox anytime!★Hearing from you would be an absolute pleasure, Go ahead and ORDER NOW!★",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/263049453/original/fcb7fc9662ad61a5790dedd6b0b6803cebadebf2.jpg",
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/263049453/original/2b6eae396d54fdd092f3c0df1705d030250b6c4b.jpg",
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/263049453/original/1478e5cab529c9b91c98e33970d0a6baa006220d.jpg"
    ],
    "tags": [
      "Graphic & Design",
      "modern logo",
      "creative logo",
      "Logo Design",
      "unique logo",
      "logo maker"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "devsreads",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Thank you SO MUCH to the seller. He was so patient and willing to work and correct as many times as we needed as some things got miscommunicated and he easily fixed them. Thank you!!!",
        "reviewedAt": "Published 3 days ago"
      },
      {
        "name": "raymondyslas",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "This designer is awesome. I have got my idea materialised in an efficient manner and the way I wanted. Seeing this logo, I would say this is the best designer to do any kind of graphics work.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "gbsol579",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "This designer is so quick and efficient in his work. My order was delivered in few hours. The design is hypnotizing and truly reflects my business idea. Highly recommended!",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "antoniodixon65",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "This is a really good design. The designer owes the skills needed to actually understand and then materailize a buyer's idea. Commendable and highly recommended.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "allendrozdowski",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "This designer has done a fantastic job. I like the design sense and colour combination of the designer. This is what I was looking for. I highly recommend him for graphics related work.",
        "reviewedAt": "Published 1 month ago"
      }
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will design 3 modern minimalist logo design",
    "price": 89,
    "rating": {
      "average": "4.6",
      "num": 37
    },
    "owner": {
      "about": "I am a professional artist having rich experience in hand sketched and digital artwork. I have served tons of businesses with smarter business solutions. I am here to get the global exposure and would like to contribute more towards our creative community. Thanks.",
      "fullname": "modernmarvel",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d366617946e54cbc9aa114f27259e3ef-1552848300306/3c155f72-15c9-47d0-8f68-b75a519a7999.jpg",
      "level": 2,
      "rate": 4
    },
    "country": "India",
    "daysToMake": 1,
    "description": "ModernMarvel heartily welcomes you to Minimalist Modern Logo Design gig.We are Brand Creators and professional business consultants. Each business has his own story to tell and having high recall value is prime purpose behind getting a LOGO. Thus, We believe in creating simple yet effective masterpiece which blown away your customers mind.Your idea of getting Modern memorable and attractive logo design is just one step away. So, Lets discuss and choose a best design for your business.Our recommendation BRANDING PACK @ $65 ONLY:5 BRANDED logos with minimal designs + vector source filesAttractive Social media covers (FB + Twitter)Professional stationery design (B card + letterhead)Unlimited revision roundsExclusive customer supportRefund & Package selection guidelines:If the designs are as per your initial shared brief, refund wont be a possible option. You can ask for revision if i missed out anything.My samples are from my premium / standard package.We are closed on Sunday.My key skills:Minimalist Modern Logo Design | Minimal | Modern | Typography | Line art | Custom logo | Vintage |Keen to Get Started!",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/125798593/original/fea4f6af37e201fa9cb71a85583fedc171da2a26.jpg"
    ],
    "tags": [
      "Graphic & Design",
      "modern logo",
      "custom logo",
      "Logo Design",
      "minimalist logo",
      "website logo",
      "logo maker"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "bartstrijbos",
        "country": "Netherlands",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
        "review": "Use your revisions and communication, and you will have something that works for you! I recommend modernmarvel for the price they ask! I did not know what to expect from my first buy on FIverr. The previews where what I was going for, so I thought why not give it a try. The initial delivery had two good concepts and three concepts I did not like. The two good concepts however, where not really what I wanted though. I submitted a revision proposal and hoped for the best. This is where this seller shines! From the initial designs, he worked quickly with every suggestion I made for revisions and was good in communication. I slowly saw my project evolving to something I love. Recommended!",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "v_winko33",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Working with this seller was a great experience in that he was quick to respond (considering the 11+ hr time zone difference), friendly, reliable, and professional. He created some concepts with literally no reference the first time around, and the second time around I gave him more of an idea of what I was looking for and found the ideal logo. You get what you pay for, and the price I think is a very good deal that's hard to find. Communication +asking questions is key to get all that you want and need from this great offer. Although I am satisfied with the logo, I probably would've liked something more like the work he shows in his second picture on his profile/gigs. I do recommend him!",
        "reviewedAt": "Published 3 weeks ago"
      },
      {
        "name": "brendanpaull",
        "country": "Japan",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ef-1f1f5.png",
        "review": "Seller was extremely communicative and always responded very quickly even on his/her day off (Sunday). While I got something that will get my started and I suppose I got what I paid for (the price was definitely quite low), I would be hard pressed to call the designs I got as \"modern\" or \"minimalist\" like the logo presented in the profile. They felt like clip-art from 10 to 15 years ago attached to my website name.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "tracyblehm",
        "country": "Canada",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "review": "I was a little nervous as I had never hired anyone before and have had bad experiences on other platforms. However this was absolutely marvelous. I loved the design. It was shocking how fast it was done and how amazing it turned out. I will definitely be hiring them again for my other projects that are coming up. Thank-you!!",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "jai_s22",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Using this service was a pretty decent experience. It took a bit longer than I wanted to finally get the final design. I had to go back and forth for a week trying to find the correct revision of the design. At first, I thought the experience of the designer was not the best due to finding some logos with minimal effort. Once I messaged the designer that I felt that the designs that they were producing were not satisfying me, they then were able to put a lot of effort into my ideas. I personally had to come up with the design of my logo instead of them using their experience and trusting them to come up with one themselves. Eventually, they did deliver so I am happy with the way it finished.",
        "reviewedAt": "Published 2 weeks ago"
      }
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will do professional modern business logo design with copyrights",
    "price": 105,
    "rating": {
      "average": "4.65",
      "num": 127
    },
    "owner": {
      "about": "Welcome to Budding Solutions. An agency of 15+ Graphic Designers with great expertise. We strive to provide unique & graphically rich designs with exceptional & lifetime customer service. Let us be your GO-TO option for your graphic design needs and you won't be disappointed.",
      "fullname": "shailene_george",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/3ec0d56f436079ef157dbcc1d21c4c62-1625030446037/1c926a30-7aa5-4de8-9a3b-6565be7ddd5b.jpg",
      "level": 2,
      "rate": 5
    },
    "country": "Pakistan",
    "daysToMake": 21,
    "description": "Greetings!! Welcome to Budding Solutions.\"Your one-stop-shop for all your graphic needs\"If you are looking for a Modern and Professional Business logo design, then you are at the right place. We focus on creating simple yet effective designs that elevate your business outlook and leave an everlasting impression.We stand out from our competition due to our best-in-class Customer Support and Quality Designs.Why Us?✔ Combination of experience and creativity✔ Unique and original designs✔ Superior customer care and satisfaction✔ Transparent and High-resolution image types✔ Different types of source files (AI, EPS, PDF and SVG)✔ Complete Branding Guide✔ Unlimited revisions until you are 100% satisfied✔ Full CopyrightsMASCOT DESIGNS ARE NOT INCLUDED IN BASIC OR STANDARD GIGS.THE DESIGNS SHOWN ON THE PORTFOLIO ARE FROM STANDARD OR PREMIUM PACKS.Logo Design | Professional Logo | Modern Logo | Badge | Hand drawn | Feminine | Signature | Business LogoWe look forward to working with you. Please don't hesitate to reach out at any time with any questions.Please review the FAQ section for further clarification.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/285163496/original/83fd245dbf005984c3a17cdf98ada0fd07b7a078.jpg",
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/285163496/original/324080019581f8001b9901a9d7b6a7534ae025c8.jpg",
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/285163496/original/ba27092f4d25ec22a641e1c008c03e659e372cac.jpg",
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/e9c5a4ad6b6e5d6a5a7006282041c83d-1686274547/1%20(22).jpg"
    ],
    "tags": [
      "Graphic & Design",
      "modern logo",
      "logo",
      "custom logo",
      "creative logo",
      "professional logo",
      "logo maker"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "bossymouse",
        "country": "Netherlands",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
        "review": "I'd recommend this seller. She was skilled and very communicative. Also I got tons of revisions as promised and always quickly. Sometimes it was hard to get her to polish the details as I intended, I think because of the language barrier, but if a revision turned out different than I expected she started working on it again without asking questions. Lastly she gave tips about branding when needed. To be honest I'm not quite sure if the social media kit and website optimized image were worth my money, because those were mostly the same image in different ratios. But I probably had unrealistic expectations. On the other hand the copyright document is very polished and accurate!",
        "reviewedAt": "Published 1 week ago"
      },
      {
        "name": "coastalcleaners",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "I'm so grateful & thrilled that I can say, my experience was a sucess! I love my LOGO that Shailene created, I couldn't be happier! I reached out and let her know exactly what I needed, she promptly responded and made me an offer. I couldn't refuse, as she was more than willing to accommodate my budget. She sent me the drafts soon after, and I was pleased to see the results! I didn't need any revisions and I'm pleased to say that I've now got a NEW LOGO For my Brand/Company. I officially feel Accomplished! Thank you SO Much Shailene and Fiverr! You have made this journey so much lighter on my feet, and I would definitely recommend Shailene as an Artist and the Fiverr company!",
        "reviewedAt": "Published 3 weeks ago"
      },
      {
        "name": "ndethlefs",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "This was the first time I've used Fiverr and was a little worried how it would go. This was by far the best experience I've had working with someone remote and at a fair price. shailene_george always got back to me right away. I couldn't be happier with my experience and will also being recommending George to anyone I can and using again when needed. 5 stars all the way here!",
        "reviewedAt": "Published 3 weeks ago"
      },
      {
        "name": "mrmikevh",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Shailene is awesome to work with. Very professional and attentive. She deliveries amazing work at a value you just can't find anywhere else. As a busy front-end developer, I find buying her premium GIG is the way to go. My clients are always blown away with her work. She has made me a customer for life with her work and her friendly personality. Thank you Shailene and bless you. Can't wait for our next GIG together.",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "j_powell23",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "A friend of mine (Maximum Performance Productions) recommended Fiverr. I'm starting a new business and needed a design to catapult us to new heights. It didn't take long to find the right artist. Shallene was able to capture my idea and interpret it into the design that I am very pleased with. Her communication skills and response time are second to none. She is very informative and answered all my questions satisfactorily. Shallene performed her tasks timely and without delay. I am forever grateful for the outstanding designs she has provided and would highly recommend her to anyone. Thank You Shallene!",
        "reviewedAt": "Published 1 week ago"
      }
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will write you an attractive instagram bio",
    "price": 155,
    "rating": {
      "average": "4.71",
      "num": 214
    },
    "owner": {
      "about": "Thanks for stopping by! I'm a Social Media Specialist with 8+ years experience. I can help with all your Social Media related tasks! Send me a message. Let's get it done!",
      "fullname": "bellavida123",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/9e2d7f453419c08e138fbfe9e65347df-696051281638594671.588431/DD8E6DDC-C231-47D3-B61A-97274452D3BF",
      "level": 1,
      "rate": 2
    },
    "country": "Jamaica",
    "daysToMake": 25,
    "description": "The FIRST thing a potential follower sees on your page is your bio.Stand out, and build trust with a bio that informs and captivates everyone who views it. This will not only attract new people to your page, but it will keep them there!You've seen those profiles on Instagram that look amazing, and you deserve that for your business too.Get the Instagram bio you need, and with it, more followers and clients!What you'll receive:⭐ One unique, professionally designed bio⭐ A captivating layout that engages your viewers⭐ A call to action, if required⭐ 24 hour delivery⭐ 100% Satisfaction GuaranteeLet's build you a great Instagram page that is sure to bring AND KEEP followers.If you BUY a gig from me always feel free to request a revision if you need any part of your order revised. Thank you.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/157827646/original/8f14f50a81ddd1a60b4af990ea5154a26975d150.jpg"
    ],
    "tags": [
      "Digital Marketing",
      "Writing & Translation",
      "bio",
      "instagram marketing",
      "instagram",
      "social media",
      "social network"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "bswoll51",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "She was amazing! Told me exactly when she would start. Got it done and over-delivered! Tips to grow my following and exclusive tailoring of my bio. She can call me The Terminator because I'll be back. 🤣",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "dawnmichaela",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "My bio turned out better than I could have hoped for! She took all my words and ideas and turned it in to a clear and powerful bio. I highly recommend working with her. She is easy to communicate with, responds quickly, and got it done fast. I would definitely use her again.",
        "reviewedAt": "Published 1 week ago"
      },
      {
        "name": "iidark",
        "country": "United Kingdom",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "review": "Wonderful working with this seller. The work is as promised and delivered on time and on point. I would definitely recommend their work, in fact I'm about to book another gig from them.",
        "reviewedAt": "Published 2 weeks ago"
      },
      {
        "name": "singh_manu1313",
        "country": "New Zealand",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1ff.png",
        "review": "She is really good. I ordered two bio and both are amazing. Very easy to convey the message. And she did exactly what i was looking for. Definitely recommend",
        "reviewedAt": "Published 1 week ago"
      },
      {
        "name": "charliericeiii",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Thank you so much for creating my bios for me on my social media pages. We got it right how we wanted it to I appreciate that. God bless!",
        "reviewedAt": "Published 3 weeks ago"
      }
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will create an effective instagram hashtag growth strategy",
    "price": 101,
    "rating": {
      "average": "4.36",
      "num": 281
    },
    "owner": {
      "about": "Hello! My name is Tommy. I am a multi-displinary marketer with experience in both the Western and Chinese digital marketing landscape. I am passionate about crafting impactful experiences and digital marketing strategies at the intersection of brand and product. I have worked in London, Hong Kong and in Shanghai for companies such as the Adidas, L'Oreal, Pfizer and Danone I currently offer Instagram growth and TikTok marketing strategies on Fiverr",
      "fullname": "tommysiu",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/429c1a9395f66cd8a36b38028ff35aa6-1550219507580/db25059c-6725-4e49-bf82-fa4d2af0a780.jpg",
      "level": 2,
      "rate": 4
    },
    "country": "Hong Kong",
    "daysToMake": 21,
    "description": "Why me?I have worked with Fortune 500 brands such as Adidas, L’Oreal, Xiaomi & Pfizer on numerous marketing and branding campaigns.I’ve successfully delivered 4000+ hashtag strategies with over 2600+ happy clients to help them achieve organic instagram growth.Why my service?I will strategically research, analyze & handpick best-performing hashtags tailored to your Instagram account. I will teach you:✅ How you can effectively use hashtags to rank and grow organically✅ How to avoid bad hashtags to avoid negative growth✅ Stand out from your competition and increase your sales✅ How to increase traffic and conversion organically✅ Account optimization and posting secrets to gain new Instagram followersWhat will you get?✅ Data-backed high-ranking hashtags tailored to your niche and brand✅ Profile optimization so you can be discovered quickly✅ Personalized hashtag strategy to help you grow and increase your followers✅ Expert video guide to teach you to find high-ranking hashtags✅ Monthly newsletter based on Instagram's newest algorithm updates✅ Masters Course 2021/2022 (Platinum or Diamond Gig)",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/148428948/original/fd3986456e520b9544cbc794b4625a95ade2bbaa.png",
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/148428948/original/9d33154084f109bfc933ac933d28e121f987891b.jfif"
    ],
    "tags": [
      "Digital Marketing",
      "Writing & Translation",
      "instagram hashtags",
      "instagram marketing",
      "instagram",
      "instagram growth"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "jayebiz",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "I am very new to organic growth and trying to work Instagram in the best way possible for my business. I found this seller on a whim and WOW. I know that a lot of his reviews say that he is amazing but I didn't expect nearly HALF of what I got. It was so good that I immediately printed it out and made it into my own little book to reference as I go through the process of building my Instagram audience. In all honesty, I think that he should charge way more for what he gives. I can't believe I got so much value at this very fair price! Thank you so much and I can't WAIT to implement your strategies starting TODAY!!",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "basayra",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "I was very very skeptical. Since this is my 1st business. I truly appreciated I was able to communicate with him and let him know about my \"unique\" nitch. Before we even proceeded he asked for my Instagram to make sure he could provided the services I requested. I was not prepared for the the whole breakdown!! I am shocked as to how much information I received for the price. Not only did i receive information regarding hashtags, but when to post, what to write under the post, how to not repost to the same things to become saturated . I can't wait to implement this new information to my Gram. Sooooo yeah about my unique niche go follow @ba_sayra.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "marialeeheller",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "As other sellers described- the service is excellent, especially for the price. I did notice some spelling errors but that did not detract from the overall informative report. I am very pleased with the delivery and I learned A LOT. Also, the hashtags he provided were on point- very impressed. Let me preface this by saying that I had purchased similar hashtag research from another top seller on this platform and what I received was subpar. My business has elements of sustainability that I haven't pushed too much (because the 100% sustainable products haven't launched yet), but he picked up on it and delivered results that included this. 👏👏👏",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "soniabukh",
        "country": "Italy",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f9.png",
        "review": "Tommy is absolutely great! My expectations were high because of all the other excellent reviews, but wow he really does go above and beyond! I got the most basic hashtag strategy package and not only did he do a great job with it, he also included a lot of bonus information and tools. If you're tired of not knowing how Instagram works and trying random tactics hoping they'll work and get your account seen, let me offer you a suggestion: buy this gig! You won't regret it! I can't wait to start implementing all his great advice. P.S. Communication was great and delivery was on time!",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "ricarda20",
        "country": "Germany",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        "review": "Wow, I agree with everything everyone else said: Tommy overdelivers by far. What an amazing package. Thank you so much Tommy. It will take awhile to work through it but wow, I am speechless. To everyone who is considering using Tommy's service: DO IT!",
        "reviewedAt": "Published 1 week ago"
      }
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will do organic promotion and marketing for youtube monetization",
    "price": 87,
    "rating": {
      "average": "5.0",
      "num": 53
    },
    "owner": {
      "about": "I am trained in online marketing, and I have studied SEO, Ads (Google, Facebook, Bing...), I have 6 years of experience in digital marketing, in which time working at fiverr is 3 years, with more than 2000 completed orders, the main work that I do is: - Youtube seo and promotion - SEO - Website traffics - Spotify promotion - Instagram promotion Contact me if you have any questions!",
      "fullname": "farah_youtube",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5db4b0cccf5a3e138a9f57542175248c-1620011414308/8d7f7d68-efe9-465e-80d2-aedcc548efdb.JPG",
      "level": 2,
      "rate": 5
    },
    "country": "Vietnam",
    "daysToMake": 7,
    "description": "Do you want to Monitize your YouTube Channel?i'm the best for digital media marketing, i will help you make youtube monetizationSafe methods we use:· Web 2.0· iFrame Embedding· PPC advertising campaign· Do SEO friendly Video optimization· Will share video in Suggested & related videos· Add video in Niche related playlists for more impressionsI strictly follow YT and Fiverr TOS so it means you will get organic You Tube Promotion for your channel monetization.REQUIREMENT:Channel LinkWhat do you get from this gig?● Watch time boost● Compliance with YT TOS● Fully Organic And Real Traffic● 100% chances of monetization● Naturally helps in Video RankingThink that your best friend is Elon Musk, and tomorrow morning you are asking him to post a post asking people to watch your vide0, probably you will get monetized in less than an hour!I do the same, just without Elon Musk :)",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/300746494/original/6fc2cd824023d7e961f6f640b57007484f0b2980.jpg",
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/e923f59dbfff27daeec867c8a519e6b8-1686139938/youtube%20promotion.png"

    ],
    "tags": [
      "Digital Marketing",
      "Video & Animation",
      "youtube",
      "monetization",
      "youtube channel",
      "youtube promotion"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "tonyamajette",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "The seller got me the promotion that I needed, however, she stated that I could contact her if I had any problems and I did and she was not helpful. This is my second gig with her and she was great at many things but not so much at helping me to understand or correct issues with the result of her efforts. I had planned to use her for many other gigs but in light of her response to my request for help, I cannot. I do recommend her for getting you the numbers that you need but if you are denied, do not expect any help from her to actually get passed the review process for monetization.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "robertpetyko",
        "country": "Hungary",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ed-1f1fa.png",
        "review": "She delivered as promised. I was sceptical . I bought a smallest package. My watch hour went up. Also gained a lot of subscribers. Some been deleted. But what`s been promised been delivered. So well done !",
        "reviewedAt": "Published 1 week ago"
      },
      {
        "name": "brucefrausto893",
        "country": "Thailand",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f9-1f1ed.png",
        "review": "she increased my subscribers amount by a little over 1000 subscribers and over 4000 watch hours. I recommend to anyone who wants a boost for their channel.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "vwgbooks",
        "country": "United Kingdom",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "review": "The gig was good, nothing amazing. I didn't really notice any difference when using this gig. Watch time, subs didn't increase that much. I did order the lowest gig, so I wasn't expecting big numbers or anything. It was a good gig and the seller was easy to work with.",
        "reviewedAt": "Published 2 weeks ago"
      },
      {
        "name": "dulline",
        "country": "Romania",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f7-1f1f4.png",
        "review": "I just want to be short and clear she is the BEST ! Very happy and satisfied what she did to my youtube channel ! A lot of subscribers and more what she said and more watch hours.If you want to grow your youtube channel fast and organic 100% real she is the ONE who can do it ! Thank you very much Farah !",
        "reviewedAt": "Published 2 weeks ago"
      }
    ],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will develop a content strategy for your brand or business",
    "price": 162,
    "rating": {
      "average": "4.17",
      "num": 184
    },
    "owner": {
      "about": "Hello! My name is Maria, and I am a digital marketer with over 3 years of experience working with diverse brands and businesses. I am well versed in everything marketing, SEO, graphic design, writing, and video editing. I am a one-stop shop for whatever you and your brand needs. I look to working with you!",
      "fullname": "mariarotunda",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/d098c50d82476b11568f3a50111a8a89-1636128369729/ef737ebd-6908-47bc-be50-963dabe16d0e.jpg",
      "level": 2,
      "rate": 2
    },
    "country": "United States",
    "daysToMake": 27,
    "description": "Quality content, industry-specific keywords, and a social media plan will help your business and brand soar! I am a digital marketing strategist and content creator who is ready to help build your online presence.What you will get:An evaluation of your current page(s) to identify your strengths and weaknessesA custom strategy specific to your brand, mission, and standardsCustom designed graphics created for your target audienceSEO optimized keywords to use in captions and as hashtagsAround the clock customer service and communication to help you with anything and everything you needI am here to take your brand to the next level! Message me with any questions you have.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/video/upload/so_1.760625,t_gig_cards_web/ffupfvrslj3mos2byhrh.png"
    ],
    "tags": [
      "instagram marketing",
      "web marketing",
      "social media manager",
      "social marketers",
      "seo marketing"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "thaddeuswill410",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Omg, This seller was amazing and exactly what we needed.. We were kinda in a funk and need to be saved. She did just that with amazing energy, a wonderful attitude and passion for what she does. The strategy was perfect, Thanks again for bringing us great value.. Highly Suggested..",
        "reviewedAt": "Published 2 weeks ago"
      },
      {
        "name": "nickjuliano",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Excellent job! I’ve been using Fiverr for 3 years now and by far one of the best results/deliverables that I’ve gotten. The video describing what you did was a step above the rest. I’ll definitely be implementing your suggestions. I appreciate all of your hard work.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "joshuanathan474",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Really smooth transaction. She went above and beyond in detail for the marketing / brand style guides. Looking to get more tasks completed with the Seller.",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "onyxwoman",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "She did a really good job that prompted me to make some badly needed changes. The advice was really good. I especially liked the video input.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "tcbrownvo",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Provided excellent service and good direction. Thank you.",
        "reviewedAt": "Published 1 week ago"
      }
    ],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will perform research on any subject matter for you",
    "price": 59,
    "rating": {
      "average": "4.95",
      "num": 501
    },
    "owner": {
      "about": "I am a current Doctoral Researcher with a strong research and scientific history, having published academic papers and presented at numerous international conferences. I have a BSc (Hons), a MScR, and have nearly finished my PhD. My experience has given me excellent research and written communication skills, as well as knowledge of how to present and illustrate data digitally. I am highly experienced in the use of the Microsoft Office and Adobe suite of apps. Outside of my career I am very interested in applying my scientific training to aspects of fitness and nutrition.",
      "fullname": "struhenderson",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/eb6eef20969192eca1d8b1301e91cb4f-1630440851285/60f03cc4-71f2-437b-a241-f9423b6e2728.jpg",
      "level": 1,
      "rate": 3
    },
    "country": "United Kingdom",
    "daysToMake": 18,
    "description": "I have over 5 years of experience conducting high-quality, detailed research throughout my Master of Science by Research degree and PhD programme.The training and projects I have undertaken in my degrees have given me the ability to efficiently source key information. In particular, the niche research required for academic theses has made me proficient at sourcing the most relevant details.Furthermore, I have learned how to synthesise a lot of information in a short period of time, incorporate it into further research, and write what I have learned into top-quality publications. This allows me to pinpoint the most important information and produce concise, detailed summaries.I will provide a document in whichever format you require (e.g. Word.docx, Adobe.pdf) complete with a detailed summary, references and links should you wish to conduct further research. If you would like me to conduct follow-up research based on what I have provided, please do not hesitate to get in touch for discounted rates.<---- PLEASE NOTE: I will not write academic articles, essays or papers. ---->PLEASE GET IN TOUCH BEFORE ORDERING TO DISCUSS YOUR REQUIREMENTS.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/222820209/original/50b95e0afd209c75fa3693b835fd0db671249736.png"
    ],
    "tags": [
      "Writing & Translation",
      "online research",
      "research",
      "internet researcher"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "veeg10",
        "country": "Jordan",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ef-1f1f4.png",
        "review": "Amazing work! Every word is unique and all ideas were related to the research even though, the research question had some complexity. He even went extra miles and Straun is very genuine with great communication. I recommend Straun to anyone seeking for an excellent, clear research. THANKS! I am keen to see the next research!",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "schapes47",
        "country": "Netherlands",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f1.png",
        "review": "Struan´s research is outstanding. Meticulous work and a stellar ability to synthesize information in the shortest amount of time. The price is also very fair taking the quality of the research into consideration. Can only recommend and if I ever need assistance in research I know whom to work with again!",
        "reviewedAt": "Published 3 weeks ago"
      },
      {
        "name": "harrybenham228",
        "country": "United Kingdom",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "review": "Once again, Struan exceeded expectations and delivered an excellent research review. He implements a lot of referencing, proving his depth of research- I will definitely work with him again, thank you!",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "harrybenham228",
        "country": "United Kingdom",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "review": "Struan's work is exceptional! His communication, service and final delivery were of the highest quality and even better than expected. I will definitely choose him for research work again!",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "bossbroc",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "My absolute go-to researcher!",
        "reviewedAt": "Published 3 hours ago"
      }
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will provide quality essays research and summaries on any topic",
    "price": 71,
    "rating": {
      "average": "4.77",
      "num": 108
    },
    "owner": {
      "about": "I am an enthusiastic and proficient writer with 4+ years of research related experience. My journey in the writing industry kicked off at the University where I did countless research and gained more experience. I will assist you with any kind of research and solve your different business needs. Please reach out for excellent and timely work.",
      "fullname": "victoriaeva610",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/34a47e49caa09a703d81ef0621ad0ac1-1626197544385/3cb9eb7a-2163-4722-a1b0-0ddb9eb04d4e.png",
      "level": 2,
      "rate": 4
    },
    "country": "Kenya",
    "daysToMake": 18,
    "description": "GET CUSTOM ORDERS, QUALITY WORK, AND AN AMAZING EXPERIENCEIf you're looking for a professional researcher and a committed writer for all your writing needs, click on this gig because I can't wait to work with YOU.I am an expert writer with over 8 years' experience. I guarantee quality, original content written from scratch, plagiarism free, and delivered within the shortest time possible. My main areas of expertise areResearchEnglishHistoryBusinessPsychologynursing, artsEducationCriminal justiceSociologySupply chainLogisticsCase studiesMarketingSummary WritingI will offer YOU:100% Plagiarism free contentTimely turnaroundTop-notch grammarWell researched and referenced content24/7 Customer supportKindly contact me before placing an order.PS: Custom orders also available upon request",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217276086/original/6a004b8b82868ab02836bdfcb42c4a0e4b042f87.png"
    ],
    "tags": [
      "Writing & Translation",
      "reports",
      "articles",
      "internet researcher",
      "summaries"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "isabellaava851",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "The seller went above and beyond and highly recommend u look no further. Her ability to create such detailed projects has convinced me that she is the best at what she does and will work with her again and again.",
        "reviewedAt": "Published 3 weeks ago"
      },
      {
        "name": "lincoingabriel",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "This seller was extremely communicative, which I really appreciated. The seller was prompt with the delivery and the work was professionally done! I would highly recommend and use the services again!",
        "reviewedAt": "Published 3 weeks ago"
      },
      {
        "name": "tiffanyhaddish",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Awesome at communication and writing. Really sweet and understanding, goes above and beyond to assure customer satisfaction!! 5 out of 5 recommend!!!",
        "reviewedAt": "Published 3 weeks ago"
      },
      {
        "name": "loganmax688",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "a great buyer with great understanding on the task, I will definitely come again and again, I am really impressed.",
        "reviewedAt": "Published 3 weeks ago"
      },
      {
        "name": "candiceaponte",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "She got me my assignment back in 6 hours. Thank you so much",
        "reviewedAt": "Published 7 hours ago"
      }
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will deliver quality case study analysis, articles, research and summaries",
    "price": 103,
    "rating": {
      "average": "4.71",
      "num": 124
    },
    "owner": {
      "about": "I am a professional and diligent writer with more than 6 years experience as a freelance writer. My goal is your satisfaction and to deliver work that you will appreciate. Writing is my passion and I aim to do excellent work for all my clients that will meet the set goals and standards.",
      "fullname": "angela_637",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/03e667c26a63c20863e016917c423eb0-1622910916319/85930fed-bb45-4b01-b117-3913f19b77d7.PNG",
      "level": 2,
      "rate": 4
    },
    "country": "Kenya",
    "daysToMake": 1,
    "description": "Hi, thank you for clicking my gig.Kindly contact me before placing an order to discuss the requirements and check for availability.Are you looking for a professional for your essays, articles, case study, reflections, summary and research work? Then look no further, you are on the right PLACE.I am here to provide you with high-quality and professional services. I have been in the writing industry for over six years. As a researcher, I have a keen interest in identifying major problems and proposing better solutions/recommendations against them.What you will get from this gig?Unique and creative contentOn-time deliveryEngaging contentWell researched and quality work100% plagiarism-freeN/B: I OFFER SERVICES ACCORDING TO FIVERR TERMS OF SERVICE (TOS).",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/210082068/original/f1d222ff641f41a63cce8235a6a5128f05b477bc.jpg"
    ],
    "tags": [
      "Writing & Translation",
      "research and summary",
      "case study",
      "research",
      "summary",
      "articles"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "myaznd",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Her work is absolutely amazing ! Delivered on time and very accommodating . would definitely recommend . I will be reaching out again .",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "evanclark",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "excellent experience. Angela delivered exactly what she said she would. Very thorough and High quality of service and communication. will definitely work with again!",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "ronneishapicket",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Didn’t need any modifications was absolutely perfect ! Got me an A so I highly recommend! And will be shopping in the future",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "klemicha",
        "country": "Austria",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
        "review": "Angela did a great job in a short time, understood the task easily, communicated well & has good language skills. Thanks a lot :)",
        "reviewedAt": "Published 1 week ago"
      },
      {
        "name": "whatsrealeasy",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "great work on the research",
        "reviewedAt": "Published 4 days ago"
      }
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will do market research, business research, swot analysis, and competitive analysis",
    "price": 72,
    "rating": {
      "average": "4.66",
      "num": 567
    },
    "owner": {
      "about": "Hi, my name is Lay. I'm a professional writer in Microsoft word, excel, PowerPoint expert with years of experience. Through my time of work, I have been able to manage tasks such as document formatting & editing, designing, cleanup, and typing of documents for both individual firms and local governments, having worked that long I'm proficient and have the capacity in executing tasks involved in different fields requested by the client. Welcome, let us work together. regards, Troyeb84.",
      "fullname": "layee84",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/b398d51589f16ed08ca0510c2c5edbe2-1636020659427/ecb5ae5e-d22a-47bc-bd9f-e7b2f99c0994.jpg",
      "level": 2,
      "rate": 2
    },
    "country": "Kenya",
    "daysToMake": 4,
    "description": "Hello Fiverr Community,This is Layee, A professional Business Consultant.Before venturing in to any field in the business sector, it’s important to carry out a prior study, and carry out market research on that particular business.I will carry out a comprehensive market research for you, and come up with a detailed market research report.The Market Research Report will cover the following areas depending on the package & availability of information: -· Market Research· Competitor analysis· Industry analysis· Product Research· Market Segmentation· Porter's Five Forces Analysis· Pestle Analysis· Market Trends· Market Drivers· Marketing Mix· Market Size· Total Available Market (TAM)· Demographics· SWOT Analysis· Market Growth· Marketing Options· Marketing Strategies· Future Markets· Web Research· Business Plan (Gig Extra)And Many More….The success of your business is my primary objective/priority, and will offer all these services so that you are able to achieve your business objectives easily, and on time (or",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/232972469/original/679ec7f5d8e49604c2290664620969803d96f7c7.jpg"
    ],
    "tags": [
      "Digital Marketing",
      "Data",
      "competitive analysis",
      "business research",
      "market research",
      "reports",
      "swot analysis"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "njameshoward",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Great communication and speed",
        "reviewedAt": "Published 2 weeks ago"
      },
      {
        "name": "lucasnowak224",
        "country": "Pakistan",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f5-1f1f0.png",
        "review": "Brilliant communication, time management and highly appreciate the hardwork and input.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "lucasnowak224",
        "country": "Pakistan",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f5-1f1f0.png",
        "review": "Met tight deadline with great communication and cooperation.",
        "reviewedAt": "Published 4 weeks ago"
      },
      {
        "name": "muradyoussef",
        "country": "Austria",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
        "review": "verrrrrrrrrrrrrrrry gooooooooooooooooood",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "cantillo16",
        "country": "Costa Rica",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1f7.png",
        "review": "Excellent service",
        "reviewedAt": "Published 2 months ago"
      }
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will translate english to hebrew and hebrew to english",
    "price": 120,
    "rating": {
      "average": "4.45",
      "num": 501
    },
    "owner": {
      "about": "Hi guys! I am a native level speaker (reader, writer, typer, dreamer) of Hebrew and English, and I live in beautiful Israel. I can translate English to Hebrew and Hebrew to English, for any type of content you need - articles, blog posts, social media posts, ads, books, presentation, reports and many more. I am SUPER organised and LOVE what I do. So let's start working on your projects! Contact me :)",
      "fullname": "shiranmor17",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/2077b8d6eeb98061673b868ec51a9267-1636915857681/b31b149f-5e31-46bd-9a2e-27e94cc3e5e2.jpeg",
      "level": 2,
      "rate": 4
    },
    "country": "Israel",
    "daysToMake": 28,
    "description": "Hello and welcome to my gig!I am Shiran and I have 3 years of experience in translations and 6 years of writing experience (Hebrew and English). I make a high-quality, accurate translations from Hebrew to English and English to Hebrew. I DO NOT USE GOOGLE TRANSLATE.I can translate any topic and many types of content. I will translate almost any text, article, book, social media posts, subtitle and even websites.No technical or legal translation or transcription.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/232298461/original/e2872bd49bcb0a344ca35cae4e6a858dbf794fb7.png"
    ],
    "tags": [
      "Writing & Translation",
      "hebrew to english",
      "accurate translation",
      "english to hebrew",
      "hebrew",
      "translation"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "adamronde",
        "country": "Israel",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f1.png",
        "review": "I got my document translated by the deadline, with high efficiency and translation level. I got nice inputs and comments that helped the final delivery be excellent. thank you a lot for providing a great service.",
        "reviewedAt": "Published 2 weeks ago"
      },
      {
        "name": "worldpressnow",
        "country": "Germany",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        "review": "Good communication, very friendly and quick delivery!",
        "reviewedAt": "Published 2 weeks ago"
      },
      {
        "name": "osherbanay1",
        "country": "Israel",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f1.png",
        "review": "Amazing! very accurate and very quick, pleasure to work with!",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "talleizer",
        "country": "Israel",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f1.png",
        "review": "shiran do a great job definitely recommanded",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "idankayam",
        "country": "Israel",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f1.png",
        "review": "great she is the best",
        "reviewedAt": "Published 1 month ago"
      }
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will perfectly translate from russian to english or from english to russian",
    "price": 69,
    "rating": {
      "average": "4.84",
      "num": 148
    },
    "owner": {
      "about": "In 2014, I joined Fiverr to offer professional Russian to English and English to Russian translation services. I hold a Master of Arts degree in Spanish and English and graduated from Russian Military University in 2009. I worked in Uganda, Thailand, Russia, and several other countries, and I'm open to all cultures and nations. I have huge experience in the field of Russian and English philology. I really love dogs because they are my life and my passion... especially Dobermans ^__^. Hire me and unleash the power of Russian military translator and interpreter.",
      "fullname": "vovkaslovesnyy",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/3232052/original/1484208202021_Profile.png",
      "level": 1,
      "rate": 2
    },
    "country": "Russia",
    "daysToMake": 1,
    "description": "**The one and only Top Rated Seller with flawless Russian as the mother tongue (34+ years in Moscow)**On this page, you can order professional and flawless Russian to English translation and English to Russian translation by a native and experienced Russian and English translator.I work in the field of Russian to English and English to Russian translation since 2009 and have successfully received a diploma with honors and a Master of Arts degree in Spanish and English.In case if you are looking for perfect quality at the best price, I am your best choice!I offer the following:- An individual approach for every customer- My goal is quality, and I will never make something average just to finish it as fast as I can- Free correction after implementation is offered for all the orders- Flexible rules and ultimate solutions for my customers- I research translated topics, reading articles and related websites in order to get the contextI have vast experience in Russian and English translation of- religious documents- whitepapers (ICOs)- software- games- websites- CMS- agreements- manuals- subtitlesand other materialsOrder Russian and English translation",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/214734135/original/8623fee2602702a9a233c1328017e9a57e258635.jpg",
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/214734135/original/cf8acab427df340a53c3c82e5df98789975d0715.jpg",
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/attachments/delivery/asset/649d9c5677439737e3a7f6e631cbb95a-1670056256/ToothProject01.jpg"
    ],
    "tags": [
      "Writing & Translation",
      "english to russian",
      "russian to english",
      "translate",
      "translation",
      "russian"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "alzano2020",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "I needed a document translated ASAP on Friday night! I had a high quality translation by the time I woke up own Sat morning. Great job! Highly recommended.",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "marianabolivar",
        "country": "United Kingdom",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "review": "Vladimir, you are the best. Always professional, very quick delivery. I recommend your gigs to anyone who need a reliable and excellent Russian/ English translation.",
        "reviewedAt": "Published 4 weeks ago"
      },
      {
        "name": "lhancha",
        "country": "Morocco",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f2-1f1e6.png",
        "review": "Was very thorough and professional. Completed the work accurately and in a timely manner. I will order again in the future. Thank you.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "smc_rus",
        "country": "Latvia",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f1-1f1fb.png",
        "review": "You are the best, thank you!",
        "reviewedAt": "Published 2 days ago"
      },
      {
        "name": "smc_rus",
        "country": "Latvia",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f1-1f1fb.png",
        "review": "Perfect communication and translations, thank you!",
        "reviewedAt": "Published 3 days ago"
      }
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will provide a professional manual english to french translation",
    "price": 87,
    "rating": {
      "average": "4.24",
      "num": 439
    },
    "owner": {
      "about": "French native translator/copywriter born in Paris & I grew up in the U.S. If you've been looking for a writer that'll actually get you results, you've just found him. Some of my clients: Kayak, L’Express (black Friday event), Viral launch, publishing companies, etc...",
      "fullname": "quantz75",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/aeb50869a3c9aa4f4d01a4a5076780d8-1597753670171/66b99c65-4308-4b81-a088-b0610d5d75b6.jpg",
      "level": 1,
      "rate": 5
    },
    "country": "France",
    "daysToMake": 6,
    "description": "Who am I?I'm a French native translator (copywriter) born in Paris working as a freelancer since 2008 for well-known clients and agencies (KAYAK, L'EXPRESS, Expedia). If you've been looking for a French translator that'll actually make your translation accurate (english to french translation & french to english), you've just found him.I will :Translate from English to French and French to EnglishMake it sound natural (localization)For resumes, documents, PDFs, and Amazon listing please message me first.Why should you choose me?\"We highly recommend Alexis. He read the guidelines carefully and provided a top-quality output. And now he is working on another project with us.\" L'EXPRESS (Black Friday content)\"Alexis was very willing to take on new work, responded fast to messages, and finished the work ahead of schedule. He is open to changes and very flexible. I recommend him for any French translation work.\" KAYAKI've written and translated content into French / English for small businesses, entrepreneurs at all levels, Fortune 100 and tech giants, as well as celebrities and bestselling authors.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/109011649/original/f5d061e1f12ebd971377ea784cf6a68af2be7c3c.jpeg",
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/157077368/original/a7dd0e2cd3558b84e00c0a5915675101a0147210.jpg"
    ],
    "tags": [
      "Writing & Translation",
      "french to english",
      "translate french",
      "english to french",
      "french translation"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "patmangan",
        "country": "Canada",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "review": "I needed a resume and cover letter translated from English to French. This gentleman not only did a fantastic job in translating the language, he equally conveyed my tone of voice through the translation (it still sounds like I wrote it). In addition to a job perfectly done, the communication was clear and the delivery was quick. I am impressed by the quality of work, especially for the great price.",
        "reviewedAt": "Published 3 weeks ago"
      },
      {
        "name": "amandasap",
        "country": "Canada",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "review": "Translated 3 different json files for me, quick and accurate service, and seller is very easy to communicate with. Will order again in the future",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "purhealth",
        "country": "Canada",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "review": "Very accurately translated from English to French. The editing to our document was also completed. A pleasure to work with!",
        "reviewedAt": "Published 1 day ago"
      },
      {
        "name": "jimbob",
        "country": "Ireland",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1ea.png",
        "review": "Great job. Done in record time. I will definitely use this seller again. Highly recommended for French translations",
        "reviewedAt": "Published 1 day ago"
      },
      {
        "name": "aliaksandra_nik",
        "country": "Belarus",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e7-1f1fe.png",
        "review": "Thank you for the fastest delivery and great translation!",
        "reviewedAt": "Published 2 days ago"
      }
    ],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will translate your website french to english, english to french",
    "price": 109,
    "rating": {
      "average": "4.87",
      "num": 89
    },
    "owner": {
      "about": "We are a small team consisting of bilingual English, French and Spanish speakers. We have extensive experience translating all kinds of documents ranging from academic essays to business reports, subtitles and scripts to short novels. We ensure all of our projects are completed with the highest degree of quality and our dedicated approach means that your translated document will be a perfect version, with attention paid over the register and vocabulary used.",
      "fullname": "moremarks",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c7335c7b5aa8d880333495ef8f4bbee5-1617624531791/a2fc714b-c261-490d-b93a-af081a385234.png",
      "level": 1,
      "rate": 4
    },
    "country": "United Kingdom",
    "daysToMake": 16,
    "description": "I will translate all translations sent to me within 12 hours. I can translate French to English and English to French.Translations completed by a Bilingual French & English speaker and an experienced translator. I have extensive experience translation all kinds of projects.If you have any questions, please send a message am I will get back to you ass soon as possible. If you have a larger project to do, don't hesitate to get in contact and we can find a solution that works for you.Please send a message so I can send you a custom order.",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/217112898/original/2857822ef954d4d7305529500a3b9ab3eee33a0c.png"
    ],
    "tags": [
      "Writing & Translation",
      "french to english",
      "english translation",
      "translation",
      "french translation"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "theowl_mktg",
        "country": "France",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1eb-1f1f7.png",
        "review": "Amazing ! Extremely reactive and truly professional. We needed translation for a french marketing website : translations were delivered in a short span of time with high quality. Execution was excellent : the seller kept the text evocative and emotive. I really recommend !",
        "reviewedAt": "Published 3 weeks ago"
      },
      {
        "name": "saracousin",
        "country": "Switzerland",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1ed.png",
        "review": "Fast and great job",
        "reviewedAt": "Published 3 days ago"
      },
      {
        "name": "felipecabrer920",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Quick turnaround and quality work!",
        "reviewedAt": "Published 3 weeks ago"
      },
      {
        "name": "oliviercroce738",
        "country": "France",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1eb-1f1f7.png",
        "review": "Merci beaucoup pour la qualité du travail et la réactivité",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "stephanemeer",
        "country": "France",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1eb-1f1f7.png",
        "review": "Very fast and effective translation from French to English. Thank you so much for your help.",
        "reviewedAt": "Published 1 month ago"
      }
    ],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will create a sales whiteboard video",
    "price": 159,
    "rating": {
      "average": "4.11",
      "num": 172
    },
    "owner": {
      "about": "Welcome! My name is Gregoria. I am an experienced Marketer that loves to spice up whatever you bring to the table. With many years of marketing, and over 8 years of Video Advertising, I will help your enterprise get a high level of Attraction, Interaction, and of course, Sales; through Animation. I and my team work FULL TIME on Fiverr to guarantee quick, and excellent Animation videos.",
      "fullname": "allesanimation",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/ba950f423b857c85340d9e0f22e57bce-1624271979495/ce05a5ca-dcd2-406a-8a20-e41bcb0a429c.jpg",
      "level": 2,
      "rate": 5
    },
    "country": "Germany",
    "daysToMake": 7,
    "description": "Kindly contact me for orders above 90 seconds.What does my package include?Motion whiteboard videoScriptwriting (Additional $50 per 150 words)Voice over; Male & Female(English and German)Background music & imageryHD VideoColored whiteboardCommercial Rights (Additional $20)Broadcast Rights (Additional $50)Note: Voice-over is available in German, US English, and UK English....Bitte kontaktieren Sie mich für Bestellungen über 90 Sekunden.Was beinhaltet mein Paket?Motion Whiteboard VideoDrehbuchschreiben (Zusätzliche €50 pro 150 Wörter)Voice-over; Männlich & Weiblich (Englisch und Deutsch)Hintergrundmusik und BilderHD-VideoFarbiges WhiteboardKommerzielle Rechte (Zusätzliche €20)Übertragungsrechte (Zusätzliche €50)Hinweis: Voice-Over ist in Deutsch, US-Englisch und UK-Englisch verfügbar.",
    "imgUrls": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5czSp5T0hPXc6dazikVMoc6CUCCSN3CWMUw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfdlfmzwmPlLvd5c1rjtyOFS6d5YODg67yg&usqp=CAU"
    ],
    "tags": [
      "Video Explainer",
      "Video & Animation",
      "whiteboard video",
      "explainer video",
      "explain"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "kommissark",
        "country": "Switzerland",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1ed.png",
        "review": "Seller responds quickly. Animation of the video is great. Unfortunately due to technical limitations after several revisions I finally had to cut the video on my own.",
        "reviewedAt": "Published 3 weeks ago"
      },
      {
        "name": "danhub77",
        "country": "Austria",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e6-1f1f9.png",
        "review": "Ich bin rundherum sehr zufrieden gewesen.... :-) Werde mich beim nächsten Video auch wieder an Gregoria wenden..... Dankeschön",
        "reviewedAt": "Published 2 days ago"
      },
      {
        "name": "lovethgreorg",
        "country": "Germany",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        "review": "Das Projekt lief wie erwartet gut. Von Anfang an war sie respektvoll und nahm sich Zeit, um die Animation zu überarbeiten. Möchten Sie an einem langen Projekt arbeiten? sie ist definitiv deine beste Wette. Wir werden für mehr zurück sein.",
        "reviewedAt": "Published 3 days ago"
      },
      {
        "name": "freakx733",
        "country": "Germany",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        "review": "Sehr gut geworden. Vielen Dank nochmal!",
        "reviewedAt": "Published 1 week ago"
      },
      {
        "name": "gradyguez",
        "country": "Germany",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        "review": "Sie war schnell mit der Lieferung. Ich habe nur ein paar Antworten auf ihre Fragen gegeben und am Ende hatte ich eine perfekte Animation. Ich werde für mehr zurück sein.",
        "reviewedAt": "Published 2 weeks ago"
      }
    ],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will create professional 2d animation explainer video",
    "price": 78,
    "rating": {
      "average": "4.06",
      "num": 56
    },
    "owner": {
      "about": "Hello Welcome to AMA Studio. If You are looking for Explainer video or Want to share your Story With World in Creative Way Or Maybe you launched a music and thinking about a video for it well you came to the right place, here in ama studio we provide professional animation with 3 different styles, we also provide scriptwriting and professional voiceovers with multiple gender and multiple accents so what are you waiting for Contact us Now.",
      "fullname": "ama_studio1",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/18ecf7c17fc8aa50d64b8a89c500a5ad-1612199164491/1963fa7b-062c-4c52-a26d-30473a2d3fad.png",
      "level": 2,
      "rate": 5
    },
    "country": "Pakistan",
    "daysToMake": 1,
    "description": "Are You Looking For A 2d Animation Explainer Video For Your Website, Product Or Service?We Offer High Quality Video With Quick Turnaround Time Which Ensures Your Business Gets The Engaging Audience And Profit Turn Around.Need Explainer Animation In Spanish (Español) ? German (Deutsch)? Italian (Italiano) ? No Problem! We Understand All Languages.What You Will Get And Each Package?• Fantastic 2d Animation• Full Hd 1080p• Background Imagery• Background Music• Professional Voice-over• Unlimited RevisionsScript Writing Services Are Also Provided.If You Have Any Custom Work Or Do You Have Any Storyboard Please Contact Me Before The Order For Custom OrderBest RegardsAMA",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/video/upload/t_gig_cards_web/efora4o9znelgccz7fkq.png"
    ],
    "tags": [
      "Video Explainer",
      "Video & Animation",
      "explainer video",
      "2d animation",
      "2d animation video",
      "cartoon animation",
      "promotional video"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "andres_r_",
        "country": "Germany",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        "review": "I was reluctant about using this kind of service at first, but I am very happy with the final result and positively surprised about how creative ama_studio is. I would recommend the service 100% and surely will use it again in the future. Fast, reliable, and the best price-quality ratio.",
        "reviewedAt": "Published 2 days ago"
      },
      {
        "name": "leonkaplun351",
        "country": "Israel",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f1.png",
        "review": "WOW ! Amazing JOB ! After the first revision when I explained my needs They fixed it fast to exactly what I asked Great Communication We have a long term partnership from now Thank you",
        "reviewedAt": "Published 3 weeks ago"
      },
      {
        "name": "fiverrvg",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Seller communicated well and took time to properly understand my requirements. Seller accommodated revisions and worked with me to meet my expectations.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "mrmichael1324",
        "country": "United Kingdom",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "review": "First time using Fiverr and could not of asked for a better experience. So fast and professional. EXACTLY what I wanted. 100% recommended.",
        "reviewedAt": "Published 3 weeks ago"
      },
      {
        "name": "reneshamcneal",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "They gave me everything I asked for and was very patient with me with all the requests I asked for.",
        "reviewedAt": "Published 2 months ago"
      }
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will create a professional whiteboard animation",
    "price": 197,
    "rating": {
      "average": "4.73",
      "num": 261
    },
    "owner": {
      "about": "Hi my name is Arnold! I enjoy marketing, i specialize in graphics, especially memes, white board animation and explainer videos. Check out my gigs and feel free to contact me for any other needs! Customer Satisfaction over everything! 100% Rating!!!",
      "fullname": "encrypt99",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/aa1d8903ba72305648ba75fc6e81d9b7-1633524346738/5f95f4e0-24ca-4a86-8860-d01d81fd7c4a.jpg",
      "level": 2,
      "rate": 3
    },
    "country": "Nigeria",
    "daysToMake": 12,
    "description": "Hii, Welcome to my Whiteboard Animation Video Gig!In this gig, I'll Create the Most EYE-CATCHING whiteboard animation videos tailored to fit your needs.These unique whiteboard Explainer videos for your brand Or business will help to increase your sales and it will definitely create a unique impression on your clients by making them engaging.you'll Get:1. The most Unique Explainer Videos compared to other normal whiteboard videos2. Fully Colored Videos3. Unlimited Revisions Until you're Satisfied4. High-Quality Delivery5. Fast Communication6. All Niche Available7. 100% Satisfaction Guaranty8. Moneyback Guaranty**************If you need custom drawings please check my other gig! or Feel Free to Ping me We'll discuss it : )I'm also providing Voiceover and Script Writing Services Please check the extras for the same...Kindly ensure all required information is readily available before ordering.Still, Have Questions?Feel Free to contact me Anytime I'm Always here to help you : )Looking forward to receiving your Order...RegardsArnold",
    "imgUrls": [
      "data:image/jpeg;base64,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"
    ],
    "tags": [
      "Video & Animation",
      "whiteboard video",
      "explainer video",
      "whiteboard explainer",
      "white board",
      "whiteboard animation"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "malini_pearl",
        "country": "India",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f3.png",
        "review": "Really surprised by his work. Simply wow.. I never expected the outcome and the quality and the script he wrote was just amazing. For the details I gave to him, never expected the output received.. Will definitely reach you soon with other orders... VERY SATISFIED And HIGHLY RECOMENDED SELLER...",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "sanjanassss",
        "country": "United Kingdom",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "review": "It was an awesome experience working with him. looking forward to work long term for sure. Silvia Uk Barkley Trading London ltd",
        "reviewedAt": "Published 1 day ago"
      },
      {
        "name": "richardcanton",
        "country": "United Kingdom",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "review": "This seller was excellent from start to finish. Very prompt and the final product is superb quality. Thank you very much, will use again for sure.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "hemanth8196",
        "country": "India",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ee-1f1f3.png",
        "review": "Very Responsive and will did a lot for our request... Thanks A lot for Your Speedy Delivery and hardwork bro.... HIGHLY RECOMMENDED SELLER FOR WHITEBOARD ANIMATIONS...",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "bakus09",
        "country": "Cote D'Ivoire",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1ee.png",
        "review": "Great Job!",
        "reviewedAt": "Published 7 hours ago"
      }
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will create an eye catching whiteboard animation digital hand drawn",
    "price": 164,
    "rating": {
      "average": "4.63",
      "num": 905
    },
    "owner": {
      "about": "Online Marketing professional with 20 years of experience. After running websites, paid-ads, blogs, and e-shops, in 2012 it was clear that video was essential for Internet Marketing and I began creating whiteboard and animated explainers, which quickly became a passion. I decided to start offering those services to others on Fiverr and since then I have gathered a great team of artists in order to provide quality animation work at affordable prices.",
      "fullname": "bnn_marketing",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/ee46166ba8c4ab29d551cb80bf88815e-1600882516719/10098270-e9f3-4ee8-b9f4-2c70cc457dd9.JPG",
      "level": 2,
      "rate": 4
    },
    "country": "Argentina",
    "daysToMake": 12,
    "description": "ENGAGE YOUR AUDIENCE!!!with your own whiteboard animated doodle videoULTRA FAST 48 Hours turn-around availablePUT YOUR VIDEO MARKETING ON STEROIDSWe`ll create a fantastic speed-draw or whiteboard animation of any logo, picture, script or textWhat you get for $35:30-second video with voice over recordingImages from our Exclusive Hand Drawn Library + 2 Custom DrawingsBackground MusicYou must Provide the Script for the video - Up to 75 words1080p Video in MP4 or any video format you needExtras AvailableFull HD 1920x1080 DeliveryFast DeliveryScript WritingWatermarkColorSubtitlesIf you have other requirements just contact us and we´ll reply soon.100% Satisfaction GuaranteedYour satisfaction is important to us.ORDER NOW!ATTENTION - Projects of 300+ words, contact me for a quote and timeframe first.",
    "imgUrls": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmRzKFLfhPSVDTm92A1GI_HE307Aoq-PAmqg&usqp=CAU"
    ],
    "tags": [
      "Video & Animation",
      "explainer video",
      "doodle",
      "whiteboard animation",
      "hand drawing"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "jaygreen341",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Working with bnn_marketing has been very easy! They provided a product that is better than what I expected. Even when I made a mistake on my order, Daniel was very understanding and professional. There are many companies to choose from; However, I can see why bnn_marketing is a top seller, I would highly recommend them to anyone!",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "tomiyostoner",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "I didn't exactly have a vision for what the finished project would look like, just a general idea that a whiteboard explainer might work well. BNN_Marketing really delivered exactly what I was looking for. Customizations were spot on and I love the finished product.",
        "reviewedAt": "Published 2 weeks ago"
      },
      {
        "name": "joetankard",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "daniel is the man!! always high quality work with great customer service. im a repeat customer and his work is featured on my company websites. always 5 stars, highly recommend!",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "jrwaddington",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "The video came out amazing. They did a great job capturing the essence of the narration. The only down side was that it was 3 days late.",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "macjacart",
        "country": "Canada",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1e6.png",
        "review": "As always a great product. The delivery was a little late, but the production was absolutely first class. I have worked with this Seller before and I look forward to the next project.",
        "reviewedAt": "Published 6 days ago"
      }
    ],
    "extras": {},
    "isOnline": false
  },
  {
    "_id": utilService.makeId(),
    "title": "I will write, rebrand, edit and optimize your linkedin profile",
    "price": 108,
    "rating": {
      "average": "5.0",
      "num": 39
    },
    "owner": {
      "about": "I'm one of Fiverr's original sellers and I will handle all of your copywriting and SEO blogging needs! You will see my reviews are OUTSTANDING. Fast turn-around and always here to help. :)",
      "fullname": "mediagirl",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/e3f2db9a69a2cc7b69c653d3185b6ba9-1592756841572/fbdf1383-4893-4f94-a3c9-a324c68aca4f.jpg",
      "level": 2,
      "rate": 4
    },
    "country": "United States",
    "daysToMake": 1,
    "description": "You've got one chance to make a first impression.Your LinkedIn profile is that chance. Are you leaving potential employers with the best impression you can?Are you hire-able?I'm here to make sure your LinkedIn profile is branded and optimized to it's full potential! I will spend time analyzing, researching and rebranding your profile to help you get noticed.I'm back on Fiverr and ready to bring my expertise to help you reach your goals. I was one of the Original Top-Rated Sellers and my ratings speak for themselves. Over 8k gigs completed, and most all of my completed reviews are 5 star!I have 3 packages to choose from depending on the level of help you need.I hold a Bachelor's Degree in Communication from University of Southern California and have been writing in a professional capacity for over 10 years. I have extensive SEO knowledge and I am a trained copy writer, creative writer and content creation master. Let me help market you for your dream job!",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/161720033/original/b710f4f32dea2048e662276a241c9d5dfe638106.jpeg"
    ],
    "tags": [
      "Writing & Translation",
      "resume writer",
      "linked in",
      "linkedin",
      "job hunting",
      "resume writing"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "ppiork",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "The written communicate was good. I received a response within a few hours. I did not like that all communications had to go through the Fiverr platform, even after securing the project. (This might be a new Fiverr restriction - not sure.) A lot of time was lost in the wait whereas a call could have cleared up a lot of questions and given greater clarity sooner. Also, I didn't feel the seller fully understood the voice, tone, and purpose for my using the Fiverr. I had to repeat my purpose a couple of times. This seller is very responsive and with time and very detailed directions, she can provide what you're looking for.",
        "reviewedAt": "Published 2 weeks ago"
      },
      {
        "name": "larrin",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Thank you for the tips and rewrite. I wanted to know if you would be ok adding Chief Marketing Officer, Patriot Gold Group",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "adrienne0115",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Mediagirl is amazing, with a very quick turnaround. She took a most cumbersome task of redoing my LinkedIn, and made it absolutely something that I am proud of. I would highly recommend her services.",
        "reviewedAt": "Published 4 days ago"
      },
      {
        "name": "antonnakov",
        "country": "Germany",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        "review": "Overall good service and very good value for money. I'd recommend it to others looking for a critical review of their LinkedIn Profile.",
        "reviewedAt": "Published 5 days ago"
      },
      {
        "name": "nyc1989",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Mediagirl is truly phenomenal. She has excellent writing skills and helped me to significantly improve my LinkedIn profile. I would highly recommend her.",
        "reviewedAt": "Published 2 months ago"
      }
    ],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will fully upgrade your linkedin profile",
    "price": 96,
    "rating": {
      "average": "4.88",
      "num": 59
    },
    "owner": {
      "about": "I am a Certified Professional Resume Writer (CPRW), career consultant, and language expert with 14+ years of experience. As a Harvard graduate, I learned from the experts at the Harvard Career Services Office where I honed my abilities to write powerful resumes and cover letters that get my clients hired. US-based: Boston, MA.",
      "fullname": "harvardcv",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/3844073/original/IMG_7304.jpg",
      "level": 1,
      "rate": 3
    },
    "country": "United States",
    "daysToMake": 22,
    "description": "This gig is designed to maximize the full range of LinkedIn's networking and recruiting power through using accomplishment-based, optimized content with LinkedIn's internal search algorithms to ensure you appear on the radar of headhunters and recruiters.This service is for clients seeking work with a company, not to promote a business.The Process:1) Send in your fully current resume of 1-2 pages max. and the URL (link) to your LinkedIn page.2) I will create a full professional summary (the 'about' section) in Word.doc.3) I will also fully upgrade your job descriptions, which will be done on the same Word.doc as #2.4) Once you transfer this content into your LinkedIn profile, I will complete the full multi-point inspection of your entire public profile to ensure all areas of the profile are fully optimized.The Results:My clients typically see a 300% increase in LinkedIn traffic.* To couple a LinkedIn service with a resume/cover letter, please visit this gig:https://www.fiverr.com/harvardcv/create-edit-and-design-your-cv-cover-letter-and-linkedin-profile",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/308105829/original/513dc975cacc94519882717a4a0feb5f4bbf0510.png",
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs2/308105829/original/6e1df872fcd07cd26887afe193bf80b0f337809f.jpg",
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs3/308105829/original/d0358a8513bf2c8450ce56c909b8f25b78d90830.jpg"

    ],
    "tags": [
      "Digital Marketing",
      "Writing & Translation",
      "linkedin profile",
      "linkedin",
      "resume writing",
      "linkedin banner",
      "linkedin business"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "mcdona77",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "WOW, Richard did an amazing job highlighting my skillsets while offering guidance on how to maintain and improve my profile over time. He was incredibly detailed and looked through my entire profile. I'm in marketing, but sometimes it's hard to market yourself. Richard was my second set of eyes and gave me the outside lens I needed to keep my profile in check and improve my keywords. I would highly recommend his services!",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "igorvidic",
        "country": "Norway",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f3-1f1f4.png",
        "review": "I've got 4 messages from the recruiters within a couple of days after my update of profile (based on harvardcv's suggestions) even though I am not open to work. I've got them before but not at this rate, meaning that the job has been done great. It is only up to me to improve my skills and experience if I want to get more traffic, and then, I will again ask harvardcv to update my linkeding.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "amelle55",
        "country": "Switzerland",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e8-1f1ed.png",
        "review": "Richard was great to work with, very professional. He upgraded my LinkedIn profile even if the one I had was not bad, but he was creative and came back with great suggestions and language that I wouldn’t have done on my own. He did the full review, added the necessary optimizations, and even provided advice on my picture and other sections besides the résumé and work experience sections. I am very satisfied and give him 5/5 score. Thank you Richard!",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "dnassozi",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Richard is such a great communicator and wow, he tremendously transformed my resume/LinkedIn profile and gave it wings! I love it and can't wait to upload and share my new profile!! Thanks, Richard",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "uniquedrobinson",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Exceptionally gifted at handcrafting and customizing a LinkedIn profile that matched my skills and expertise brilliantly. The BEST investment I’ve made in my professional branding. My satisfaction exceeded 100%. He went over and above to deliver magnificent results! I highly recommend. Thank you Richard for helping me to 1OX my professional brand.",
        "reviewedAt": "Published 5 days ago"
      }
    ],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will revamp your linkedin profile or write a professional summary, bio",
    "price": 165,
    "rating": {
      "average": "4.84",
      "num": 870
    },
    "owner": {
      "about": "I am Hina, a Certified Professional Resume Writer and Career Consultant. I can write and design a job-oriented Resume and Cover Letter and Optimize your LinkedIn profiles. I have successfully helped recruit and land jobs for thousands of job seekers. As a professional Article Writer and Editor, I have extensive experience in Content Writing, Blog Post Writing, Proofreading Editing, and Copywriting. I am MS Office Certified and an expert in Data entry, file conversion, and PowerPoint presentations. Order with confidence! Always open to custom offers!",
      "fullname": "haniwritertech",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/079e914e9f28e8269dee6bb109ef85a1-1570850131880/40fbde37-316f-4de2-9ca5-07b1300360d2.jpg",
      "level": 1,
      "rate": 2
    },
    "country": "Pakistan",
    "daysToMake": 28,
    "description": "Are you want to make your LinkedIn profile, resume, and cover letter attractive so that the right employers can find you? I am here to assist you.I will revamp, create, and optimize your LinkedIn profile with the right choice of keywords. I know the importance of an attractive and professional Linkedin profile and summary that can help you get the job of your dreams.What you will get?Eye-catching Headline title that will make you stand outKiller bio/summary to grab attentionEducation, Certifications & AwardsProfessional ExperienceLinkedIn profile optimizationHighlight your skills100% satisfaction guaranteeAts resume writing and cover letterNote: If you have any questions or special requirements, send me a message. I will be happy to assist you.Best Regards!Hina",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/200950826/original/08090f735021ad8441f30fe2f38542ce95a2ead9.png"
    ],
    "tags": [
      "Digital Marketing",
      "Writing & Translation",
      "profile optimization",
      "linkedin profile",
      "linkedin summary",
      "resume writing",
      "linkedin bio"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "stevengcc",
        "country": "Malaysia",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f2-1f1fe.png",
        "review": "i was in hospital when the job automatically completed. the fund was transferred and unfortunately she wrote the description wrongly. however she was willing to redo the work without any complains. very responsible freelancer. highly recommended",
        "reviewedAt": "Published 1 week ago"
      },
      {
        "name": "lharris02",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Seller was very fast and prompt, delivered within 12 hours! However, some of my job experiences were padded with skills and programming languages I'm not familiar with. Other than the job experiences, everything looks great.",
        "reviewedAt": "Published 2 weeks ago"
      },
      {
        "name": "rafhaelgomes992",
        "country": "Brazil",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e7-1f1f7.png",
        "review": "Haniwritertech wrote something even better than I was expecting in a really short period of time. I highly recommend it.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "rajraj731",
        "country": "United Kingdom",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1ec-1f1e7.png",
        "review": "She has updated my profile in 4hrs time. I really appreciate your time and effort. I will recommend her for everyone",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "haftomg",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Thank you hani for doing all the good work in short period of time i can’t thank you enough. Very highly recommended!! Keep up the good work!!",
        "reviewedAt": "Published 2 months ago"
      }
    ],
    "extras": {},
    "isOnline": true
  },
  {
    "_id": utilService.makeId(),
    "title": "I will write and optimize your linkedin profile in 24 hours",
    "price": 53,
    "rating": {
      "average": "4.09",
      "num": 381
    },
    "owner": {
      "about": "As a CV Writer, Resume Writer, Covering Letter Writer, and LinkedIn Profile Writer, I have written CVs for hundreds of people from all walks of life and within many different market sectors. I help job seekers build their LinkedIn presence and create compelling resumes, so they can get in front of recruiters, impress hiring managers, and land the perfect job for them. I'm excited to help you kickstart your career!",
      "fullname": "muzamilbutt401",
      "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/eb5d29b35cb0f6bd47e3a2f1fb8a55db-1595779512175/3d984139-fd41-42b2-a94c-fca974593c8a.jpg",
      "level": 1,
      "rate": 5
    },
    "country": "Pakistan",
    "daysToMake": 1,
    "description": "✪ LinkedIn Writing and Optimization Services ✪Do you want to stand out and take your career or business to the next level?I help Entrepreneurs, Change Makers & Big Dreamers stand out and take direction so they can make a great digital first impression!My extensive experience in International Recruitment and Resume Writing has allowed me to gain an in-depth knowledge of industry-specific requirements across a vast range of disciplines. I can make your LinkedIn profile stand out from the crowd!Choose one of the packages outlined below or request a custom offer to improve your personal LinkedIn success.Packages:Basic (Entry-Level Profile): Review and optimization of your LinkedIn Headline and Bio with keywords.Standard (Professional Profile): Full LinkedIn profile optimization, including Headline, Bio, and career history rewrite, skill suggestions, and industry-tailored recommendations.Premium (Profile Creation): Creation of a full profile from scratch, optimized to meet your career preferences.Business Profiles ( Message Me To Discuss)Now is the time to start moving your career or business to the next level!",
    "imgUrls": [
      "https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/159966352/original/1a65840f4a6b0333d7bd37ea876663dc54b9aeaf.jpg"
    ],
    "tags": [
      "Digital Marketing",
      "Writing & Translation",
      "bio",
      "linkedin profile",
      "linkedin optimize",
      "linkedin",
      "resume writing"
    ],
    "likedByUsers": [
      "mini-user"
    ],
    "reviews": [
      {
        "name": "kofaisal",
        "country": "Kuwait",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1f0-1f1fc.png",
        "review": "For my case, I didn’t see any value added; the seller could go to my profile and assess what are the things my profile needs. He asked to choose the premium package which means creation of a full LinkedIn profile from scratch. To be fair, I am going to list what are the things I have learned from him: how to put the symbol in the description, shared with me a list skills, that I have to put my full name in the first name, and how to customize my Linkedin URL. Finally, after I received the delivery, I asked if may he share with me a few versions of the “About” section. He said that he was not able to send more versions this is because I have to pay for it. Again, I have paid $50.",
        "reviewedAt": "Published 1 month ago"
      },
      {
        "name": "simplyjassi",
        "country": "Germany",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png",
        "review": "He is great to work with and I was very impressed how fast he produced work in this quality. My whole profile is coherent and appealing now. I am very happy with it! Also I appreciate when somebody makes changes until the result fits the customer perfectly. Thank you! I loved working with you :)",
        "reviewedAt": "Published 2 weeks ago"
      },
      {
        "name": "jovial1",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "Very accurate descriptions for Linkedin profile and on-time delivery! Will definitely recommend his services. Thank you so much & Happy holidays!!",
        "reviewedAt": "Published 2 months ago"
      },
      {
        "name": "zurismommy",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "The seller was very attentive and got the work done on the first attempt. I am very grateful for the time saved and the level of the work. Thank you!!",
        "reviewedAt": "Published 1 week ago"
      },
      {
        "name": "laispereira94",
        "country": "United States",
        "flag": "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        "review": "I wasn't super clear on what I wanted, and I appreciated their willingness to help and try again. I was super happy with the final product and will surely be recommending them in the future! Thank you again!",
        "reviewedAt": "Published 1 week ago"
      }
    ],
    "extras": {}
  }
]

export const demoOrders = [
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
    "level": 1,
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
  "WordPress",
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
    'AI Services',
    'Data',
    'Lifestyle',
    'music & Audio'
  ]
  return categories[utilService.getRandomIntInclusive(0, 10)]
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