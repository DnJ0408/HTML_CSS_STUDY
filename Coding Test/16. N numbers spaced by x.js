// 두 수 x, n 을 입력받고
// x씩 증가 하는 숫자를 n개 가지는 배열을 반환한다.

function solution(x, n) {
    let answer = []; // answer 배열을 초기화
    
    for (let i = 1; i <= n; i++) { // 1부터 n번까지 반복
        answer.push(x * i); // x * i 값을 배열에 추가해준다.
    }
    return answer;
}