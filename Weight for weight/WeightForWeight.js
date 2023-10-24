//~~

const showValidationValue = (valueInput, valueOutput) => {
	if (valueInput == valueOutput) {
		// return valueInput
		console.log(valueInput)
	} else {
		// return `Значение ${valueInput} не равно ${valueOutput}`
		console.log(`Значение ${valueInput} не равно ${valueOutput}`)
	}
}

/*
My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
For C: The result is freed.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Мой друг Джон и я являемся членами клуба «Fat to Fit Club (FFC)». Джон обеспокоен, потому что каждый месяц публикуется список с весом участников, и каждый месяц он в списке последний, а это значит, что он самый тяжелый.

Я тот, кто составляет список, поэтому я сказал ему: «Не волнуйтесь больше, я изменю порядок списка». Было решено придать числам «вес». Отныне вес числа будет равен сумме его цифр.

Например, 99 будет иметь «вес» 18, 100 будет иметь «вес» 1, поэтому в списке 100 будет стоять перед 99.

Учитывая строку с весами членов FFC в нормальном порядке, можете ли вы упорядочить эту строку по «весам» этих чисел?

Пример:
«56 65 74 100 99 68 86 180 90», упорядоченный по номерам, становится следующим:

"100 180 90 56 65 74 68 86 99"
Если два числа имеют одинаковый «вес», давайте классифицировать их так, как если бы они были строками (в алфавитном порядке), а не числами:

180 предшествует 90, поскольку, имея тот же «вес» (9), оно идет перед строкой.

Все числа в списке являются положительными числами, и список может быть пустым.

Примечания
может случиться так, что во входной строке есть начальные и конечные пробелы, а также более чем уникальные пробелы между двумя последовательными числами.
Для C: результат освобождается.
*/

function orderWeight(strng) {
	return strng
		.split(' ')
		.sort((a, b) => {
			const a1 = a.split('').reduce((sum, el) => sum + +el, 0)
			const b1 = b.split('').reduce((sum, el) => sum + +el, 0)
			return a1 === b1 ? a.localeCompare(b) : a1 - b1
		})
		.join(' ')
}

console.log(orderWeight('103 123 4444 99 2000'), '2000 103 123 4444 99')
console.log(
	orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123'),
	'11 11 2000 10003 22 123 1234000 44444444 9999'
)

/*
https://www.codewars.com/kata/55c6126177c9441a570000cc/javascript
*/
