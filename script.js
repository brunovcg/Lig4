
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

//  checar vitoria
function checkVictory(col,line){

    function checkVertical(coluna,linha) {

        if (map[coluna][linha] == map[coluna][linha-1] && map[coluna][linha] == map[coluna][linha-2] && map[coluna][linha] == map[coluna][linha-3]) {console.log(`${currentPlayer} win!`); return true}

        if (map[coluna][linha] == map[coluna][linha-1] && map[coluna][linha] == map[coluna][linha-2] && map[coluna][linha] == map[coluna][linha+1]) {console.log(`${currentPlayer} win!`); return true}

        if (map[coluna][linha] == map[coluna][linha-1] && map[coluna][linha] == map[coluna][linha+1] && map[coluna][linha] == map[coluna][linha+2]) {console.log(`${currentPlayer} win!`); return true}

        if (map[coluna][linha] == map[coluna][linha+1] && map[coluna][linha] == map[coluna][linha+2] && map[coluna][linha] == map[coluna][linha+3]) {console.log(`${currentPlayer} win!`); return true}

        return false

    } checkVertical(col,line)

    function checkHorizontal(coluna,linha) {
        if (coluna >= 3) {if (map[coluna][linha] == map[coluna-1][linha] && map[coluna][linha] == map[coluna-2][linha] && map[coluna][linha] == map[coluna-3][linha]) {console.log(`${currentPlayer} win!`); return true}}

        else if (coluna >= 2 && coluna <= 5) {if (map[coluna][linha] == map[coluna-1][linha] && map[coluna][linha] == map[coluna-2][linha] && map[coluna][linha] == map[coluna+1][linha]) {console.log(`${currentPlayer} win!`); return true}}

        else if (coluna >= 1 && coluna <= 4 ) {if (map[coluna][linha] == map[coluna-1][linha] && map[coluna][linha] == map[coluna+1][linha] && map[coluna][linha] == map[coluna+2][linha]) {console.log(`${currentPlayer} win!`); return true}}

        else if (coluna <= 3) {if (map[coluna][linha] == map[coluna+1][linha] && map[coluna][linha] == map[coluna+2][linha] && map[coluna][linha] == map[coluna+3][linha]) {console.log(`${currentPlayer} win!`); return true}}

         else {return false}
     } checkHorizontal(col,line)

    
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
    document.getElementById('p2').classList.add('playerFocus')
    document.getElementById('p1').classList.remove('playerFocus')
    return
}
currentPlayer = "Player1"
document.getElementById('p1').classList.add('playerFocus')
document.getElementById('p2').classList.remove('playerFocus')
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

const btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", reset)

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
    const columnOnMap = parseInt(currentColumn.id.substring(6))
    const columnIsFull = map[columnOnMap].indexOf(0) === -1

    if (columnIsFull) {return} 

    const lineOnMap = parseInt(map[columnOnMap].indexOf(0))

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


// Criação do botão para as regras
const btnRules = document.getElementById("btnRules");
const rulesText = document.getElementById("rulesText");
let str = ' <i class="fas fa-file"></i> Regras'
function showRules(){
    rulesText.classList.toggle("hidden")
    if(btnRules.innerHTML === str){
        btnRules.innerHTML = `<i class="fas fa-file"></i> Fechar regras`
    }
    else if (btnRules.innerHTML !== str) {
        btnRules.innerHTML = str
    }
}

btnRules.addEventListener("click", showRules)