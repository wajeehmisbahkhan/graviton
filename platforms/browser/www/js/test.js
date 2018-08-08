/*var canvas = document.getElementById('map');
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(100,75,50,0,2*Math.PI);
ctx.stroke();*/

document.write("Old Files");
class Writer {
    constructor () {

    }
    write () {
        document.writeln("New Files");
    }
}

var myWriter = new Writer();

myWriter.write();
document.write("Old Files");