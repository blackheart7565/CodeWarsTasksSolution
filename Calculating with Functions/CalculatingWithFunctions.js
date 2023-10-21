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
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

На этот раз мы хотим написать вычисления с использованием функций и получить результаты. Давайте посмотрим на несколько примеров:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Требования:

Для каждого числа от 0 («ноль») до 9 («девять») должна быть функция.
Должна существовать функция для каждой из следующих математических операций: плюс, минус, умножение, разделение на
Каждый расчет состоит ровно из одной операции и двух чисел.
Самая внешняя функция представляет левый операнд, самая внутренняя функция представляет правый операнд.
Деление должно быть целочисленным. Например, это должно возвращать 2, а не 2,666666...:
восемь(dividedBy(три()));
*/

function zero(callback) {
	return !callback ? 0 : callback(0)
}
function one(callback) {
	return !callback ? 1 : callback(1)
}
function two(callback) {
	return !callback ? 2 : callback(2)
}
function three(callback) {
	return !callback ? 3 : callback(3)
}
function four(callback) {
	return !callback ? 4 : callback(4)
}
function five(callback) {
	return !callback ? 5 : callback(5)
}
function six(callback) {
	return !callback ? 6 : callback(6)
}
function seven(callback) {
	return !callback ? 7 : callback(7)
}
function eight(callback) {
	return !callback ? 8 : callback(8)
}
function nine(callback) {
	return !callback ? 9 : callback(9)
}

function plus(num) {
	return num2 => num + num2
}
function minus(num) {
	return num2 => num2 - num
}
function times(num) {
	return num2 => num * num2
}
function dividedBy(num) {
	return num2 => Math.floor(num2 / num)
}

showValidationValue(seven(times(five())), 35)
showValidationValue(four(plus(nine())), 13)
showValidationValue(eight(minus(three())), 5)
showValidationValue(six(dividedBy(two())), 3)
