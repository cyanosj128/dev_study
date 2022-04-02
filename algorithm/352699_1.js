function solution(n) {
	let answer = 0;
	let count = 0;
	
	while (n !== 1) {
		if (n % 2 !== 0) {
			n = n-1;
			count++;
		} else {
			n = n / 2;
		}
	}
	
	if (count > 0) {
		answer = count + 1;
	} else {
		answer = 1;
	}
	return answer;
}

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));