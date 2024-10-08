import { useState } from "react"

const InputField = ({type, placeholder, icon})=>{
    const[isPasswordShown, setIsPasswordShown] = useState
    (false);
    return(
        <div className='input__wrapper'>
          <input type={isPasswordShown ? 'text': type} placeholder={placeholder} className='input__field' required/>
          <i className="material-symbols-outlined">{icon}</i>
          {type === 'password' &&(
            <i onClick={()=>setIsPasswordShown(prevState =>!prevState)} className="material-symbols-outlined eye-icon">{isPasswordShown ? 'visibility' : 'visibility_off' }</i>
          )}
        </div>
    )
}
export default InputField