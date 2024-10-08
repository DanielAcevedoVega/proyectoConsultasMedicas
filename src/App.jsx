import React from 'react';
import InputField from './components/inputField';

const App = () => {
  return (
  <div className='login__container'>
    <div className='container__form'>
      <form action="#" className='login__form'>
      <h2 className="from__title">Inicio de Sesion</h2>
        <InputField type="text" placeholder='Usuario' icon="person"/>
        <InputField type="password" placeholder='Contraseña' icon="lock"/>

        <div className='forgot__pass__link'>
          <a href="#">Olvidaste la Contraseña?</a>
        </div>
        <button className='login__button' type='submit'>Ingresar</button>
        <p className='signup__text'>No tienes una cuenta? <a href="#">Registrate</a></p>
      </form>
      
    </div>
  </div>

 )
}

export default App