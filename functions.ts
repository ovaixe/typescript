function sum(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

printResult(sum(5, 5));


// let combineValues: Function;
let combineValues: (a: number, b: number) => number; // this is function type.

combineValues = sum;
// combineValues = printResult; // this is allowed but will not work if function type is specified.
// combineValues = 4; // this is not allowed.
 
console.log(combineValues(1, 5));


// Call backs and function types
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}


addAndHandle(10, 12, (res) => {
    console.log(res);
});