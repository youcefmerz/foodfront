import './LoginPage.css';
import Header from '../../Components/Header/Header'
import Login from '../../Components/Login/Login'
import Footer from '../../Components/Footer/Footer'



function LoginPage() {
  return (
    <div className="Login-page">
     <Header />
     <Login />
     <Footer />
    </div>
    
  );
}

export default LoginPage;