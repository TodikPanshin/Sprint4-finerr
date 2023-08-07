const categories = [
    'Graphic & Design',
    'Digital Marketing',
    'Writing & Translation',
    'Video & Animation',
    'Music & Audio',
    'Programming & Tech',
    'Business',
    'Lifestyle',
    'Data',
    'Photography'
]

const categoryUrls = [
    "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg",
    "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg",
    "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.a787f2f.svg",
    "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.1356999.svg",
    "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio.ede4c90.svg",
    "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming.6ee5a90.svg",
    "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business.fabc3a7.svg",
    "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lifestyle.112b348.svg",
    "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/data.855fe95.svg",
    "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/photography.0cf5a3f.svg"
]

export function HomeCategories({handleCategoryFilter, hamburger}) {
    return (
        <section className="home-category">
            {!hamburger && <h1>You need it, we've got it</h1>}
            <div className={`home-category-display ${hamburger? 'hamburger show' : 'hamburger'}`}>
                {categories.map((category, idx) =>
                    <button key={idx} onClick={()=>handleCategoryFilter(category)}>
                        <img src={categoryUrls[idx]} alt="category-img" />
                        <div className="category-border"></div>
                        <h2>{category}</h2>
                    </button>
                )}
            </div>
        </section>
    )
}