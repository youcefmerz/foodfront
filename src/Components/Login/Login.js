import './Login.css';
import React, { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link ,
  useHistory
} from "react-router-dom";
function Login() {
  const history = useHistory()
 const [user , setUser] = useState({email:'', password:''})
 
 const login = async (user1) => {
 try {
    const response = await axios.post("http://localhost:4000/login", user1);
    if (!response || response.status !== 201)
     console.log("erreur");
    console.log("response is ",response);
    let token = response.data.token 
    let name2 = response.data.namee 
    localStorage.setItem('token2', JSON.stringify(token))
    localStorage.setItem('name2', JSON.stringify(name2))
    history.push("/Menu-page")
  } catch (err) {
    console.log(err.message);
  }
}
 const onSubmitHandler = (event) => {
 login(user);
  event.preventDefault();
 }
  return (
     <div className="Login">
       <div className='log'>
       <h1>Connecte a votre compte grec</h1>
       <form onSubmit={onSubmitHandler}>
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
       
        
        <button onClick={onSubmitHandler} className="submit" type="submit" >Login</button>
      
      </form>
      </div>
      <div className='register'>
      <h1>Connecte a votre compte grec</h1>
      <p>Si vous êtes un nouveau client, vous devrez créer un compte chez nous avant de pouvoir passer une commande.</p>
      <Link to="/Inscription-page"><button>Sign up</button></Link>
      </div>
    </div>
  );
}

export default Login;
