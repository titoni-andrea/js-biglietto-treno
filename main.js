let costKm = 0.21

let NumKm = prompt("Quanti chilometri vuoi fare?")

let ageUser = prompt("Quanti anni hai?")

let costTicket = NumKm * costKm

const senzaDato = "Devi inserire dei dati nel banner per avere il tuo prezzo del biglietto!"

document.getElementById("titolo").innerHTML = `Il costo base del biglietto è: ${costTicket.toFixed(2)}€`


if (NumKm == 0 || NumKm == null) {
    document.getElementById("titoletto").innerHTML = senzaDato
}

else if (ageUser == 0 || ageUser == null) {
    document.getElementById("titoletto").innerHTML = senzaDato
}

else if (ageUser < 18) {
    document.getElementById("titoletto").innerHTML = `Il costo del biglietto per te che sei minorenne è: ${(costTicket - ((costTicket / 100) * 20)).toFixed(2)}€`
}
else if (ageUser > 65) {
    document.getElementById("titoletto").innerHTML = `Il costo del biglietto per te che hai più di 65 anni è: ${(costTicket - ((costTicket / 100) * 40)).toFixed(2)}€`
}
else {
    document.getElementById("titoletto").innerHTML = `Il costo del biglietto intero è: ${costTicket.toFixed(2)}€`
}