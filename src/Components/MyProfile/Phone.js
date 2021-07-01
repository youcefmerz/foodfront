import './Phone.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
function Phone({user}) {
   const [show , setShow] = useState(false)
     
      const setshow = () =>{
      setShow(!show)
      }
    
  
  return (
     <div className="Phone">
     <div className="phone-container">
      <div className="phone-title">
          <span>phone:</span>
      </div>
      {!show ? 
      <div className="phone-right">
      <div className="phone-value">
          <span>{user.numtel}</span>
      </div>
      <div className="phone-edit">
          <span className="edit" onClick={setshow} >Edit</span>
      </div>
      </div>
      :
      <div className="edit-phone">
         
           <div className="edit-phone-right">
           <div className="edit-phone-label">
             <span>* Phone number</span>
           </div>
           <div className="edit-name-input">
             <input />
           </div>
           <div className="edit-phone-buttons">
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

export default Phone;
