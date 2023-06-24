const earthSeconds = 31556926;
const getAge = (planet, seconds) => {
	return Number((seconds / (earthSeconds * planet)).toFixed(2));
};

const spaceAge = (seconds) => {
	const yearsInAllPlanets = {
		Mercury: 0.2408467,
		Venus: 0.61519726,
		Earth: 1,
		Mars: 1.8808158,
		Jupiter: 11.862615,
		Saturn: 29.447498,
		Uranus: 84.016846,
		Neptune: 164.79132,
	};

	yearsInAllPlanets["Mercury"] = getAge(yearsInAllPlanets.Mercury, seconds);
	yearsInAllPlanets["Venus"] = getAge(yearsInAllPlanets.Venus, seconds);
	yearsInAllPlanets["Earth"] = getAge(yearsInAllPlanets.Earth, seconds);
	yearsInAllPlanets["Mars"] = getAge(yearsInAllPlanets.Mars, seconds);
	yearsInAllPlanets["Jupiter"] = getAge(yearsInAllPlanets.Jupiter, seconds);
	yearsInAllPlanets["Saturn"] = getAge(yearsInAllPlanets.Saturn, seconds);
	yearsInAllPlanets["Uranus"] = getAge(yearsInAllPlanets.Uranus, seconds);
	yearsInAllPlanets["Neptune"] = getAge(yearsInAllPlanets.Neptune, seconds);

	return yearsInAllPlanets;
};

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2013%20-%20Challenge/13thChallenge.js