function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) console.log(phrase + result);
  else result;
}

let a: number;
a = 5;
const b = 3.5;
const displayResult = false;
const resultPhrase = "Result is ";
const result = add(a, b, displayResult, resultPhrase);
console.log("Result: ", result);
