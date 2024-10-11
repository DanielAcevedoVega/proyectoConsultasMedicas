const login = (e)=>{
    e.preventDefault();
    const username = e.target.elements.user_l.value
    const password = e.target.elements.pass_l.value

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.user === username && user.password === password);

    if (user) {
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