import { useState } from "react"
import { utilService } from "../services/util.service"
import { useNavigate } from "react-router"
import { toggleDrawer } from '../store/system.actions'


export function Packages({ gig }) {
    const [selected, setSelected] = useState(1)
    const navigate = useNavigate()
    
    
    function onToggleLabel({ target }) {
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
                <p>{utilService.makeLorem(selected * 10)}</p>
                <button onClick={() => navigate('/checkout')} onClick={()=>toggleDrawer(true)}>Continue <span>→</span></button>
                {/* <a href="#">Compare packages</a> */}
            </div>
            <footer>
                {/* <button>Contact me</button> */}
            </footer>
        </section>
    )
}