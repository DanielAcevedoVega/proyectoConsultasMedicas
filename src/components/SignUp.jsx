const SignUp = ({ handleSignInClick  }) => {
    return (
        <div className='container__signup'>
            <form action="#" className='login__form'>
                <h2 className="from__title">Registro</h2>

                <div className='input__wrapper'>
                    <input type="text" placeholder='Usuario' className='input__field' required />
                    <i className="material-symbols-outlined">person</i>
                </div>
                <div className='input__wrapper'>
                    <input type="email" placeholder='Correo Electronico' className='input__field' required />
                    <i className="material-symbols-outlined">email</i>
                </div>
                <div className='input__wrapper'>
                    <input type="password" placeholder='Contraseña' className='input__field' required />
                    <i className="material-symbols-outlined">lock</i>
                </div>
                <div className='input__wrapper'>
                    <input type="password" placeholder='Confirmar Contraseña' className='input__field' required />
                    <i className="material-symbols-outlined">lock</i>
                </div>

                <button className='login__button' type='submit'>Registar</button>
                <p className='signin__text'>Ya tengo una cuenta <a href="#" onClick={handleSignInClick}>Ingresar</a></p>
            </form>
        </div>
    )
}
export default SignUp