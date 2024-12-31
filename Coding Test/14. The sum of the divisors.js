// 반복문을 통해 1 부터 정수 n 까지 n으로 나누어준다.
// 조건문을 사용해서 나누었을 때 나머지가 0일때만 더해준다.

function solution(n) {
    
    let sum = 0; // 초기값 0을 할당
    
    for (let i = 1; i <= n; i++) { // 1부터 정수n까지 반복
        if (n % i == 0) { // 만약 n을 i로 나누었을때 나머지가 0이라면(정수n의 약수)
            sum += i; // sum에 i를 더해준다
        }
    }
    return sum;
}