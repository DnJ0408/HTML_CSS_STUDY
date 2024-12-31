// 입력된 숫자를 문자로변환
// 문자를 하나씩 쪼개서 배열에 할당
// 반복문으로 큰 숫자 부터 1까지
// 문자를 숫자로 변경후 배열에 추가

function solution(n) {
    
    let str = n.toString(); //숫자를 문자열로 변경
    let arr = []; //배열에 초기값 할당
    
    for (let i = 0; i < str.length; i++) { //0부터 배열의 길이-1까지 반복
        arr.push(Number(str[i])); //각 숫자를 배열에 할당해준다
    }
    
    arr.sort( function(a, b) {return b - a;}) //a와 b를 비교하며 내림차순
    return Number(arr.join('')); //내림차순된 배열을 하나의 문자열로 합친 후 숫자로 반환
}