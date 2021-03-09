import React from 'react'
import classes from "./../../style.module.scss";
import Navbar from "../../modules/navigation/Navbar";
import Header from "../../modules/navigation/Header";

const Shop = () => {
	return(
		<div className={classes.main}>
			<div className={classes.main_navigation}>
				<Navbar/>
			</div>
			<div className={classes.main_content}>
				<Header/>
				Shop
			</div>
		</div>
	)
}
export default Shop