console.log("ihuuuuulll")

let i = 1
while (i > 10) {
    console.log(i)
    i++
}



function isEven(num) {
    return num % 2 === 0;
}

console.log(4); // true
console.log(5); // false // verifica par


function generateEvenNumbers(start, end) {
    const evenNumbers = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}

console.log(generateEvenNumbers(1, 10)); // gera numeros



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // filtra



const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const countEvenNumberss = numberss.filter(num => num % 2 === 0).length;

console.log(countEvenNumbers); // conta 


const limit = 10;
for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
        console.log(i); // Imprime números pares
    }
}



function isOdd(num) {
    return num % 2 !== 0;
}

// Exemplo de uso
console.log(isOdd(3)); // true
console.log(isOdd(4)); // false  //verifica impar



function generateOddNumbers(start, end) {
    const oddNumbers = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            oddNumbers.push(i);
        }
    }
    return oddNumbers;
}

// Exemplo de uso
console.log(generateOddNumbers(1, 10)); // [1, 3, 5, 7, 9] // gera impar



const numbersss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbersss = numbersss.filter(num => num % 2 !== 0);

console.log(oddNumbers); // [1, 3, 5, 7, 9] // conta impar



const limite = 10;
for (let i = 0; i <= limite; i++) {
    if (i % 2 !== 0) {
        console.log(i); // Imprime números ímpares
    }
}






let g = 10
while (g < 10) {
    console.log(i);
    i++
}


for (let h = 0; h <= 10; h++) {
    if (h % 2 === 0) {
        console.log(h);
    }
}
