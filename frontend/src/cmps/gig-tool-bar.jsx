import { Link, NavLink } from 'react-router-dom'
import {useSelector} from 'react-redux'
import routes from '../routes'


export function GigToolBar(){
return(
    <section className='gig-details-nav clean-list'>
        <a href="#">Overview</a>
        <a href="seller-details">About the seller</a>
        <a href="#">Compare packages</a>
        <a href="#">Reviews</a>
    </section>
)
}