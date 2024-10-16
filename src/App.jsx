import React, { useEffect, useState } from 'react';
import InputField from './components/inputField';
import SignUp from './components/SignUp';
import MainPage from './MainPage';


const App = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(()=>{
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(()=>{
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const handleSignUpClick = () => {
    setIsSignIn(false);
  };

  const handleSignInClick = () => {
    setIsSignIn(true);
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const emailV = e.target.elements.email_l.value;
    const password = e.target.elements.pass_l.value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const email = users.find(user => user.email === emailV && user.password === password);
    if (email) {
      console.log('Inicio de sesión exitoso');
      setIsLoggedIn(true);
    } else {
      console.log('Credenciales incorrectas');
    }
  };

  const handleLogout = () => {
    console.log('Funcion de cerrar sesion');
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
};

  if (isLoggedIn) {
    return <MainPage handleLogout={handleLogout} />
  }
  return (
    <div className={`login__container ${isSignIn ? 'animated-signin' : 'animated-signup'}`}>
      <SignUp handleSignInClick={handleSignInClick} />
      <div className='container__form'>
        <img src="public/logoAmesta.svg" alt="" />
        <form action="#" className='login__form' onSubmit={handleLogin}>
          <h2 className="from__title">Inicio de Sesion</h2>
          <InputField id="email" type="email" name="email_l" placeholder='Correo Electronico' icon="email" />
          <InputField id="pass" type="password" name="pass_l" placeholder='Contraseña' icon="lock" />

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