function myf()
{
    var num1=parseInt(document.getElementById("num1").value)
    var num2=parseInt(document.getElementById("num2").value)
    var num3=parseInt(document.getElementById("num3").value)
    var res=(num1*70)/100+(num2*20)/100+(num3*10)/100
    console.log(res);
    document.getElementById("ans").innerHTML=("Grade of the student is-"+res)
}