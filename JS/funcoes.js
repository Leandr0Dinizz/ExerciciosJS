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


function bhaskara(){
    var a;
    var b;
    var c;
    var delta;
    var x1;
    var x2;

    a = parseInt(document.getElementById("tpNum").value);
    b = parseInt(document.getElementById("tsNum").value);
    c = parseInt(document.getElementById("ttNum").value);

    //1º calcular delta
    delta = Math.pow(b,2) - 4 * a * c;

    //2º parte: Calcular x1 e x2 se o delta não for negativo

    if(delta >= 0){
        x1 = (-b + Math.sqrt(delta))/(2*a);
        x2 = (-b - Math.sqrt(delta))/(2*a);
    }else{    
        x1 = "Impossivel calcular o x1, pois o delta é negativo";
        x2 = "Impossível calcular o x2, pois o delta é negativo";
    }

//mostrar na tela

document.getElementById("resultado").innerHTML = "\nDelta: " + delta + "\n\nx1: " + x1 + "\n\nx2: " + x2;
}// fim do método   

function imp(){
    var num1; //declarando variável
    var num2;
    var res;
    var res2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);

    //coletando os dados dos campos
    //realizando o cálculo

    if(num1%2 == 0){
        res = "Par"
    }else{
        res = "Impar"
    }

    if(num2%2 == 1){
        res2 = "Ìmpar"
    }else{
        res2 = "Par"
    }    
    document.getElementById("resultado").innerHTML = " O número " + num1 + " é: " + res + "\n\n" + " O Número " + num2 + " é: " + res2;
}//fim do método

function posNeg(){
    var num1;
    var num2;
    var res1;
    var res2;

    num1 = parseInt(document.getElementById("tpNum").value);
    num2 = parseInt(document.getElementById("tsNum").value);
    
    //realizando calculo


    if(num1 >= 1){
        res1 = "Positivo"
    }else if
        (num1 == 0)
        res1 = "ZERO"
    else{
        res1 = "Negativo" 
    }

    if(num2 >= 1){
        res2 = "Positivo"
    }else if
        (num2 == 0)
        res2 = "ZERO"
    else{
        res2 = "Negativo" 
    }

    document.getElementById("resultado").innerHTML = "O número é: " + res1 + "\n\n" + num2 + " é: " + res2;
}//fim do método


function teDez(){
    var res =0;
    var res = "Números: "
}
for(i = 1; i <= 10; i++){
     res += "\n" + i;
}
document.getElementById("resultado").innerHTML = res
//fim do método}

function parVinte(){
    var res;
    var res = "Números pares";

    for(i = 1; i <= 20; i++){
        if(i % 2 == 0){
            res += "\n" + i;
        }
    }
    document.getElementById("resultado").innerHTML =  res
}//fim do método


function calCem(){
    var res = 0;


    for(i = 1; i <= 100; i++){
        res += i;
    
    }
    document.getElementById("resultado").innerHTML = res
}//fim do método
