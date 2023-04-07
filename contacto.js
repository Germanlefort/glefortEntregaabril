swal.fire("Bienvenidos!!! ")





const formulario = document.querySelector("#my-form")
const inputNombre = document.querySelector("#input-nombre")
const inputDirrecion = document.querySelector("#input-direccion")
const inputLocalidad = document.querySelector("#input-localidad")
const btnEviar = document.querySelector("#btn-enviar")


 btnEviar.addEventListener("click", () =>{
  console.log(inputNombre.value)
  console.log(inputDirrecion.value)
  console.log(inputLocalidad.value)
})

formulario.addEventListener("submit", (event) => {
 event.preventDefault()
  console.log(inputNombre.value)
  console.log(inputDirrecion.value)
  console.log(inputLocalidad.value)



const userData = {
  nombre : inputNombre.value,
  direccion : inputDirrecion.value,
  localidad: inputLocalidad.value,
  
}
 console.log(userData)



}) 

const btn1 = document.querySelector("#boton1")
const btn2 = document.querySelector("#boton2")

const clickear = () =>{
  console.log("Boton Clickeado")
} 

const alertar =() =>{
  alert("Boton clikleado!")
}

btn1.addEventListener("click", (event) => {
  
   swal.fire("Adelante, disfruta de nuestra tienda ")

   console.log(event.target)
  
 })
 
btn2.addEventListener("click", (event) => {
  
  
swal.fire("Prohíbido la venta, expendio o suministro de Bebidas Alcoholicas a menores de edad ")


   console.log(event.target)
 
 })

function guardar () {
  var nuevoRegistro = []
  nombre = '',
  direccion= '',
  localidad= '';
   


  nombre = document.getElementById("input-nombre").value;
  direccion = document.getElementById("input-direccion").value;
  localidad = document.getElementById("input-localidad").value;


  localStorage.setItem("nombre", JSON.stringify(nombre));
  localStorage.setItem("direccion", JSON.stringify(direccion));
  localStorage.setItem("localidad", JSON.stringify(localidad));
}
                          


      function mostrar_posicion (posicion){
        let lat = posicion.coords.latitude;
        let long = posicion.coords.longitude;
        let key = "dc112f5b0533d0ca100d18013c688f09"
        const tiempo = document.createElement('div')
        tiempo.classList.add('ubicacion')
fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=es`)
.then((response) => response.json())
.then(data => {
            tiempo.innerHTML =` <p> Tu compra esta siendo realizada desde ${data.name} </p>
                                <p> La temperatura del dia es de ${data.main.temp}° </p>
                                <p>${data.weather[0].description} </p>`
                                      
  document.body.append(tiempo)
     }
)
}   
    
    navigator.geolocation.getCurrentPosition(mostrar_posicion);


