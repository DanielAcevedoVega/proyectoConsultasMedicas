setTimeout(() => {
    const signupForm = document.querySelector(".signup__form");

    signupForm.addEventListener("submit", async(e)=>{
        e.preventDefault();
        // const res = await fetch("http://localhost:3000/", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         user: e.target.elements.user_r.value,
        //         email: e.target.elements.email_r.value,
        //         password: e.target.elements.pass_r.value,
        //     })
        // });
        // const date = await res.json();
        // console.log('Usuario resgistrado', date) 
        registerValidation(e);
    })
  }, 1000);

const registerValidation = (e)=>{
    const usernameRegex = /^[a-zA-Z]{5,20}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let list = [{

        "user": e.target.elements.user_r.value,
        "email": e.target.elements.email_r.value,
        "password": e.target.elements.pass_r.value,
        "passwordV": e.target.elements.pass_r2.value
    }]
    let [obj] = list
    if (!obj.user || !obj.email || !obj.password){
        console.log("debe rellenar los datos")
    } else if(!usernameRegex.test(obj.user)){
        console.log("El usario debe tener solo letras y entre 5-20 caracteres")
    } else if (!emailRegex.test(obj.email)){
        console.log("El correo electrónico no es válido")
    } else if(!passRegex.test(obj.password)){
        console.log("La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial")
    } else if (obj.password != obj.passwordV){
        console.log("Las contraseñas debe ser igual ")
    } else{
        console.log("Se ha registrado correctamente")

        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(obj);
        localStorage.setItem('users', JSON.stringify(users));
        
    }
}

