

function Compra (hechizo, precio, cantidad);
{
    this.hechizo = hechizo;
    this.precio = precio;
    this.cantidad = cantidad;
}

function total (x);{
    let total = x.precio * x.cantidad;
    let acepto = confirm("Hechizo:" + x.hechizo + "\n Cantidad de hechizos:" + x.cantidad + "\n Valor por unidad: $" + x.precio + "\n TOTAL= $" + total + "\n");
    if(acepto){
        alert("Compra realizada, el pedido llegara en 4 dias habiles");
    } else {
        alert("compra anulada");
    }
}

        let hechizo = parseInt(prompt("Elige el hechizo que deseas" + "\n 1- Accio" + "\n 2 - Confundus" + "\n 3 - Alohomora"));
if(hechizo){
   
    switch (hechizo){
        case 1: 
         alert("Se utiliza para atraer un objeto sea cual sea la distancia a la que esté");
            let cantidad1 = parseInt(prompt("Seleccione cantidad \n Valor $25000"));
            const hechizo1 = new Compra ("Accio", 25000, cantidad1);
            total(hechizo1);
            break;

        case 2:
            alert("Utilizado para causar confusión en las personas o encantar objetos");
            let cantidad2= parseInt(prompt("Seleccione cantidad \n Valor $30000"));
            const hechizo2 = new Compra ("Confundus", 30000, cantidad2);
            total(hechizo2);
            break;

        case 3:
            alert("Hechizo utilizado para abrir cerraduras cerradas con llave");
            let cantidad3= parseInt(prompt("Seleccione cantidad \n Valor $15000"));
            const hechizo3 = new Compra ("Alohamora", 15000, cantidad3);
            total(hechizo3);
            break;

        default: 
            alert("Hechizo no encontrado");
            break;
    }

} else{
    alert("Hoy no hay hechizos para tí");
}

