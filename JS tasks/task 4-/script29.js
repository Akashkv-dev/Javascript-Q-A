
function myfilter(myrray, callback) {
    var totalsum = myarray.reduce((partialSum, a) => partialSum + a, 0);
    var sum1 = callback(totalsum);
    if(sum1){
        console.log(totalsum + "true");
    }
    else{
        console.log(totalsum + "false")
    }

}

function temp(sum) {
    if (sum % 2 === 0) {
        return true
    }
    else {
        
        return false;
    }
}
var myarray = [1, 2, 3, 4, 5];


myfilter(myarray, temp);