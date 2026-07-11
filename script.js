let humanScore=0
let computerScore=0
function getComputerChoice(){
    let n= Math.floor(Math.random()*3)
    let resultado=""
    if (n==0){
        resultado="Piedra"
    }
    else if(n==1){
        resultado="Papel"
    }
    else if(n==2){
        resultado="Tijeras"
    }
    resultado=resultado.toLowerCase()
    return resultado
}
/*function getHumanChoice(){
    let eleccion=prompt("Introduzca un valor valido")
    eleccion.toLowerCase()
    return eleccion
}*/
function playRound(input){
    let h=input
    let c=getComputerChoice()
    if (c==="piedra" && h === "tijeras"){
        computerScore++
        return("has perdido, piedra gana a tijeras")
    }
    if (c==="tijeras" && h === "papel"){
        computerScore++
        return("has perdido, tijeras gana a papel")
    }
    if (c==="papel" && h ==="piedra"){
        computerScore++
        return("has perdido, papel gana a piedras")
    }
    if (h==="piedra" && c === "tijeras"){
        humanScore++
        return("has ganado, piedra gana a tijeras")
    }
    if (h=="tijeras" && c === "papel"){
        humanScore++
        return("has ganado, tijeras gana a papel")}
    if (h=="papel" && c == "piedra"){
        humanScore++
        return("has ganado, papel gana a piedras")}
    return("empate")
}
function playGame(){
    /*for (let i=0;i<5;i++){
        console.log(playRound())
    }*/
    if (humanScore<computerScore){
        console.log("has perdido la partida")
    }
    else if (humanScore>computerScore){
        console.log("has ganado la partida")
    }
    humanScore=0
    computerScore=0
}

const piedra=document.createElement("button")
const papel=document.createElement("button")
const tijeras=document.createElement("button")
const contador=document.createElement("div")
const contador2=document.createElement("div")
const ganador=document.createElement("div")
piedra.textContent="piedra"
papel.textContent="papel"
tijeras.textContent="tijeras"

document.body.appendChild(piedra)
document.body.appendChild(papel)
document.body.appendChild(tijeras)
document.body.appendChild(contador)
document.body.appendChild(contador2)
document.body.appendChild(ganador)
contador2.textContent="La puntuacion del bot es:0"
contador.textContent="Tu puntuacion es:0"
function manejarPuntuaciones(){
    contador.textContent="Tu puntuacion es: " + humanScore
    contador2.textContent="La puntuacion del bot es: " + computerScore
    if (humanScore===5){
        ganador.textContent="Has ganado"
    }
    if (computerScore===5){
        ganador.textContent="Gano la maquina"
    }
}
piedra.addEventListener("click",()=>{
    playRound("tijeras")
    manejarPuntuaciones()
})
papel.addEventListener("click",()=>{
    playRound("tijeras")
    manejarPuntuaciones()
})
tijeras.addEventListener("click",()=>{
    playRound("tijeras")
    manejarPuntuaciones()
})



