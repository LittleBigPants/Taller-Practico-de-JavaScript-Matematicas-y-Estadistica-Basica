
console.group("Cuadrado");

const ladoCuadrado =5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});


function calcularCuadrado(lado) {
    return{
        perimetro: lado * 4,
        area: lado * lado,
    };
}

console.groupEnd("Cuadrado");

console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,

});


function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    };
}

function calcularTrianguloAlturaIsoseles(lado1, base) {
     if (lado1 == base) {
        console.warn("esto no es un triangulo isoseles");
     } else {
        // h = raizcuadrada(lado1**2 - (b**2)/4)
        return Math.sqrt(Math.pow(lado1, 2) - Math.pow(base, 2)/4);
    
     };
}

function calcularTrianguloAlturaEscaleno(base, lado2 , lado3) {

    const semiPerimetro = (base + lado2 + lado3)/2

    return (2/base) * Math.sqrt(semiPerimetro * (semiPerimetro - base) * (semiPerimetro - lado2) * (semiPerimetro - lado3))
    
}


console.groupEnd("Triangulo");


console.group("Circulo");

const radioCirculo = 3;
const diametroCirculo = radioCirculo *2;
const pi = 3.31415;

const circunferencia = diametroCirculo * pi;
const areaCirculo = (radioCirculo * radioCirculo) * pi;

console.log({
    radioCirculo,
    diametroCirculo,
    pi,
    circunferencia,
    areaCirculo,

})

function calcularCirculo (radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    
    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
    };
}

console.groupEnd("Circulo"); 


