const login = (e)=>{
    e.preventDefault();
    const emailV = e.target.elements.email_l.value
    const password = e.target.elements.pass_l.value

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const email = users.find(email => email.email === emailV && email.password === password);

    if (email) {
        console.log('Inicio de sesión exitoso');
        window.location.href= './public/dashboard.html'
    } else {
        console.log('Credenciales incorrectas');
    }
}

setTimeout(() => {
    const loginForm =  document.querySelector(".login__form");
    loginForm.addEventListener("submit",login)
 }, 1000);
 
export default login;