
// // EVENTOS INPUTS

// const amigo1 = document.getElementById('amigo1');
// const amigo2 = document.getElementById('amigo2');
// const amigo3 = document.getElementById('amigo3');
// const formularioAmigos = document.getElementById('formulario-amigos');
// const mensaje = document.getElementById('mensaje');
// const cargaAmigos = document.getElementById('carga-amigos');
// const mjePostCarga = document.getElementById('mensaje-post-carga');
// const cargaGastos = document.getElementById('carga-gastos');


// function Amigo(nombre){
//     this.nombre = nombre;
//     this.gasto   = 0;
//     this.deuda  = 0;
//     this.mensajeDeuda = "";
// }

// const listaAmigos = [];

// // amigo1.addEventListener('input', (e) => {
// //     let amigo = new Amigo(amigo1.value);
// //     listaAmigos[0].nombre = amigo;
// // })

// // amigo2.addEventListener('input', (e) => {
// //     let amigo = new Amigo(amigo2.value);
// //     listaAmigos[1].nombre = amigo;
// // })

// // amigo3.addEventListener('input', (e) => {
// //     let amigo = new Amigo(amigo3.value);
// //     listaAmigos[2].nombre = amigo;
// // })





// function validarFormulario (e) {
//     e.preventDefault();
//     let amigoUno = new Amigo(amigo1.value);
//     amigoUno.nombre =  amigoUno.nombre.toUpperCase();
//     listaAmigos.push(amigoUno);
//     let amigoDos = new Amigo(amigo2.value);
//     amigoDos.nombre = amigoDos.nombre.toUpperCase();
//     listaAmigos.push(amigoDos);
//     let amigoTres = new Amigo(amigo3.value);
//     amigoTres.nombre = amigoTres.nombre.toUpperCase();
//     listaAmigos.push(amigoTres);
//     mjePostCarga.innerHTML = `Cargaste exitosamente a ${listaAmigos[0].nombre}, ${listaAmigos[1].nombre} y ${listaAmigos[2].nombre}`;

// }



// formularioAmigos.addEventListener("submit", validarFormulario);




// // // //Funcion que valida que no se ingrese un nombre de amigo en blanco

// // // function validarNoBlanco(nombre){
// // //     if (nombre != ""){
// // //         return true;
// // //     }
// // //     else{
// // //         return false;
// // //     }
// // // }



// // // //Carga de datos en array listaAmigos




// // // let gasto;

// // // alert ("Nombres de amigos cargados");

// // // let entrada = prompt("Ingresar un nombre para cargar un gasto. (ESC finaliza la carga)");
// // // entrada = entrada.toUpperCase();

// // // while(entrada != "ESC" ){
// // //     gasto = Number(prompt("Ingresar el importe gastado"));
// // //     switch (true){
// // //         case entrada === listaAmigos[0].nombre:
// // //             listaAmigos[0].gasto = listaAmigos[0].gasto + gasto;
// // //             break;

// // //         case entrada === listaAmigos[1].nombre:
// // //             listaAmigos[1].gasto = listaAmigos[1].gasto + gasto;
// // //             break;

// // //         case entrada === listaAmigos[2].nombre:
// // //             listaAmigos[2].gasto = listaAmigos[2].gasto + gasto;
// // //             break;

// // //         default: 
// // //             alert(entrada + ": No es un nombre de amigo válido.");
// // //             break;
// // //     }

// // //     entrada = prompt("Ingresar un nombre  para cargar un gasto. (ESC finaliza la carga)").toUpperCase();

// // // }




// // // //Funcion que calcula el gasto total

// // // function calcularGastoTotal(listaAmigos){
// // //     return listaAmigos[0].gasto + listaAmigos[1].gasto + listaAmigos[2].gasto;
// // // }

// // // //Funcion que calcula el gasto Individual de cada amigo

// // // function calcularGastoIndividual(gastoTotal){
// // //     return gastoTotal / 3;
// // // }

// // // let gastoTotal = calcularGastoTotal (listaAmigos);

// // // let gastoIndividual = calcularGastoIndividual(gastoTotal);

// // // //Funcion que calcula el monto de la Deuda

// // // function calcularDeuda (gasto, gastoInd){
// // //     return gasto - gastoInd;
// // // }



// // // //recorro el array y agrego el monto de deuda

// // // for (let i = 0; i < 3; i++){
// // //     listaAmigos[i].deuda = calcularDeuda (listaAmigos[i].gasto, gastoIndividual);

// // // }


// // // // console.log(listaAmigos);


// // // //Funcion que determina si es deudor, si tiene saldo a favor o si esta en cero

// // // function determinarSituacion(deudaAmigo) {
// // //     if (deudaAmigo > 0){
// // //         return "Tiene saldo a favor";
// // //     }
// // //     else if (deudaAmigo < 0){
// // //         return "Tiene Saldo negativo";
// // //     }
// // //     else{
// // //         return "No tiene deuda, ni saldo a favor";
// // //     }
// // // }

// // // // // let mensajeD1 = determinarSituacion(listaAmigos[0].deuda);
// // // // // let mensajeD2 = determinarSituacion(listaAmigos[1].deuda);
// // // // // let mensajeD3 = determinarSituacion(listaAmigos[2].deuda);

// // // //recorro el array y agrego el mensaje de deuda

// // // for (let j = 0; j < 3; j++){

// // //     listaAmigos[j].mensajeDeuda  = determinarSituacion(listaAmigos[j].deuda);

// // // }



// // // alert (`GASTOS TOTALES E INDIVIDUALES:\n
// // // Total de gastos de ${listaAmigos[0].nombre} es: $${listaAmigos[0].gasto} \n
// // // Total de gastos de ${listaAmigos[1].nombre} es: $${listaAmigos[1].gasto} \n
// // // Total de gastos de ${listaAmigos[2].nombre} es: $${listaAmigos[2].gasto} \n
// // // Gastos Totales: $${gastoTotal} \n
// // // Gastos Cada Uno: $${gastoIndividual} \n
// // // -----------------------------\n
// // // DEUDAS:\n
// // // ${listaAmigos[0].nombre} ${listaAmigos[0].mensajeDeuda} de $ ${listaAmigos[0].deuda}\n
// // // ${listaAmigos[1].nombre} ${listaAmigos[1].mensajeDeuda} de $ ${listaAmigos[1].deuda}\n
// // // ${listaAmigos[2].nombre} ${listaAmigos[2].mensajeDeuda} de $ ${listaAmigos[2].deuda}`);
