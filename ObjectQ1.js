// Description: Write a program in JavaScript to remove duplicate elements using MAP function.
var arr = [2, 5, 3, 2, 5,1,3];

var arrNew = arr.map(
    function (val, i, ar) {
        if (ar.indexOf(val) == i) {
            return val
        }
    }
).filter(ar=>{return ar!=undefined});

console.log(arrNew);

