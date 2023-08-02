import { useState } from "react"

export function Categories({ categories, handleCategoryFilter, inView, isHome }) {

    const [diff, setDiff] = useState(0)

    function onSwipeCategories(direction) {
        if (direction === 'right' && diff + 1200 < window.innerWidth) return

        direction === 'right' ? setDiff(diff => diff = diff - 110) : setDiff(diff => diff = 100)
        console.log(diff, window.innerWidth)
    }


    return <section
        className={`categories full main-layout
        
        ${isHome && (inView ? 'hidden' : 'sticky-categories')}`}>
        <ul style={{ marginLeft: `${diff}px`, transition: '1s' }} className="categories-list">
            {window.innerWidth > 600 && <div className="swipe-categories-btn left"
                onClick={() => onSwipeCategories('left')}>
                <img src="https://www.svgrepo.com/show/511422/arrow-right-336.svg" alt=">" />
            </div>}
            {categories.map(category =>
                <li key={category} className="category"
                    onClick={() => handleCategoryFilter(category)}>
                    {category}
                </li>)}
            {window.innerWidth > 600 && <div className="swipe-categories-btn"
                onClick={() => onSwipeCategories('right')}>
                <img src="https://www.svgrepo.com/show/511422/arrow-right-336.svg" alt=">" />
            </div>}
        </ul>
    </section>
}