const letterScores = {
	a: 1,
	b: 2,
	c: 3,
	d: 4,
	e: 5,
	f: 6,
	g: 7,
	h: 8,
	i: 9,
	j: 10,
	k: 11,
	l: 12,
	m: 13,
	n: 14,
	o: 15,
	p: 16,
	q: 17,
	r: 18,
	s: 19,
	t: 20,
	u: 21,
	v: 22,
	w: 23,
	x: 24,
	y: 25,
	z: 26,
};

function HighestScoringWord(x) {
	const wordList = x.split(" ");
	const getScore = (word) => {
		return word
			.split("")
			.reduce(
				(prevScore, currWord) => prevScore + currWord.charCodeAt(0) - 96,
				0
			);
	};
	const scoreList = wordList.map((word) => getScore(word));
	let highestIndex = 0;
	let highestScore = 0;
	scoreList.forEach((score, i) => {
		if (score > highestScore) {
			highestIndex = i;
			highestScore = score;
		}
	});
	return wordList[highestIndex];
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2043%20-%20Challenge/43rdChallenge.js