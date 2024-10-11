import React, { useState } from 'react';
import InputField from './components/inputField';
import SignUp from './components/SignUp';
import login from './js/components/login';


const App = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignUpClick = ()=>{
    setIsSignIn(false);
  };

  const handleSignInClick = ()=>{
    setIsSignIn(true);
  }
  return (
  <div className={`login__container ${isSignIn ? 'animated-signin' : 'animated-signup'}`}>
    <SignUp handleSignInClick={handleSignInClick}/>
    <div className='container__form'>
      <img src="public/logoAmesta.svg" alt="" />
      <form action="#" className='login__form' onSubmit={login}>
      <h2 className="from__title">Inicio de Sesion</h2>
        <InputField id="user" type="text" name="user_l" placeholder='Usuario' icon="person"/>
        <InputField id="pass" type="password" name="pass_l" placeholder='Contraseña' icon="lock"/>

        <div className='forgot__pass__link'>
          <a href="#">Olvidaste la Contraseña?</a>
        </div>
        <button className='login__button' type='submit'>Ingresar</button>
        <p className='signup__text'>No tienes una cuenta? <a href="#" className="signup__link" onClick={handleSignUpClick}>Registrate</a></p>
      </form>
      
    </div>
  </div>

 )
};

export default App