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



let p
for (p = 1; p < 10; p++) {
    console.log(p)
}


let l
for (l = 15; l >= 1; l--) {
    console.log(l)
}

let o
for (o = 4; 0 < 9; o = o + 2) {
    console.log(o)
}

let u
for (u = 15; u > -1; i - 3) {
    console.log(u)
}

x = 10 % 3

x = 45 % 42

x = 0 % 0

x = 3 % 0

x = 0 % 3

X = 16 % 4

for (let i = 1; i < 30; i++) {
    if (i % 4 == 0) {
        console.log("pim");
    } else {
        console.log(i);
    }
}

for (let i = 1; i < 30; i++) {
    if (i % 4 == 0) {
        txt = txt + "pim"
    } else {
        txt = txt + i + ""
    }

}
console.log(txt);
