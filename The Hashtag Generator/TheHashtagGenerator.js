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
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.

Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  			   =>  "#HelloWorld"
""                                        					  =>  false

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Маркетинговая команда тратит слишком много времени на ввод хэштегов.
Давайте поможем им с помощью нашего собственного генератора хэштегов!

Вот сделка:

Он должен начинаться с хэштега (#).
Во всех словах первая буква должна быть заглавной.
Если окончательный результат длиннее 140 символов, он должен вернуть false.
Если входные данные или результат представляют собой пустую строку, они должны вернуть false.

Примеры
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  			   =>  "#HelloWorld"
""                                        					  =>  false
*/

function generateHashtag(str) {
	if (!str) {
		return false
	}
	let strArr = str.split(' ').filter(item => item !== '')
	if (strArr.length <= 0) {
		return false
	}
	let marketing = strArr
		.map(item => item[0].toUpperCase() + item.slice(1))
		.join('')
	return marketing.length >= 140 ? false : `#${marketing}`
}

console.log(generateHashtag(''), false)
console.log(generateHashtag(' '.repeat(200)), false)
console.log(generateHashtag('Do We have A Hashtag'), '#DoWeHaveAHashtag')
console.log(
	generateHashtag('Hello there thanks for trying my Kata'),
	'#HelloThereThanksForTryingMyKata'
)
console.log(generateHashtag('Codewars'), '#Codewars')
console.log(generateHashtag('Codewars Is Nice'), '#CodewarsIsNice')
console.log(generateHashtag('Codewars is nice'), '#CodewarsIsNice')
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars'), '#CodeWars')
console.log(
	generateHashtag(
		'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
	),
	false
)
console.log(generateHashtag('a'.repeat(139)), '#A' + 'a'.repeat(138))
console.log(generateHashtag('a'.repeat(140)), false)
