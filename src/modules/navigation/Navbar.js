import React from 'react'
import {Link} from "react-router-dom"
import classes from './../../style.module.scss';


const Navbar = () => {
	return (
		<div className={classes.navigat}>
			<div className={classes.nv}>
				<Link to="/courses">Мои курсы</Link>
			</div>
			<div className={classes.nv}>
				<Link to="/shop">Магазин</Link>
			</div>
			<div className={classes.nv}>
				<Link to="/news">Новости</Link>
			</div>
		</div>
	)
}
export default Navbar