//~~
/*
Create a function that takes an integer as an argument and returns "Even" for even 
numbers or "Odd" for odd numbers.

Создайте функцию, которая принимает целое число в качестве аргумента 
и возвращает «Чет» для четных чисел или «Нечет» для нечетных чисел.
*/

const evenOrOdd = number => (number % 2 === 0 ? 'Even' : 'Odd')

console.log(evenOrOdd(2))
console.log(evenOrOdd(7))
console.log(evenOrOdd(-42))
console.log(evenOrOdd(-7))
console.log(evenOrOdd(0))
