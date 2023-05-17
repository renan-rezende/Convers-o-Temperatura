function conversao() {
  var temperatura = parseFloat(document.getElementById("temperatura").value);
  var tempOrigem = document.getElementById("tempOrigem").value;
  var tempdest = document.getElementById("tempdest").value;
  var tempConvertida;

  if (tempOrigem === "celsius") {
    if (tempdest === "fahrenhiete") {
      tempConvertida = temperatura * (9 / 5) + 32;
    } else if (tempdest === "kelvin") {
      tempConvertida = temperatura + 273;
    } else {
      tempConvertida = temperatura;
    }
  } else if (tempOrigem === "fahrenhiete") {
    if (tempdest === "celsius") {
      tempConvertida = ((temperatura - 32) * 5) / 9;
    } else if (tempdest === "kelvin") {
      tempConvertida = ((temperatura + 459.67) * 5) / 9;
    } else {
      tempConvertida = temperatura;
    }
  } else if (tempOrigem === "kelvin") {
    if (tempdest === "celsius") {
      tempConvertida = temperatura - 273.15;
    } else if (tempdest === "fahrenhiete") {
      tempConvertida = (temperatura * 9) / 5 - 459.67;
    } else {
      tempConvertida = temperatura;
    }
  }

  document.getElementById("resultado").innerHTML =
    temperatura +
    " " +
    tempOrigem +
    " é igual a: " +
    tempConvertida.toFixed(2) +
    " " +
    tempdest;
}
