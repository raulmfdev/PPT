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
function getHumanChoice(){
    let eleccion=prompt("Introduzca un valor valido")
    eleccion.toLowerCase()
    return eleccion
}
function playRound(c=getComputerChoice(), h=getHumanChoice()){
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
    for (let i=0;i<5;i++){
        console.log(playRound())
    }
    if (humanScore<computerScore){
        console.log("has perdido la partida")
    }
    else if (humanScore>computerScore){
        console.log("has ganado la partida")
    }
    humanScore=0
    computerScore=0
}
playGame()