import React from 'react'
import {Link} from "react-router-dom"
import classes from './../../style.module.scss';


const Navbar = () => {
	return (
		<div className={classes.navigat}>
			<div>
				<Link to="/courses">Мои курсы</Link>
			</div>
			<div>
				<Link to="/shop">Магазин</Link>
			</div>
			<div>
				<Link to="/news">Новости</Link>
			</div>
		</div>
	)
}
export default Navbar