const HAND = 'RL';

function getDistance(offset) {
	return (original, destination) => {
		// const [o, d] = [original - 1, destination - 1];
		// const x = Math.abs(o % 3 - d % 3);
		// const y = Math.abs(o / 3 - d / 3);
		// return x + y;
		
		const abs = Math.abs(destination - original);
		const round = Math.round(abs / 3);

		if (original % 3 !== offset) return round;
		if (abs > 3) return round + 1;
		return abs;
	};
}

// 공통된 로직이 있는데 사용되는 값이 다를때 closure를 사용한다
const getDistances = [0, 1].map(index => getDistance(index));

function getHand(position, num, answerHand) {
	if (num % 3 < 2) return num % 3;
	
	const [right, left] = getDistances.map((getDistance, index) => getDistance(position[index], num));
	console.log(right, left);
	if (left === right) return answerHand;
	return Number(left < right);
}

function solution(numbers, hand) {
	const answerHand = Number(hand === 'left');

	const position = [12, 10];
	return numbers.map(e => e === 0 ? 11 : e)
		.map(num => {
			const hand = getHand(position, num, answerHand);
			position[hand] = num;
			return HAND[hand];
		}).join('');
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')); //LRLLLRLLRRL
// console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	, 'left')); //LRLLRRLLLRR
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')); //LLRLLRLLRL