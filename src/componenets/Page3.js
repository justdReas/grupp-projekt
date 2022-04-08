import React from "react";
import { NavLink, Outlet } from "react-router-dom"


function Page3() {
  return (
    <div style={{backgroundColor: "skyblue"}} >
      <h1 style={{color:"white"}}
      >Utbildningar</h1>
      <NavLink to="Fullstackdeveloper"> 
      <button style={{color:"Red"}}> Fullstackdeveloper</button> </NavLink>
      <NavLink to="AI Developer"> <button style={{color:"Red"}}>AI Developer</button></NavLink> 

      <h3>Fullstackdeveloper </h3>
      <h3>AI Developer</h3>
      <Outlet></Outlet>
    </div>
  );
}

export default Page3;
