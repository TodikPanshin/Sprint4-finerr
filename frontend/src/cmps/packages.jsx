export function Packages({gig}) {
    return (
        <section className="packages-container">
        <div className="labels-container">
            <label htmlFor="">Basic</label>
            <label htmlFor="">Standard</label>
            <label htmlFor="">Premium</label>
        </div>
        <div className="main-package">
            <h2>{gig.price}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nobis eligendi repellat recusandae non eum explicabo, impedit labore ipsam iure molestiae. Suscipit, aspernatur in tempore aliquam commodi consectetur necessitatibus aut, eos voluptatibus quam debitis nobis!</p>
            <button>Continue</button>
            <a href="#">Compare packages</a>
        </div>
        <footer>
            <button>Contact me</button>
        </footer>
        </section>
    )
}