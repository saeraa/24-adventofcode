import * as fs from "node:fs";

fs.readFile("input2.txt", "utf8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	let result = 0;

	data.split("\n").forEach((line) => {
		if (!line.trim()) return; // Skip empty lines

		const lineArray = line.split(" ").map(Number); // Convert strings to numbers
		let isAscending = true;
		let isDescending = true;

		for (let i = 0; i < lineArray.length - 1; i++) {
			const diff = lineArray[i + 1] - lineArray[i];

			if (diff < 1 || diff > 3) {
				isAscending = false;
			}

			if (diff > -1 || diff < -3) {
				isDescending = false;
			}

			// Early exit if neither is true
			if (!isAscending && !isDescending) {
				break;
			}

			if (lineArray[i + 1] > lineArray[i]) isDescending = false;
			if (lineArray[i + 1] < lineArray[i]) isAscending = false;
		}

		if (isAscending || isDescending) {
			if (isAscending) console.log("Ascending: ", lineArray);
			if (isDescending) console.log("Descending: ", lineArray);
			result++;
		}
	});

	console.log(result);
});
