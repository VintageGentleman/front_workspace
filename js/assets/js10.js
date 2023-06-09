const snacks = ['초코파이', '초코하임', '화이트초코하임', '마가렛뜨', '치토스', '프링글스', '가나초콜릿', '양파링', '바나나킥', '오감자'];

console.log(snacks);

// join(sep) : sep으로 이어붙인다
console.log(snacks.join("/"));

// push(item) : 배열의 맨 뒤에 원하는 값을 추가한다, 추가한 뒤에 길이를 반환한다
console.log(snacks.push('포스틱'));
console.log(snacks.push('에이스'));

console.log(snacks, snacks.length);

// pop() : 맨뒤의 값을 꺼내면서 삭제
let item = snacks.pop();
console.log('방금꺼낸 아이템(pop): ', item);
console.log(snacks);

// shift() : 맨앞의 값을 꺼내면서 삭제
item = snacks.shift();
console.log('방금꺼낸 아이템(shift): ', item);
console.log(snacks);

// unshift() : 맨앞에 값을 추가
let len = snacks.unshift('이클립스');
console.log(snacks, len);

// reverse() : 현재 배열을 거꾸로 뒤집는다
snacks.reverse();
console.log(snacks);

// sort() : 정렬한다. 기본적인 해당 값의 기준을 사용한다.
snacks.sort();
console.log(snacks);

const scores = [100, 55, 5899, 1557, 1234, 9999, 1, -50, -8000];

// sort(comparator) : 정렬의 기준을 직접 설정한다.
let i = 0;
scores.sort(function myComparator(a, b) {
    console.log(`[${i++}]: ${a} vs ${b}의 결과: ${b - a},
        ${b - a > 0 ? '자리를 바꾼다' : '자리를 바꾸지 않는다'}`);
    return b - a;
});
console.log(scores);

// a.localeCompare(b) : 둘 중 어떤 단어가 사전상으로 앞에 있는지 숫자로 알려준다
console.log('air'.localeCompare('airplane'));
console.log('pineapple'.localeCompare('icecream'));

/* 
    # 연습

    1. 배열에 랜덤으로 1 ~ 45 사이의 숫자를 1000개 추가한다
       hint. Math.random()을 사용

    2. 각 숫자들이 나온 횟수를 센다

    3. 가장 많이나온 숫자 6개를 HTML에 출력해준다
*/

let numArr = [];
for(i = 0; i < 1000; ++i){
    numArr.push(parseInt(Math.random() * 45 + 1));
};

let count = [];
for(i = 1; i <= 45; ++i) {
    let cal = 0;
    for(j = 0; j < 1000; ++j){
        if(numArr[j] === i) cal++;
    }

    count.push(i + '번 ' + cal);
};

count.sort(function myComparator(a, b) {
    return b.split(' ').pop() - a.split(' ').pop();
});

const displayDiv = document.getElementById('container');

for(i = 0; i < 6; ++i) {
    displayDiv.innerHTML += '<div class="num">' + count[i].split('번').shift() + '</div>';
};

console.log(count);