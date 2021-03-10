import React from 'react'
import Navbar from "../../modules/navigation/Navbar";
import classes from "./../../style.module.scss";
import Header from "../../modules/navigation/Header";
import ContextData from "../../Context/Data/ContextData";

const News = () => {

	const {stateData, dispatchData} = React.useContext(ContextData)
	console.log(stateData)
	const news = stateData.news
	React.useEffect(() => {
		const fetchNews = async () => {
			try{
				const response = await fetch('http://localhost:3001/news')
				if (response.ok) { // если HTTP-статус в диапазоне 200-299
				                   // получаем тело ответа (см. про этот метод ниже)
					let result = await response.json();
					//console.log(result)
					dispatchData({
						type: "FETCH_NEWS",
						payload: result
					})
				} else {
					alert("Ошибка HTTP: " + response.status);
				}
			}catch (e){
				//console.log(e)
			}
		}
		fetchNews()
	},[])



	return(
		<div className={classes.main}>
			<div className={classes.main_navigation}>
				<Navbar/>
			</div>
			<div className={classes.main_content}>
				<Header/>
				{news.map(() => {})}
			</div>
		</div>
	)
}
export default News