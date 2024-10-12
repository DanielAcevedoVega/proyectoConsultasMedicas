import InputField from "./inputField"

const SignUp = ({ handleSignInClick  }) => {
    return (
        <div className='container__signup'>
            <form action="#" className='signup__form'>
                <h2 className="from__title">Registro</h2>

                <InputField id="user__register" type="text" name="user_r" placeholder='Nombre' icon="person"/>
                <InputField id="email__register" type="email" name="email_r" placeholder='Correo Electronico' icon="email"/>
                <InputField id="pass__register" type="password" name="pass_r" placeholder='Contraseña' icon="lock"/>
                <InputField id="pass__register2" type="password" name="pass_r2" placeholder='Repetir Contraseña' icon="lock"/>

                <button className='login__button' type='submit'>Registar</button>
                <p className='signin__text'>Ya tengo una cuenta <a href="#" onClick={handleSignInClick}>Ingresar</a></p>
            </form>
        </div>
    )
}
export default SignUp