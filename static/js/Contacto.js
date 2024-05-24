barra = document.querySelector(".barra");
barra.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

const formRegister = document.querySelector("#contactForm");

const validarFormulario = (event) => {
    event.preventDefault();

    const nombre = document.querySelector("#firstname");
    const apellido = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const telefono = document.querySelector("#telefono");
    const consulta = document.querySelector("#consulta");
    const motivo = document.querySelector("#motivo");
    const acepto = document.querySelector("#acepto");
    let validation = true;

    const errores = document.querySelectorAll(".error-msg");
    errores.forEach(error => error.textContent = "");
    const inputs = document.querySelectorAll("input, textarea, select");
    inputs.forEach(input => input.classList.remove("error"));

    const prohibido = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const prohibidolet = /[A-Za-z]/;
    if(prohibido.test(nombre.value)) {
        document.querySelector("#error-firstname").textContent = "El campo Nombre solo puede contener letras";
        firstname.classList.add("error");
        validation = false;
    }

    if(prohibido.test(apellido.value)) {
        document.querySelector("#error-lastname").textContent = "El campo Apellido solo puede contener letras";
        lastname.classList.add("error");
        validation = false;
    }

    else if(prohibidolet.test(telefono.value)) {
        document.querySelector("#error-telefono").textContent = "El campo Telefono solo puede contener números";
        telefono.classList.add("error");
        validation = false;
    }

    if(email.value.trim() === "") {
        document.querySelector("#error-email").textContent = "Debe completar el campo Email";
        email.classList.add("error");
        validation = false;
    }

    if(consulta.value.trim() === "") {
        document.querySelector("#error-consulta").textContent = "Debe completar el campo Consulta";
        consulta.classList.add("error");
        validation = false;
    }

    if(motivo.value.trim() === "") {
        alert("Debe seleccionar un motivo de contacto");
        motivo.classList.add("error");
        validation = false;
    }

    if(!acepto.checked) {
        alert("Debe aceptar los términos y condiciones");
        acepto.classList.add("error");
        validation = false;
    }

    if(validation) {
        formRegister.submit();
    } else {
        return false;
    }
};

formRegister.addEventListener("submit", validarFormulario);
