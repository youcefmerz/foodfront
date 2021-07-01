import './Index.css';
import Header from '../../Components/Header/Header'
import Services from '../../Components/Services/Services'
import News from '../../Components/News/News'
import Footer from '../../Components/Footer/Footer'




function Index() {
  
  return (
    
    <div className="Index">
     <Header />
     <Services />
     <News />
   
     <Footer />
    </div>
    
  );
}

export default Index;
