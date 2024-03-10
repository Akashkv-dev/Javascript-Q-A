var mystring=prompt("enter the string")

try {
    console.log("enterd string :" + mystring);
    
    var revstring=mystring.split('').reverse().join()

    console.log("Reversed string is : " + revstring)
    console.log(classs);
    

    

    
} catch (error) {
    console.log("error :" + error.message)
    
}
finally
{
    console.log(("Type of my_string is : ") + typeof(revstring))
}
