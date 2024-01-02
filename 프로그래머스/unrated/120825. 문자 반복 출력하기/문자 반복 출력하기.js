function solution(my_string, n) {
    var answer = '';
    var string = [...my_string];
    answer = string.map((str) => str.repeat(n)).join('');
    return answer;
}