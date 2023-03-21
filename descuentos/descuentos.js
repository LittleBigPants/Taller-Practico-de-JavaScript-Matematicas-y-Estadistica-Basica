const precio = document.getElementById("precio");
const cupon = document.getElementById("cupon");
const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");
const cuponesLista = [];
let descuento;
const coupon = cupon.value
const precio2 = precio.value

class cupones {
    constructor(nombre, porcentaje){
    this.nombre = nombre;
    this.porcentaje = porcentaje;
    }
   
};


button.addEventListener("click",calcular);

cuponesLista.push (new cupones("cupon-pequeño", 25));
cuponesLista.push (new cupones("cupon-mediano", 50));
cuponesLista.push (new cupones("cupon-grande", 75));


function calcular (nombre) {
    function encontarCupon(c){
    return c.nombre = nombre;
}
const c = cuponesLista.find(encontarCupon)
  if (c) {
    const r = (precio2 * (100 - c.porcentaje)/100)
    console.log(r)
    resultado.innerHTML = "$ " + r
  } else {
    resultado.innerHTML = "error"
  }
}
    