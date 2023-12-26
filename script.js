function inicia() {
  var BtnAdicao = document.querySelector("#OperaçãoSoma");
  BtnAdicao.addEventListener("click", function () {
    document.querySelector("#Valor1").value = " ";
    document.querySelector("#Valor2").value = " ";
    document.querySelector("#resultadoEX").innerHTML = "Resultado";
    document.querySelector("#resultado").style.width = 20 + "vw";
    document.querySelector("#resultado").style.left = 15 + "%";
    document.querySelector("#resultadoEX").style.color = "white";
    document.querySelector("#txt1").style.display = "block";
    document.querySelector("#Valor1").style.display = "block";
    document.querySelector("#adi").style.display = "block";
    document.querySelector("#Valor2").style.display = "block";
    document.querySelector("#input1").style.display = "block";
    document.querySelector("#input2").style.display = "block";
    document.querySelector("#igualdade").style.display = "block";
    document.querySelector("#resultado").style.display = "block";
    document.querySelector(".aux").style.display = "block";
    document.querySelector("#Botoes").style.display = "none";
    var Acionamento = document.getElementById("Btncalcular");
    Acionamento.addEventListener("click", function () {
      var input1 = document.querySelector("#Valor1").value;
      var input2 = document.querySelector("#Valor2").value;
      var AUX1 = parseFloat(input1)
      var AUX2 = parseFloat(input2)
      if (isNaN(AUX2) || isNaN(AUX1)) {
        var Resultadotxt = document.querySelector("#resultadoEX");
        Resultadotxt.innerHTML = "ERRO!! valores incorretos.";
        Resultadotxt.style.color = "black";
        Resultadotxt.style.fontWeight = "bolder";
        document.querySelector("#resultado").style.width = 22 + "vw";
        document.querySelector("#resultado").style.left = 11 + "%";
      }
      else {
        var Resultado = AUX1 + AUX2;
        var Resultadotxt = document.querySelector("#resultadoEX");
        Resultadotxt.innerHTML = Resultado;
        Resultadotxt.style.color = "white"
        document.querySelector("#resultado").style.width = 20 + "vw";
        document.querySelector("#resultado").style.left = 15 + "%";
      }
    });
  });
  var BtnVoltar = document.querySelector("#volt");
  BtnVoltar.addEventListener("click", function () {
    document.querySelector("#txt1").style.display = "none"
    document.querySelector("#txt2").style.display = "none"
    document.querySelector("#txt4").style.display = "none"
    document.querySelector("#Valor1").style.display = "none"
    document.querySelector("#adi").style.display = "none"
    document.querySelector("#sub").style.display = "none"
    document.querySelector("#igualdade").style.display = "none"
    document.querySelector("#Valor2").style.display = "none"
    document.querySelector("#input1").style.display = "none"
    document.querySelector("#input2").style.display = "none"
    document.querySelector("#igualdade").style.display = "none"
    document.querySelector("#resultado").style.display = "none"
    document.querySelector(".aux").style.display = "none"
    document.querySelector("#Botoes").style.display = "block"
    document.querySelector("#txt3").style.display = "none";
    document.querySelector("#Mul").style.display = "none";
    document.querySelector("#Div").style.display = "none";
  });
  var Btnsub = document.querySelector("#OperaçãoSub");
  Btnsub.addEventListener("click", function () {
    document.querySelector("#Valor1").value = " ";
    document.querySelector("#Valor2").value = " ";
    document.querySelector("#resultadoEX").innerHTML = "Resultado";
    document.querySelector("#resultado").style.width = 20 + "vw";
    document.querySelector("#resultado").style.left = 15 + "%";
    document.querySelector("#resultadoEX").style.color = "white";
    document.querySelector("#txt1").style.display = "none";
    document.querySelector("#txt2").style.display = "block";
    document.querySelector("#adi").style.display = "none";
    document.querySelector("#sub").style.display = "block";
    document.querySelector("#Valor1").style.display = "block";
    document.querySelector("#Valor2").style.display = "block";
    document.querySelector("#input1").style.display = "block";
    document.querySelector("#input2").style.display = "block";
    document.querySelector("#igualdade").style.display = "block";
    document.querySelector("#resultado").style.display = "block";
    document.querySelector(".aux").style.display = "block";
    document.querySelector("#Botoes").style.display = "none";
    var Acionamento = document.getElementById("Btncalcular");
    Acionamento.addEventListener("click", function () {
      var input1 = document.querySelector("#Valor1").value;
      var input2 = document.querySelector("#Valor2").value;
      var AUX1 = parseFloat(input1)
      var AUX2 = parseFloat(input2)
      if (isNaN(AUX2) || isNaN(AUX1)) {
        var Resultadotxt = document.querySelector("#resultadoEX");
        Resultadotxt.innerHTML = "ERRO!! valores incorretos.";
        Resultadotxt.style.color = "black";
        Resultadotxt.style.fontWeight = "bolder";
        document.querySelector("#resultado").style.width = 22 + "vw";
        document.querySelector("#resultado").style.left = 11 + "%";
      }
      else {
        var Resultado = AUX1 - AUX2;
        var Resultadotxt = document.querySelector("#resultadoEX");
        Resultadotxt.innerHTML = Resultado;
        Resultadotxt.style.color = "white"
        document.querySelector("#resultado").style.width = 20 + "vw";
        document.querySelector("#resultado").style.left = 15 + "%";
      }
    });
  });
  var BtnMul = document.querySelector("#OperaçãoMul");
  BtnMul.addEventListener("click", function () {
    document.querySelector("#Valor1").value = " ";
    document.querySelector("#Valor2").value = " ";
    document.querySelector("#resultadoEX").innerHTML = "Resultado";
    document.querySelector("#resultado").style.width = 20 + "vw";
    document.querySelector("#resultado").style.left = 15 + "%";
    document.querySelector("#resultadoEX").style.color = "white";
    document.querySelector("#txt1").style.display = "none";
    document.querySelector("#txt2").style.display = "none";
    document.querySelector("#txt3").style.display = "block";
    document.querySelector("#adi").style.display = "none";
    document.querySelector("#Mul").style.display = "block";
    document.querySelector("#sub").style.display = "none";
    document.querySelector("#Valor1").style.display = "block";
    document.querySelector("#Valor2").style.display = "block";
    document.querySelector("#input1").style.display = "block";
    document.querySelector("#input2").style.display = "block";
    document.querySelector("#igualdade").style.display = "block";
    document.querySelector("#resultado").style.display = "block";
    document.querySelector(".aux").style.display = "block";
    document.querySelector("#Botoes").style.display = "none";
    var Acionamento = document.getElementById("Btncalcular");
    Acionamento.addEventListener("click", function () {
      var input1 = document.querySelector("#Valor1").value;
      var input2 = document.querySelector("#Valor2").value;
      var AUX1 = parseFloat(input1)
      var AUX2 = parseFloat(input2)
      if (isNaN(AUX2) || isNaN(AUX1)) {
        var Resultadotxt = document.querySelector("#resultadoEX");
        Resultadotxt.innerHTML = "ERRO!! valores incorretos.";
        Resultadotxt.style.color = "black";
        Resultadotxt.style.fontWeight = "bolder";
        document.querySelector("#resultado").style.width = 22 + "vw";
        document.querySelector("#resultado").style.left = 11 + "%";
      }
      else {
        var Resultado = AUX1 * AUX2;
        var Resultadotxt = document.querySelector("#resultadoEX");
        Resultadotxt.innerHTML = Resultado;
        Resultadotxt.style.color = "white"
        document.querySelector("#resultado").style.width = 20 + "vw";
        document.querySelector("#resultado").style.left = 15 + "%";
      }
    });
  });
  var BtnDiv= document.querySelector("#OperaçãoDiv");
  BtnDiv.addEventListener("click", function () {
    document.querySelector("#Valor1").value = " ";
    document.querySelector("#Valor2").value = " ";
    document.querySelector("#resultadoEX").innerHTML = "Resultado";
    document.querySelector("#resultado").style.width = 20 + "vw";
    document.querySelector("#resultado").style.left = 15 + "%";
    document.querySelector("#resultadoEX").style.color = "white";
    document.querySelector("#txt1").style.display = "none";
    document.querySelector("#txt2").style.display = "none";
    document.querySelector("#txt3").style.display = "none";
    document.querySelector("#txt4").style.display = "block";
    document.querySelector("#adi").style.display = "none";
    document.querySelector("#Mul").style.display = "none";
    document.querySelector("#sub").style.display = "none";
    document.querySelector("#Div").style.display = "block";
    document.querySelector("#Valor1").style.display = "block";
    document.querySelector("#Valor2").style.display = "block";
    document.querySelector("#input1").style.display = "block";
    document.querySelector("#input2").style.display = "block";
    document.querySelector("#igualdade").style.display = "block";
    document.querySelector("#resultado").style.display = "block";
    document.querySelector(".aux").style.display = "block";
    document.querySelector("#Botoes").style.display = "none";
    var Acionamento = document.getElementById("Btncalcular");
    Acionamento.addEventListener("click", function () {
      var input1 = document.querySelector("#Valor1").value;
      var input2 = document.querySelector("#Valor2").value;
      var AUX1 = parseFloat(input1)
      var AUX2 = parseFloat(input2)
      if (isNaN(AUX2) || isNaN(AUX1) || AUX2===0 ) {
        var Resultadotxt = document.querySelector("#resultadoEX");
        Resultadotxt.innerHTML = "ERRO!! valores incorretos.";
        Resultadotxt.style.color = "black";
        Resultadotxt.style.fontWeight = "bolder";
        document.querySelector("#resultado").style.width = 22 + "vw";
        document.querySelector("#resultado").style.left = 11 + "%";
      }
      else {
        var Resultado = AUX1 / AUX2;
        var Resultadotxt = document.querySelector("#resultadoEX");
        Resultadotxt.innerHTML = Resultado;
        Resultadotxt.style.color = "white"
        document.querySelector("#resultado").style.width = 20 + "vw";
        document.querySelector("#resultado").style.left = 15 + "%";
      }
    });
  });
}

window.addEventListener("load", inicia);