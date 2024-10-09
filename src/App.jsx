import React, { useState } from 'react';
import InputField from './components/inputField';
import SignUp from './components/SignUp';

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
      <form action="#" className='login__form'>
      <h2 className="from__title">Inicio de Sesion</h2>
        <InputField type="text" placeholder='Usuario' icon="person"/>
        <InputField type="password" placeholder='Contraseña' icon="lock"/>

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