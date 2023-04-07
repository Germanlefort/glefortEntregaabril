swal.fire("Envio gratis a todo el pais!! ")



localStorage.setItem("Propietario", "German Le Fort")
localStorage.setItem("Direccion", "Guemes 1551, Tucuman")


const productosContainer = document.querySelector('#contenedor-productos')
const carritoContenedor = document.querySelector("#carrito-contenedor")
const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')

const btnVaciar = document.getElementById('vaciarCarrito')

let carrito = []
const carritoEnLS = JSON.parse( localStorage.getItem('carrito') )

productos.forEach((productos) => {
   const div = document.createElement('div')
   div.classList.add('producto')

   div.innerHTML =  `
      <img src= ${productos.Img} alt="">
      <h3>${productos.nombre} </h3>
      <p class="precio"> Precio:$${productos.precio}</p>
      <p> Disponible ${productos.cantidad} </p>
      <button onclick ="agregarAlCarrito(${productos.id})" class="boton-agregar">Agregar <class=""></i></button>

`     

   productosContainer.append(div)
})

const agregarAlCarrito = (id) => {
    const item = productos.find((producto) => producto.id === id)
    carrito.push(item)

    localStorage.setItem('carrito', JSON.stringify(carrito))

    console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const removerDelCarrito = (id) => {
    const item = carrito.find((producto) => producto.id === id)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)

    localStorage.setItem('carrito', JSON.stringify(carrito))

    renderCarrito()
    renderCantidad()
    renderTotal()
}

const vaciarCarrito = () => {
    carrito.length = 0

    localStorage.setItem('carrito', JSON.stringify(carrito))

    renderCarrito()
    renderCantidad()
    renderTotal()
}

btnVaciar.addEventListener('click', vaciarCarrito)

const renderCarrito = () => {
    carritoContenedor.innerHTML = ''

    carrito.forEach((producto) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                    <p>${producto.nombre}</p>
                    <p>Precio: $${producto.precio}</p>
                    <button onclick="removerDelCarrito(${producto.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                    `
        
        carritoContenedor.append(div)
    })
}

const renderCantidad = () => {
    contadorCarrito.innerText = carrito.length
}

const renderTotal = () => {
    let total = 0
    carrito.forEach((productos) => {
        total =+ productos.precio
    })

    precioTotal.innerText = total
}


if (carritoEnLS) {
    carrito = carritoEnLS

    renderCarrito()
    renderCantidad()
    renderTotal()
} else {
    carrito = []
}

