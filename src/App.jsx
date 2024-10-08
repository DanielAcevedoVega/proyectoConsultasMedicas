import React from 'react';

const App = () => {
  return (
  <div className='login__container'>
    <div className='container__form'>
      <form action="#" className='login__form'>
      <h2 className="from__title">Inicio de Sesion</h2>
        <div className='input__wrapper'>
          <input type="text" placeholder='Usuario' className='input__field' required/>
          <i className="material-symbols-outlined">person</i>
        </div>

        <div className='input__wrapper'>
          <input type="password" placeholder='Contraseña' className='input__field' required/>
          <i className="material-symbols-outlined">lock</i>
        </div>
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