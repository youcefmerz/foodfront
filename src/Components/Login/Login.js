import './Login.css';

function Login() {


  return (
     <div className="Login">
       <div className='log'>
       <h1>Connecte a votre compte grec</h1>
       <form>
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
       
        
        <input className="submit" type="submit" value="Create account" />
      
      </form>
      </div>
      <div className='register'>
      <h1>Connecte a votre compte grec</h1>
      <p>Si vous êtes un nouveau client, vous devrez créer un compte chez nous avant de pouvoir passer une commande.</p>
<button>Sign up</button>
      </div>
    </div>
  );
}

export default Login;
