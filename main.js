let costKm = 0.21

let NumKm = prompt("Quanti chilometri vuoi fare?")

let ageUser = prompt("Quanti anni hai?")

let costTicket = NumKm * costKm

console.log(`Il costo base del biglietto è: ${costTicket}`)

if (ageUser < 18) {
    console.log(`Il costo del biglietto per te che sei minorenne è: ${costTicket - ((costTicket / 100) * 20)}`)
}
else if (ageUser > 65) {
    console.log(`Il costo del biglietto per te che hai più di 65 anni è: ${costTicket - ((costTicket / 100) * 40)}`)
}
else {
    console.log(`Il costo del biglietto intero è: ${costTicket}`)
}