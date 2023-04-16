function validarFormulario() {
    //Obtenemos los valores de los campos de texto
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var edad = document.getElementById('edad').value;
  
    //Verificamos que los campos no estén vacíos
    if(nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
       alert('Debes escribir tu nombre');
       return false;
    }
    if(apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
       alert('Debes escribir tu apellido');
       return false;
    }
  
    //Verificamos que la edad sea un número
    if(isNaN(edad)) {
       alert('La edad debe ser un número');
       return false;
    }
  
    //Verificamos que la edad sea mayor que cero
    if(edad <= 0) {
       alert('La edad debe ser mayor que cero');
       return false;
    }
  
    //Si todo esta correcto
    return true;
  }
  const form = document.querySelector('#form-persona');
const nombreInput = document.querySelector('#nombre');
const edadInput = document.querySelector('#edad');
const correoInput = document.querySelector('#correo');
const telefonoInput = document.querySelector('#telefono');

//Agregar evento de escucha al enviar el formulario
form.addEventListener('submit', (event) => {
  event.preventDefault(); //Prevenir que se recargue la página
  
  //Capturar valores del formulario
  const nombre = nombreInput.value;
  const edad = parseInt(edadInput.value);
  const correo = correoInput.value;
  const telefono = telefonoInput.value;
  
  //Mostrar valores en la consola
  console.log('Nombre:', nombre);
  console.log('Edad:', edad);
  console.log('Correo:', correo);
  console.log('Teléfono:', telefono);
});
function validarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var motivo = document.getElementById("motivo").value.trim();
    var descripcion = document.getElementById("descripcion").value.trim();

    // Validar si los campos están vacíos
    if (nombre == "" || email == "" || motivo == "" || descripcion == "") {
        alert("Por favor complete todos los campos");
        return false;
    }

    // Validar el formato del correo electrónico
    var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!regexEmail.test(email)) {
        alert("Por favor ingrese un email válido");
        return false;
    }

    // Todo está correcto, enviar el formulario
    alert("Formulario enviado correctamente");
    return true;
}

