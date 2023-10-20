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
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Хорошо встретился со старшим братом Фибоначчи, также известным как Трибоначчи.

Как уже видно из названия, он работает в основном как Фибоначчи, но суммируя последние 3 (вместо 2) чисел последовательности для генерации следующего. И, что еще хуже, я, к сожалению, не смогу услышать, как люди, не являющиеся носителями итальянского языка, пытаются его произнести :(

Итак, если мы хотим начать нашу последовательность Трибоначчи с [1, 1, 1] в качестве начального ввода (подпись AKA), у нас будет такая последовательность:

[1, 1, 1, 3, 5, 9, 17, 31, ...]
Но что, если мы начнем с [0, 0, 1] в качестве подписи? Поскольку начало с [0, 1] вместо [1, 1] по существу сдвигает обычную последовательность Фибоначчи на одну позицию, у вас может возникнуть соблазн подумать, что мы получим ту же последовательность, смещенную на 2 позиции, но это не так, и мы получим:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Что ж, вы, возможно, уже догадались, но чтобы внести ясность: вам нужно создать функцию Фибоначчи, которая, учитывая массив/список подписей, возвращает первые n элементов - подпись, включенную в полученную таким образом последовательность.

Подпись всегда будет содержать 3 цифры; n всегда будет неотрицательным числом; если n == 0, то верните пустой массив (кроме C, возвращающего NULL) и будьте готовы ко всему, что явно не указано;)

Если вам понравилась эта ката, ее более продвинутую и обобщенную версию можно найти в ката Шбоначчи.

[Личная благодарность профессору Джиму Фаулеру на Coursera за его потрясающие занятия, которые я действительно рекомендую любому энтузиасту математики, а также за то, что он показал мне это математическое любопытство с его обычной заразительной страстью :)]
*/

function tribonacci(signature, n) {
	if (n === 0) {
		return []
	}
	if (n === 1 || n === 2) {
		return [signature[0]]
	}
	if (signature.length === n) {
		return signature
	}

	signature.push(
		signature[signature.length - 1] +
			signature[signature.length - 2] +
			signature[signature.length - 3]
	)

	return tribonacci(signature, n)
}

console.log(tribonacci([1, 1, 1], 10))
console.log(tribonacci([0, 0, 1], 10))
console.log(tribonacci([0, 1, 1], 10))
console.log(tribonacci([1, 0, 0], 10))
console.log(tribonacci([0, 0, 0], 10))
console.log(tribonacci([1, 2, 3], 10))
console.log(tribonacci([3, 2, 1], 10))
console.log(tribonacci([1, 1, 1], 1))
console.log(tribonacci([300, 200, 100], 0))
// showValidationValue([[1, 1, 1], 10], [1, 1, 1, 3, 5, 9, 17, 31, 57, 105])
// showValidationValue([[0, 0, 1], 10], [0, 0, 1, 1, 2, 4, 7, 13, 24, 44])
// showValidationValue([[0, 1, 1], 10], [0, 1, 1, 2, 4, 7, 13, 24, 44, 81])
// showValidationValue([[1, 0, 0], 10], [1, 0, 0, 1, 1, 2, 4, 7, 13, 24])
// showValidationValue([[0, 0, 0], 10], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
// showValidationValue([[1, 2, 3], 10], [1, 2, 3, 6, 11, 20, 37, 68, 125, 230])
// showValidationValue([[3, 2, 1], 10], [3, 2, 1, 6, 9, 16, 31, 56, 103, 190])
// showValidationValue([[1, 1, 1], 1], [1])
