
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function solution(m, n, picture) {
	const visitedPicture = picture.map(e => e.map(() => false));
	
	let area = 0;
	let largest = 0;
	
	for (let y = 0; y < picture.length; y++) {
		for (let x = 0; x < picture[y].length; x++) {
			if (picture[y][x] === 0) continue;
			
			// visited의 순서가 중요!
			// 상태가 생성될때 마크
			if (visitedPicture[y][x]) continue;
			visitedPicture[y][x] = true;
			
			const count = recur(y, x, picture, visitedPicture);
			if (count > largest) largest = count;
			
			area++
		}
	}
	return [area, largest];
}

function recur(y, x, picture, visitedPicture) {
	let c = 1;
	for (let i = 0; i < 4; i++) {
		const ny = y + dx[i];
		const nx = x + dy[i];
		
		// Range check
		if (!visitedPicture[ny] || visitedPicture[ny][nx] == null) continue;
		// Data check
		if (visitedPicture[ny][nx] || picture[ny][nx] !== picture[y][x]) continue;
		
		// visited의 순서가 중요!
		// 상태가 생성될때 마크
		visitedPicture[ny][nx] = true;
		c += recur(ny, nx, picture, visitedPicture);
	}
	return c;
}

console.log(solution(6, 4, [[1, 1, 1, 0], [1, 2, 2, 0], [1, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 3], [0, 0, 0, 3]]));
console.log(solution(3, 3, [[0, 1, 0], [1, 1, 1], [0, 1, 0]]));