// import hello from "../hello";

import fizzBuzz from "./src/fizzbuzz";



describe('fizzBuzz', () => {
    it('should generate a correct FizzBuzz sequence', () => {
        expect(fizzBuzz(15)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 'Fizz', 14, 'FizzBuzz']);
    });

    it('should return "Fizz" for numbers divisible by 3 or containing 3', () => {
        expect(fizzBuzz(3)).toContain('Fizz');
        expect(fizzBuzz(13)).toContain('Fizz');
        expect(fizzBuzz(23)).toContain('Fizz');
    });

    it('should return "Buzz" for numbers divisible by 5 or containing 5', () => {
        expect(fizzBuzz(5)).toContain('Buzz');
        expect(fizzBuzz(51)).toContain('Buzz');
        expect(fizzBuzz(52)).toContain('Buzz');
    });

    it('should return "FizzBuzz" for numbers divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toContain('FizzBuzz');
    });
});


// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.


// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]