function solution(money) {
    var answer = [];

    var count = Math.trunc(money / 5500);
    var change = 0;

    if (money % 5500) {
        change = money - Math.trunc(money / 5500) * 5500;
    }

    answer.push(count, change);
    return answer;
}