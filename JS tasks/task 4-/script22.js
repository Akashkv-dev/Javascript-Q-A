var ar1 = [[], [], []]
var ar2 = [[], [], []]
var ar3 = [[], []]

function main() {
    var size = parseInt(document.getElementById("limit").value)
    getarray(size)
    addarray(size)
    displayarray()

}
function getarray(size) {


    for (var i = 0; i < size; i++) {

        for (var j = 0; j < size; j++) {
            ar1[i][j] = parseInt(prompt("enter the values of array one"))
            console.log(ar1[i][j]);
        }

    }
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            ar2[i][j] = parseInt(prompt("enter the values of array two"))
            console.log(ar2[i][j]);
        }

    }

}
function addarray(size) {
    for (i = 0; i < size; i++) {

        for (j = 0; j < size; j++) {
            ar3[i][j] = ar1[i][j] + ar2[i][j]
            console.log(ar3[i][j])
        }
    }

}
function displayarray() {
    document.write(JSON.stringify(ar3))
}
