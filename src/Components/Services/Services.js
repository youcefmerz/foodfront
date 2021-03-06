import './Services.css';

function Services() {


  return (
     <div className="Services">
      <div className="service-child" >
     <div className="img"><img src="/fast-food.svg" alt=""/></div>
     <h1>Repas familials</h1>
     <p>Commandez des repas en famille avec soupe, sandwichs, collations et plus encore. Pour 4 à 6 personnes.</p>
      </div>
      <div className="service-child" >
     <div className="img"><img src="/delivery-man.svg"  alt=""/></div>
     <h1>Livraison et ramassage disponibles</h1>
     <p>Vos favoris Pret peuvent être ramassés dans certains magasins ou livrés à votre porte.</p>
      </div>
      <div className="service-child" >
     <div className="img"><img src="/utensils-solid.svg"  alt=""/></div>
     <h1>Manger sur place a table</h1>
     <p>Vous pouvez commandez et manger plus tard sur place.</p>
      </div>
      <div className="service-last-child">
     <div className="img"><img src="/bicycle.svg"  alt=""/></div>
     <h1>Sachez avant de partir</h1>
     <p>Sachez avant de partir. Le minimum de commande de livraison est de 500 DA.</p>
      </div>

    </div>
  );
}

export default Services;
