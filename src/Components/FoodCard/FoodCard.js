import './FoodCard.css';

function FoodCard({ title, imgsrc, price }) {


  return (
  
     <div className="Foodcard">
       <div className="Foodcard1">
      <div className="img-FoodCard">
        <img src={imgsrc} alt="nofound" height="214" />
      </div>
      <div className="FoodCard-name"><span>{title}</span></div>
      <div className="FoodCard-prix"><span>{price} $</span></div>
     <div> <button>Commander</button></div>
     </div>
     </div>
  );
}

export default FoodCard;
