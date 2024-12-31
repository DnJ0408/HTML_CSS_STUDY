// 1부터 정수 n-1까지 반복
// 만약 n을 i로 나누었을 때 나머지가 1이면 즉시 반환

function solution(n) {
    for (let i = 1; i < n; i++) { // 1부터 n-1까지 반복
        if (n % i == 1) { // 만약 나누었을 때 나머지가 1이면
            return i; // 바로 반환
        }
    }
}