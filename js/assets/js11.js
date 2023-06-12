const numbers = [];

for(i = 0; i < 10; ++i) {
    numbers[i] = i * 10;
}

console.log(numbers);

/*
     # 배열.forEach() : 배열의 모든 값으로 전달한 함수를 실행한다
*/
function func1(num) {
    console.log(num * 3 + '입니다.');
}

// 해당 배열의 값을 하나씩 꺼내면서 반복문을 돌리는 것과 비슷하다
numbers.forEach(func1);
numbers.forEach(function (num) {
    console.log('func2입니다...' + num);
});
// function 키워드 대신 => 화살표를 사용해 함수를 정의할 수도 있다 (Arrow Function)
numbers.forEach((num) => {
    console.log('func3입니다...' + (num - 1));
});

/* 
    # 배열.map() : map에 전달한 함수의 리턴값들로 구성된 새로운 배열을 리턴한다
                  (forEach()는 리턴이 없었고, map()은 리턴이 있다)
*/
const result = numbers.map((num) => {
    return num + 5;
});
// 만약 Arrow Function에 한 줄 들어가는 명령어 return이라면 {}를 생략할 수 있다
const result2 = numbers.map(num => num * 2);

console.log(result);
console.log(result2);

// 연습1: 0 ~ 100점의 점수를 가진 scores배열을 생성하고 
//       해당 배열을 사용해 grades 배열을 만들어보세요
const scores = [];
for(i = 0; i <= 100; ++i) {
    scores[i] = i;
}

const grades = scores.map((score) => {
    if(score >= 90) {
        return 'A';
    } else if(score >= 80) {
        return 'B';
    } else if(score >= 70) {
        return 'C';
    } else if(score >= 60) {
        return 'D';
    } else if(score >= 50) {
        return 'E';
    } else {
        return 'F';
    }
});

console.log(scores);
console.log(grades);

// 문제풀기

const scores2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1001];

const grades2 = scores2.map((score) => {
    var grade;

    if(score > 100 || score < 60) {
        grade = 'F';
    } else if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 60) {
        grade = 'D';
    } 

    // 숫자 배열을 받았다고 해서 숫자만 리턴해야하는 것은 아니다
    return {score: score, grade: grade};
});

console.log(grades2);

/*
    # 배열.filter() : 전달한 함수에 각 값을 넣어서 true를 리턴한 값만 남기는 함수
                     (전달하는 함수는 반드시 boolean 타입 값을 리턴해야 한다)
*/

const snacks = ['초코파이', '초코하임', '화이트하임', '초코퍼지', '마가렛뜨', '초코틴틴', '가나초콜렛'];

const chocos = snacks.filter((snack) => {
    return snack.includes('초코');
});

console.log(chocos);

/* 
    배열.reduce(); 
    
    배열의 모든 값을 이용해 하나의 결과를 만들어내는 함수
*/

const total = numbers.reduce((prev, curr) => {
    console.log( `${prev} + ${curr} : return ${prev + curr}`);
    return prev + curr;
});

console.log(total);

// reduce를 이용해 가장 큰 수를 구하는 경우
const max = numbers.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

console.log(max);

// reduce를 이용해 가장 작은 수를 구하는 경우
const min = numbers.reduce((prev, curr) => {
    return prev < curr ? prev : curr;
});

console.log(min);

/* 
    (1) 학번, 이름, 국/영/수 랜덤 점수를 가진 
        학생 100명의 자바스크립트 오브젝트 배열을 생성

        ex) STU0001 / 학생1 / ...

    (2) 각 학생들의 오브젝트에 평균 점수를 추가

    (3) 수학 점수가 60점 미만인 학생들로 이루어진 배열을 생성

    (4) 모든 학생들의 평균 영어 점수

    (5) 위의 모든 내용으로 웹 페이지를 보기좋게 구성할 것
*/

let students = [];

function ranScore() {
    return parseInt(Math.random() * 101);
}

// (1)
for(i = 0; i < 100; ++i) {
    var str = '' + (i + 1); 
    students[i] = {stuNum: 'STU' + str.padStart(3, '0'), stuName: '학생' + str, kor: ranScore(), eng: ranScore(), math: ranScore()};
}

// (2)
for(i = 0; i < students.length; ++i) {
    var stu = students[i];
    stu.avg = parseInt((stu.kor + stu.eng + stu.math) / 3);
}

// (3)
const failedMath = students.filter((student) => {
    return student.math < 60;
})

// (4)
const totalEng = students.reduce((prev, curr) => {
    var stu1 = prev.eng === undefined  ? prev : prev.eng;
    return stu1 + curr.eng;
})

const avgEng = totalEng / students.length;

// (5)  
renderTable("stuTable", students);
renderTable("mathTable", failedMath);

const avgEngDiv = document.getElementById("avgEng");
avgEngDiv.innerHTML += avgEng + '점';

function toStuTable(row) {
    var tr = '';
    tr += '<tr>';
    tr += '  <td>' + row.stuNum + '</td>';
    tr += '  <td>' + row.stuName + '</td>';
    tr += '  <td>' + row.kor + '</td>';
    tr += '  <td>' + row.eng + '</td>';
    tr += '  <td>' + row.math + '</td>';
    tr += '  <td>' + row.avg + '</td>';
    tr += '</tr>';
    return tr;
}

function renderTable(id, list) {
    var size = list.length;
    var trList = '';
    for(i = 0; i < size; ++i) {
      trList += toStuTable(list[i]);
    }

    document.getElementById(id).innerHTML += trList;  
}

// 풀이

const an_students = [];

// 리턴만 하는 한 줄 짜리 함수는 이렇게 정의할 수 있다
const getRandomScore = () => parseInt(Math.random() * 100 + 1); 

for(var i = 0; i < 100; ++i) {
    an_students.push({
        snum: 'stu' + i,
        sname: '학생' + i,
        kor: getRandomScore(),
        eng: getRandomScore(),
        math: getRandomScore()
    });
}

// (2) 각 학생에게 평균 점수를 추가
an_students.forEach(stu => {
    stu.avg = Math.round((stu.kor + stu.eng + stu.math) / 3 * 100) / 100;
});

console.log(an_students);

// (3) 수학 점수 60점 미만 학생들만
const supplementary = an_students.filter(stu => {
    return stu.math < 60;
})
console.log(supplementary);

// (4) 모든 학생들의 평균 영어 점수 
const an_engAvg = an_students
    .map(stu => stu.eng)
    .reduce((prev, curr) => {return prev + curr}) / an_students.length;
console.log(an_engAvg);

// reduce(callback(curr, prev), initialValue) : reduce의 다른 오버로딩 사용
const an_engAvg2 = an_students.reduce((tot, curr) => {return tot + curr.eng}, 0) / an_students.length;

console.log(an_engAvg2);
