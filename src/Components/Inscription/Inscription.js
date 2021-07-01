import './Inscription.css';
import React, { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link ,
  useHistory
} from "react-router-dom";
function Inscription() {
 
  const [user , setUser] = useState({name:'',email:'', password:'',numtel:''})
  const register = async (user1) => {
    try {
       const response = await axios.post("http://localhost:4000/register", user1);
       if (!response || response.status !== 201)
        console.log("erreur");
       console.log("response is ",response);
      
     } catch (err) {
       console.log(err.message);
     }
   }
   const onSubmitHandler = (event) => {
    register(user);
     event.preventDefault();
    }
  return (
     <div className="Inscription">
       <h1>Create an account</h1>
       <form>
         <div className="label">
        <label>
         * Username :
          <input
          className="input-text"
            name="isGoing"
            type="text"
            onChange={(event)=>setUser({...user, name: event.target.value})}
           />
        </label></div>
        <br />
       
        <div className="label">
        <label>
         * Email :
          <input
          className="input-text"
            name="numberOfGuests"
            type="email"
            onChange={(event)=>setUser({...user, email: event.target.value})}
            />
        </label></div>
        <br />
        <div className="label">
        <label>
         * Password :
          <input
          className="input-text"
            name="numberOfGuests"
            type="password"
            onChange={(event)=>setUser({...user, password: event.target.value})}
            />
        </label></div>
        <br />
        <div className="label">
        <label>
          * Phone number :
          <input 
          className="input-text"
            name="numberOfGuests"
            type="password"
            onChange={(event)=>setUser({...user, numtel: event.target.value})}
            />
        </label></div>
        
        <button onClick={onSubmitHandler} className="submit" type="submit" >Create account</button>
      
      </form>
    </div>
  );
}

export default Inscription;
