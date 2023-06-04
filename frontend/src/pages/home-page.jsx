import React, { useEffect, useState } from 'react'
import { SearchBox } from '../cmps/search-box'
import { HomeCategories } from '../cmps/home-categories'
import { useNavigate } from 'react-router-dom'
import { setFilterBy } from '../store/gig.actions'

const hero_URLs = [
    "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/1b6990afe0934244dda2c9aeed5de8d9-1674663021930/bg-hero-6-1792-x1.png",
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049983/bg-hero-1-1792-x1.png",
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png",
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/d14871e2d118f46db2c18ad882619ea8-1599835783966/bg-hero-3-1792-x1.png",
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/93085acc959671e9e9e77f3ca8147f82-1599427734108/bg-hero-4-1792-x1.png",
    "https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/bb5958e41c91bb37f4afe2a318b71599-1599344049970/bg-hero-5-1792-x1.png"
]

export function HomePage() {
    const [slideImg, setSlideImg] = useState(0)
    const navigate = useNavigate()
    

    useEffect(() => {
        setTimeout(() => {
            slideImg <= 4 ? setSlideImg(slideImg + 1) : setSlideImg(0)
        }, 6000);
    }, [slideImg])

    function getOpacity(idx) {
        return idx === slideImg ?  1 : 0 
    }

    function handleCategoryFilter(category) {
        setFilterBy({ category })
        navigate('/gig')
    }

    return (
        <section>
            <div className="slide-container">
                <img style={{ opacity: 1, zIndex: "-100" }} src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"} alt="slide-images-gallery" />
                <img style={{ opacity: getOpacity(0), transiton: "1.5s" }} src={hero_URLs[0]} alt="slide-images-gallery" />
                <img style={{ opacity: getOpacity(1), transiton: "1.5s" }} src={hero_URLs[1]} alt="slide-images-gallery" />
                <img style={{ opacity: getOpacity(2), transiton: "1.5s" }} src={hero_URLs[2]} alt="slide-images-gallery" />
                <img style={{ opacity: getOpacity(3), transiton: "1.5s" }} src={hero_URLs[3]} alt="slide-images-gallery" />
                <img style={{ opacity: getOpacity(4), transiton: "1.5s" }} src={hero_URLs[4]} alt="slide-images-gallery" />
                <img style={{ opacity: getOpacity(5), transiton: "1.5s" }} src={hero_URLs[5]} alt="slide-images-gallery" />
            </div>

            <div className="main-home">
                <h2>Find the right <span>freelance</span></h2>
                <h2><span>service</span>, right away</h2>
                <SearchBox setFilterBy={setFilterBy} placeholder={'Search for any service...'} />
                <section className="popular-btns">popular:
                    <button onClick={()=> handleCategoryFilter('Graphic & Design')}>Graphic & Design</button>
                    <button onClick={()=> handleCategoryFilter('Digital Marketing')}>Digital Marketing</button>
                    <button onClick={()=> handleCategoryFilter('Business')}>Business</button>
                    <button onClick={()=> handleCategoryFilter('AI Services')}>AI Services</button>
                </section>
            </div>

            <div className="home-categories">
                <HomeCategories handleCategoryFilter={handleCategoryFilter}/>
            </div>
        </section >
    )
}



