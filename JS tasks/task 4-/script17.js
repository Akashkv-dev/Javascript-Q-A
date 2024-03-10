class Calculator {
    constructor(num1, num2) {
        this.num1 = num1
        this.num2 = num2

    }
    addition(num1, num2) {
        return num1 + num2;
    }
    subtraction(num1, num2) {
        return num1 - num2;
    }
    multiplication(num1, num2) {
        return num1 * num2;
    }
    division(num1, num2) {
        if (num2 == 0) {
            console.log(" Division by zero is not allowed")
        } else {
            return num1 / num2;
        }
    }

}
const calculator=new Calculator(num1,num2)
function add()
{
    var num1=parseInt(document.getElementById("num1").value)
    var num2=parseInt(document.getElementById("num2").value)
    const result = calculator.addition(num1,num2)
    console.log(result);
    document.getElementById('demo').innerHTML=result

}
function sub()
{
    var num1=parseInt(document.getElementById("num1").value)
    var num2=parseInt(document.getElementById("num2").value)
    const result=calculator.subtraction(num1,num2)
    document.getElementById('demo').innerHTML=result
}
function mul()
{
    var num1=parseInt(document.getElementById("num1").value)
    var num2=parseInt(document.getElementById("num2").value)
    const result=calculator.multiplication(num1,num2)
    document.getElementById('demo').innerHTML=result

}
function div()
{
    var num1=parseInt(document.getElementById("num1").value)
    var num2=parseInt(document.getElementById("num2").value)
    const result=calculator.division(num1,num2)
    document.getElementById('demo').innerHTML=result 
    
}