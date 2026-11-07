const formulario = document.getElementById("entrar");
const campoEmail = document.getElementById("email");
const campoClave = document.getElementById("password");

formulario.addEventListener("submit", (evento) => {
    limpiarErrores(formulario);
    let hayErrores = false;
    if (!campoEmail.value.includes("@")) {
        mostrarError(campoEmail, "El correo debe contener una arroba.");
        hayErrores = true;
    }
    if (campoClave.value === "") {
        mostrarError(campoClave, "La constraseña está vacía.");
        hayErrores = true;
    }

    if (hayErrores) {
        evento.preventDefault();
    }
    
})



