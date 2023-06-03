import { useState } from "react"

export function Packages({ gig }) {
    const [selected, setSelected] = useState(1)

    function onToggleLabel({target}) {
        const focused = target.className
        
        if (focused.includes('basic')) setSelected(1) 
        if (focused.includes('standard')) setSelected(2) 
        if (focused.includes('premium')) setSelected(3) 
    }


    return (
        <section className="packages-container">
            <div className="labels-container">
                <label onClick={onToggleLabel} className={`basic-${selected}`}>Basic</label>
                <label onClick={onToggleLabel} className={`standard-${selected}`}>Standard</label>
                <label onClick={onToggleLabel} className={`premium-${selected}`}>Premium</label>
            </div>
            <div className="main-package">
                <h2>${gig.price * selected}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio nobis eligendi repellat recusandae non eum explicabo, impedit labore ipsam iure molestiae. Suscipit, aspernatur in tempore aliquam commodi consectetur necessitatibus aut, eos voluptatibus quam debitis nobis!</p>
                <button>Continue</button>
                {/* <a href="#">Compare packages</a> */}
            </div>
            <footer>
                {/* <button>Contact me</button> */}
            </footer>
        </section>
    )
}