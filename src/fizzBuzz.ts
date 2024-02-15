
export default function fizzBuzz(n: number): (number | string)[] {
    let result: (number | string)[] = [];
    for (let i = 1; i <= n; i++) {
        let output = '';
        if (i % 3 === 0 || i.toString().includes('3')) output += 'Fizz';
        if (i % 5 === 0 || i.toString().includes('5')) output += 'Buzz';
        result.push(output || i);
    }
    return result;
}

// Exemple d'utilisation
console.log(fizzBuzz(15));