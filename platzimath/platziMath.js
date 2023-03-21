// class PlatziMath {
//   static esPar() {}
//   static esImpar() {}
//   static calcularMedian() {}
// }

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let arrayDesordenado = [20, 50, 10, 30, 40, 10];
let arrayConMismosElementos = [1, 1, 1, 1, 2, 2, 2, 3, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 9, 8, 5, 6]
let arrayConMismosElementos2 = ["a", "a", "a", "b", "b", ,"b" , "b", "c"]
// suma de todos los elementos de una array con reduce y saque el promedio
 
function promedio (arr) {

// for (let i = 0; i < arr.length; i++){
//     // lo de abajo es igual a total = total +arr[i]
//     total += array[i]
// }

    const total = arr.reduce ((acc, currentValue) => acc + currentValue, 0);


   const promedioSuma = total / arr.length

    console.log(promedioSuma)
}
promedio (array);

// para saber si un array es impar o par

function esImparOpar(arr) {
    if (arr.length % 2 == 0){
        return true
    } else if(Math.abs(arr.length % 2 == 1)){
        return  false
    } else {
        console.log("error")
    }
}

esImparOpar(array);

// calcular mediana

function calcularMediana(arr) {
       // ya no importa si esta desordenada 
    const ListaDesordenada = ordenarLista(arr);

   
    const listaEsPar = esImparOpar(arr);

    if(listaEsPar == true) {
        
        const MitadListaPaR1 = (arr.length / 2);
       
        const MitadListaPaR2= (arr.length / 2) -1;
       
        // arr[MitadListaPaR1]
       
        // arr[MitadListaPaR2]
       
        promedio([arr[MitadListaPaR1], arr[MitadListaPaR2]]);

    } else{
       const indexMitadListaImpar = Math.floor(arr.length / 2);
       console.log(indexMitadListaImpar);
       console.log(arr[indexMitadListaImpar]);
    }
}

calcularMediana(array2);

// ordenar lista desordenada

function ordenarLista(arrdesordenado) {
    // function ordenarListaSort(valorAcumulado, nuevoValor) {
    // //  if (valorAcumulado > nuevoValor) {
    // //     return 1;
    // //  } else if (valorAcumulado == nuevoValor){
    // //     return 0;
    // //  } else if (valorAcumulado < nuevoValor){
    // //     return -1;
    // //  }
    //     // los dos codigos son iguales muy xd
    //     return valorAcumulado - nuevoValor;
    //     // return 5-10=-5;
    //     // return 5-5=-0;
    //     // return 10-5=-5;
        
    // }

    // const arr = arrdesordenado.sort(ordenarListaSort);

    //la manera mas corta de hacer este embrollo,
    const arr = arrdesordenado.sort((a,b) => a-b);
    

    console.log(arr)
}

ordenarLista(arrayDesordenado);

calcularMediana(arrayDesordenado);

// calcular la moda

const histogram = arr => {
    const obj = new Object();
    arr.forEach(element => !obj[element] ? obj[element] = 1 : obj[element]++);
    return obj;
};
console.log(histogram(arrayConMismosElementos));
// otra forma de calcular la moda
function calcularModa (arr) {
    const listaCount = {};

    for (let i= 0; i < arr.length; i++){
    const element = arr[i];
    
        if(listaCount[element]) {
        listaCount[element] += 1;
    } else {
        listaCount[element] = 1;
    }
}
    // console.log(listaCount)
// transformar obj en arrays y ordenar estas lista LPM

const listaArray = Object.entries(listaCount);
    console.log({listaCount, listaArray});
    //en ordenarListaBidimencional podes poner como segundo argumento el index
    function ordenarListaBidimencional(arrdesordenado ) {

        const arr = arrdesordenado.sort((a,b) => a[1]-b[1]);
        
    
        console.log(arr)
    }
    
    ordenarListaBidimencional(listaArray)
    const listaOrdenadaMaxnumber = listaArray[listaArray.length -1];
    console.log(listaOrdenadaMaxnumber);
    console.log("la moda es: " + listaOrdenadaMaxnumber[0])

}

calcularModa(arrayConMismosElementos);

//transformar objetos y ponerlos en un arrray

 function solution(obj) {
    const array = Object.entries(obj).map(([id, name]) => ({ id,  name }));
  return array
}

const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
  };
  
  solution(obj);








