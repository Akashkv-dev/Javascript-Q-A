class Area {
    circle(rad) {
        return Math.PI * (Math.pow(rad, 2))
    }
    square(a) {
        return Math.pow(a, 2)
    }
    rectangle(len, wid) {
        return len * wid
    }
    triangle(base, height) {
        return (base * height) / 2
    }
}
class Myclass extends Area {

    main() {
        var choice = parseInt(prompt("1-circle,2-square,3-rectangle,4-triangle"))
        switch (choice) {
            case 1:
                var rad = parseInt(prompt("enter the radius"))
                console.log(this.circle(rad));
                document.write("Area=" + this.circle(rad))
                break;
            case 2:
                var a = parseInt(prompt("enter the side of the square"));
                console.log(this.square(a));
                document.write("Area=" + this.square(a))
                break;

            case 3:
                var len = parseInt(prompt("enter the length"))
                var wid = parseInt(prompt("enter the width"))
                console.log(this.rectangle(len, wid));
                document.write("Area=" + this.rectangle(+len, wid))
                break;
            case 4:
                var base = parseInt(prompt("enter the basevalue"))
                var height = parseInt(prompt("enter the height"))
                console.log(this.triangle(base, height));
                document.write("Area=" + this.triangle(+base, height))
                break;

        }
    }
}
var obj = new Myclass();
obj.main()