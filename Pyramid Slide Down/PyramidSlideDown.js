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
Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, like this one here:

   /3/
  \7\ 4 
 2 \4\ 6 
8 5 \9\ 3
Here comes the task...
Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

Your task is to write a function that takes a pyramid representation as an argument and returns its largest 'slide down'. For example:

* With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
* Your function should return `23`.
By the way...
My tests include some extraordinarily high pyramids so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Пирамиды потрясающие! И в архитектурном, и в математическом смысле. Если у вас есть компьютер, вы можете возиться с пирамидами, даже если вы в данный момент не находитесь в Египте. Например, рассмотрим следующую проблему. Представьте, что у вас есть пирамида, построенная из чисел, как здесь:

    /3/
   \7\ 4
  2\4\6
8 5 \ 9 \ 3
Вот и задача...
Допустим, «скольжение вниз» — это максимальная сумма последовательных чисел сверху вниз пирамиды. Как видите, самый длинный «скольжение вниз» — 3 + 7 + 4 + 9 = 23.

Ваша задача — написать функцию, которая принимает представление пирамиды в качестве аргумента и возвращает ее наибольшее «скольжение вниз». Например:

* При вводе `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
* Ваша функция должна возвращать `23`.
Кстати...
Мои тесты включают в себя несколько чрезвычайно высоких пирамид, поэтому, как вы можете догадаться, метод грубой силы — плохая идея, если только у вас нет возможности потратить впустую несколько столетий. Вы должны придумать что-то более умное, чем это.
*/

function longestSlideDown(pyramid) {
	for (let i = pyramid.length - 2; i >= 0; i--) {
		for (let j = 0; j < pyramid[i].length; j++) {
			let max = Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1])
			pyramid[i][j] += max
		}
	}

	return pyramid[0][0]
}

console.log(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]), 23)
console.log(
	longestSlideDown([
		[75],
		[95, 64],
		[17, 47, 82],
		[18, 35, 87, 10],
		[20, 4, 82, 47, 65],
		[19, 1, 23, 75, 3, 34],
		[88, 2, 77, 73, 7, 63, 67],
		[99, 65, 4, 28, 6, 16, 70, 92],
		[41, 41, 26, 56, 83, 40, 80, 70, 33],
		[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
		[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
		[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
		[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
		[63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
		[4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
	]),
	1074
)

/*
Doc:

   3
  7 4
 2 4 6
8 5 9 3

After reverseing the pyramid,
each layer will be summarized 
by taking the max() of the 
previous summarized values (left and right neighbors) + current:

Baselayer  = 8   5   9   3  
Layer1     =   2   4   6
Summarized =   10  13  15    // 8+2 and 9+4 and 9+6
Layer2     =     7   4
Summarized =    20   19      // 7+13 and 15+4
Layer3     =       3
Summarized =       23        // 20+3
======================================
Result     =       23

*/
