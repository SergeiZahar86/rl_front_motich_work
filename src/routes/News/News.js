import React from 'react'
import Navbar from "../../modules/navigation/Navbar";
import classes from "./../../style.module.scss";
import Header from "../../modules/navigation/Header";

const News = () => {
	return(
		<div className={classes.main}>
			<div className={classes.main_navigation}>
				<Navbar/>
			</div>
			<div className={classes.main_content}>
				<Header/>
				News
			</div>
		</div>
	)
}
export default News