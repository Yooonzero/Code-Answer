function solution(my_string, letter) {
    var answer = '';
    console.log(my_string);
    console.log(letter);
    // answer = my_string.replace(`/${letter}/g`, '');
    answer = my_string.replaceAll(letter, '');
    // answer = my_string.split(letter);
    // console.log(`${answer}`);
    // console.log(answer);
    return answer;
}