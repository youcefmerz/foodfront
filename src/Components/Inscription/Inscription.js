import './Inscription.css';

function Inscription() {


  return (
     <div className="Inscription">
       <h1>Create an account</h1>
       <form>
         <div className="label">
        <label>
         * Nom :
          <input
          className="input-text"
            name="isGoing"
            type="text"
           />
        </label></div>
        <br />
        <div className="label">
        <label>
         * Prénom :
          <input
          className="input-text"
            name="numberOfGuests"
            type="text"
            />
        </label></div>
        <br />
        <div className="label">
        <label>
         * Email :
          <input
          className="input-text"
            name="numberOfGuests"
            type="email"
            />
        </label></div>
        <br />
        <div className="label">
        <label>
         * Password :
          <input
          className="input-text"
            name="numberOfGuests"
            type="password"
            />
        </label></div>
        <br />
        <div className="label">
        <label>
          * Phone number :
          <input 
          className="input-text"
            name="numberOfGuests"
            type="password"
            />
        </label></div>
        
        <input className="submit" type="submit" value="Create account" />
      
      </form>
    </div>
  );
}

export default Inscription;
