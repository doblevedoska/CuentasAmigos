
// EVENTOS INPUTS

const amigo1 = document.getElementById('amigo1');
const amigo2 = document.getElementById('amigo2');
const amigo3 = document.getElementById('amigo3');
const formularioAmigos = document.getElementById('formulario-amigos');
const mensaje = document.getElementById('mensaje');
const cargaAmigos = document.getElementById('carga-amigos');
const mjePostCarga = document.getElementById('mensaje-post-carga');
const nombreAmigoGasto = document.getElementById('nombre-amigo-gasto');
const gasto = document.getElementById('gasto');
const formularioGastos = document.getElementById('formulario-gastos');
const mensajeGasto = document.getElementById('mensaje-gasto');
const submitGasto = document.getElementById('submit-gasto');
const formularioCalculo = document.getElementById('formulario-calculo');
const mensajeGastoTotal = document.getElementById('mensaje-gasto-total');
const mensajeDeudaInd = document.getElementById('mensaje-gasto-invidual');
const mensajeDeuda1 = document.getElementById('mensaje-deuda-1');
const mensajeDeuda2 = document.getElementById('mensaje-deuda-2');
const mensajeDeuda3 = document.getElementById('mensaje-deuda-3');
const submitCalculo = document.getElementById('submit-calculo');
const mensajesCalculo = document.getElementById('mensajes-calculo');



function Amigo(nombre){
    this.nombre = nombre;
    this.gasto   = 0;
    this.deuda  = 0;
    this.mensajeDeuda = "";
}

const listaAmigos = [];


function validarFormularioAmigo (e) {
    e.preventDefault();
    if (amigo1.value == "" || amigo2.value == "" || amigo3.value == ""){
        mjePostCarga.innerHTML = `👉 Debes completar los nombres de todos los amigos..`;
        }
    else{
        let amigoUno = new Amigo(amigo1.value);
        amigoUno.nombre =  amigoUno.nombre.toUpperCase();
        listaAmigos.push(amigoUno);
    
        let amigoDos = new Amigo(amigo2.value);
        amigoDos.nombre = amigoDos.nombre.toUpperCase();
        listaAmigos.push(amigoDos);
    
        let amigoTres = new Amigo(amigo3.value);
        amigoTres.nombre = amigoTres.nombre.toUpperCase();
        listaAmigos.push(amigoTres);
        
        mjePostCarga.innerHTML = `👉Cargaste exitosamente a ${listaAmigos[0].nombre}, ${listaAmigos[1].nombre} & ${listaAmigos[2].nombre}. Habilitado para comenzar la carga de gastos.`;
        formularioAmigos.style.display = 'none';
        formularioGastos.style.display = 'block';
        formularioCalculo.style.display = 'block';
    }


}


formularioAmigos.addEventListener("submit", validarFormularioAmigo);



function validarFormularioGasto (e) {
    e.preventDefault();
    nombreAmigoGasto.value = nombreAmigoGasto.value.toUpperCase();
    switch (true){
        case nombreAmigoGasto.value === listaAmigos[0].nombre:
            listaAmigos[0].gasto = listaAmigos[0].gasto + Number(gasto.value);
            mensajeGasto.innerHTML = `Cargado exitosamente el gasto de $${gasto.value} a ${nombreAmigoGasto.value}`;
            break;

        case nombreAmigoGasto.value === listaAmigos[1].nombre:
            listaAmigos[1].gasto = listaAmigos[1].gasto + Number(gasto.value);
            mensajeGasto.innerHTML = `Cargado exitosamente el gasto de $${gasto.value} a ${nombreAmigoGasto.value}`;
            break;

        case nombreAmigoGasto.value === listaAmigos[2].nombre:
            listaAmigos[2].gasto = listaAmigos[2].gasto + Number(gasto.value);
            mensajeGasto.innerHTML = `Cargado exitosamente el gasto de $${gasto.value} a ${nombreAmigoGasto.value}`;
            break;

        default: 
            mensajeGasto.innerHTML = 'No existe el nombre del amigo.';
            break;
    }
    nombreAmigoGasto.value = '';
    gasto.value = '';
}

formularioGastos.addEventListener("submit", validarFormularioGasto);






//Funcion que calcula las deudas

function calcularDeuda (gasto, gastoInd){
    return gasto - gastoInd;
}

//Funcion que determina si es deudor, si tiene saldo a favor o si esta en cero

function determinarSituacion(deudaAmigo) {
    if (deudaAmigo > 0){
        return "Tiene saldo a favor";
    }
    else if (deudaAmigo < 0){
        return "Tiene saldo negativo";
    }
    else{
        return "No tiene deuda, ni saldo a favor";
    }
}



// 


function calcularGasto (e) {
    e.preventDefault();
    let gastoTotal = listaAmigos[0].gasto + listaAmigos[1].gasto + listaAmigos[2].gasto;
    let gastoIndividual = gastoTotal / 3;

    for (let i = 0; i < 3; i++){
        listaAmigos[i].deuda = calcularDeuda (listaAmigos[i].gasto, gastoIndividual);   
    }
    for (let j = 0; j < 3; j++){

        listaAmigos[j].mensajeDeuda  = determinarSituacion(listaAmigos[j].deuda);
    
    }
    formularioGastos.style.display = 'none';
    submitCalculo.style.display = 'none';

    mensajeGastoTotal.innerHTML = `💸 Total de Gastos $${gastoTotal.toFixed(2)}`;
    mensajeDeudaInd.innerHTML = `✏️ Total de Gastos por Amigo $${gastoIndividual.toFixed(2)}`;
    mensajeDeuda1.innerHTML = `👤 ${listaAmigos[0].nombre} gastó $${listaAmigos[0].gasto.toFixed(2)}. ${listaAmigos[0].mensajeDeuda} de $${listaAmigos[0].deuda.toFixed(2)}.`;
    mensajeDeuda2.innerHTML = `👤 ${listaAmigos[1].nombre} gastó $${listaAmigos[1].gasto.toFixed(2)}. ${listaAmigos[1].mensajeDeuda} de $${listaAmigos[1].deuda.toFixed(2)}.`;
    mensajeDeuda3.innerHTML = `👤 ${listaAmigos[2].nombre} gastó $${listaAmigos[2].gasto.toFixed(2)}. ${listaAmigos[2].mensajeDeuda} de $${listaAmigos[2].deuda.toFixed(2)}.`;

    mensajesCalculo.style.backgroundColor = '#d9ed92';
    mensajesCalculo.style.borderRadius = '15px';
    mensajesCalculo.style.padding = '10px';
    mensajesCalculo.style.textAlign = 'center';



}




formularioCalculo.addEventListener("submit", calcularGasto);

console.log(listaAmigos);
// console.log(gastoTotal);
// console.log(gastoIndividual);




