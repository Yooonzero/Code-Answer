function solution(num_list) {
    var answer = [];
    var evenCount = 0;
    var oddCount = 0;
    
    for (i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            evenCount++;
        } else if (num_list % 2 !== 0) {
            oddCount++;
        }
    }
    answer.push(evenCount, oddCount);
    return answer;
}