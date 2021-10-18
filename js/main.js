let contenedorQuienSoy = document.querySelector(".contenedor-central")
let contenedorPortafolio = document.querySelector(".contenedor-centralportafolio")
let contenedorcontactame = document.querySelector(".contenedor-contacto")




const seleccion = (ir) => {
console.log("soy bonito")
    switch (ir) {
        case 'quiensoy':
            contenedorQuienSoy.style.display = "flex"
            contenedorPortafolio.style.display = "none"
            contenedorcontactame.style.display = "none"
            break;
        case 'portafolio':
            contenedorQuienSoy.style.display = "none"
            contenedorPortafolio.style.display = "flex"
            contenedorcontactame.style.display = "none"
            break;
        case 'contactame':
            contenedorQuienSoy.style.display = "none"
            contenedorPortafolio.style.display = "none"
            contenedorcontactame.style.display = "flex"
            break;
    }
}