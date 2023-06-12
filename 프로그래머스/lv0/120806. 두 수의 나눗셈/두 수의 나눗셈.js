function solution(num1, num2) {
    var answer = num1/num2
    var answer1 = answer*1000
    var answer2 = Math.floor(answer1);
    return answer2;
}