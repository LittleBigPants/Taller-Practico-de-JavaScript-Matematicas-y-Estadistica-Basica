 console.log(salarios);

// Analisis personal 

function encontrarPersona (personaEnBusqueda) {
    
    return salarios.find(persona => persona.name == personaEnBusqueda)

}

function salariosLista (nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    

    const salarios =  trabajos.map(function(element){
      return element.salario;
    })
    return salarios
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
  
    const salarios = trabajos.map(function (elemento) {
      return elemento.salario;
    });
  
    const medianaSalarios = PlatziMath.calcularMediana(salarios);
  
    // console.log(medianaSalarios);
    return medianaSalarios;
  }
  

function ProyeccionPorPersona (nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    
     let porcentajesDeCrecimiento = [];

     for (let i =1; i < trabajos.length; i++) {
         const salarioActual = trabajos[i].salario;
         const salarioAnterior = trabajos[i - 1].salario;

        const crecimiento = salarioActual - salarioAnterior;
        const porcentajeDeCrecimiento = (crecimiento / salarioAnterior);
        
        
        porcentajesDeCrecimiento.push(porcentajeDeCrecimiento)
     }
     

     const MedianaPorcentajeCrecimiento = PlatziMath.calcularMediana (porcentajesDeCrecimiento)

   

     const ultimoSalario = trabajos[trabajos.length -1 ].salario;
     const nuevoSalario = (ultimoSalario * MedianaPorcentajeCrecimiento) + ultimoSalario

    return nuevoSalario
}

// analisis empresarial

const company = () => {
    const empresas = {};

    salarios.forEach(element => element.trabajos.forEach(element => {
            if (!empresas[element.empresa]) {
                empresas[element.empresa] = {};
            }
            if  (!empresas[element.empresa][element.year]) {
                empresas[element.empresa][element.year] = [];
                
            }
            empresas[element.empresa][element.year].push(element.salario);
        }));
    return empresas;
}

console.log(company());


const empresas = {};

for (persona of salarios) {
    for(trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {}
        }
        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = []
        }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);

       
    }
    
}
console.log(empresas)



function medianaEmpresaYear (nombre, year) {
    if (!empresas[nombre]){
        console.warn("la empresa no existe");
        return;
    } else if (!empresas[nombre][year]) {
        console.warn("la empresa no dio salario ese año");
    } else {
        return PlatziMath.calcularMediana(empresas[nombre][year]);
        
    }
    
   
}


function proyeccionPorEmpresa (nombre) {

    if (!empresas[nombre]){
        console.warn("la empresa no existe");
        return;
    } else {
      const empresaYears =  Object.keys(empresas[nombre]);

      const  listaMedianaYears = empresaYears.map((year) => {
        return medianaEmpresaYear(nombre, year);
      });
      let porcentajesDeCrecimiento = [];

      for (let i =1; i < listaMedianaYears.length; i++) {
          const salarioActual = listaMedianaYears[i];
          const salarioAnterior = listaMedianaYears[i - 1];
 
         const crecimiento = salarioActual - salarioAnterior;
         const porcentajeDeCrecimiento = (crecimiento / salarioAnterior);
         
         console.log(porcentajeDeCrecimiento);
         porcentajesDeCrecimiento.push(porcentajeDeCrecimiento)
      }
        console.log(porcentajesDeCrecimiento)
 
        const MedianaPorcentajeCrecimiento = PlatziMath.calcularMediana (porcentajesDeCrecimiento)

      
        const ultimaMediana = listaMedianaYears[listaMedianaYears.length -1 ];
        const nuevaMediana = (ultimaMediana * MedianaPorcentajeCrecimiento) + ultimaMediana

        return nuevaMediana;

    }
}

// analisis general 

function medianaGeneral () {
    const nombres = salarios.map(persona => persona.name);
     const medianaPorNombre = nombres.map(nombre =>  medianaPorPersona (nombre));
     console.log({nombres, medianaPorNombre})

     const mediana = PlatziMath.calcularMediana (medianaPorNombre);
     
     return mediana
}

function medianaTop10 () {
    const nombres = salarios.map(persona => persona.name);
    const medianaPorNombre = nombres.map(nombre =>  medianaPorPersona (nombre));
    
    const medianasOrdenadas = PlatziMath.ordenarLista (medianaPorNombre);
    
    const cantidad = medianasOrdenadas.length / 10;
    const limite = medianasOrdenadas.length - cantidad;
    
    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);
    
    const medianaTop10 = PlatziMath.calcularMediana(top10);
    
    return medianaTop10
}