const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const btnSuma = document.querySelector('.btnSuma');
const btnResta = document.querySelector('.btnResta');
const btnMultiplicacion = document.querySelector('.btnMultiplicacion');
const btnDivision = document.querySelector('.btnDivision');
const result = document.querySelector('.spanResult');
const btnLimpiar = document.querySelector('.btnLimpiar');

eventoClick(btnResta);
eventoClick(btnSuma);
eventoClick(btnMultiplicacion);
eventoClick(btnDivision);
eventoClick(btnLimpiar);



function eventoClick(boton){
    boton.addEventListener("click", (e) => {
        e.preventDefault()
        let num1 = parseInt(input1.value);
        let num2 = parseInt(input2.value);
        switch(boton){
            case btnSuma:
                let suma = num1 + num2;
                mostrarResultado(suma, " + ");
                break;
            case btnResta:
                let resta = num1 - num2;
                mostrarResultado(resta, " - ");
                break;
            case btnMultiplicacion:
                let multiplicacion = num1 * num2;
                mostrarResultado(multiplicacion, " * ");
                break;
            case btnDivision:
                let division = num1 / num2;
                mostrarResultado(division, " / ");
                break;
            case btnLimpiar:
                input1.value = "";
                input2.value = "";
                result.innerHTML = "";
                break;
        }
    })
}
function mostrarResultado(resultado, parametro){
    if(resultado >= 0 || resultado <= 0){
        result.innerHTML = input1.value + parametro + input2.value + " = " + resultado;
    }else if(input1.value == "" || input2.value == ""){
        result.innerHTML = "Introduzca un valor";
    }
}

