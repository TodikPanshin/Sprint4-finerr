export function Carousel() {
    
    const [carouselStyle, setCarouselStyle] = useState({ right: 0 })
    const imgCount = useSelector(storeState => storeState.systemModule.imgCount)

    function slideCarousel(diff) {
        if (diff === -1 && carouselRight.current < gap
            || diff === 1 && carouselRight.current >= gap * (popularServices.length - imgCount)) return
        carouselRight.current += diff * gap
        setCarouselStyle(prevStyle => ({ ...prevStyle, right: `${carouselRight.current}rem` }))
    }

    return (<div className="popular-services-container">
        <h1 className="popular-services-headline">Popular services</h1>
        <button className="btn arrow"
            onClick={() => slideCarousel(-1)}>
        </button>
        <ul className="popular-services">
            {popularServices.map((service, idx) =>
                <li key={idx} style={carouselStyle}
                    onClick={() => handleCategoryFilter(service.title)}>
                    <img src={service.imgUrl} alt={service.title} />
                    <h2><span>{service.preTitle}</span>
                        {service.title}</h2>
                </li>
            )}
        </ul>
        <button className="btn arrow"
            onClick={() => slideCarousel(1)}>
        </button>
    </div>)
}