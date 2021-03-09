import logo from './logo.svg';
import './App.css';
import React from "react";
import General from "./routes/General/General";
import {Switch, Route} from "react-router-dom";
import Courses from "./routes/Courses/Courses";
import News from "./routes/News/News";
import Shop from "./routes/Shop/Shop";
import ContextData from "./Context/Data/ContextData";
import ReducerData from "./Context/Data/ReducerData";
import StateData from "./Context/Data/StateData";


function App() {
    const [stateData, distatchData] = React.useReducer(ReducerData, StateData)
  return (
      <Switch>
          <ContextData.Provider value={{stateData, distatchData}}>
              <Route path="/" exact component={General}/>
              <Route path="/courses" component={Courses}/>
              <Route path="/news" component={News}/>
              <Route path="/shop" component={Shop}/>
          </ContextData.Provider>
      </Switch>
  );
}

export default App;
