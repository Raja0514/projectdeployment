import React from "react";
import "./homepage.css";


const Homepage = ({ setLoginUser }) => {
  return (
    <>
      <div className="homepage">  

        <h2>List of Omani Marbles</h2>

         <div className="image">

        <img src=".\image\Marble.jpg" width="200px" height="200px" />

        <img src=".\image\Marble.jpg" width="200px" height="200px" />
        <img src=".\image\Marble.jpg" width="200px" height="200px" />
       
        </div>

        <div className="button" onClick={() => setLoginUser({})}>

          Logout

        </div>
        
      </div>
    </>
  );
};
export default Homepage;
