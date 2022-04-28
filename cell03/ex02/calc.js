function nNumber(n) {
    return (n >= 0 && Math.floor(n) === +n)
}

function computeValue(valueA, valueB, operator) {
    if (operator == '+')
        return valueA + valueB;
    if (operator == '-')
        return valueA - valueB;
    if (operator == '*')
        return valueA * valueB;
    if (valueB == 0)
        return "It\'s over 9000!"
    if (operator == '/')
        return valueA / valueB;
    if (operator == '%')
        return valueA % valueB;
}

function calculator() {
    let valueA = document.getElementById("valueA").value;
    let valueB = document.getElementById("valueB").value;
    let operator = document.getElementById("operators").value;

    if (isNaN(valueA) || isNaN(valueB) || !nNumber(valueA) || !nNumber(valueB) || !operator) {
        alert("Error :(");
        return ;
    }
    valueA = parseInt(valueA);
    valueB = parseInt(valueB);
    let result = computeValue(valueA, valueB, operator);
    console.log(result);
    alert(result);
}

function alertMess(){
    alert("Please use me...")
  }

setInterval(alertMess,30000)//Runs the "func" function every second