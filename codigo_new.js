const contenedor = [];
let indiceConsumidor = 0;
let indiceProductor = 0;
let intervaloProcesamiento;

let estadoActual;
let cantidadRestante = 0;

const comportamientoParaEventoKeyDown = (event) => {
  if ( event.isComposing || event.code === "Escape") {
    stop();
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


run();



function todosLosElementosEstanEnEstadoFalso () {
  return !(contenedor.some( (elemento) => elemento.estado == true ));
}

function todosLosElementosEstanEnEstadoVerdadero () {
  return !(contenedor.some( (elemento) => elemento.estado == false ));
}

function numeroAleatorioEntre (min = 0, max = 100) {
  return Math.floor( Math.random() * (max - min) ) + min;
}





function run () {
  for ( let i = 0 ; i < 20 ; i++ ) {
    contenedor[i] = new Elemento();
  }
  procesamiento();
  intervaloProcesamiento = window.setInterval(procesamiento, 1000);

  document.addEventListener("keydown", comportamientoParaEventoKeyDown);

}


function procesamiento () {
  if(cantidadRestante == 0) {
    const condicionAleatoria = numeroAleatorioEntre(1, 5000);
    let htmlElementoConsumidor;
    let htmlElementoProductor;

    if ( condicionAleatoria % 2 == 1 ) {
      estadoActual = "Consumidor";

      htmlElementoConsumidor = document.getElementById("Consumidor");
      htmlElementoProductor = document.getElementById("Productor");

      htmlElementoConsumidor.setAttribute("image","muffin.jpg");
      htmlElementoProductor.setAttribute("image","empty_muffin.jpg");
    } else {
      estadoActual = "Productor";

      htmlElementoConsumidor = document.getElementById("Consumidor");
      htmlElementoProductor = document.getElementById("Productor");

      htmlElementoConsumidor.setAttribute("image","empty_muffin.jpg");
      htmlElementoProductor.setAttribute("image","muffin.jpg");
    }

    htmlElementoProductor.connectedCallback();
    htmlElementoConsumidor.connectedCallback();
    cantidadRestante = numeroAleatorioEntre(3,7);
  }
  if(estadoActual == "Consumidor") {
    if(indiceConsumidor == 20) indiceConsumidor = 0;
    if ( todosLosElementosEstanEnEstadoFalso() ) {
      cantidadRestante = 0;
      return
    };

    contenedor[indiceConsumidor].cambioDeEstado(false);

    let element = document.getElementById(indiceConsumidor);

    if(contenedor[indiceConsumidor].estado == true) {
      element.setAttribute("image","muffin.jpg");
    } else {
      element.setAttribute("image","empty_muffin.jpg");
    }

    element.connectedCallback();
    indiceConsumidor++;
  } else {
    if(indiceProductor == 20) indiceProductor = 0;
    if ( todosLosElementosEstanEnEstadoVerdadero() ) {
      cantidadRestante = 0;
      return
    };

    contenedor[indiceProductor].cambioDeEstado(true);
    let element = document.getElementById(indiceProductor);

    if(contenedor[indiceProductor].estado == true) {
      element.setAttribute("image","muffin.jpg");
    } else {
      element.setAttribute("image","empty_muffin.jpg");
    }

    element.connectedCallback();
    indiceProductor++;
  }
  cantidadRestante--;
}

function stop () {
  clearInterval(intervaloProcesamiento);
  document.removeEventListener("keydown", comportamientoParaEventoKeyDown);
}

