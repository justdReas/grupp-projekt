
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom"
import { get } from "./Utbildningar/utility/api";


function Page3() {
const [id,setId] = useState(0);
const [counter, setCounter] = useState(0);
const [course, setCourse] = useState([]);

  return (
    <div className= "Page3" style={{backgroundColor: "skyblue"}} >
     <div> 
       <input value={id} onChange={(event) => setId (event.target.value)}></input> 
      <h1 style={{color:"white"}}
      >Utbildningar</h1>
      <NavLink to="Fullstackdeveloper"> 
      <button onClick={() => {
        get("/api/read").then((response) => setCourse(response.data));
      }}
      style={{color:"Red"}}> Fullstackdeveloper</button> </NavLink>

      <NavLink to="AiDeveloper"> <button onClick={() => {
        get("/api/read").then((response) => setCourse(response.data));
      }}style={{color:"Red"}}>AI Developer</button></NavLink> 

      <h3>Fullstack Developer </h3>
      <h3>AI Developer</h3>
      <Outlet></Outlet>
      </div>
    <div>
      <ul>
{course.map((course) => {
  return <li key={course.id}>{course.title}</li>
})}
      </ul>
    </div> 
</div>
  );
}

export default Page3;
