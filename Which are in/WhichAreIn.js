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
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Даны два массива строк a1 и a2, которые возвращают отсортированный массив r в лексикографическом порядке строк a1, которые являются подстроками строк a2.

Пример 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Пример 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Примечания:
Массивы записываются в «общих» обозначениях. См. «Ваши тестовые примеры» для примеров на вашем языке.
В Shell bash a1 и a2 являются строками. Возврат представляет собой строку, в которой слова разделены запятыми.
Внимание: в некоторых языках r должно быть без дубликатов.
*/

function inArray_One(array1, array2) {
	const arr = []

	for (const item2 of array2) {
		for (const item1 of array1) {
			item2.match(new RegExp(`${item1}`, 'g')) && !arr.includes(item1)
				? arr.push(item1)
				: ''
		}
	}

	return arr.sort()
}

function inArray_Two(array1, array2) {
	return array1
	.filter(item1 => array2
		.find(item2 => item2
			.match(item1)))
			.sort()
}

const item1 = ['xyz', 'live', 'strong']
const item2 = ['live', 'strong', 'arp']
const item3 = ['tarp', 'mice', 'bull']
const arr2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong']

console.log(inArray_Two(item1, arr2), ['live', 'strong'])
console.log(inArray_Two(item2, arr2), ['arp', 'live', 'strong'])
console.log(inArray_Two(item3, arr2), [])
