import React, { useEffect, useRef, useState } from 'react'
import { SearchBox } from '../cmps/search-box'
import { HomeCategories } from '../cmps/home-categories'
import { useNavigate } from 'react-router-dom'
import { setFilterBy } from '../store/gig.actions'
import { AppFooter } from '../cmps/app-footer'
import { LoginSignup } from '../cmps/login-signup'
import { login, signup } from '../store/user.actions'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

const hero_URLs = [
    "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/1b6990afe0934244dda2c9aeed5de8d9-1674663021930/bg-hero-6-1792-x1.png",
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png",
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png",
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png",
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png",
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png"
]

const popularServices = [
    {
        imgUrl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/f27bec553efc12cc60baed89b8f2223e-1674661140708/ai-artists-2x.png',
        title: 'AI Artist',
        preTitle: 'Add talent to AI',
    },
    {
        imgUrl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png',
        title: 'Logo Design',
        preTitle: 'Build your brand',
    },
    {
        imgUrl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png',
        title: 'WordPress',
        preTitle: 'Customize your site',
    },
    {
        imgUrl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png',
        title: 'Voice Over',
        preTitle: 'Share youre message',
    },
    {
        imgUrl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png',
        title: 'Video Explainer',
        preTitle: 'Engage your audience',
    },
    {
        imgUrl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png',
        title: 'Social Media',
        preTitle: 'Reach more customers',
    },
    {
        imgUrl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png',
        title: 'SEO',
        preTitle: 'Unlock growth online',
    },
    {
        imgUrl: 'https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png',
        title: 'Translation',
        preTitle: 'Go global',
    },
]

const gap = 17.5

export function HomePage() {
    const [slideImg, setSlideImg] = useState(0)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
    const [carouselStyle, setCarouselStyle] = useState({ right: 0, transition: '0.5s' })
    const navigate = useNavigate()
    const carouselRight = useRef(0)


    useEffect(() => {
        setTimeout(() => {
            slideImg <= 4 ? setSlideImg(slideImg + 1) : setSlideImg(0)
        }, 6000);
    }, [slideImg])

    function getOpacity(idx) {
        return idx === slideImg ? 1 : 0
    }

    async function onLogin(credentials) {
        console.log('login - credentials:', credentials)
        try {
            const user = await login(credentials)

            showSuccessMsg(`Welcome: ${user.fullname}`)
        } catch (err) {
            showErrorMsg('Cannot login')
        }
    }

    async function onSignup(credentials) {
        try {
            const user = await signup(credentials)
            showSuccessMsg(`Welcome new user: ${user.fullname}`)
        } catch (err) {
            showErrorMsg('Cannot signup')
        }
    }

    function toggleSignup() {
        setIsOpenModal(true)
    }

    function handleCategoryFilter(category) {
        setFilterBy({ tag: category })
        document.body.scrollTop = document.documentElement.scrollTop = 0
        navigate('/gig')
    }


    function slideCarousel(diff) {
        if (diff === -1 && carouselRight.current < gap || diff === 1 && carouselRight.current >= gap * (popularServices.length - 5)) return
        carouselRight.current += diff * gap
        setCarouselStyle(prevStyle => ({ ...prevStyle, right: `${carouselRight.current}rem` }))
    }

    
    function handleSwipe(event) {
        const touchStartX = event.touches[0].clientX;
        let isSwiping = false;
      
        function handleTouchMove(e) {
          if (!isSwiping) {
            const touchMoveX = e.touches[0].clientX;
            const diffX = touchStartX - touchMoveX;
            const SWIPE_THRESHOLD = 10;
      
            if (diffX > SWIPE_THRESHOLD) {
              slideCarousel(1); // Move to the next slide
              isSwiping = true;
            } else if (diffX < -SWIPE_THRESHOLD) {
              slideCarousel(-1); // Move to the previous slide
              isSwiping = true;
            }
          }
        }
      
        function handleTouchEnd() {
          isSwiping = false;
          document.removeEventListener('touchmove', handleTouchMove);
          document.removeEventListener('touchend', handleTouchEnd);
        }
      
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
      }

    return (
        <main className="home-page main-layout full">
            <div className="slide-container">
                <div className="black-background"></div>
                <div className='hero' style={{ opacity: getOpacity(0), transiton: "1.5s" }}><img src={hero_URLs[0]} alt="slide-images-gallery" />
                    <div className='main-layout'><p>⭐⭐⭐⭐⭐<br />Valentina, <span>AI Artist</span></p></div></div>
                <div className='hero' style={{ opacity: getOpacity(1), transiton: "1.5s" }}><img src={hero_URLs[1]} alt="slide-images-gallery" />
                    <div className='main-layout'><p><br />Andrea, <span>Fashion Designer</span></p></div></div>
                <div className='hero' style={{ opacity: getOpacity(2), transiton: "1.5s" }}><img src={hero_URLs[2]} alt="slide-images-gallery" />
                    <div className='main-layout'><p>⭐⭐⭐⭐⭐<br />Moon, <span>Marketing Expert</span></p></div></div>
                <div className='hero' style={{ opacity: getOpacity(3), transiton: "1.5s" }}><img src={hero_URLs[3]} alt="slide-images-gallery" />
                    <div className='main-layout'><p><br />Ritika, <span>Shoemaker and Designer</span></p></div></div>
                <div className='hero' style={{ opacity: getOpacity(4), transiton: "1.5s" }}><img src={hero_URLs[4]} alt="slide-images-gallery" />
                    <div className='main-layout'><p><br />Zach, <span>Bar Owner</span></p></div></div>
                <div className='hero' style={{ opacity: getOpacity(5), transiton: "1.5s" }}><img src={hero_URLs[5]} alt="slide-images-gallery" />
                    <div className='main-layout'><p>⭐⭐⭐⭐⭐<br />Gabrielle, <span>Video Editor</span></p></div></div>
            </div>

            <div className="main-home">
                <h2>Find the right <span>freelance service</span>, right away</h2>
                <SearchBox placeholder={'Search for any service...'} />
                <section className="popular-btns">Popular:
                    <button onClick={() => handleCategoryFilter('Graphic & Design')}>Graphic & Design</button>
                    <button onClick={() => handleCategoryFilter('Digital Marketing')}>Digital Marketing</button>
                    <button onClick={() => handleCategoryFilter('Business')}>Business</button>
                    <button onClick={() => handleCategoryFilter('AI Services')}>AI Services</button>
                </section>
            </div>

            <div className="popular-services-container">
                <h1>Popular services</h1>
                <button className='arrow' onClick={() => slideCarousel(-1)}><img src="https://www.svgrepo.com/show/350276/chevron-left.svg" alt="left" /></button>
                <ul className="popular-services" onTouchStart={handleSwipe}>
                    {popularServices.map((service, idx) =>
                        <li key={idx} style={carouselStyle}
                            onClick={() => handleCategoryFilter(service.title)}>
                            <img src={service.imgUrl} alt={service.title} />
                            <h2><span>{service.preTitle}</span>
                                {service.title}</h2>
                        </li>
                    )}
                </ul>
                <button className='arrow' onClick={() => slideCarousel(1)}><img src="https://www.svgrepo.com/show/350274/chevron-right.svg" alt="right" /></button>
            </div>

            <div className="best-part-everything-container main-layout full">
                <div className="best-part-everything">
                    <section className="bast-part-text">
                        <h2>The best part? Everything.</h2>
                        <h3><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                        </svg>Stick to your budget</h3>
                        <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
                        <h3><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                        </svg>Get quality work done quickly</h3>
                        <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
                        <h3><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                        </svg>Pay when you're happy</h3>
                        <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
                        <h3><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                        </svg>Count on 24/7 support</h3>
                        <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
                    </section>
                    <section className="best-part-video">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" alt="video" />
                    </section>
                </div>
            </div>

            <div className="home-categories">
                <HomeCategories handleCategoryFilter={handleCategoryFilter} />
            </div>

            <div className="join-finerr-img">
                <h2>Suddenly it's all so <span>doable.</span><br />
                    <button onClick={toggleSignup}>Join Finerr</button>
                </h2>
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png" alt="join Finerr" />
            </div>
            {isOpenModal && <LoginSignup cancel={setIsOpenModal} onLogin={onLogin} onSignup={onSignup} isSignup={isSignup} />}
        </main >
    )
}



