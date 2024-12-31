// 0초과 180 이하 값인 숫자를 입력할 때 
// 값에 따라 다른 return 값을 갖게한다.
// 조건문 if, else if, 그리고 else 를 사용하면 된다고 생각한다.

function solution(angle) {
    if (0 > angle || angle > 180) { // 음수값과 180보다 큰 값이 입력될때
        return "Invalid angle"; // "Invalid angle"를 반환하게 만듦
    }
    if (0 < angle && angle < 90 ) { // 두 가지 조건을 부여할 땐 &&연산자를 사용
        return 1;
    } else if (angle == 90) { // " = " 는 할당한다는 의미이다.
        return 2;
    } else if (90 < angle && angle < 180) { // &&연산자를 사용해 두가지 조건을 충족
        return 3;
    } else if (angle == 180) { // 마지막으로 angle값이 180 일때
        return 4; // 4를 반환한다.
    }
}