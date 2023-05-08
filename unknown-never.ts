let userInput: unknown;
let uName: string;

userInput = 3;
userInput = 'max';
if (typeof userInput === 'string') uName = userInput


// Function with return type never, this function is intended to never return anything or crashes.
function generateError(mesg: string, code: number): never {
    throw {mesg: mesg, errorCode: code};
}

generateError('An error occured!', 500);