function checkFibonacci(number) {
    let a = 0;
    let b = 1;

    if (number === 0 || number === 1) {
        console.log(`O número ${number} pertence à sequência de Fibonacci.`);
        return;
    }

    while (b <= number) {
        let nextNumber = a + b;

        if (nextNumber === number) {
            console.log(`O número ${number} pertence à sequência de Fibonacci.`);
            return;
        }

        a = b;
        b = nextNumber;
    }

    console.log(`O número ${number} não pertence à sequência de Fibonacci.`);
}

const checkNumber = 20;

checkFibonacci(checkNumber);
