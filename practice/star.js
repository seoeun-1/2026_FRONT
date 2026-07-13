// 별 모양을 저장할 문자열 변수
let output = '';

/* ==========================
   위쪽 마름모 출력
   별 개수 : 1 → 10
========================== */

for (let line = 1; line <= 10; line++) {

    // 앞쪽 공백 출력
    // 줄이 내려갈수록 공백은 하나씩 감소
    for (let blank = 1; blank <= 10 - line; blank++) {
        output += ' ';
    }

    // 별 출력
    // line의 값만큼 별 출력
    for (let star = 1; star <= line; star++) {
        output += '* ';
    }

    // 줄바꿈
    output += '\n';
}

/* ==========================
   아래쪽 마름모 출력
   별 개수 : 9 → 1
========================== */

// 가운데 줄(별 10개)은 이미 출력했으므로
// line을 9부터 시작
for (let line = 9; line >= 1; line--) {

    // 앞쪽 공백 출력
    for (let blank = 1; blank <= 10 - line; blank++) {
        output += ' ';
    }

    // 별 출력
    for (let star = 1; star <= line; star++) {
        output += '* ';
    }

    // 줄바꿈
    output += '\n';
}

// HTML의 <pre id="star-output">에 출력
document.querySelector('#star-output').textContent = output;