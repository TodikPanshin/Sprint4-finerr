export function Carousel() {

    function slideCarousel(diff) {
        if (diff === -1 && carouselRight.current < gap 
            || diff === 1 && carouselRight.current >= gap * (popularServices.length - 5)) return
        carouselRight.current += diff * gap
        setCarouselStyle(prevStyle => ({ ...prevStyle, right: `${carouselRight.current}rem` }))
    }

    return (<div className="popular-services-container">
        <h1>Popular services</h1>
        <button onClick={() => slideCarousel(-1)}>
            <img src="https://www.svgrepo.com/show/350276/chevron-left.svg" alt="left" />
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
        <button onClick={() => slideCarousel(1)}>
            <img src="https://www.svgrepo.com/show/350274/chevron-right.svg" alt="right" />
        </button>
    </div>)
}