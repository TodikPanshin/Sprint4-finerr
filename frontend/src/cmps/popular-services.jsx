import { useState } from "react"

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

export function PopularServices() {
    const [carouselStyle, setCarouselStyle] = useState({ right: 0, transition: '0.5s' })
    
    function slideCarousel(diff) {
        if (diff === -1 && carouselRight.current < gap || diff === 1 && carouselRight.current >= gap * (popularServices.length - 5)) return
        carouselRight.current += diff * gap
        setCarouselStyle(prevStyle => ({ ...prevStyle, right: `${carouselRight.current}rem` }))
        console.log(carouselRight.current)
    }

    function handleCategoryFilter(category) {
        setFilterBy({ tag: category })
        navigate('/gig')
    }
    
    return (
        <div className="popular-services-container">
                <h1>Popular services</h1>
                <button onClick={() => slideCarousel(-1)}><img src="https://www.svgrepo.com/show/350276/chevron-left.svg" alt="left" /></button>
                <ul className="popular-services">
                    {popularServices.map((popService, idx) =>
                        <li key={idx} style={carouselStyle}
                            onClick={() => handleCategoryFilter(popService.title)}>
                            <img src={popService.imgUrl} alt={popService.title} />
                            <h2><span>{popService.preTitle}</span>
                                {popService.title}</h2>
                        </li>
                    )}
                </ul>
                <button onClick={() => slideCarousel(1)}><img src="https://www.svgrepo.com/show/350274/chevron-right.svg" alt="right" /></button>
            </div>

    )
}