export function Categories({ categories, handleCategoryFilter, inView, isHome }) {

    return <section
        className={`categories full main-layout
        
        ${isHome && (inView ? 'hidden' : 'sticky-categories')}`}>
        <ul className="categories-list">
            {categories.map(category =>
                <li key={category} className="category"
                    onClick={() => handleCategoryFilter(category)}>
                    {category}
                </li>)}
        </ul>
    </section>
}