function conversao() {
  var temperatura = parseFloat(document.getElementById("temperatura").value);
  var tempOrigem = document.getElementById("tempOrigem").value;
  var tempdest = document.getElementById("tempdest").value;
  var tempConvertida;

  if (tempOrigem === "°C") {
    if (tempdest === "°F") {
      tempConvertida = temperatura * (9 / 5) + 32;
    } else if (tempdest === "°K") {
      tempConvertida = temperatura + 273.15;
    } else {
      tempConvertida = temperatura;
    }
  } else if (tempOrigem === "°F") {
    if (tempdest === "°C") {
      tempConvertida = ((temperatura - 32) * 5) / 9;
    } else if (tempdest === "°K") {
      tempConvertida = ((temperatura + 459.67) * 5) / 9;
    } else {
      tempConvertida = temperatura;
    }
  } else if (tempOrigem === "°K") {
    if (tempdest === "°C") {
      tempConvertida = temperatura - 273.15;
    } else if (tempdest === "°F") {
      tempConvertida = (temperatura * 9) / 5 - 459.67;
    } else {
      tempConvertida = temperatura;
    }
  }

  var cor;

  if (tempOrigem === "°C") {
    if (temperatura < 10) {
      cor = "#3600F5";
    } else if (temperatura < 20) {
      cor = "#0068FA";
    } else if (temperatura < 30) {
      cor = "#00FFE6";
    } else if (temperatura < 40) {
      cor = "#00FF40";
    } else if (temperatura < 50) {
      cor = "#83FA00";
    } else if (temperatura < 60) {
      cor = "#C4F500";
    } else if (temperatura < 70) {
      cor = "#FADC00";
    } else if (temperatura < 80) {
      cor = "#FAAF01";
    } else if (temperatura < 90) {
      cor = "#FF8100";
    } else if (temperatura < 100) {
      cor = "#FA4400";
    } else if (temperatura >= 100) {
      cor = "#FF0000";
    }
  } else if (tempOrigem === "°F") {
    if (temperatura < 50) {
      cor = "#3600F5";
    } else if (temperatura < 68) {
      cor = "#0068FA";
    } else if (temperatura < 86) {
      cor = "#00FFE6";
    } else if (temperatura < 104) {
      cor = "#00FF40";
    } else if (temperatura < 122) {
      cor = "#83FA00";
    } else if (temperatura < 140) {
      cor = "#C4F500";
    } else if (temperatura < 158) {
      cor = "#FADC00";
    } else if (temperatura < 176) {
      cor = "#FAAF01";
    } else if (temperatura < 194) {
      cor = "#FF8100";
    } else if (temperatura < 212) {
      cor = "#FA4400";
    } else if (temperatura >= 212) {
      cor = "#FF0000";
    }
  } else if (tempOrigem === "°K") {
    if (temperatura < 283) {
      cor = "#3600F5";
    } else if (temperatura < 293) {
      cor = "#0068FA";
    } else if (temperatura < 303) {
      cor = "#00FFE6";
    } else if (temperatura < 313) {
      cor = "#00FF40";
    } else if (temperatura < 323) {
      cor = "#83FA00";
    } else if (temperatura < 343) {
      cor = "#C4F500";
    } else if (temperatura < 353) {
      cor = "#FADC00";
    } else if (temperatura < 363) {
      cor = "#FAAF01";
    } else if (temperatura < 373) {
      cor = "#FF8100";
    } else if (temperatura < 383) {
      cor = "#FA4400";
    } else if (temperatura >= 393) {
      cor = "#FF0000";
    }
  }
  document.body.style.transition = "background-color 0.5s ease";
  document.body.style.background = cor;

  var resultado = (document.getElementById("resultado").innerHTML =
    temperatura + tempOrigem + " = " + tempConvertida.toFixed(1) + tempdest);

  console.log(resultado);
}
