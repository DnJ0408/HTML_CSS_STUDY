// 첫번째 배열의 수 부터 마지막 배열의 수까지 차례대로 더해줍니다.
// 그리고 배열 내의 숫자의 갯수 만큼 나누어줍니다.
// 중요한 점은 배열의 첫번째 숫자는 1번째가 아니라 0번째라는 것

function solution(numbers) {
    let sum = 0; // sum 에 0을 할당
    
    for (let i = 0; i < numbers.length; i++) { //배열의 길이 보다 - 1 낮은값만큼 반복
        sum += numbers[i]; // 배열의 i 번째수를 sum에 더해준다.
    }
    return sum / numbers.length; // 마지막으로 배열의 길이만큼 나누어준다.
}