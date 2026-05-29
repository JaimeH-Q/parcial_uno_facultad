function validarFormulario(event) {
    event.preventDefault();

    const nombreInput = document.getElementById('nombre_apellido');
    const dniInput = document.getElementById('dni');
    const fechaInput = document.getElementById('fecha_nacimiento');


    var puedeRegistrarse = true;

    limpiarErrores();

    const nombreValor = nombreInput.value.trim();
    if(nombreValor === '') {
        nombreInput.nextElementSibling.textContent 
        = 'Ingresa tu nombre y apellido';
        puedeRegistrarse = false;
    } else if (nombreValor.length < 4) {
        nombreInput.nextElementSibling.textContent 
        = 'El nombre y apellido debe tener al menos 4 caracteres';
        puedeRegistrarse = false;
    } else if (!/^[a-zA-Z\s]+$/.test(nombreInput.value)) {
        nombreInput.nextElementSibling.textContent 
        = 'El nombre y apellido solo puede contener letras y espacios';
        puedeRegistrarse = false;
    }

    const dniValor = dniInput.value.trim();
    if(dniValor === '') {
        dniInput.nextElementSibling.textContent 
        = 'Ingresa tu DNI';
        puedeRegistrarse = false;
    }
    if (isNaN(dniValor)) {
        dniInput.nextElementSibling.textContent 
        = 'El DNI debe ser un número';
        puedeRegistrarse = false;
    }

    const fechaValor = fechaInput.value.trim();
    if(fechaValor === '') {
        fechaInput.nextElementSibling.textContent
        = 'Ingresa tu fecha de nacimiento';
        puedeRegistrarse = false;
    } else {
        const edad = calcularEdad(fechaValor);
        if (edad < 18) {
            fechaInput.nextElementSibling.textContent 
            = 'Debes ser mayor de 18 años para registrarte';
            puedeRegistrarse = false;
        }
        if (edad > 95) {
            fechaInput.nextElementSibling.textContent 
            = 'Mirtha legrand eres tu? ';
            puedeRegistrarse = false;
        }
        if (edad > 110) {
            fechaInput.nextElementSibling.textContent 
            = 'No deberias estar vivo';
            puedeRegistrarse = false;
        }
    }

    if (!puedeRegistrarse) return;
    document.getElementById('exito').textContent = 'Registro exitoso! Ahora responde las preguntas';
    document.getElementById('preguntas_boton').disabled = false;
}

function limpiarErrores() {
    const errores = document.querySelectorAll('.error');
    errores.forEach(error => error.textContent = '');
}

function calcularEdad(fecha) {
    const hoy = new Date();
    const fechaNacimiento = new Date(fecha);
    return hoy.getFullYear() - fechaNacimiento.getFullYear();
}

function mostrarPreguntas() {
    const respuesta1 = prompt('¿Cuál es tu nacionalidad?') || "Sin respuesta";
    const respuesta2 = prompt('¿Cuál es tu nivel de conocimiento en programación? (Básico / Intermedio / Avanzado)') || "Sin respuesta";
    const respuesta3 = prompt('¿Por qué elegiste esta carrera?') || "Sin respuesta";

    const contenedor = document.getElementById('preguntas_progresivas');

    contenedor.innerHTML += `
        <div class="pregunta">
            <div>
                <span>Pregunta 1: </span>
                <span>¿Cuál es tu nacionalidad?</span>
            </div>
            <div>
                <span>Su respuesta: </span>
                <span>${respuesta1}</span>
            </div>
        </div>
    `;

    contenedor.innerHTML += `
        <div class="pregunta">
            <div>
                <span>Pregunta 2: </span>
                <span>¿Cuál es tu nivel de conocimiento en programación?</span>
            </div>
            <div>
                <span>Su respuesta: </span>
                <span>${respuesta2}</span>
            </div>
        </div>
    `;

    contenedor.innerHTML += `
        <div class="pregunta">
            <div>
                <span>Pregunta 3: </span>
                <span>¿Por qué elegiste esta carrera?</span>
            </div>
            <div>
                <span>Su respuesta: </span>
                <span>${respuesta3}</span>
            </div>
        </div>
    `;
}