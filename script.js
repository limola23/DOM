let bd = [
    {
        email:"mcocuy@mail.com",
        password:"compaq",
        username: "striker",
        active: true
    },

    {
        email:"CRocuy@mail.com",
        password:"compaq2",
        username:"carlosReact",
        active:true
    },

    {
        email:"DB@mail.com",
        password:"compaq3",
        username:"danielaButstrap",
        active:false
    }
]

function logIn() {
    let username, email = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    
    for (let data of bd) {
        if (data.username === username || data.email === username) {
            if (data.password === password) {
                alert("Inicio de sesión exitoso");
                return;
            } else {
                alert("Datos de inicio de sesión incorrectos");
                return;
            }
        }
    }
}