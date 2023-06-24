function AskBob(message) {
	let bobResponse = "";
	switch (message) {
		case "How are you?":
			bobResponse = "Sure.";
			break;
		case "YELL":
			bobResponse = "Whoa, chill out!";
			break;
		case "YELL???":
			bobResponse = "Calm down, I know what I'm doing!";
			break;
		case "":
			bobResponse = "Fine. Be that way!";
			break;
		default:
			bobResponse = "Whatever.";
	}
	return bobResponse;
}

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2015%20-%20Challenge/15thChallenge.js