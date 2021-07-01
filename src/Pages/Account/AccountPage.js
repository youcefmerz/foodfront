import './AccountPage.css';
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link ,
    useHistory
  } from "react-router-dom";
function AccountPage() {
  
    
    
    
    return (
        
      <div className="Account-page">
          
      <Header />
      <div  className="account-container">

<div className="account-main">

    
<h1 className="account-title">
My Account
</h1>
<div className="account-name-container">
<h2 className="account-name"> Hi youcef </h2>
<span className="account-logout">
Logout
</span>
</div>

     
<div className="introduction-text">
Welcome to your account area. In your account you are able to amend your delivery locations, payment settings and others.
</div>



<div className="account-options-container">

<ul className="account-options">
    
    <li className="account-options-items">
        <Link to="MyProfile-page" className="account-options-link" >
            <div className="link-container">
            <div className="ling-container-item" >
        <img src="/user-alt-solid.svg" alt="" width="30px" height="40px" />
        </div>
        <div className="aa">
            <span className="account-options-title">
            
                My Profile
            </span>
            
            <p className="account-options-description">Personal details</p>
            </div>
            </div>
        </Link>
        </li>
    
    <li className="account-options-items">
    <a className="account-options-link" >
            <div className="link-container">
            <div className="ling-container-item" >
        <img src="/user-alt-solid.svg" alt="" width="30px" height="40px" />
        </div>
        <div className="aa">
            <span className="account-options-title">
            
                My Profile
            </span>
            
            <p className="account-options-description">Personal details</p>
            </div>
            </div>
        </a>    
    </li>
    <li className="account-options-items">
    <a className="account-options-link" >
            <div className="link-container">
            <div className="ling-container-item" >
        <img src="/user-alt-solid.svg" alt="" width="30px" height="40px" />
        </div>
        <div className="aa">
            <span className="account-options-title">
            
                My Profile
            </span>
            
            <p className="account-options-description">Personal details</p>
            </div>
            </div>
        </a>    
    </li>
    <li className="account-options-items">
    <a className="account-options-link" >
            <div className="link-container">
            <div className="ling-container-item" >
        <img src="/user-alt-solid.svg" alt="" width="30px" height="40px" />
        </div>
        <div className="aa">
            <span className="account-options-title">
            
                My Profile
            </span>
            
            <p className="account-options-description">Personal details</p>
            </div>
            </div>
        </a>    
    </li>
    <li className="account-options-items">
    <a className="account-options-link" >
            <div className="link-container">
            <div className="ling-container-item" >
        <img src="/user-alt-solid.svg" alt="" width="30px" height="40px" />
        </div>
        <div className="aa">
            <span className="account-options-title">
            
                My Profile
            </span>
            
            <p className="account-options-description">Personal details</p>
            </div>
            </div>
        </a>    
    </li>
</ul>
</div> 


</div>

</div>

<Footer />




      </div>
      
    );
  }
  
  export default AccountPage;



