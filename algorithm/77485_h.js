const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

function rotate(map, x1, y1, x2, y2) {
	const first = map[y1][x1];
	
	let x = x1;
	let y = y1;
	let d = 0;
	
	let min = first;
	
	while (true) {
		let nx = x + dx[d];
		let ny = y + dy[d];
		
		if (nx < x1 || nx > x2 || ny < y1 || ny > y2) {
			d = (d + 1) % 4;
			continue;
		}
		
		if (nx === x1 && ny === y1) {
			map[y][x] = first;
			break;
		}
		
		map[y][x] = map[ny][nx];
		x = nx;
		y = ny;
		
		min = Math.min(min, map[y][x]);
	}
	
	return min;
}

function solution(rows, columns, queries) {
	const map = new Array(rows).fill(0).map(() => new Array(columns));
	let num = 1;
	for (const row of map) {
		for (let i = 0; i < row.length; i++) {
			row[i] = num++;
		}
	}
	
	return queries.map(([y1, x1, y2, x2]) => rotate(map, x1 - 1, y1 - 1, x2 - 1, y2 - 1));
}

console.log(solution(6, 6, [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]]));
console.log(solution(3,3, [[1,1,2,2],[1,2,2,3],[2,1,3,2],[2,2,3,3]]));
console.log(solution(100,97, [[1,1,100,97]]));