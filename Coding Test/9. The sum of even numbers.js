//반복문으로 0부터 입력된 수 사이 숫자에서 짝수일 때만 더한다.
//짝수는 2로 나누었을 때 나머지가 0이다.

function solution(n) {
    let sum = 0; // 변수 sum에 0이라는 초기값을 할당

    for (let i = 1; i <= n; i++) { // 1부터 n까지 반복
        if (i % 2 == 0) { // i가 짝수인 경우
            sum += i; // sum에 i를 더함
        }
    }

    return sum; // sum을 반환
}