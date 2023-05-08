type Combinable = number | string;
type ConversionDiscriptor = 'as-number' | 'as-text';

function combine: Combinable(
    // input1: number | string,
    input1: Combinable,
    // input2: number | string,
    input2: Combinable,
    resultType: ConversionDiscriptor
     ) {
    let result: Combinable;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const nums = combine(22, 30, 'as-number');
console.log(nums);

const numStr = combine(22, 30, 'as-number');
console.log(numStr);

const names = combine('Max', 'Anna', 'as-text');
console.log(names);