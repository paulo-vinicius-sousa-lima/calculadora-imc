function calcularIMC(event) {
    event.preventDefault(); 

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Coloque valores válidos");
        return;
    }

    let imc = peso / (altura * altura);
    let resultado = "Seu IMC é " + imc.toFixed(2) + " - " + classificarIMC(imc);

    document.getElementById("resultado").innerHTML = resultado;
}

function classificarIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    else if (imc < 24.9) return "Peso normal";
    else if (imc < 29.9) return "Sobrepeso";
    else if (imc < 34.9) return "Obesidade grau 1";
    else if (imc < 39.9) return "Obesidade grau 2";
    else return "Obesidade grau 3 (mórbida)";
}
