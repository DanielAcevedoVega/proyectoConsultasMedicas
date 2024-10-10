import { useState } from "react"

const InputField = ({id, type, name, placeholder, icon})=>{
    const[isPasswordShown, setIsPasswordShown] = useState
    (false);
    return(
        <div className='input__wrapper'>
          <input id={id} type={isPasswordShown ? 'text': type} name={name} placeholder={placeholder} className='input__field' required/>
          <i className="material-symbols-outlined">{icon}</i>
          {id === 'pass' &&(
            <i onClick={()=>setIsPasswordShown(prevState =>!prevState)} className="material-symbols-outlined eye-icon">{isPasswordShown ? 'visibility' : 'visibility_off' }</i>
          )}
        </div>
    )
}
export default InputField