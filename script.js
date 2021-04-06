
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
let draw = document.getElementById("msgDraw")
//  checar vitoria
function checkVictory(col,line){
    function checkHorizontal(coluna, linha) {
        if(map[0][linha] != 0 && map[0][linha] == map[1][linha] && map[0][linha] == map[2][linha] && map[0][linha] == map[3][linha]) {console.log(`${currentPlayer} win!`); return true}
        if(map[1][linha] != 0 && map[1][linha] == map[2][linha] && map[1][linha] == map[3][linha] && map[1][linha] == map[4][linha]) {console.log(`${currentPlayer} win!`); return true}
        if(map[2][linha] != 0 && map[2][linha] == map[3][linha] && map[2][linha] == map[4][linha] && map[2][linha] == map[5][linha]) {console.log(`${currentPlayer} win!`); return true}
        if(map[3][linha] != 0 && map[3][linha] == map[4][linha] && map[3][linha] == map[5][linha] && map[3][linha] == map[6][linha]) {console.log(`${currentPlayer} win!`); return true}
        return false
    } 
    checkHorizontal(col,line)
}

// checar empate
function checkDraw(){
    let merged = [].concat.apply([], map);
    let checkNum = merged.includes(0);
    if(!checkNum) {
       draw.innerHTML = "Empatou!";
       draw.style.display = "block";
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




const moveCircle = (e) => {
    const currentColumn = e.currentTarget;
    const columnOnMap = currentColumn.id.substring(6)
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

    checkVictory(columnOnMap,lineOnMap)
    checkDraw()
    changePlayer()

    
}

const columns = document.querySelectorAll('.column')

columns.forEach(item => {
    item.addEventListener('click', moveCircle)
}) 






