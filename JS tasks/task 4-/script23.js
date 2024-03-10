class Array {
    constructor(ar = [[], [], []]) {
        this.ar = ar
    }
    getarray(n) {

        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                this.ar[i][j] = prompt("enter the array value").split()
                console.log(this.ar[i][j]);
            }
        }

    }
    displayarray(n) {

        for (var i = 0; i < n; i++) {
            for (var j = 0; j < n; j++) {
                console.log(this.ar[i][j]);
                document.getElementById("ans").innerHTML = (this.ar)
            }
        }

    }

}

obj = new Array();
function main() {
    var n = parseInt(document.getElementById("limit").value)
    obj.getarray(n)
    obj.displayarray(n)

}

