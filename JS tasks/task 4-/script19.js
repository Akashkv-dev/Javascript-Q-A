function myf()
{
    var n=parseInt(document.getElementById("income").value)
    if(n<=250000)
    {
        document.getElementById("ans").innerHTML=("NO TAX")
    }
    else if(n>250000 && n<=500000)
    {
        var tax=n*5/100
        console.log(tax);
        document.getElementById("ans").innerHTML=("your tax is "+tax)
    }
    else if(n>500000 && n<=1000000)
    {
        var tax=n*20/100
        document.getElementById("ans").innerHTML=("your tax is "+tax)
    }
    else if(n>1000000 && n<=5000000)
    {
        var tax=n*30/100
        document.getElementById("ans").innerHTML=("your tax is "+tax)
    }
    else{
        document.getElementById("ans").innerHTML=("only calculate income upto 5000000")
    }
     
}
