/**정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.*/

/**reduce를 통해서 배열의 모든 값을 더하기*/
function solution(arr) {
    var sumArr = arr.reduce((sum, current) => sum + current, 0);
    // var answer = sumArr / arr.length;
    return answer = sumArr / arr.length;
}

let arr = [5, 5];

console.log("My Answer : ",solution(arr));

/**다른 사람 코드1*/

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

var testArray = [1, 2, 3, 4];
console.log("Other People Answer1 : ",average(testArray));

/**다른 사람 코드2*/
function average1(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++)
        sum += array[i];
    return sum / array.length;
}

var testArray1 = [1, 2, 3, 4];
console.log("Other People Answer2 : ",average1(testArray1));

