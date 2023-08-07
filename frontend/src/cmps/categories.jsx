import { useState } from "react"

export function Categories({ categories, handleCategoryFilter, inView, isHome, hamburgetBar }) {

    const [ulStyle, setUlStyle] = useState({ marginLeft: '0' })

    function onSwipeCategories(direction) {


        direction === 'right' ? setUlStyle(style => style = { marginLeft: `${window.innerWidth - 1400}px`, transition: '1s' })
            : setUlStyle(style => style = { marginLeft: '5vw', transition: '1s' })
    }


    return <section
        className={`categories full main-layout
        ${isHome && (inView ? 'hidden' : 'sticky-categories')}`}>
        <ul style={ulStyle} className="categories-list">
            <div className="swipe-categories-btn left"
                onClick={() => onSwipeCategories('left')}>
                <img src="https://www.svgrepo.com/show/511422/arrow-right-336.svg" alt=">" />
            </div>
            {categories.map(category =>
                <li key={category} className="category"
                    onClick={() => handleCategoryFilter(category)}>
                    {category}
                </li>)}
            <div className="swipe-categories-btn"
                onClick={() => onSwipeCategories('right')}>
                <img src="https://www.svgrepo.com/show/511422/arrow-right-336.svg" alt=">" />
            </div>
        </ul>
    </section>
}