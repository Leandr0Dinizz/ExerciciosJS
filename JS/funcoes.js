function somar(){
    var num1; //declarando variável
    var num2;
    var res;
    //coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //realizando o cálculo
    res = num1 + num2;
    document.getElementById("resultado").innerHTML = "A soma dos números é: " + res;
}//fim do método 


function subtrair(){
    var num1; //declarando variável
    var num2;
    var res;
    //coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //realizando o cálculo
    res = num1 - num2;
    document.getElementById("resultado").innerHTML = "A subtração dos números é: " + res;
}//fim do método 

function multiplicar(){
    var num1; //declarando variável
    var num2;
    var res;
    //coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //realizando o cálculo
    res = num1 * num2;
    document.getElementById("resultado").innerHTML = "A multiplicação dos números é: " + res;
}//fim do método

function dividir(){
    var num1; //declarando variável
    var num2;
    var res;
    //coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //realizando o cálculo
    res = num1 / num2;
    if(num2 <=0){
        res = "impossível dividr por números menores ou iguais a zero!";
    }else{
        res = num1 / num2;    
    }
    document.getElementById("resultado").innerHTML = "A divisão dos números é: " + res;
}//fim do método 

function tabuada(){
    var num1;
    var num2;

    num1 = parseFloat(document.getElementById("tpNum").value);
    num2 = parseFloat(document.getElementById("tsNum").value);

    var resNum1 = "Tabuada do " + num1;
    var resNum2 = "Tabuada do " + num2;

   

    for(i = 0; i <= 10; i++){
        resNum1 += "\n" + num1 + " * " + i + " = " + (num1 * i);
        resNum2 += "\n" + num2 + " * " + i + " = " + (num2 * i); 

    }

    document.getElementById("resultado").value = "\n" + resNum1 + "\n\n" + resNum2;
}//fim do método

function potencia(){
    var num1; //declarando variável
    var num2;
    var res;
    //coletando os dados dos campos
    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    //realizando o cálculo
    res = Math.pow (num1 , num2);
    document.getElementById("resultado").innerHTML = "A potência dos números é: " + res;
}//fim do método

function raiz(){
    var num1; //declarando variável
    var num2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    //coletando os dados dos campos
    //realizando o cálculo
    resNum1 = "Raiz de "+ num1 + " é " + Math.sqrt(num1);
    resNum2 = "Raiz de "+ num2 + " é " + Math.sqrt(num2);
    document.getElementById("resultado").innerHTML = "O resultado é" + "\n" + resNum1 + "\n" + resNum2;
}//fim do método

function imp(){
    var num1; //declarando variável
    var num2;
    var res;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    //coletando os dados dos campos
    //realizando o cálculo
    document.getElementById("resultado").innerHTML = "O número é " + total + 'é' + res;
}//fim do método


