function solution(slice, n) {
    var answer = 0;
    if (n % slice !== 0) {
        answer = Math.ceil(n / slice);
    } else {
        answer = n / slice;
    }
    return answer;
}