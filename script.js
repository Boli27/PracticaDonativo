
function consultar(){
    let data; 
    fetch('resumen.json')
    .then(respuesta => respuesta.json())
    .then((salida)=>{data = salida;
        let detalles = document.getElementById("detalles");
        detalles.innerHTML = ""; 
        document.getElementById("identificacion").textContent = salida.identificador;

        document.getElementById("origen").textContent = salida.origen;

        document.getElementById("destino").textContent = salida.destino;

        document.getElementById("fechaenvio").textContent = salida.fechaEnvio;

        document.getElementById("fechaentrega").textContent = salida.fechaEntrega;
        for (let i = 0; i < salida.detalles.length; i++) {
            let element = document.createElement("label");
            element.innerHTML = "Nombre: " + salida.detalles[i].nombre + ", Cantidad: " + salida.detalles[i].cantidad;
            detalles.appendChild(element);  
        }
    })
}
