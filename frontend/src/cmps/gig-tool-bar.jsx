import { Link, NavLink } from 'react-router-dom'
import {useSelector} from 'react-redux'
import routes from '../routes'

export function GigToolBar(){
return(
    <nav className='gig-details-nav main-layout full'>
        <ul className='clean-list flex'>
        <li><a href="#">Overview</a></li>
        <li><a href="seller-details">About the seller</a></li>
        <li><a href="#">Compare packages</a></li>
        <li><a href="#">Reviews</a></li>
        </ul>
    </nav>
)
}