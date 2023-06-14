
const addBtn = document.getElementById('add-btn');
const deleteBtn = document.getElementById('delete-btn');

// 함수의 이름만 쓰면 전달
// 함수 이름 뒤에 ()를 붙이면 해당 함수를 실행하는 것
addBtn.addEventListener('click', functionFactory2().addData);
deleteBtn.addEventListener('click', deleteData);
// addBtn.addEventListener('click', addData);

// 실행하면 함수들이 들어있는 오브젝트를 리턴하는 함수
function functionFactory2() {
    return {
        addData: () => {
            localStorage.setItem('win', 1);
        },
        removeData: () => {}
    }
}

// 실행하면 함수를 리턴하는 함수
// function functionFactory() {
//     return () => {
//         localStorage.setItem('age', 20);
//         sessionStorage.setItem('favorite', 'candy');
//     };
// }

// function addData() {
//     localStorage.setItem('age', 20);
//     sessionStorage.setItem('favorite', 'candy');
// }

// Storage에 들어있는 데이터 꺼내기 (없는 키값을 조회하는 경우 null)
console.log(sessionStorage.getItem('favorite'));
console.log(sessionStorage.getItem('worst'));
console.log(localStorage.getItem('age'));
console.log(localStorage.getItem('weight'));

function deleteData() {
    // # 키 값으로 Storage에 들어있는 데이터를 삭제한다 (성공/실패 여부 알 수 없음)
    localStorage.removeItem('age');
    localStorage.removeItem('weight');
};

// 문제
const hands = ['paper.jpg', 'rock.jpg', 'Scissors.jpg'];

const youDiv = document.getElementById('you');
const comDiv = document.getElementById('com');
const resultDiv = document.getElementById('result');

const paperBtn = document.getElementById('paper');
const rockBtn = document.getElementById('rock');
const scissorsBtn = document.getElementById('scissors');

paperBtn.addEventListener('click', () => startGame(0));
rockBtn.addEventListener('click', () =>  startGame(0));
scissorsBtn.addEventListener('click', () => startGame(2));

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', reset);

function startGame(hand) {
    
    const ran = parseInt(Math.random() * 3);

    const result = calResult(hand, ran);
    recordResult(result);

    let resultText;
    if(result === 0) {
        resultText = '승리'
    } else if(result === 1) {
        resultText = '무승부'
    } else {
        resultText = '패배'
    }
    
    const conDiv = document.createElement('div');
    const con = document.createTextNode(resultText);
    conDiv.appendChild(con);
    if(resultDiv.childElementCount !== 0){ 
        resultDiv.removeChild(resultDiv.firstChild);
    }
    resultDiv.append(conDiv);

    const image1 = document.createElement('img');
    image1.src = '../resource/image/rockpaperscissors/' + hands[hand];
    image1.width = 200;
    image1.className = 'hands';

    const image2 = document.createElement('img');
    image2.src = '../resource/image/rockpaperscissors/' + hands[ran];
    image2.width = 200;
    image2.className = 'hands';

    if(youDiv.childElementCount !== 0) {
        youDiv.removeChild(youDiv.firstChild);
        comDiv.removeChild(comDiv.firstChild);
    }
    
    youDiv.append(image1);
    comDiv.append(image2);

    setLog();
}

const str = ['win', 'draw', 'lose'];

function calResult(num1, num2) {

    var temp = num2 + 1 > 2 ? 0 : num2 + 1;

    if(num1 === temp) {
        return 2;      
    } else if(num1 === num2) {
        return 1;
    } else {
        return 0;
    }
};

function recordResult(result) {
    preVal = localStorage.getItem(str[result]) || 0;
    localStorage.setItem(str[result], parseInt(preVal) + 1);
}

function reset() {
    str.forEach((str) => localStorage.removeItem(str));
    setLog();
}

const tableWin = document.getElementById(str[0]);
const tableDraw = document.getElementById(str[1]);
const tableLose = document.getElementById(str[2]);

setLog();

function setLog() {
    tableWin.innerText = '';
    tableDraw.innerText = '';
    tableLose.innerText = '';

    const winNum = parseInt(localStorage.getItem(str[0])) || 0;
    const drawNum = parseInt(localStorage.getItem(str[1])) || 0;
    const loseNum = parseInt(localStorage.getItem(str[2])) || 0;

    tableWin.append(winNum);
    tableDraw.append(drawNum);
    tableLose.append(loseNum);
}