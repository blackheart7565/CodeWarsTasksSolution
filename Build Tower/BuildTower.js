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
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Постройте башню в форме пирамиды как массив/список строк, учитывая положительное целое число этажей. Многоквартирный дом обозначается символом «*».

Например, башня в 3 этажа выглядит так:

[
  "  *  ",
  " *** ", 
  "*****"
]

А башня в 6 этажей выглядит так:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder_One(nFloors) {
	const arr = []
	let strTower = ''

	for (let i = 0; i < nFloors; i++) {
		for (let k = 0; k < nFloors - i - 1; k++) {
			strTower += ' '
		}

		for (let j = 0; j <= 2 * i; j++) {
			strTower += '*'
		}

		for (let k = 0; k < nFloors - i - 1; k++) {
			strTower += ' '
		}

		arr.push(strTower)
		strTower = ''
	}

	return arr
}

function towerBuilder_Two(height) {
	return Array.from({ length: height }, (i, j) => {
		const space = ' '.repeat(height - j - 1)
		return space + '*'.repeat(2 * j + 1) + space
	})
}

console.log(towerBuilder_Two(1), ['*'])
console.log(towerBuilder_Two(2), [' * ', '***'])
console.log(towerBuilder_Two(3), ['  *  ', ' *** ', '*****'])
