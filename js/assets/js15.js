console.log(window);

// 웹 브라우저 크기
console.log(window.innerHeight);
console.log(window.innerWidth);

// 경고창 띄우는 함수
// window.alert('경고!');
// window.prompt('입력창입니다...');
// window.confirm('확인창');

// 모니터에 대한 정보
console.log(window.screen);

// 현재 웹 페이지의 HTML코드에 대한 정보
console.log(window.document);

// 각 탭의 페이지 이동 내역 (뒤로가기 막기 등 구현 가능)
console.log(window.history);
console.log(window.history.length);

const prevPage = () => {
    window.history.back();
};

const nextPage = () => {
    window.history.forward();
};

const gotoPage = (num) => {
    window.history.go(num);
}

// window.history.state - 사용자가 직접 정의한 방문 이력
// 새로운 방문 이력을 추가한다 (다음 페이지가 된다)
// 방문이력 -> 15_BOM.html >> 네이버 >> 구글 >> 다음 >> 15_BOM.html >> pushState로 추가
//                                            go(-1)     (현재)         go(1)
// file://로 시작하는 경로는 state에 추가할 수 없다 (보안상의 이유) 
window.history.pushState(null, null, './05_연산자.html'); // go(1)
window.history.pushState(null, null, './06_조건문.html'); // go(2)

// 현재 위치(URL)에 대한 정보를 가지고 있는 객체
console.log(window.location);
console.log(window.location.protocol);
console.log(window.location.pathname);

// ※ window.location.href의 값을 바꾸면 현재 페이지를 변경하게 된다
// window.location.href = 'https://naver.com';

// window.location.reload(); // 새로고침

console.log(window.navigator);
