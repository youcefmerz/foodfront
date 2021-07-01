import './Password.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
function Password() {
   const [show , setShow] = useState(false)
     
      const setshow = () =>{
      setShow(!show)
      }
    
  
  return (
     <div className="Password">
     <div className="password-container">
      <div className="password-title">
          <span>password:</span>
      </div>
      {!show ? 
      <div className="password-right">
      <div className="password-value">
          <span> ******</span>
      </div>
      <div className="password-edit">
          <span className="edit" onClick={setshow} >Edit</span>
      </div>
      </div>
      :
      <div className="edit-password">
         
           <div className="edit-password-right">
           <div className="edit-password-label">
             <span>* Password</span>
           </div>
           <div className="edit-name-input">
             <input />
           </div>
           <div className="edit-password-buttons">
             <button className="edit-button">Save changes</button>
             <button className="cancel-button" onClick={setshow}>Cancel</button>
           </div>

           </div>

      </div>
      
    
    }
     </div>
     


    </div>
  );
}

export default Password;
