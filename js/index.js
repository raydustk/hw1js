
var precio = 400000;

function calcularTotal() {
    var nuevo_valor_cantidad = Number(document.getElementById('cantidad').innerText);
    var valor_total = precio * nuevo_valor_cantidad;


    var totalSpan = document.querySelector(".valor-total");
    totalSpan.innerText = valor_total;


    console.log("Total Price:", valor_total);
}


function incrementCantidad() {
    var base_element = document.getElementById('cantidad');
    var valor_unitario = Number(document.getElementById('precio_unit').innerText);
    var base_value = Number(base_element.innerText);
    base_element.innerText = base_value + 1;
    calcularTotal();
}


function decrementCantidad() {
    var base_element = document.getElementById('cantidad');
    var base_value = Number(base_element.innerText);
    if (base_value > 0) {
        base_element.innerText = base_value - 1;
        calcularTotal();
    }
}


document.getElementById('btn').addEventListener('click', incrementCantidad);
document.getElementById('decrementBtn').addEventListener('click', decrementCantidad);