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
    "title": "I will design your logo",
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
      "rate": 4,
      "about": `Hi, My Name is Dudu Da and in the past 10 years \n
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
    "title": "I will write a unique SEO article, blog post, or website content",
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
      "rate": 5,
      "about": `For more than 20 years, I've navigated the ever-changing world of optimized content creation as a multi-disciplined freelance writer. I deliver quality website content, blog posts, non-fiction books, unique rewriting, and more. Every piece provides information in an engaging format to attract your target audience.
      Please contact me for high-quality, unique, and effective writing. I'm a native English speaker from the United States. Thank you.
      Requests welcome!`
    },
    "daysToMake": 5,
    "description": `Both readers and search engine algorithms demand more from blog posts and articles these days. Competition grows daily in ever-changing global markets. You need content that grabs attention, keeps it, and drives conversions, and you don't have time to do it yourself.
    You need SEO article writing from a professional content writer who delivers what you and your business need to succeed.
    Why Choose Me for Blog Post Writing?  
     I've been a professional freelance writer for over 20 years. Every buyer gets a dedicated approach to their blog content or article writing needs. (Check out the 'My Writing Process' page in my portfolio.)
    What Do You Get with Your Order
    You need worry-free, high-quality, and optimized blog posts and articles. That is what I deliver.
    Full research from reputable sources and references
    Current SEO best practices with your keywords
    Close attention to grammar, spelling, punctuation, etc. (Native US English)
    100% original, no plagiarism, fresh, and unique
    Human touch writing No AI (Your readers deserve it!)
    Please contact me with any questions, to check availability, or for higher word count orders. I look forward to working with you.`,
    "imgUrls": [
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/1227060/original/4eebb55f7a7d27c93110b4c6d20ac07a5f1d4aa7/write-a-unique-500-word-seo-blog-post.png',
      'https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20180418/Friendly_Post1_b9bif0.jpg',
      'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c7bdbff98fde1822c85ae1b27de69cb3-1664380630/shutterstock_1085505137/write-a-unique-500-word-seo-blog-post.jpg',
      'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/c2649aedb7ad0a886584d25677e207c3-1624292593/GettyImages-1279869264/write-a-unique-500-word-seo-blog-post.jpg',
      'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/dcd2d4cc2dc52ba2f39fc2249845aeef-1564706628/GettyImages-516450790/write-a-unique-500-word-seo-blog-post.jpg',
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
    "title": "I will build your wordpress website with oxygen builder",
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
      "rate": 3,
      "about": `Hi,\n
      nice to meet you! My name is Kiki Kiki.\n
      I am happy to help you creating your website to promote your business successfully.\n
      If there are questions, please just ask me.\n
      Talk to you soon :)`
    },
    "daysToMake": 10,
    "description": `Each project is unique, please contact me before your order. Thanks ;) \n
    Portfolio: https://www.fiverr.com/users/Kiki Kiki/portfolio \n
    What is included in this offer? (All What You Need)\n
    -Premium Customized Website\n
    -Web Design 100% responsive\n
    -Speed Optimization\n
    -Unlimited Revisions\n
    -SEO on Site\n
    -Plugins Lifetime Updates\n
    -Tutorial video\n
    -Premium Images with licenses (Full Package)\n
    Why me?\n
    -I specialize in the DACH market\n
    -5 Stars Rated Seller\n
    -Tailor-made website (I build your template)\n
    -100% commitment to your work\n
    -Permanent Support (even after the delivery)\n
    Are you ready for your new Premium Wordpress Website? I will need your...\n
    -Logo\n
    -Fonts\n
    -Color Palette\n
    -Design references\n
    -Access to your WP installation\n
    Information that you must know:\n
    -My three packages include pages/templates with a maximum of 4 sections. Otherwise, you will need a customized offer.\n
    -Your new site will be built with Oxygen Builder. Therefore, it will be very fast and easy to edit.\n
    -Video calls will be conducted in English or German.\n
    Looking forward to your message ;)\n
    Best,\n
    Kiki Kiki`,
    "imgUrls": [
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/263804107/original/13bba12a57e31c3058ce81e40de5e6cea3b3ce8c/build-your-wordpress-website-with-oxygen-builder.png',
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/263804107/original/e58a10e4e43f0fb1cf926720d407deb71f8a8360/build-your-wordpress-website-with-oxygen-builder.png',
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/78e87e4cd477aa4a6efc685b994b953f-1685625555/GoDo/build-your-wordpress-website-with-oxygen-builder.png',
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/a385f08f5b7cce6f080183514f7d9bea-1680233150/Cargo/build-your-wordpress-website-with-oxygen-builder.png',
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
    "title": "I will do mobile app development",
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
      "rate": 2,
      "about": `I'm a professional mobile app developer for android app and ios app development with 5+ years of experience.\n
      I create fully functional ios apps, games, and android applications for all your needs.\n
      I have made over 500+ android apps, ios apps, iPhone apps, react native apps, Flutter apps & hybrid apps & much more!\n
      I develop the best UI UX app design and bug-free applications with VIP customer support and 100% customer satisfaction.`
    },
    "daysToMake": 15,
    "description": `If you are looking for Mobile App Development (IOS, Android, Hybrid, Native), you are at the right place. I am a professional android developer and IOS app developer to develop high quality mobile apps for android and iPhone apps development. I can also develop a web based admin panel for your mobile app development.\n
    Please contact me before Placing Order. Knowing your needs is important.` ,
    "imgUrls": [
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/183742032/original/0cf85335095a9237da5d39f324c84f5e765c1ed4/be-ios-app-developer-for-iphone-app-and-android-mobile-app-development.jpg',
      'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/ff53354f2aed1aa7f6f1e254eee26fa1-1671473394/Change%20Password/be-ios-app-developer-for-iphone-app-and-android-mobile-app-development.jpg',
      'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/a2eb8b881aa2fa6fb14cfc41ad006d92-1665214431/113/be-ios-app-developer-for-iphone-app-and-android-mobile-app-development.png',
      'https://fiverr-res.cloudinary.com/images/t_smartwm/t_gig_pdf_gallery_view_ver4,q_auto,f_auto/attachments/delivery/asset/dcc0d0b091bc320af14395e17279d57f-1626778220/wireframe/be-ios-app-developer-for-iphone-app-and-android-mobile-app-development.pdf',
      'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/85ab831ac8b7f391140edeb6befbc738-1611913539/Juice%20Screen%201/be-ios-app-developer-for-iphone-app-and-android-mobile-app-development.png',
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
    "title": "I will write your ad or content to get results",
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
      "rate": 5,
      "about": `25 YEAR PRO WRITER - I have been writing on the Web since it began creating ads, press releases, web copy, sales letters, articles, blog posts, you name it! Join the thousands of happy customers who have been delighted with my hard work and great writing.`
    },
    "daysToMake": 2,
    "description": `24 HOUR RUSH DELIVERY on all orders. PRO WRITER with 20 years experience. See my 8,000 customer reviews.\n`,
    "imgUrls": [
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/1263477/original/18dd94b70047a74cf48b988f61f67c704c35bbdb/write-your-classified-ad-fat-50-words.png',
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/120916459/original/8a92c53361ca6325c7f60c78827aca5b1d7c8a10/write-you-sales-copy-that-really-converts.png',
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/180691472/original/9d72cdbf919a8cec6089006f796e69f91c6b49c6/creative-writing-video-script-creative-script-creative-writer-short-story.jpg',
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/180691472/original/3e4be13fb87d5807da07775cf62342f0a2e59ec8/creative-writing-video-script-creative-script-creative-writer-short-story.jpg',
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
    "title": "I will write dog articles and pet blog content",
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
      "rate": 3,
      "about": "Hello, I'm Ni Ni! I am a professional freelance content creator, published author, and ghostwriter extraordinaire. I have a B.A. in English and have been a paid writer for 10+ years. I specialize in non-fiction eBooks and SEO-friendly blogs / articles that drive traffic to your website. Additionally, I have extensive experience writing about pets, self-help, gardening, travel, education, spirituality, entrepreneurship, and small businesses. My inbox is always open to new clients!"
    },
    "daysToMake": 5,
    "description": `Are you looking for a professional freelancer to take your pet content to the next level? Want to drive traffic to your blog? Need social media posts for your dog's Insta page? How about pet product descriptions that = sales?\n
    Hello. My name is Jen, and I'd love to help! I am a self-proclaimed "dog mom" with 10+ years' experience caring for and writing about:\n
    dogs (all breeds, but especially Great Danes and Poodles) \n
     cats\n
     horses (I volunteered in a barn for 5 years)\n
     tortoises / turtles\n
     birds\n
    snakes / reptiles (I'm a herpetology hobbyist)\n
    I look forward to working with you!`,
    "imgUrls": [
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/222615986/original/6f5b7c553b6fd09b2bf820ac4496b614349d3a97/write-dog-articles-and-pet-blog-content.jpg',
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/222615986/original/376289b040df9cf53c17c4a7c9bfc8c7bf1dfe20/write-dog-articles-and-pet-blog-content.jpg',
      'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/005da5fe4613d306b98e908bdc13fc6b-1684984866/Image%206/write-dog-articles-and-pet-blog-content.jpg',
      'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/6b6bf04fc009c04bbcc04abe751476bc-1681350026/Image%202/write-dog-articles-and-pet-blog-content.jpg',
      'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/e0f51fa7cbf1829a597b0d43520978ae-1683854260/Image%201/write-dog-articles-and-pet-blog-content.jpg',
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
      "rate": 5,
      "about": `Oli Oli, experienced social media manager. Specializes in creating and executing tailored strategies to drive engagement, increase brand awareness and drive growth.
      Utilizes the latest trends and best practices for clients in various industries.
      In free time, enjoys exploring food and fashion trends or reading.
      Let me help take your brand to the next level on social media.`
    },
    "imgUrls": [
      'https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20220411/Social%20Media%20Manager_ehdzpg.jpg',
      'https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20220411/Social%20Media%20Content_mbdnib.jpg',
      ,
    ],
    "daysToMake": 10,
    "description": `Looking for a professional social media manager or marketing agency?
    \n
    \n
    \n
    OUR APPROACH IS WHAT MAKES US DIFFERENT\n
    \n  
    \n
    \n
    We craft bespoke, visually compelling, and engaging pieces of content that will make your business stand out and capture the attention of your target audience.`,
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
    "title": "I will write an engaging email marketing campaign",
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
      "rate": 3,
      "about":`I have a Bachelor of Science in Communication, Journalism, & Media and years of professional writing, editing, & social media experience.
      In the past 4 years, I've written copy for 600+ diverse clients.   
      I specialize in writing clever & engaging social media copy & online courses to add value to your brand. 
      I have experience writing social media captions, articles/blogs, ad & sales copy, website content, email campaigns, press releases, scripts, & online courses. 
      I'm a brand chameleon & can create or adapt my writing voice to match your desired style or tone. Let's work together!`
    },
    "daysToMake": 3,
    "description": `Hi there!\n
    I have a Bachelor of Science in Communication, Journalism, & Media and 4 years of professional experience writing & editing for 600+ diverse clients.\n
    Whether it's an email campaign, newsletter, or cold email, I will write an email your readers will have to subscribe to. I will help you create copy into conversions by emulating your strong brand voice & crafting unique, stand-out content.`,
    "imgUrls": [
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/199768721/original/3670e9c3a8a821e49dae671cb9baa99d9abfe619/write-an-engaging-subscribe-worthy-email.png',
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
    "title": "I will be your website SEO growth manager",
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
      "rate": 2,
      "about":`Hire Romy Romy Algorithm®: 100% results-driven Digital Marketing Experts & Online Business Growth Agency known for its data-driven decisions for online marketing & new business growth opportunities.`
    },
    "daysToMake": 15,
    "description": `Do you want High-quality organic traffic and boost in Google ranking?\n
    Hire your Personal SEO Growth Manager and get Professional SEO Services done\n
    by Data Algorithm®.`,
    "imgUrls": [
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/105758186/original/6ba675143bb053c8479cbbac17c3f6710afc4384/be-your-seo-manager.png',
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/105758186/original/e92b3309a5fb06225c099b4045d43f52859e8b24/be-your-seo-manager.png',
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/105758186/original/f5dfd2abadc2f01d48ac856cfe4e798915afe6fc/be-your-seo-manager.png',
      `https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20230408/Search%20Engine%20Optimization%20Services%20On%20Fiverr%20-%20SEO%20growth%20Manager%20Data%20Algorithm_wnwwbo.jpg`    ],
    "tagFs": [
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
    "title": "I will design amazing children illustrations provided",
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
      "rate": 5,
      "about":`My work is an extension of myself, the way I look at life. Happy colours swirling, where fantasy comes to life amidst a beautiful natural setting. I find wonder in a variety of things, the smallest of objects and the highest of mountains.I draw my inspiration from both nature and life.I bring all my inspirations with me as I work on my projects.
      I have 10 years experience in gaming and animation studios . I have worked on a variety of projects and have learnt a lot through this process.
      I’m passionate with children illustrations.`
    },
    "daysToMake": 10,
    "description": `I offer stylised illustrations for childrens books and also any other illustrations as per your requirements. I also make nature and food illustrations, digitally on Photoshop or procreate. I can do any stylised illustrations appropriate for children.`,
    "imgUrls": [
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/196940884/original/f1e5b05d1dc352e5ce5b7038ed505475cee5d3d9/best-quality-illustrations-provided.jpeg',
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/196940884/original/a75bcd3e00823708d152c22d071ab14642b41790/best-quality-illustrations-provided.jpeg',
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/196940884/original/01eab1bc4e204b9ef7b2f068998cca6a8a1ff85f/best-quality-illustrations-provided.jpeg',
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
    "title": "I will design an outstanding business card",
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
      "rate": 5,
      "about":`Brand Designer with 9 years of experience in the field, enthusiastic about Design and with satisfied clients from all over the world. Thanks for considering my gig. I look forward to working with you.`
    },
    "daysToMake": 10,
    "description": `A Business Card is an extension of the person/business and should always be treated with honour and respect. It is the primary way to people to present their contact info to others.
    I will respect your brand, your information and create a high-quality and 100% unique Business Card ready to print.
    `,
    "imgUrls": [
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/107453717/original/cfe63fc33d20dbb4ba776a53f7f9fbc6cb7a2d2d/design-an-outstanding-business-card.jpg',
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/107453717/original/1d4ddf7b208050c4767889f037a9ca6b41733b97/design-an-outstanding-business-card.jpg',
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/107453717/original/da86362b055498cbeda48035d87ce128c4054632/design-an-outstanding-business-card.jpg',
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
    "title": "I will do excel data entry, data collection, web research, copy paste, data entry",
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
      "rate": 5,
      "about":`Hello, My name is Suki Suki. I am happy to be a member of the Fiverr community. My goal is to provide the best services possible to all of my clients. I deliver fast, and accurately, and I offer 100% guaranteed satisfaction to all my clients. I will do any type of data entry, web research, copy-paste, file conversion, and typing projects at your fingertips. You can check my reviews to know what other clients think of me. Feel free to contact me and I will reach you as soon as possible. Thanks`
    },
    "daysToMake": 12,
    "description": `Are you looking for a professional Data Entry Expert or a big data entry project done? Yes, you are at the right place. We are here to help you to promote your business with 100% satisfaction. We will provide you with fast and reliable service and our goal is to provide the best services possible to all of our clients.`,
    "imgUrls": [
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/99771034/original/5daa2fdcc0f2b386c09d7803e844f84fdf6fb2eb/do-excel-data-entry.png',
      'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/99771034/original/9881e06c67e6d0e36fdb42716b4f5ce10784fd78/do-excel-data-entry.png',
      'https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20220912/Data%20entry_jfvswm.jpg',
      'https://fiverr-res.cloudinary.com/image/upload/t_gig_pdf_gallery_view_ver4,f_jpg/20220912/copy%20paste%20typing_pbwwiw.jpg',
      'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/79e9d95735d4fc850731608a5d7a81bb-1661438400/Typing%20manualy/do-excel-data-entry.PNG'
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