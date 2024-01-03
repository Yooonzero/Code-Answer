function solution(sides) {
    var answer = 0;
    // 크기 비교를 해야 한다.
    // 가장 큰 요소값과 나머지 요소를 더한 값을 비교 해야하고
    // 가장 큰 요소값이 나머지를 더한 값보다 작다면 1 크다면 2를 반환한다.
    sides.sort((a, b) => a - b);
    return sides[2] < sides[0] + sides[1] ? 1 : 2;
}