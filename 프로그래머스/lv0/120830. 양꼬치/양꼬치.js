function solution(n, k) {
    var answer = 0;
    var a = Math.trunc(n / 10);
    var yang = n * 12000;
    var umm = k * 2000 - a * 2000;
    answer = yang + umm;
    return answer;
}