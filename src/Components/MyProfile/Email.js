import './Email.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
function Email({user}) {
   const [show , setShow] = useState(false)
     
      const setshow = () =>{
      setShow(!show)
      }
    
  
  return (
     <div className="Email">
     <div className="email-container">
      <div className="email-title">
          <span>Email:</span>
      </div>
      {!show ? 
      <div className="email-right">
      <div className="email-value">
          <span>{user.email}</span>
      </div>
      <div className="email-edit">
          <span className="edit" onClick={setshow} >Edit</span>
      </div>
      </div>
      :
      <div className="edit-email">
         
           <div className="edit-email-right">
           <div className="edit-email-label">
             <span>* Email</span>
           </div>
           <div className="edit-name-input">
             <input value="" />
           </div>
           <div className="edit-email-buttons">
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

export default Email;
