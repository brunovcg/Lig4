
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

const mapReset = [...map]

const main = document.getElementById("gameBoard")

let currentPlayer = "Player1"


//  map["click"][indexOf]
// map[0][1]

//  checar vitoria
function checkVictory(){}

// checar empate
function checkDraw(){}

// trocar jogador
function changePlayer(){}


function moveCircle() {}

// resetar jogo
function reset(){
    map = mapReset;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            const circleOnMap = document.getElementById(`${i}-${j}`)
            circleOnMap.classList.remove('player1')
            circleOnMap.classList.remove('player2')
        }
    }
    currentPlayer = 'Player1'
}


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











