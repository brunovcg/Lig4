
// Classe zero => Vazio
// Classe um => Player1
// Classe dois => Player2


const map = [
 [0,0,0,0,0,0],
 [0,0,0,0,0,0],
 [0,0,0,0,0,0],
 [0,0,0,0,0,0],
 [0,0,0,0,0,0],
 [0,0,0,0,0,0],
 [0,0,0,0,0,0]
]

const main = document.getElementById("gameBoard")

let currentPlayer = "Player1"


//  map["click"][indexOf]
// map[0][1]

//  checar vitoria
function checkVictory(){}

// checar empate
function checkDraw(){}

// trocar jogador
function changePlayer(currentPlayer){

if(currentPlayer == "Player1") { currentPlayer = "Player2"} else {
    currentPlayer = "Player1"
}
}


function moveCircle() {}

// resetar jogo
function reset(){}


// variavel jogador atual


// click coluna
// const clicarColuna = document.querySelector(".columnX").addEventListener("click", function(e){
//     const variavel = e.currentTarget
// })


// criação do MAPA com DOM
for(let i = 0; i < map.length; i++) {

    const divColumn = document.createElement("div")
    divColumn.classList.add("column")
    divColumn.id = ("column"+i)
    main.appendChild(divColumn)

    for(let j = 0 ; j < map[i].length ; j++) {

        const divLine = document.createElement("div")
        divLine.classList.add("circle")
        divLine.id = (`${i}-${j}`)
        divColumn.appendChild(divLine)

    } }











