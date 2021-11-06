//초기 변수값
let num = 0;
//목적값
let targetX = 0;

let count = 0;//카운트
let action = 200;//이미지 전화시간의 간격
let sWidth = 600;//li 의 가로크기
let sNum = 5;//li의 숫자
let go = true;//진행 시 논리 값

//기본 셋업하기 onload
window.addEventListener('DOMContentLoaded', (e) => {
    //temp 복재
    //temp -> ul복재
    //#gall -> 뒤로 temp 넣기
    const temp = document.querySelector('.box').cloneNode(true); //cloneNode는 복사
    document.querySelector('#gall').append(temp);//복사한걸 #gall안의 마지막으로 붙이기

    //스타일 정리
    //box -> width
    //#gall -> width
    document.querySelector('.box').style.width = sWidth * sNum + 'px';
    document.querySelector('#gall').style.width = (sWidth * sNum) * 2 + 'px';

    //timer 작동
    setInterval(motion, 10);
    //이벤트 정리
    //li들
    const btn = document.querySelectorAll('.box>li');

    btn.forEach((btn) => {
        btn.addEventListener('mouseover', (event) => {
            go = false;
        })
    });

    btn.forEach((btn) => {
        btn.addEventListener('mouseout', (event) => {
            go = true;
        })
    });
    //버튼
    const Prev = document.querySelector('#prev');
    const Next = document.querySelector('#next');
    Prev.addEventListener('click', prev);
    Next.addEventListener('click', next);

    //circle
    const cirM = document.querySelectorAll('.nav>li');
    cirM.forEach((cirm) => {
        cirm.addEventListener('click', (event) => {
            const data = cirm.getAttribute('data-num');
            cir = data;
            circle();
            targetX = -sWidth * (data - 1);
        });
    });

});
//기본 움직임 제어
function motion() {
    if (go) {
        ++count;
        document.querySelector('#info').innerHTML = count;

        if (count == action) {
            next();
            count = 0;
        }
    }

    num += 0.1 * (targetX - num);
    document.querySelector('#gall').style.left = num + 'px';

}
//circle기본
let cir = 1;
function circle() {
    for (i = 1; i <= sNum; i++) {
        document.querySelector('#g' + i).style.backgroundColor = "black";
    }
    document.querySelector('#g' + cir).style.backgroundColor = "red";
}
// circle();
//prev방향
function prev() {
    targetX += 600;
    if (targetX > 0) {
        num = sWidth * sNum;
        targetX = -sWidth * (sNum - 1);
    }
    //circle
    cir--;
    if (cir < 1) { cir = sNum; }
    circle();
}
//next방향
function next() {
    //기본움직임
    targetX -= 600;
    //조건
    if (targetX < -sWidth * (sNum * 2 - 1)) {
        num = -sWidth * (sNum - 1);
        targetX = -sWidth * sNum;
    }
    //circle
    cir++;
    if (cir > sNum) { cir = 1; }
    circle();
}
