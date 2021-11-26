import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login"
import Register from"./components/register/register"
import "./App.css"
import { useState } from "react";
function App() {

  const[user,setLoginUser]=useState({})

  return (
    <div className="App">

      <Router>
        <Switch>
          <Route  exact path="/">

           {

             user && user. _id
             ?
             <Homepage setLoginUser={setLoginUser}/>
             :
             <Login setLoginUser={setLoginUser}/>
           }
           </Route>
          <Route   path="/login"><Login setLoginUser={setLoginUser}/></Route>
          <Route  path="/register"><Register/></Route>
        </Switch>
      </Router> 

    </div>
  );
}
export default App;
