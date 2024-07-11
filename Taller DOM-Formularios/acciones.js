document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault() // Evita el envío del formulario
        validarFormulario()
    })
})

function cambiarEstilosParrafos() {
    const parrafos = document.querySelectorAll("p")
    parrafos.forEach(parrafo => {
        parrafo.style.fontSize = "20px"
        parrafo.style.backgroundColor = "#ffeb3b"
    })
}

function estilizarParrafosPares() {
    const parrafos = document.querySelectorAll("p")
    parrafos.forEach((parrafo, index) => {
        if ((index + 1) % 2 === 0) {
            parrafo.style.backgroundColor = "#d0e1f9"
        } else {
            parrafo.style.backgroundColor = ""
        }
    })
}

function estilizarParrafosImpares() {
    const parrafos = document.querySelectorAll("p")
    parrafos.forEach((parrafo, index) => {
        if ((index + 1) % 2 !== 0) {
            parrafo.style.backgroundColor = "#f9d0d0"
        } else {
            parrafo.style.backgroundColor = ""
        }
    })
}

function mostrarImagenes() {
    const divImagenes = document.getElementById("imagenes")
    divImagenes.innerHTML = `
        <img src="Imagenes/imgGaleria1.jpg" alt="img1">
        <img src="Imagenes/imgGaleria2.jpg" alt="img2">
        <img src="Imagenes/imgGaleria3.jpg" alt="img3">|
    `
    const imagenes = divImagenes.querySelectorAll("img")
    imagenes.forEach(img => img.style.display = "inline")
}

function ocultarImagenes() {
    const imagenes = document.querySelectorAll("#imagenes img")
    imagenes.forEach(img => img.style.display = "none")
}

function cambiarFondoPagina() {
    const body = document.body
    if (body.style.backgroundColor === "rgb(51, 51, 151)") {
        body.style.backgroundColor = ""
        body.style.color = "#000"
    } else {
        body.style.backgroundColor = "rgb(51, 51, 151)"
        body.style.color = "#fff"
    }
}

function cambiarColoresTitulos() {
    const h1 = document.querySelector("h1")
    if (h1.style.color === "rgb(255, 87, 51)") {
        h1.style.color = ""
    } else {
        h1.style.color = "#FF5733"
    }
    const h2 = document.querySelectorAll("h2")
    h2.forEach(element => {
        if (element.style.color === "rgb(255, 87, 51)") {
            element.style.color = ""
        } else {
            element.style.color = "#FF5733"
        }
    })
}

function validarFormulario() {
    let valido = true
    const inputs = document.querySelectorAll("input")
    inputs.forEach(input => {
        if (!input.value) {
            input.style.borderColor = "red"
            valido = false
        } else {
            input.style.borderColor = ""
        }
    })

    const edad = document.getElementById("edad").value
    if (edad && edad < 18) {
        alert("Debes tener al menos 18 años.")
        valido = false
    }

    if (valido) {
        const nombre = document.getElementById("nombre").value
        const apellido = document.getElementById("apellido").value
        document.getElementById("resultado").innerText = `Nombre: ${nombre} ${apellido}`
    }

    return false 
}