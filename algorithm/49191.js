/**
 * 플로이드와샬 알고리즘
 * 노드 A, B, C가 있다
 * A -> B = 3
 * B -> C = 4
 * C -> A = 10
 *
 * A 에서 C로 가고자 할때 한번에 가는 비용은 10.
 * 따라서 B를 경유하여 가는것이 더 이득
 */

function solution(n, results) {
	const playerMap = [];
	
	// 각 선수의 결과를 넣어줄 map 을 만든다
	for (let i = 0; i < n; i++) {
		const row = new Array(n).fill(0);
		playerMap.push(row);
	}
	
	// 결과에 따라 승 = 1 패 = -1 를 넣어준다
	for (let i = 0; i < results.length; i++) {
		const [win, lose] = results[i];
		
		playerMap[win - 1][lose - 1] = 1;
		playerMap[lose - 1][win - 1] = -1;
	}
	
	
	for (let i = 0; i < playerMap.length; i++) {
		for (let j = 0; j < playerMap[i].length; j++) {
			for (let k = 0; k < n; k++) {
				if (playerMap[i][k] === 1 && playerMap[k][j] === 1) {
					playerMap[i][j] = 1;
					playerMap[j][i] = -1;
				}
				
				if (playerMap[i][k] === -1 && playerMap[k][j] === -1) {
					playerMap[i][j] = -1;
					playerMap[j][i] = 1;
				}
			}
		}
	}
	
	let answer = 0;
	
	for (const row of playerMap) {
		if (row.filter(e => e === 0).length === 1) answer++;
	}
	
	return answer;
}

console.log(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]));