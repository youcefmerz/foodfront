import './FoodDetailsPage.css';
import Header from '../../Components/Header/Header'
import FoodInBag from '../../Components/FoodInBag/FoodInBag'
import Footer from '../../Components/Footer/Footer'
import FoodDetails from '../../Components/FoodDetails/FoodDetails'



function FoodDetailsPage() {
  return (
    <div className="Food-details-page">
     <Header />
     <FoodDetails />
     <Footer />
    </div>
    
  );
}

export default FoodDetailsPage;