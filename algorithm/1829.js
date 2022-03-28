
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function solution(m, n, picture) {
	const visitedPicture = picture.map(e => e.map(l => false));
	
	let area = 0;
	let largest = 0;
	
	for (let i = 0; i < picture.length; i++) {
		for (let j = 0; j < picture[i].length; j++) {
			const color = picture[i][j];
			if (color === 0 || visitedPicture[i][j]) continue;
			const count = recur(i, j, picture, visitedPicture);
			console.log(count);
			if (count > largest) largest = count;
			area++
		}
	}
	return [area, largest];
}

function recur(m, n, picture, visitedPicture, count = 0) {
	visitedPicture[m][n] = true;
	const color = picture[m][n];
	let c = 0;
	for (let i = 0; i < 4; i++) {
		const nm = m + dx[i];
		const nn = n + dy[i];
		if (nm < 0 || nn < 0 || nm >= picture.length || nn >= picture[0].length || visitedPicture[nm][nn] || picture[nm][nn] !== color) continue;
		c += recur(nm, nn, picture, visitedPicture, count + 1);
	}
	// console.log(c);
	return count + c;
}

console.log(solution(6, 4, [[1, 1, 1, 0], [1, 2, 2, 0], [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 3], [0, 0, 0, 3]]));
// console.log(solution(3,3, [[1,1,2,2],[1,2,2,3],[2,1,3,2],[2,2,3,3]]));
// console.log(solution(100,97, [[1,1,100,97]]));