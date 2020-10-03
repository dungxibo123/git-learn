var v = 1;
var f1 = function() {
    console.log(v);
}

var f2 = function() {
    console.log(v);
    f1();
}

f2();
