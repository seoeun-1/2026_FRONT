/* 
문제 1: 배열에서 최댓값 찾기
주어진 숫자 배열에서 가장 큰 값을 찾아 콘솔에 출력하는 프로그램을 작성하시오. (단, Math.max() 함수 사용 금지)
let numbers = [23, 5, 67, 12, 88, 34]; 
*/
//반복문 없이 풀이
//let max = numbers[0]; // 배열명[인덱스] : 특정한 인덱스 번째 요소 값 호출 // 첫번째 값을 최댓값 지정
//if (max < numbers[1]){max = numbers[1]} //만약에 [1] 인덱스 요소 값이 더 크면 최댓값으로 지정
//if (max < numbers[2]){max = numbers[2]}
//if (max < numbers[3]){max = numbers[3]}
//if (max < numbers[4]){max = numbers[4]}
//if (max < numbers[5]){max = numbers[5]}
//console.log(max)
// vs 반복문 풀이 : 반복되는 코드 : if (max < numbers[1]){max = numbers[?]}, 반복없는 코드( 패턴 : 1부터 5까지) 
for (let index = 1 ; index <= 5 ; index ++){
    if(max < numbers[index]){max = numbers[index]}
}
console.log(max)

/*
문제 2: 별 찍기 (기본 역삼각형) : for 중첩 반복문을 사용하여 아래와 같은 모양의 별을 출력하시오.
        행          열                  =바둑판 = 구구단(단=행, 곱=열)
        line(줄 \n) 별( * )
*****   line = 1    star 1 2 3 4 5
****    line = 2    star 1 2 3 4 
***     line = 3    star 1 2 3 
**      line = 4    star 1 2 
*       line = 5    star 1 
*/
//line은 1부터 5까지 1씩증가 하면서 '\n' 출력
//star은 1부터 (마지막줄수-현재줄수+1) 1씩 증가 하면서 '*' 출력  // 줄마다 별 출력 ? 별 마다 줄 출력?
let output = ''
for( let line = 1 ; line <= 5 ; line++ ){
    for(let star = 1 ; star <= 5- line +1 ; star++){
        out += '*'
    }
    output = output + '\n' // vs output += '\n'
} // for end
console.log(output)