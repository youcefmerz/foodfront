import './Name.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
function Name({user}) {
   const [show , setShow] = useState(false)
     
      const setshow = () =>{
      setShow(!show)
      }
    
  
  return (
     <div className="Name">
     <div className="name-container">
      <div className="name-title">
          <span>Name:</span>
      </div>
      {!show ? 
      <div className="name-right">
      <div className="name-value">
          <span>{user.name}</span>
      </div>
      <div className="name-edit">
          <span className="edit" onClick={setshow} >Edit</span>
      </div>
      </div>
      :
      <div className="edit-name">
         
           <div className="edit-name-right">
           <div className="edit-name-label">
             <span>* User name</span>
           </div>
           <div className="edit-name-input">
             <input />
           </div>
           <div className="edit-name-buttons">
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

export default Name;
