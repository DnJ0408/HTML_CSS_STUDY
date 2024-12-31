//입력 받은 수를 문자로 변경
//각각의 문자를 쪼갠다
//그리도 모든 수를 더해서 기존의 숫자로 나누어준다.
//나누어지면 true 아니면 false를 반환한다.

function solution(x) {
    let har = x.toString(); //입력된 x를 문자열로 변경
    let sum = 0; // 초기값 0을 할당
    
    for (let i = 0; i < har.length; i++) { // 0부터 문자열의 길의-1 까지 반복
        sum += Number(har[i]); // 각각의 문자를 수로 변환해서 더해준다
        }
    return x % sum === 0; //x를 sum으로 나누었을 때 나머지가 0이면 true 아니면 false를 반환
    }