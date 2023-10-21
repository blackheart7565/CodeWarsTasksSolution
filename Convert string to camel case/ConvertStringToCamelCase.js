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
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Завершите метод/функцию, чтобы он преобразовывал слова, разделенные тире/подчеркиванием, в верблюжий регистр. Первое слово в выводе должно быть написано с заглавной буквы, только если исходное слово было написано с заглавной буквы (так называемый верхний верблюжий регистр, также часто называемый регистром Паскаля). Следующие слова всегда должны быть с заглавной буквы.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str) {
	if (!str) {
		return ''
	}
	const strArr = str.split(/[_-]/)

	return strArr[0].concat(
		strArr
			.slice(1)
			.map(item => item.replace(item[0], item[0].toUpperCase()))
			.join('')
	)
}

showValidationValue(toCamelCase(''), '')
showValidationValue(toCamelCase('the_stealth_warrior'), 'theStealthWarrior')
showValidationValue(toCamelCase('The-Stealth-Warrior'), 'TheStealthWarrior')
showValidationValue(toCamelCase('A-B-C'), 'ABC')
