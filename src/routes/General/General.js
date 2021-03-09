import React from 'react'
import ContextData from "../../Context/Data/ContextData";
import StateData from "../../Context/Data/StateData";

const General = () => {
	const {stateData} = React.useContext(ContextData)
	//console.log(stateData)
	return(
		<div>Число лайков {StateData.likes}</div>
	)
}
export default General