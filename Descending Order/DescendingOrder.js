//~~

/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Ваша задача — создать функцию, которая может принимать в качестве аргумента любое неотрицательное целое число и возвращать его с цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.

Примеры:
Ввод: 42145 Вывод: 54421

Ввод: 145263 Вывод: 654321

Ввод: 123456789 Вывод: 987654321
*/
const showValidationValue = (valueInput, valueOutput) => {
	if (valueInput == valueOutput) {
		// return valueInput
		console.log(valueInput)
	} else {
		// return `Значение ${valueInput} не равно ${valueOutput}`
		console.log(`Значение ${valueInput} не равно ${valueOutput}`)
	}
}

class MySort {
	constructor(num) {
		this._num = num
	}

	descendingOrder() {
		if (this._num < 0) {
			return
		} else if (this._num === 1) {
			return this._num
		}
		const str = this._num.toString().split('')

		for (let i = 0; i < str.length - 1; i++) {
			for (let j = 0; j < str.length - 1; j++) {
				if (str[j] < str[j + 1]) {
					let temp = str[j]
					str[j] = str[j + 1]
					str[j + 1] = temp
				}
			}
		}

		return +str.join('')
	}

	sortTwo() {
		return this._num < 0
			? 'Входное число имело отрицательное значение.'
			: this._num === 1
			? this._num
			: +this._num.toString().split('').sort().reverse().join('')
	}
}

showValidationValue(new MySort(0).descendingOrder(), 0)
showValidationValue(new MySort(1).descendingOrder(), 1)
showValidationValue(new MySort(111).descendingOrder(), 111)
showValidationValue(new MySort(15).descendingOrder(), 51)
showValidationValue(new MySort(1021).descendingOrder(), 2110)
showValidationValue(new MySort(42145).descendingOrder(), 54421)
showValidationValue(new MySort(145263).descendingOrder(), 654321)
showValidationValue(new MySort(123456789).descendingOrder(), 987654321)
