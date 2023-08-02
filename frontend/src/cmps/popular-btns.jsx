export function PopularBtns(handleCategoryFilter){
    return(
        <section className="popular-btns">Popular:
            <button onClick={() => handleCategoryFilter('Graphic & Design')}>Graphic & Design</button>
            <button onClick={() => handleCategoryFilter('Digital Marketing')}>Digital Marketing</button>
            <button onClick={() => handleCategoryFilter('Business')}>Business</button>
            <button onClick={() => handleCategoryFilter('AI Services')}>AI Services</button>
        </section>
    )
}