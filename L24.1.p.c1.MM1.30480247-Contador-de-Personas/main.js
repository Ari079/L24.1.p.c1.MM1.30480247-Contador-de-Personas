class Personas{
    constructor(nombre, sexo){
        this.nombre = nombre,
        this.sexo = sexo
    }
}

class Procesos{
    constructor(){
        this.contadorPersonas = 0,
        this.contadorFemeninos = 0,
        this.contadorMasculinos = 0
    }
    procesarPersonas(p){
        this.contadorPersonas++
        if(p.sexo === "M"){
            this.contadorMasculinos++
        }else if(p.sexo === "F"){
            this.contadorFemeninos++
        }
    }
}

let persona1 = new Personas("Luis", "M")
let persona2 = new Personas("Ana", "F")
let persona3 = new Personas("José", "M")
let persona4 = new Personas("Carmen", "F")
let persona5 = new Personas("Rosa", "F")
let persona6 = new Personas("José", "M")
let persona7 = new Personas("María", "F")
let persona8 = new Personas("Luz", "F")
let persona9 = new Personas("Rafael", "M")
let persona10 = new Personas("Liz", "F")
let persona11 = new Personas("Marcos", "M")
let persona12 = new Personas("Leo", "M")

let proceso = new Procesos()

proceso.procesarPersonas(persona1)
proceso.procesarPersonas(persona2)
proceso.procesarPersonas(persona3)
proceso.procesarPersonas(persona4)
proceso.procesarPersonas(persona5)
proceso.procesarPersonas(persona6)
proceso.procesarPersonas(persona7)
proceso.procesarPersonas(persona8)
proceso.procesarPersonas(persona9)
proceso.procesarPersonas(persona10)
proceso.procesarPersonas(persona11)
proceso.procesarPersonas(persona12)

let salida = document.getElementById('app')
salida.innerHTML = `

Cantidad de personas: ${proceso.contadorPersonas}<br>
Cantidad de hombres: ${proceso.contadorMasculinos}<br>
Cantidad de mujeres: ${proceso.contadorFemeninos}

`