function solution(n, t) {
    var answer = n;
    // n에다가 2를 곱하는 과정을 t만큼 반복해야 한다.
    for (i = 1; i < t + 1; i++) {
        answer = answer * 2;
    }
    return answer;
}