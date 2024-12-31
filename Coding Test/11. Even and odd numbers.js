// 조건문을 사용해서 홀수와 짝수를 나눈다.
// 다른 값을 리턴하게 만든다.

function solution(num) {
    if (num % 2 == 0) { // 2로 나눈 나머지가 0이면
        return "Even" // "짝수"를 반환
    } else { // 그게 아니라면
        return "Odd" // "홀수"를 반환
    }
}