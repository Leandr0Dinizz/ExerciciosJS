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


function exercicio1(){
    var res =0;
    var res = "Números: "
}
for(i = 1; i <= 10; i++){
     res += "\n" + i;
}
document.getElementById("resultado").innerHTML = res
//fim do método}

function exercicio2(){
    var res;
    var res = "Números pares";

    for(i = 1; i <= 20; i++){
        if(i % 2 == 0){
            res += "\n" + i;
        }
    }
    document.getElementById("resultado").innerHTML =  res
}//fim do método


function exercicio3(){
    var res = 0;


    for(i = 1; i <= 100; i++){
        res += i;
    
    }
    document.getElementById("resultado").innerHTML = res
}//fim do método

function exercicio4(){
    var vet = [];
    var posicao = 0;
 
    for(i = 1; i < 51; i++){
        if(i % 5 == 0){
            vet[posicao] = i;
            posicao += 1;
        }
    }
    document.getElementById("resultado").innerHTML = vet;
}//fim do método

function exercicio5() {
    var numero = parseInt(document.getElementById("tpNum").value);
    var res = "Números de 1 até " + numero + ":";
 
    for (var i = 1; i <= numero; i++) {
        res += "\n" + i;
    }
    document.getElementById("resultado").innerHTML = res;
}//fim do método

function exercicio6() {
    var numero = parseInt(document.getElementById("tpNum").value);
    var soma = 0;
 
    for (var i = 1; i <= numero; i++) {
        soma += i;
    }
    document.getElementById("resultado").innerHTML = "A soma dos números de 1 até " + numero + " é: " + soma;
}//fim do método

function exercicio7() {
    var res = "Números primos de 1 a 20: ";
 
    for (var i = 2; i <= 20; i++) {
        if (isPrimo(i)) {
            res += i + " ";
        }
    }
    document.getElementById("resultado").innerHTML = res;
}
 
function isPrimo(numero) {
    for (var j = 2; j < numero; j++) {
        if (numero % j === 0) {
            return false;
        }
    }
    return numero !== 1;
}//fim método

function exercicio8() {
    var numero = parseInt(document.getElementById("tpNum").value);
    var divisores = 0;
   
    for(var i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            divisores++;
        }
    }    
    
    if (divisores == 2) {
        document.getElementById('resultado').innerHTML = 'É primo';
    } else {
        document.getElementById('resultado').innerHTML = 'Não é primo';
    }
}//fim do método

function exercicio9(){
    var numero = parseInt(document.getElementById('tpNum').value);
    var resultado = 1;
  
    for(var i = 1 ; i<=numero ; i++)
     resultado *= i;
  
     document.getElementById('resultado').innerHTML = resultado;
}//fim do método

function exercicio10(){
    var fibonacci = [];
    fibonacci[0] = 1;
    fibonacci[1] = 1;

    for(i = 2; i < 10; i++){
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }

    document.getElementById("resultado").innerHTML = fibonacci;
}//Fim do método

function exercicio11(){
    var num;
    var numPar = [];
    var numImpar = [];
    var posicaoPar = 0;
    var posicaoImpar = 0;

    num = parseInt(document.getElementById("tpNum").value)

   
    for(i = 1; i < num + 1; i++){
        if(i == 1){
            numImpar[0] = i;
            posicaoImpar = 1;
        }
        else if(i % 2 == 0){
            numPar[posicaoPar] = i;
            posicaoPar += 1;
        }
        else{
            numImpar[posicaoImpar] = i;
            posicaoImpar += 1;
        }
    }

    if(num < 1){
        res = "Erro!! informe um valor maior que 01"
        document.getElementById("resultado").innerHTML = res
    }
    else{
        document.getElementById("resultado").innerHTML = "Número Pares: \n" + numPar + "\n Número Ímpares: \n" + numImpar;
    }
}//Fim do método

function exercicio12(){
    var num;
    var primo = [];
    var posicao = 0;

    num = parseInt(document.getElementById("tpNum").value)

    for(i = 1; i < num + 1; i++){
        
        if(i == 2 || i == 3 || i == 5 || i == 7){
            primo[posicao] = i;
        }
        else if(num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0){
            continue
        }
        else{
            primo[posicao] = i;
        }
        posicao++
    }

    if(num < 2){
        document.getElementById("resultado").innerHTML = "ERRO!!! Informe um número maior que 1";
    }
    else{
        document.getElementById("resultado").innerHTML = primo;
    }
    
}//Fim do método


function exercicio13(){
    var num;
    var divisores = 0;

    num = parseInt(document.getElementById("tpNum").value)

    for(i = 0; i < num; i++){
        if(num % i == 0){
            divisores += i;
        }
    }

    if(divisores == num){
        document.getElementById("resultado").innerHTML = "Número Perfeito"
    }
    else{
        document.getElementById("resultado").innerHTML = "Não é número perfeito"
    }
    
}//Fim do método