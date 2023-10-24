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
If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

[[0, 0, 1],
 [0, 1, 2],
 [2, 1, 0]]
We want our function to return:

-1 if the board is not yet finished AND no one has won yet (there are empty spots),
1 if "X" won,
2 if "O" won,
0 if it's a cat's game (i.e. a draw).
You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Если бы нам нужно было создать игру «Крестики-нолики», нам бы хотелось знать, решено ли текущее состояние доски, не так ли? Наша цель — создать функцию, которая будет проверять это за нас!

Предположим, что доска имеет форму массива 3x3, где значение равно 0, если место пустое, 1, если это «X», или 2, если это «O», например:

[[0, 0, 1],
  [0, 1, 2],
  [2, 1, 0]]
Мы хотим, чтобы наша функция возвращала:

-1, если доска еще не закончена И еще никто не выиграл (есть пустые места),
1, если «X» выиграл,
2, если «О» выиграло,
0, если игра в кошки-мышки (т. е. ничья).
Вы можете предположить, что переданная доска действительна в контексте игры в крестики-нолики.
*/

function isSolved_One(board) {
	const winCombinate = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]
	for (let i = 0; i < winCombinate.length; i++) {
		const [a, b, c] = winCombinate[i]
		if (
			board[Math.floor(a / 3)][a % 3] === board[Math.floor(b / 3)][b % 3] &&
			board[Math.floor(b / 3)][b % 3] === board[Math.floor(c / 3)][c % 3] &&
			board[Math.floor(a / 3)][a % 3] !== 0
		) {
			return board[Math.floor(a / 3)][a % 3]
		}
	}
	for (let i = 0; i < board.length; i++) {
		if (board[i].includes(0)) {
			return -1
		}
	}
	return 0
}
function isSolved_Two(board) {
	board = board.join('-').replace(/,/g, '')
	if (/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2
	if (/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1
	if (/0/.test(board)) return -1
	return 0
}

console.log(
	isSolved_Two([
		[1, 2, 2],
		[1, 1, 1],
		[2, 1, 2],
	]) === 1
)
console.log(
	isSolved_Two([
		[0, 0, 1],
		[0, 1, 2],
		[2, 1, 0],
	]) === -1
)
console.log(
	isSolved_Two([
		[2, 2, 2],
		[0, 1, 1],
		[1, 0, 0],
	]) === 2
)
console.log(
	isSolved_Two([
		[1, 1, 1],
		[0, 2, 2],
		[0, 0, 0],
	]) === 1
)
console.log(
	isSolved_Two([
		[1, 2, 1],
		[1, 1, 2],
		[2, 1, 2],
	]) === 0
)
console.log(
	isSolved_Two([
		[1, 2, 1],
		[1, 1, 1],
		[2, 1, 2],
	]) === 1
)
