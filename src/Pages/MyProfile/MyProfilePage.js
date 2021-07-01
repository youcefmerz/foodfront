import './MyProfilePage.css';
import React, { useEffect ,useState} from "react";

import axios from "axios";
import Name from '../../Components/MyProfile/Name'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Email from '../../Components/MyProfile/Email';
import Password from '../../Components/MyProfile/Password';
import Phone from '../../Components/MyProfile/Phone';
function MyProfilePage() {
  const [usr, setUsr] = useState("")
  let dataa = localStorage.getItem('token2')
   dataa = JSON.parse(dataa)

   const getUser = async () => {
    try {
      console.log('token',dataa)
       const response = await axios.get(`http://localhost:4000/getUser`,{ headers: {"x-auth-token" : `${dataa}`} });
       
      if (!response || response.status !== 200)
        return "erreur";
        
        console.log("response is ", response.data.user1.name)
        return  setUsr(response.data.user1)
    } catch (err) {
      console.log(err.message);

    }    }
 useEffect(() =>{ 
   getUser()
   },[])
    
    
    return (
        
      <div className="MyProfile-page">
          <Header />
          <div className="headers">
            <h1>My profile</h1>
            <h2>Youcef merz</h2>
            <h3>Personal details</h3>
          </div>
          <Name user={usr}/>
          <Email user={usr} />
          <Password user={usr}/>
          < Phone user={usr}/>
          <Footer />

      </div>

      
      
    );
  }
  
  export default MyProfilePage;

