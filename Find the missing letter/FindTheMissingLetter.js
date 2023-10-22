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
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Напишите метод, который принимает на вход массив последовательных (возрастающих) букв и возвращает недостающую букву в массиве.

Вы всегда получите действительный массив. И всегда будет отсутствовать ровно одна буква. Длина массива всегда будет не менее 2.
Массив всегда будет содержать буквы только в одном регистре.

Пример:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Используйте английский алфавит из 26 букв!)

Наслаждайтесь программированием и, пожалуйста, не забудьте проголосовать и оценить это ката! :-)

Я также создал другие ката. Посмотрите, понравилось ли вам это ката!
*/

function findMissingLetter(array) {
	const alphabetEngLower = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	]
	const alphabetEngUpper = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	]

	if (alphabetEngUpper.includes(array[0])) {
		for (
			let i = alphabetEngUpper.indexOf(array[0]), j = 0;
			i < alphabetEngUpper.length, j < alphabetEngUpper.length;
			i++, j++
		) {
			if (array[j] === alphabetEngUpper[i]) {
				continue
			} else {
				return alphabetEngUpper[i]
			}
		}
	} else {
		for (
			let i = alphabetEngLower.indexOf(array[0]), j = 0;
			i < alphabetEngLower.length, j < alphabetEngUpper.length;
			i++, j++
		) {
			if (array[j] === alphabetEngLower[i]) {
				continue
			} else {
				return alphabetEngLower[i]
			}
		}
	}
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e')
console.log(findMissingLetter(['O', 'Q', 'R', 'S']), 'P')
