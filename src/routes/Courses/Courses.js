import React from 'react'
import classes from './../../style.module.scss'
import Navbar from "../../modules/navigation/Navbar";
import Header from "../../modules/navigation/Header";

const Courses = () => {
	return(
		<div className={classes.main}>
			<div className={classes.main_navigation}>
				<Navbar/>
			</div>
			<div className={classes.main_content}>
				<Header/>
				Courses
			</div>
		</div>
	)
}
export default Courses