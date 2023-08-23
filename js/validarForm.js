function validacion() {
  if(valor = document.getElementById("nombreTutor").value,
  valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
    nombreTutor.focus();
    alert('Ingrese el nombre de Madre/Padre/Tutor');
    return false;
  }
  else if (valor1 = document.getElementById("nombreAlumno").value,
   valor1 == null || valor1.length == 0 || /^\s+$/.test(valor1)) {
    nombreAlumno.focus();
    alert('Ingrese el nombre del Alumno');
    return false;
  }
  else if (valor2 = document.getElementById("email").value,
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valor2) ) {
    email.focus();
    alert('Ingrese un E-mail válido');
    return false;
  }
  else if (valor3 = document.getElementById("telefono").value,
  !(/^\d{7,14}$/.test(valor3)) ) {
    telefono.focus();
    alert('Ingrese un Teléfono válido - Sólo números, sin espacios.');
    return false;
  }
  else if (valor4 = document.getElementById("mensaje").value,
  valor4 == null || valor4.length == 0 || /^\s+$/.test(valor4)) {
    mensaje.focus();
    alert('Ingrese un Mensaje');
    return false;
  }
  return true;
}