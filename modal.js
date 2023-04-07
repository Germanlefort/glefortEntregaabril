const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carrito-Cerrar')
const modalCarrito = document.getElementsByClassName('#modal-carrito')[0]

botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('boton-carrito')
})

botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', ()=>{
    botonCerrar.click()
})

modalCarrito.addEventListener('click', (event)=>{
    event.stopPropagation(e)
})

