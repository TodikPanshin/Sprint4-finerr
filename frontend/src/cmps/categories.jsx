export function Categories({ categories, handleCategoryFilter }) {
    return <section className="categories full main-layout">
        <ul className="categories-list">
            {categories.map(category =>
                <li key={category} className="category"
                    onClick={() => handleCategoryFilter(category)}>
                    {category}
                </li>)}
        </ul>
    </section>
}