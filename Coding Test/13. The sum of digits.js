// 입력된 자연수를 하나 하나 분리한다.
// 각 분리 된 숫자를 더한다.
// 합을 반환한다.
// 하지만 어떻게...?

function solution(n) {
    
    let str = n.toString(); // .toString Method로 숫자를 문자로 변환
    let sum = 0; // sum 변수의 초기값 0을 할당
    
    for (let i = 0; i < str.length; i++) { // 0번째부터 문자열의 길이-1 만큼 반복
        sum += Number(str[i]); // 변수 str의 i번째 문자들을 전부 숫자로 변환해 더해줌
    }
    return sum;
}
 