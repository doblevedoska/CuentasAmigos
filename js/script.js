
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
const mensajesCurrency = document.getElementById('mensajes-currency');
const mensajeUsd = document.getElementById('mensaje-usd');
const mensajeEuro = document.getElementById('mensaje-euro');
const mensajeReal = document.getElementById('mensaje-real');


function Amigo(nombre){
    this.nombre = nombre;
    this.gasto   = 0;
    this.deuda  = 0;
    this.mensajeDeuda = "";
}

let listaAmigos = JSON.parse(localStorage.getItem('listaAmigos'));



function validarFormularioAmigo (e) {
    e.preventDefault();
    if (amigo1.value == "" || amigo2.value == "" || amigo3.value == ""){
        //Mensaje de error de carga de amigos con Sweet Alert
        Swal.fire({
            icon: 'error',
            title: 'No tan rápido!...',
            text: 'Debes cargar los nombres de los 3 amigos primero.'
        })
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
        localStorage.setItem('listaAmigos', JSON.stringify(listaAmigos));
        //Mensaje de éxito de carga de amigos con Sweet Alert
        Swal.fire({
            icon: 'success',
            title: '👍 Perfecto!...',
            text: `Cargaste exitosamente a ${listaAmigos[0].nombre}, ${listaAmigos[1].nombre} & ${listaAmigos[2].nombre}. Habilitado para comenzar la carga de gastos.`
        })
        //mjePostCarga.innerHTML = `👉Cargaste exitosamente a ${listaAmigos[0].nombre}, ${listaAmigos[1].nombre} & ${listaAmigos[2].nombre}. Habilitado para comenzar la carga de gastos.`;
        formularioAmigos.style.display = 'none';
        formularioGastos.style.display = 'block';
        formularioCalculo.style.display = 'block';
    }


}


const verificarStorage = () => {
    if (!!listaAmigos && listaAmigos.length > 0){
        mjePostCarga.innerHTML = `👉Cargaste exitosamente a ${listaAmigos[0].nombre}, ${listaAmigos[1].nombre} & ${listaAmigos[2].nombre}. Habilitado para comenzar la carga de gastos.`;
        formularioAmigos.style.display = 'none';
        formularioGastos.style.display = 'block';
        formularioCalculo.style.display = 'block';
    }
    else{
        listaAmigos = [];
    }
}

verificarStorage();


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
formularioCalculo.addEventListener("submit", calcularGasto);




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

    const calcularCurrency = async () =>{
        const respuesta = await fetch('../currency.json');
        const resultados = await respuesta.json();
    
            console.log(resultados);
            // console.log(resultados[0].cotizacion*gastoTotal.toFixed(2));
            mensajeUsd.innerHTML = `🇺🇸 El gasto total en ${resultados[0].nombre} es de ${resultados[0].simbolo}: ${(resultados[0].cotizacion*gastoTotal).toFixed(2)}.`;
            mensajeEuro.innerHTML = `🇪🇺 El gasto total en ${resultados[1].nombre} es de  ${resultados[1].simbolo}: ${(resultados[1].cotizacion*gastoTotal).toFixed(2)}.`;
            mensajeReal.innerHTML = `🇧🇷 El gasto total en ${resultados[2].nombre} es de  ${resultados[2].simbolo}: ${(resultados[2].cotizacion*gastoTotal).toFixed(2)}.`;
    
            // }).catch(error =>{
            //     Swal.fire({
            //         icon: 'error',
            //         title: 'Reintentar...',
            //         text: 'No se pudo cargar la lista de currency.'
            //     })
            // }).finally()
    
    
    }
    
    calcularCurrency();

}









// console.log(listaAmigos);
// console.log(gastoTotal);
// console.log(gastoIndividual);




