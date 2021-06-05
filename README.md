# Productor-Consumidor_JS
Requerimientos del programa:
1. Existen un solo productor y un solo consumidor.
1. Se cuenta con un “contenedor” con capacidad para 20 elementos, en el cual el productor colocará y el consumidor retirará elementos.
1. El “contenedor”, lógicamente es un buffer circular y acotado, es decir al llegar a la última casilla (20) comenzará nuevamente en la casilla 1.
1. El producto puede ser: números, caracteres especiales, letras, etc.
1. Solo puede ingresar uno a la vez al contenedor.
1. Para que el Productor pueda entrar, debe haber espacio en el contenedor.
1. Para que el Consumidor pueda entrar, debe existir producto.
1. En la pantalla debe aparecer:
    a. El contenedor con los espacios claramente marcados y numerados.
  b. La información del productor, es decir, mostrar si está dormido, trabajando, cuando intente ingresar al contenedor, etc.
  c. La información del consumidor, dormido, trabajando, cuando intente ingresar, etc.
  d. Mensajes que indiquen en todo momento, quien está trabajando, o quien intenta trabajar, o si está dormido.
1. Deben manejarse tiempos aleatorios para dormir al productor y al consumidor.
1. Al “despertar” intentará producir y/o consumir respectivamente, verificando que pueda hacerlo según sus condiciones.
1. Al entrar al buffer podrán producir y/o consumir de tres a seis elementos en cada entrada.
1. El productor colocará elementos en orden, comenzando con la primera casilla y continuando en la casilla donde quedo.
1. El consumidor quitará elementos en orden, comenzando también por la primera casilla y continuando en donde quedo la última entrada.
1. Cuando el productor y/o el consumidor lleguen a la casilla 20, irán de nuevo a la 1 y continuarán produciendo y/o consumiendo respectivamente.
1. El programa terminara cuando se presione la tecla “ESC”.
