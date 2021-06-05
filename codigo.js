const contenedor = [];
const contenedorAntiguo = [];
let indiceConsumidor = 0;
let indiceProductor = 0;
let intervaloProcesamiento;


const comportamientoParaEventoKeyDown = (event) => {
  if ( event.isComposing || event.code === "Escape") {
    stop();
  } else if ( event.isComposing || event.code === "KeyR") {
    resetearVariables();
  }
}


class Elemento {
  constructor(estado = false) {
    this.estado = estado;
  }

  cambioDeEstado (estado = this.estado) {
    this.estado = estado;
    return this.estado;
  }
}


resetearVariables();
run();


function consumidor () {
  const cantidadPorConsumir = numeroAleatorioEntre(3,7);

  let htmlElementoConsumidor = document.getElementById("Consumidor");
  let htmlElementoProductor = document.getElementById("Productor");

  htmlElementoConsumidor.setAttribute("image","muffin.jpg");
  htmlElementoProductor.setAttribute("image","muffins.png");


  htmlElementoProductor.connectedCallback();
  htmlElementoConsumidor.connectedCallback();

  for(let i = cantidadPorConsumir ; i > 0 ; i--) {
    if(indiceConsumidor == 20) indiceConsumidor = 0;
    if ( todosLosElementosEstanEnEstadoFalso() ) return;
    contenedor[indiceConsumidor].cambioDeEstado(false);
    indiceConsumidor++;
  }

  return indiceConsumidor;
}

function productor () {
  const cantidadPorProducir = numeroAleatorioEntre(3,7);

  let htmlElementoConsumidor = document.getElementById("Consumidor");
  let htmlElementoProductor = document.getElementById("Productor");

  htmlElementoConsumidor.setAttribute("image","muffins.png");
  htmlElementoProductor.setAttribute("image","muffin.jpg");


  htmlElementoProductor.connectedCallback();
  htmlElementoConsumidor.connectedCallback();

  for(let i = cantidadPorProducir ; i > 0 ; i--) {
    if(indiceProductor == 20) indiceProductor = 0;
    if ( todosLosElementosEstanEnEstadoVerdadero() ) return;
    contenedor[indiceProductor].cambioDeEstado(true);
    indiceProductor++;
  }

  return indiceProductor;
}




function todosLosElementosEstanEnEstadoFalso () {
  return !(contenedor.some( (elemento) => elemento.estado == true ));
}

function todosLosElementosEstanEnEstadoVerdadero () {
  return !(contenedor.some( (elemento) => elemento.estado == false ));
}

function numeroAleatorioEntre (min = 0, max = 100) {
  return Math.floor( Math.random() * (max - min) ) + min;
}

function resetearVariables () {
  for ( let i = 0 ; i < 20 ; i++ ) {
    contenedor[i] = new Elemento();
  }

  indiceConsumidor = 0;
  indiceProductor = 0;
}





function run () {
  for ( let i = 0 ; i < 20 ; i++ ) {
    contenedor[i] = new Elemento();
    contenedorAntiguo[i] = '0';
  }
  procesamiento();
  intervaloProcesamiento = window.setInterval(procesamiento, 1000);

  document.addEventListener("keydown", comportamientoParaEventoKeyDown);

}

function procesamiento () {
  const condicionAleatoria = numeroAleatorioEntre(1, 5000);

  if ( condicionAleatoria % 2 == 1 ) {
    consumidor();
  } else {
    productor();
  }

  imprimirEstadosDelArreglo();
}

function stop () {
  clearInterval(intervaloProcesamiento);
  document.removeEventListener("keydown", comportamientoParaEventoKeyDown);
}

function imprimirEstadosDelArreglo () {
  const arregloMapeado = contenedor.map( elemento => {
    return elemento.estado == true ? '1' : '0';
  });

  arregloMapeado.forEach((value, index) => {
    let element = document.getElementById(index);

    if(value == '1') {
      element.setAttribute("image","muffin.jpg");
    } else {
      element.setAttribute("image","muffins.png");
    }

    element.connectedCallback();
  });

}