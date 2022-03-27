function solution(rows, columns, queries) {
	const answer = [];
	const drum = [];
	let number = 1;
	
	for (let i = 0; i < rows; i++) {
		const row = [];
		for (let j = 0; j < columns; j++) {
			row.push(number);
			number++;
		}
		drum.push(row);
	}
	
	
	for (const query of queries) {
		const rotatingNumbers = getRotatingNumbers(drum, query);
		answer.push(Math.min(...rotatingNumbers));
		rotateDrum(drum, query, rotatingNumbers);
	}
	
	return answer;
}

function rotateDrum(drum, query, numbers) {
	const [cfromY, cfromX, ctoY, ctoX] = query;
	let [fromY, fromX] = query.map(e => e - 1);
	
	numbers.unshift(numbers[numbers.length - 1]);
	let c = 0;
	
	for (let i = 0; i < (ctoX - cfromX) + 1; i++) {
		drum[fromY][fromX] = numbers[c];
		fromX++;
		c++;
	}
	
	fromX--;
	
	for (let i = 0; i < ctoY - cfromY; i++) {
		fromY++;
		drum[fromY][fromX] = numbers[c];
		c++;
	}
	
	for (let i = 0; i < ctoX - cfromX; i++) {
		fromX--;
		drum[fromY][fromX] = numbers[c];
		c++;
	}
	
	for (let i = 0; i < (ctoY - cfromY) - 1; i++) {
		fromY--;
		drum[fromY][fromX] = numbers[c];
		c++;
	}
}

function getRotatingNumbers(drum, query) {
	const numbers = [];
	const [cfromY, cfromX, ctoY, ctoX] = query;
	let [fromY, fromX, toY, toX] = query.map(e => e - 1);
	
	for (let i = 0; i < (ctoX - cfromX) + 1; i++) {
		numbers.push(drum[fromY][fromX]);
		fromX++;
	}
	
	fromX--;
	
	for (let i = 0; i < ctoY - cfromY; i++) {
		fromY++;
		numbers.push(drum[fromY][fromX]);
	}
	
	for (let i = 0; i < ctoX - cfromX; i++) {
		fromX--;
		numbers.push(drum[fromY][fromX]);
	}
	
	for (let i = 0; i < (ctoY - cfromY) - 1; i++) {
		fromY--;
		numbers.push(drum[fromY][fromX]);
	}
	
	return numbers;
}

console.log(solution(6, 6, [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]]));
// console.log(solution(3,3, [[1,1,2,2],[1,2,2,3],[2,1,3,2],[2,2,3,3]]));
// console.log(solution(100,97, [[1,1,100,97]]));