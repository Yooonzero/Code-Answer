function solution(my_string) {
    var answer = my_string;
    var aeiou = ['a', 'e', 'i', 'o', 'u'];
    // aeiou.filter((index) => {
    //     answer = my_string.split(index);
    //     console.log(answer);
    //     return answer;
    // });
    for (const index of aeiou) {
        answer = answer.replaceAll(index, '');
        console.log(answer);
    }
    // for (const index of aeiou) {
    //     answer = answer.split(index);
    //     console.log(answer);
    // }
    // my_string.split(aeiou);
    return answer;
}