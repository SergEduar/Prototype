var meta = 8; // Valor inicial de la meta establecida por el usuario

function mostrarMeta() {
  document.getElementById("meta-input").value = meta;
}

function cambiarMeta() {
  var nuevaMeta = parseFloat(document.getElementById("meta-input").value);
  if (!isNaN(nuevaMeta)) {
    meta = nuevaMeta;
    alert("La meta se ha actualizado correctamente.");
  } else {
    alert("Ingrese un número válido para la meta.");
    mostrarMeta(); // Restaurar el valor anterior de la meta en el campo de entrada
  }
}

function calcularPromedio() {
  var inputElements = document.getElementsByClassName("input-field");
  var numeros = [];

  for (var i = 0; i < inputElements.length; i++) {
    var inputValue = parseFloat(inputElements[i].value);

    if (!isNaN(inputValue)) {
      numeros.push(inputValue);
    }
  }

  if (numeros.length > 0) {
    var promedioCalculado = calcularPromedioFromArray(numeros);
    var mensaje = "El promedio de los datos ingresados es: " + promedioCalculado.toFixed(2);
    if (promedioCalculado >= meta) {
      mensaje += " (Has alcanzado la meta)";
    } else {
      mensaje += " (No has alcanzado la meta)";
    }
    document.getElementById("resultado").innerHTML = mensaje;
  } else {
    document.getElementById("resultado").innerHTML = "Ingrese al menos un número válido.";
  }
}

function calcularPromedioFromArray(numeros) {
  var suma = 0;
  for (var i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  var promedio = suma / numeros.length;
  return promedio;
}


mostrarMeta(); // Mostrar la meta inicial al cargar la página
