function solution(absolutes, signs) {
    let answer = 0;

    for (i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer = answer + absolutes[i];
        } else if (signs[i] === false) {
            answer = answer - absolutes[i];
        }
    }
    return answer;
}
var absolutes = [4, 7, 12];
var signs = [true, false, true];
console.log(solution(absolutes, signs));