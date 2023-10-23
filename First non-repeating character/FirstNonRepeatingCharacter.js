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
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	
Напишите функцию с именем first_non_repeating_letter, которая принимает на вход строку и возвращает первый символ, который не повторяется нигде в строке.

Например, если на входе указано stress, функция должна вернуть «t», поскольку буква t встречается в строке только один раз и встречается в строке первой.

В качестве дополнительной проблемы прописные и строчные буквы считаются одним и тем же символом, но функция должна возвращать правильный регистр для начальной буквы. Например, вход «sTreSS» должен возвращать «T».

Если строка содержит все повторяющиеся символы, она должна возвращать пустую строку ("") или None — см. примеры тестов.
*/

function firstNonRepeatingLetter_One(str) {
	let dictionary = {}
	let lowerStr = str.toLowerCase().split('')

	for (const item of lowerStr) {
		dictionary[item] = dictionary[item] ? dictionary[item] + 1 : 1
	}

	for (let i = 0; i < str.length; i++) {
		if (dictionary[lowerStr[i]] === 1) {
			return str[i]
		}
	}

	return ''
}

function firstNonRepeatingLetter_Two(str) {
	for (const item of str.split('')) {
		if (str.match(new RegExp(`${item}`, 'gi')).length === 1) {
			return item
		}
	}
	return ''
}

console.log(firstNonRepeatingLetter_Two('a'), 'a')
console.log(firstNonRepeatingLetter_Two('stress'), 't')
console.log(firstNonRepeatingLetter_Two('sTreSS'), 'T')
console.log(firstNonRepeatingLetter_Two('moonmen'), 'e')
