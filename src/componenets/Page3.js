import React from "react";
import { NavLink, Outlet } from "react-router-dom"


function Page3() {
  return (
    <div style={{backgroundColor: "skyblue"}} >
      <h1 style={{color:"white"}}
      >Utbildningar</h1>
      <NavLink to="Fullstackdeveloper"> test
      <button style={{color:"Red"}}> 
        
        Fullstackdeveloper</button>
        </NavLink>

      <h3>Fullstackdeveloper </h3>
      <h3>Frontend</h3>
      <Outlet></Outlet>
    </div>
  );
}

export default Page3;
