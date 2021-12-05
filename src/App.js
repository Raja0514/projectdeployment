import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
      <Router>
        <div className="align">
          <h3>marble collections</h3>
          <Link to="/" activeClassName="newclass" exact={true}>
            Login
          </Link>
          <Link to="/register" activeClassName="newclass">
            Register
          </Link>
          <Link to="/loginthrough" activeClassName="newclass">
            OAuthentication
          </Link>
        </div>
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
