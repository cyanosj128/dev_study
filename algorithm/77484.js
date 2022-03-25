function solution(lottos, win_nums) {
	let overlapCount = 0;
	const zeroCount = lottos.filter(e => e === 0).length;

	for(let i = 0; i < lottos.length; i++) {
		for(let j = 0; j < win_nums.length; j++) {
			if (lottos[i] === win_nums[j]) overlapCount++;
		}
	}

	return [getPlace(overlapCount + zeroCount), getPlace(overlapCount)];
}

function getPlace(count) {
	switch(count) {
		case 6: return 1;
		case 5: return 2;
		case 4: return 3;
		case 3: return 4;
		case 2: return 5;
		default: return 6;
	}
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));