window.onload = function () {
    var temp = prompt('Enter the start :');
    if (isNaN(temp)) {
        alert('hello')
        document.getElementById("output").innerHTML = "Invalid integer input, please reload and try again.";
    } else {
        var start = parseInt(temp)
        temp = prompt('Enter the end :');
        if (isNaN(temp)) {
            document.getElementById("output").innerHTML = "Invalid integer input, please reload and try again.";
        } else {
            var end = parseInt(temp);
            var temp = prompt('Enter the step');
            var step = parseInt(temp);
            if (isNaN(temp) && step === 0)
                document.getElementById("output").innerHTML = "Invalid integer input, please reload and try again.";
            else {
            var array = this.createArray(start,step,end);
            var sum = this.arraySum(array);
            var binArray = this.createbinArray(array);
            document.getElementById("output").innerHTML = `The generated array is ${array} </br> The sum is ${sum} </br> The binary of absolut element values are ${binArray}` ;
            }
        }

    }
}

function createArray(start, step, end) {
    var array = [];
    var temp = start;

    array.push(start);
    while(temp != end){
        temp = temp + step;
        array.push(temp);
    }
    return array;
}

function arraySum(array) {
    var sum = 0;
    for (let index = 0; index < array.length; index++) {
        sum = sum + array[index];        
    }
    return sum;
}

function createbinArray(array){
    var binArray = [];

    for (let index = 0; index < array.length; index++) {
        binArray.push(parseInt(array[index], 10).toString(2));
    }
    return binArray;
}

