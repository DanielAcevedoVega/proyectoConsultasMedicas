import { useState } from "react"

const InputField = ({id, type, name, placeholder, icon,})=>{
    const[isPasswordShown, setIsPasswordShown] = useState
    (false);
    return(
        <div className={name === 'user_r' ? 'input__fullname' : 'input__wrapper'}>
          <input id={id} type={isPasswordShown ? 'text': type} name={name} placeholder={placeholder} className='input__field' required/>
          <i className="material-symbols-outlined">{icon}</i>
          {id === 'pass' &&(
            <i onClick={()=>setIsPasswordShown(prevState =>!prevState)} className="material-symbols-outlined eye-icon">{isPasswordShown ? 'visibility' : 'visibility_off' }</i>
          )}
          {name === 'user_r' && (
        <>
          <input 
            id="user__register2" 
            type="text" 
            name="user_2" 
            placeholder="Apellido" 
            className='input__field' 
            required 
          />
        </>
      )}
        </div>
    )
}
export default InputField