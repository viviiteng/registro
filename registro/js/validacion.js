function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener("DOMContentLoaded", ()=> {
    
    const name= document.getElementById("nombre");
    const apellido=document.getElementById("apellido");
    const email= document.getElementById("email");
    const contraseña1=document.getElementById("password1");
    const contraseña2=document.getElementById("password2");
    const checkbox=document.getElementById("terminos");
    const btn= document.getElementById("regBtn");

    btn.addEventListener("click", (e)=> {
        e.preventDefault();

        setTimeout(() => {
            location.reload();
        }, 5000);

        if (contraseña1.value===contraseña2.value && contraseña1.value.length>=6 && checkbox.checked && name.value && apellido.value &&  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value)) {
            showAlertSuccess();
        } else {
            showAlertError();
        }
        
    });
});