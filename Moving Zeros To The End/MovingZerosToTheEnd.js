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
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Напишите алгоритм, который берет массив и перемещает все нули в конец, сохраняя порядок остальных элементов.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // возвращает[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
	return [...arr.filter(item => item !== 0), ...arr.filter(item => item === 0)]
}

console.log(
	moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]),
	[1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
)
