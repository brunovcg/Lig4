
// Classe zero => Vazio
// Classe um => Player1
// Classe dois => Player2


let map = [
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


//  checar vitoria
function checkVictory(){}

// checar empate
function checkDraw(){}

// trocar jogador
function changePlayer(){
if (currentPlayer === "Player1") { 
    currentPlayer = "Player2"
    return
}
    currentPlayer = "Player1"
}

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

    // DAR DISPLAY NONE PRAS DIVS DE VITÓRIA E EMPATE
}


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




const moveCircle = (e) => {
    const currentColumn = e.currentTarget;
    const columnOnMap = currentColumn.id.substring(6)
    const columnIsFull = map[columnOnMap].indexOf(0) === -1

    if (columnIsFull) {return} 

    const index = map[columnOnMap].indexOf(0)

    const mapPosition = document.getElementById(`${columnOnMap}-${index}`)
    
    if (currentPlayer === 'Player1') {
        mapPosition.classList.add('player1')
        map[columnOnMap][index] = 1
    }
    if (currentPlayer === 'Player2') {
        mapPosition.classList.add('player2')
        map[columnOnMap][index] = 2
    }

    checkVictory()
    checkDraw()
    changePlayer()

    console.log(currentPlayer)

    
}

const columns = document.querySelectorAll('.column')

columns.forEach(item => {
    item.addEventListener('click', moveCircle)
}) 






