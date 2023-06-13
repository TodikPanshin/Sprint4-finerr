import { useState } from "react"

export function Categories({ categories, handleCategoryFilter, inView, isHome }) {

    const [isRight, setIsRight] = useState(false)
    
    function onSwipeCategories() {
        setIsRight(!isRight)
    }


    return <section
        className={`categories full main-layout
        
        ${isHome && (inView ? 'hidden' : 'sticky-categories')}`}>
        <ul className={`categories-list ${isRight ? 'right' : ''}`}>
            {categories.map(category =>
                <li key={category} className="category"
                    onClick={() => handleCategoryFilter(category)}>
                    {category}
                </li>)}
            <div className={`swipe-categories-btn ${isRight ? 'left' : ''}`}
                onClick={onSwipeCategories}>
                <img src="https://www.svgrepo.com/show/511422/arrow-right-336.svg" alt=">" />
            </div>
        </ul>
    </section>
}