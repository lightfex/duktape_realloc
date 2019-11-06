function main() {
var v4 = [13.37,13.37,13.37,13.37];
var v6 = [1337];
var v7 = [1337,v6,13.37];
var v8 = {valueOf:13.37,length:"buffer",c:v6};
var v9 = {b:v4,toString:v4,length:64,constructor:Boolean};
var v10 = 1337;
var v12 = [13.37,13.37,13.37,13.37];
var v14 = [3527031614,3527031614,3527031614,3527031614,3527031614];
var v17 = [2.220446049250313e-16];
var v18 = v17 * 2.220446049250313e-16;
var v19 = v18;
var v23 = [-4.0,-4.0,-4.0,-4.0];
var v25 = [1337,1337,1337,1337,1337];
var v26 = {a:Uint8ClampedArray,b:"undefined"};
var v27 = "undefined" || 257;
var v28 = v25;
try {
    function v30(v31,v32) {
        var v35 = {deleteProperty:eval,ownKeys:isFinite,construct:isFinite,getPrototypeOf:isFinite,has:eval,defineProperty:eval,set:eval,call:eval,getOwnPropertyDescriptor:eval};
        var v37 = new Proxy(eval,v35);
        with (v37) {
            var v39 = null;
        }
        var v40 = v30();
    }
    var v41 = v30(-268435456);
} catch(v42) {
}
}
main();
