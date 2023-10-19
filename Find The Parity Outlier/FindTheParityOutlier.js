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
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Вам дан массив (длина которого не менее 3, но может быть очень большим), содержащий целые числа. Массив либо полностью состоит из нечетных целых чисел, либо полностью состоит из четных целых чисел, за исключением одного целого числа N. Напишите метод, который принимает массив в качестве аргумента и возвращает это «выброс» N.

Примеры
[2, 4, 0, 100, 4, 11, 2602, 36] --> 11 (единственное нечетное число)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (единственное четное число)
*/

function findOutlier(numbers) {
	const event = []
	const odd = []

	for (const num of numbers) {
		if (num % 2 === 0) {
			event.push(num)
		} else {
			odd.push(num)
		}
	}

	return event.length === 1
		? +event.join('')
		: odd.length === 1 && +odd.join('')
}

showValidationValue(findOutlier([0, 1, 2]), 1)
showValidationValue(findOutlier([1, 2, 3]), 2)
showValidationValue(findOutlier([2, 6, 8, 10, 3]), 3)
showValidationValue(findOutlier([0, 0, 3, 0, 0]), 3)
showValidationValue(findOutlier([1, 1, 0, 1, 1]), 0)
