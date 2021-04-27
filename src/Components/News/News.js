import './News.css';

function News() {


  return (
     <div className="News">
      <div className="parent">
      <div className="child-img">
        <img src="/tacos2.jpg" alt="" height="370px" />
      </div>
      <div className="child-news">
      <h1>Nouvelle gamme tacos Grec</h1>
      <p>Simplifiez-vous la vie avec la gamme Pret à la maison : des recettes exclusives à réchauffer et à savourer à la maison et nos incontournables en format généreux à partager et à offrir !  

Gamme disponible dans une sélection de Pret à Manger, en click & collect et livraison ! </p>
<button>Commander</button>
      </div>
      </div>
      <div className="parent">
     
      <div className="child-news">
      <h1>nouvelles recettes de smoothies</h1>
      <p>Simplifiez-vous la vie avec la gamme Pret à la maison : des recettes exclusives à réchauffer et à savourer à la maison et nos incontournables en format généreux à partager et à offrir !  

Gamme disponible dans une sélection de Pret à Manger, en click & collect et livraison ! </p>
<button>Commander</button>
      </div>
      <div className="child-img">
        <img src="/smoothie.jpg" alt="" height="370px"  />
      </div>
      </div>
    </div>
  );
}

export default News;
