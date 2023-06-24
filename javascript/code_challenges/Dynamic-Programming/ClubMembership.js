function ClubMembership(data) {
	return data.map((member) => {
		for (let i = 0; i < member.length; i++) {
			return member[0] >= 55 && member[1] > 7 ? "Senior" : "Open";
		}
	});
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2041%20-%20Challenge/41stChallenge.js