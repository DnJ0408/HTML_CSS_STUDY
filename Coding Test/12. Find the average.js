// 입력 받은 값을 모두 더해준다
// 배열의 숫자만큼 나누어준다.
function solution(arr) {
    let sum = 0; // 초기값 0 할당
        
        for (let i = 0; i < arr.length; i++) { // 0번째 부터 배열의 길이-1까지 반복시행
            
            sum += arr[i]; // 배열의 i번째 숫자 까지 차례대로 더해준다.
        }
        return sum / arr.length; // 총 더한 숫자를 배열의 길이만큼 나누어준다.
}