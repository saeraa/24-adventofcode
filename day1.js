import * as fs from "node:fs";

fs.readFile("input1.txt", "utf8", (err, data) => {
	const array1 = [];
	const array2 = [];

	data.split("\n").forEach((line) => {
		line.split("   ").forEach((number, index) => {
			if (index % 2 === 0) {
				array1.push(number);
			} else array2.push(number);
		});
	});

	array1.sort((a, b) => a - b);
	array2.sort((a, b) => a - b);

	let result = 0;
	for (let i = 0; i < array1.length; i++) {
		result += Math.abs(array2[i] - array1[i]);
	}

	console.log("RESULT PART 1: ", result);

	let result2 = 0;

	array1.forEach((number, index) => {
		const numberOfTimesInArray2 = array2.filter((num) => num === number).length;
		result2 += number * numberOfTimesInArray2;
	});

	console.log("RESULT PART 2: ", result2);

	if (err) {
		console.error(err);
		return;
	}
});
