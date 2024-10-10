// document.addEventListener("DOMContentLoaded", () => {
//     setTimeout(() => {
//       const signupForm = document.querySelector(".signup__form");

//       signupForm.addEventListener("submit", async(e)=>{
//         e.preventDefault();
//         console.log(e.target.elements.user_r.value)
//       })
//     }, 1000); 
//   });

setTimeout(() => {
    const signupForm = document.querySelector(".signup__form");

    signupForm.addEventListener("submit", async(e)=>{
        e.preventDefault();
        const res = await fetch("http://localhost:3000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: e.target.elements.user_r.value,
                email: e.target.elements.email_r.value,
                password: e.target.elements.pass_r.value,
            })
        });
        const date = await res.json();
        console.log('Usuario resgistrado', date)
    })
  }, 1000);
