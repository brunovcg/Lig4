
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

const main = document.getElementById("gameBoard")

let currentPlayer = "Player1"


function checkDiagonalTopRight(col,line) {
    const columnExists = 
    console.log(col,line)

    let a = map[col+1][line+1] | 0
    console.log(a)
    // map[col][line], map[col+1][line+1], map[col+2][line+2], map[col+3][line+3])
}

function checkVictoryDiagonal(col,line) {
    // function check(a = -1,b = -1,c = -1,d = -1) {
    //     if (a === -1 || b === -1 || c === -1 || d === -1) {return false}
    //     let sequenceDiv = [a,b,c,d] 
    //     for (let i = 1; i < sequenceDiv.length; i++) {
    //         if (sequenceDiv[i] !== sequenceDiv[i-1]) {
    //             return true
    //         }
    //     }
    // }
    const current = map[col][line]
    if (current === map[col+1][line+1] && current === map[col+2][line+2] && current === map[col+3][line+3]) {
        return true
    }
    if (current === map[col-1][line-1] && current === map[col-2][line-2] && current === map[col-3][line-3]) {
        return true
    }
    if (current === map[col+1][line-1] && current === map[col+2][line-2] && current === map[col+3][line-3]) {
        return true
    }
    if (current === map[col-1][line+1] && current === map[col-2][line+2] && current === map[col-3][line+3]) {
        return true
    }
    return false
}

//  checar vitoria
function checkVictory(col,line){

}

// checar empate
function checkDraw(){
    let merged = [].concat.apply([], map);
    let checkNum = merged.includes(0);
    if(!checkNum) {
      //   mensagem. innerHTML =
      // TIRAR HIDDEN DA TELA DE DRAW
    }
}

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
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            map[i][j] = 0;
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


column2
column3

const moveCircle = (e) => {
    const currentColumn = e.currentTarget;
    const columnOnMap = Number(currentColumn.id.substring(6))
    const columnIsFull = map[columnOnMap].indexOf(0) === -1 

    if (columnIsFull) {return} 

    const lineOnMap = map[columnOnMap].indexOf(0) 

    const mapPosition = document.getElementById(`${columnOnMap}-${lineOnMap}`)
    
    if (currentPlayer === 'Player1') {
        mapPosition.classList.add('player1')
        map[columnOnMap][lineOnMap] = 1
    }
    if (currentPlayer === 'Player2') {
        mapPosition.classList.add('player2')
        map[columnOnMap][lineOnMap] = 2
    }
    checkVictoryDiagonal(columnOnMap,lineOnMap)
    // checkVictory(columnOnMap,lineOnMap)
    checkDraw()
    changePlayer()

    
}

const columns = document.querySelectorAll('.column') 

columns.forEach(item => {
    item.addEventListener('click', moveCircle)
}) 






