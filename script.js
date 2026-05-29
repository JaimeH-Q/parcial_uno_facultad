var registrado = false;

function onSelectGame(event) {
    const juegoInput = document.getElementById("juego");
    const juegoCard = event.currentTarget;

    Array.from(document.querySelectorAll(".game")).forEach((card) => {
        card.classList.remove("selected");
    });
    juegoCard.classList.add("selected");

    juegoInput.value = juegoCard.querySelector("img").alt;
}


function onSubmit(event) {
    event.preventDefault();

    limpiarErrores();

    const nicknameInput = document.getElementById("nickname");
    const juegoInput = document.getElementById("juego");
    const edadInput = document.getElementById("edad");
    const codigoInput = document.getElementById("codigo");

    var canRegister = true;
    if (nicknameInput.value.trim() === ""){
        const error = nicknameInput.nextElementSibling;
        error.textContent = "Introduce tu nickname";
        canRegister = false;
    }

    if (juegoInput.value.trim() === ""){
        const error = juegoInput.nextElementSibling;
        error.textContent = "Selecciona un juego";
        canRegister = false;
    }

    if (edadInput.value.trim() === ""){
        const error = edadInput.nextElementSibling;
        error.textContent = "Introduce tu edad";
        canRegister = false;
    } else if (edadInput.value.trim() < 16){
        const error = edadInput.nextElementSibling;
        error.textContent = "Debes ser mayor de 16 años para registrarte";
        canRegister = false;
    } else if (edadInput.value.trim() > 90){
        const error = edadInput.nextElementSibling;
        error.textContent = "A esa edad creo que hay cosas que deberías hacer antes de jugar";
        canRegister = false;
    }

    if (codigoInput.value.trim() === ""){
        const error = codigoInput.nextElementSibling;
        error.textContent = "Introduce el código del juego";
        canRegister = false;
    }

    if (canRegister) {
        alert("¡Registro exitoso!");
        registrado = true;
        habilitar
    }
}

function limpiarErrores() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach((error) => {
        error.textContent = "";
    });
}