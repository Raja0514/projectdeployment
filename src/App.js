import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import LoginTh from "./components/loginthrough/loginthrough";
import "./App.css";
import { useState } from "react";
function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <h1> Marble and Granite collectios</h1>
      <Router>
        <NavLink to="/">login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/loginthrough">OAuthentication</NavLink>
        <br></br>
         <Switch>
          <Route exact path="/">
            {user && user._id ? (
              <Homepage setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
           <Route path="/loginthrough">
            <LoginTh />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
