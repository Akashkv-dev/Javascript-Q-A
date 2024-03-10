function myf() {
    var array1 = []
    var array2 = []
    var limit = parseInt(document.getElementById("limit").value)
    array1.length = limit
    array1 = document.getElementById("nums").value.split(",")
    for (var i = 0; i <= array1.length - 1; i++) {
        array2[i] = array1[i] * array1[i + 1]
        
    }
    array2.pop()

    console.log(array2)
    document.getElementById("ans").innerHTML=("after multiplied by adjacent -")+"["+array2+"]"


}
