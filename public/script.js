const formulario = document.getElementById('formulario');

function validarBootstrap(){
  formulario.classList.add('was-validated');
  }

/*function aceptarCookies() {
  // Aquí puedes agregar tu lógica para guardar la aceptación de cookies
  // Por ejemplo, puedes utilizar cookies o almacenamiento local (localStorage)
  // Una vez que el usuario acepta las cookies, puedes ocultar la notificación
  const cookie = document.getElementById('cookieNotification');
  cookie.classList.add('visually-hidden');
}*/




formulario.addEventListener('submit', (e) => {
  e.preventDefault();



  const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/;
  const tlfregex = /^\d{9}$/;
  const emailregex= /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//=================================> Sección de datos personales <================================================================
     // Obtiene el valor del campo del nombre
     const nombre = document.getElementById('nombre').value;
     // Valida el nombre utilizando una expresión regular
     if (!nombreRegex.test(nombre)) {
      alert('El nombre es inválido. Por favor, introduce solo letras y espacios.');
      document.getElementById('nombre');
      return
    }
  
   // Obtiene el valor del campo del apellido
   const apellido = document.getElementById('apellido').value;
   // Valida el nombre utilizando una expresión regular
   if (!nombreRegex.test(apellido)) {
     alert('El apellido es inválido. Por favor, introduce solo letras y espacios.');
     document.getElementById('apellido');
     return;
   }

   

// Validar que los primeros dígitos sean numéricos y estén completos

const telefono = document.getElementById('telefono').value;
const confirmartelefono = document.getElementById('confirmartelefono').value;

if (telefono !== confirmartelefono) {
  alert('Los teléfonos no coinciden');
  // Aquí deberías enfocar el campo de confirmartelefono
  document.getElementById('confirmartelefono').focus();
  return;
}



   const correo = document.getElementById('correo').value;
   if (!emailregex.test(correo)) {
     alert('Por favor, introduce un correo válido.');
     document.getElementById('correo');
     return;
   }

   const confcorreo = document.getElementById('confcorreo').value;
   
   if (correo!==confcorreo){
    alert('Los correos no coinciden');
    document.getElementById('confcorreo');
    return;
   }
  
   const nickname = document.getElementById('nickname').value;
   const pais = document.getElementById('pais').value;
   const epicuser = document.getElementById('epicuser').value;

  //

  const formData = new FormData();
  //Datos personales
  formData.append('nombre', nombre); 
  formData.append('apellido', apellido); 
  formData.append('nickname', nickname); 
  formData.append('telefono', telefono); 
  formData.append('correo', correo); 
  formData.append('pais', pais);
  formData.append('epicuser', epicuser);
 

  // ===============> La animación de "cargando" <==============
// Muestra el overlay de carga
//document.getElementById('overlay').style.display = 'flex';

// Simulación de retraso de envío (solo con fines de demostración)
setTimeout(function() {
  // Oculta el overlay de carga
  //document.getElementById('overlay').style.display = 'none';

  // Envío del formulario
  enviarFormularioReal(formData);
}, 30000);
  
// ========> Envío los datos al servidor <=========
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/enviar', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert(xhr.responseText);
      formulario.reset();
    }
  };
  xhr.send(formData);
});
