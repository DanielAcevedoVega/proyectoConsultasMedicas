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
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let list = [{

        "firstname": e.target.elements.user_r.value,
        "lastname": e.target.elements.user_2.value,
        "email": e.target.elements.email_r.value,
        "password": e.target.elements.pass_r.value,
        "passwordV": e.target.elements.pass_r2.value
    }]
    let [obj] = list
    const { formattedName: formattedFirstName, isValid: isFirstNameValid } = validateAndFormatName(obj.firstname);
    const { formattedName: formattedLastName, isValid: isLastNameValid } = validateAndFormatName(obj.lastname);

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (!obj.firstname || !obj.lastname || !obj.email || !obj.password){
        console.log("Debe rellenar los datos")
    } else if (!isFirstNameValid || !isLastNameValid) {
        console.log("El nombre y el apellido deben contener solo letras, comenzar con mayúscula, y estar separados por espacios");
    } else if (obj.firstname.length < 3 || obj.lastname.length < 3) {
        console.log("El nombre y el apellido deben tener al menos 3 caracteres");
    } else if (obj.user === obj.lastname) {
        console.log("El nombre y el apellido no pueden ser iguales");
    } else if (!emailRegex.test(obj.email)){
        console.log("El correo electrónico no es válido")
    } else if(!passRegex.test(obj.password)){
        console.log("La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial")
    } else if (obj.password != obj.passwordV){
        console.log("Las contraseñas debe ser igual ")
    } else if (users.some(user => user.email === obj.email)){
        console.log("El correo electrónico ya está registrado ")
    } else if (users.some(user => user.firstname === obj.firstname && user.lastname === obj.lastname)){
        console.log("Estos datos ya han sido registrados")
    } else{
        obj.firstname = formattedFirstName;
        obj.lastname = formattedLastName;
        console.log("Se ha registrado correctamente")

        users.push(obj);
        localStorage.setItem('users', JSON.stringify(users));
        
    }
}

const validateAndFormatName = (name) => {
    const nameRegex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
    const nameParts = name.trim().split(/\s+/);
  
    for (let i = 0; i < nameParts.length; i++) {
      nameParts[i] = nameParts[i].charAt(0).toUpperCase() + nameParts[i].slice(1).toLowerCase();
    }
  
    const formattedName = nameParts.join(' ');
    const isValid = nameRegex.test(formattedName) && formattedName.length >= 3;
  
    return { formattedName, isValid };
  };
