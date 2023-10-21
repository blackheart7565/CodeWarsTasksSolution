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
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10

Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

В небольшом городе численность населения на начало года равна p0 = 1000 человек. Население регулярно увеличивается на 2 процента в год, более того, в город приезжает более 50 новых жителей в год. Сколько лет понадобится городу, чтобы его население превысило или стало равным p = 1200 жителей?

В конце первого года будет:
1000 + 1000 * 0,02 + 50 => 1070 жителей

В конце 2-го года будет:
1070 + 1070 * 0,02 + 50 => 1141 житель (** количество жителей — целое число **)

В конце 3-го года будет:
1141 + 1141 * 0,02 + 50 => 1213

На это понадобится целых 3 года.
Более общие параметры:

p0, процент, aug (жители, приезжающие или уезжающие каждый год), p (население равное или превосходящее)

функция nb_year должна возвращать n целых лет, необходимых для получения численности населения, большей или равной p.

aug — целое число, процент — положительное или нулевое плавающее число, p0 и p — положительные целые числа (> 0)

Примеры:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10

Примечание:
Не забудьте преобразовать процентный параметр в процентное значение в теле вашей функции: если процентный параметр равен 2, вам необходимо преобразовать его в 0,02.
*/

/*
Решение:
1500 * 0.05 + 100 = 1500 + 175 = 1675
1675 * 0.05 + 100 = 1675 + 184 = 1859
1859 * 0.05 + 100 = 1859 + 193 = 2052
2052 * 0.05 + 100 = 2052 + 203 = 2255
2255 * 0.05 + 100 = 2255 + 213 = 2468
2468 * 0.05 + 100 = 2468 + 223 = 2691
2691 * 0.05 + 100 = 2691 + 235 = 2926
2926 * 0.05 + 100 = 2926 + 246 = 3172
3172 * 0.05 + 100 = 3172 + 259 = 3431
3431 * 0.05 + 100 = 3431 + 272 = 3703
3703 * 0.05 + 100 = 3703 + 285 = 3988
3988 * 0.05 + 100 = 3988 + 299 = 4287
4287 * 0.05 + 100 = 4287 + 314 = 4601
4601 * 0.05 + 100 = 4601 + 330 = 4931
4931 * 0.05 + 100 = 4931 + 347 = 5278
*/

// function nbYear(p0, percent, aug, p) {
// let count = 0
// while (p > p0) {
// 	p0 = p0 + p0 * (percent / 100) + aug
// 	count += 1
// }
// return count
// }

function nbYear(p0, percent, aug, p, count = 0) {
	if (p0 > p) {
		return count
	}
	p0 = p0 + Math.floor(p0 * (percent / 100) + aug)
	return nbYear(p0, percent, aug, p, count + 1)
}

showValidationValue(nbYear(1500, 5, 100, 5000), 15)
showValidationValue(nbYear(1500000, 2.5, 10000, 2000000), 10)
showValidationValue(nbYear(1500000, 0.25, 1000, 2000000), 94)
