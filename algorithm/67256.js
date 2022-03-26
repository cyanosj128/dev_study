function solution(numbers, hand) {
	let leftHandPosition = 10;
	let rightHandPosition = 12;
	const answer = [];
	const answerHand = hand.slice(0, 1).toUpperCase();
	const newNumbers = numbers.map(e => {
		if (e === 0) return 11;
		else return e;
	});
	
	for (let i = 0; i < newNumbers.length; i++) {
		const num = newNumbers[i];
		if (num % 3 === 0) {
			rightHandPosition = num;
			answer.push('R');
			continue;
		}
		if (num % 3 === 1) {
			leftHandPosition = num;
			answer.push('L');
			continue;
		}
		
		const leftAbs = Math.abs(leftHandPosition - num);
		const rightAbs = Math.abs(rightHandPosition - num);
		
		const leftRound = Math.round(leftAbs / 3);
		const rightRound = Math.round(rightAbs / 3)
		
		const leftDiff = leftHandPosition % 3 === 1
			? leftAbs > 3 ? leftRound : leftAbs
			: leftRound;
		const rightDiff = rightHandPosition % 3 === 0
			? rightAbs > 3 ? rightRound : rightAbs
			: rightRound;
		
		if (rightDiff < leftDiff) {
			answer.push('R');
			rightHandPosition = num;
		} else if (rightDiff === leftDiff) {
			answer.push(answerHand);
			if (answerHand === 'R') rightHandPosition = num;
			else leftHandPosition = num;
		} else {
			answer.push('L');
			leftHandPosition = num;
		}
	}
	return answer.join('');
}

// console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	, 'left'));
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));