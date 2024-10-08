const InputField = ({type, placeholder, icon})=>{
    return(
        <div className='input__wrapper'>
          <input type={type} placeholder={placeholder} className='input__field' required/>
          <i className="material-symbols-outlined">{icon}</i>
          {type === 'password' &&(
            <i className="material-symbols-outlined eye-icon">visibility_off</i>
          )}
        </div>
    )
}
export default InputField