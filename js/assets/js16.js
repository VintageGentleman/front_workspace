const out = document.querySelector('#out');

let itemNum = 1;

let newDiv, firstDiv;

const pushItem = () => {
    // (1) 새 element node를 생성
    newDiv = document.createElement('div');
    newDiv.classList.add('push');
    // (2) 새 text node를 생성
    newText = document.createTextNode('item' + itemNum++);
    // (3) element node에 text node를 붙인다
    newDiv.appendChild(newText);
    // (4) 새 element node를 out에 추가한다
    out.appendChild(newDiv);


    // 자식 node의 개수를 알 수 있다
    console.log(out.childElementCount);
};

// Arrow Function 방식으로 선언한 함수는 선언 시점에 뒤늦게 초기화되기 때문에 
// 코드 윗부분에서 사용할 수 없다
const popItem = () => {
    if(out.childElementCount === 0) {
        alert('더 이상 지울 수 없습니다.');
        return;
    }

    const lastDiv = document.querySelector('#out > :last-child');
    out.removeChild(lastDiv);
    itemNum--;
};

const unshiftItem = () => {
    newDiv = document.createElement('div');
    newDiv.className = 'unshift';
    newText = document.createTextNode('item' + itemNum++);
    newDiv.appendChild(newText);
    
    out.prepend(newDiv);
};

const shiftItem = () => {
    if(out.childElementCount === 0) {
        alert('더 이상 지울 수 없습니다.');
        return;
    }

    firstDiv = document.querySelector('#out > :first-child');
    out.removeChild(firstDiv);
    itemNum--;
};