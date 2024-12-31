// 입력한 수의 제곱근을 구한다.
// 정수로 나온다면 제곱근에 1을 더해주고 제곱하고 반환한다.
// 제곱근이 정수가 아니라면 -1을 반환한다.

function solution(n) {
    let sqrt = Math.sqrt(n); // 변수 square root에 제곱근을 할당
    
    if (Number.isInteger(sqrt)) { // 그 수가 정수라면,
        return (sqrt + 1) ** 2 // 1을 더해주고 제곱해주고 반환
    } else { // 그게 아니라면
        return -1; // -1을 반환한다.
    }
}