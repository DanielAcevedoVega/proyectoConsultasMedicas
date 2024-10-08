import React from 'react';

const App = () => {
  return (
  <div className='login__container'>
    <h2 className="from__title">Inicio de Sesion</h2>

    <form action="#" className='login__form'>
      <div className='input__wrapper'>
        <input type="text" placeholder='Usuario' className='input__field' required/>
        <i className="material-symbols-outlined">person</i>
      </div>

      <div className='input__wrapper'>
        <input type="password" placeholder='Contraseña' className='input__field' required/>
        <i className="material-symbols-outlined">lock</i>
      </div>
      <a href="#" className="forgot__pass__link">Olvidaste la Contraseña?</a>

      <button className='login__button'>Ingresar</button>
    </form>
    <p className='signup__text'>No tienes una cuenta? <a href="#">Registrate</a></p>
  </div>

 )
}

export default App