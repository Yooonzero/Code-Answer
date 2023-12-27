function solution(numbers) {
    const a = Math.max(...numbers);

    var array1 = numbers.filter((number) => number === a);
    if (array1.length >= 2) {
        return a * a;
    }
    
    var array2 = numbers.filter((number) => number !== a);
    const b = Math.max(...array2);

    return a * b;
}