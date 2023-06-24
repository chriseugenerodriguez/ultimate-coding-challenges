const DNAtoRNA2 = (dna) => {
	return dna
		.split("")
		.map((dna_strand) => {
			switch (dna_strand) {
				case "G":
					return "C";
				case "C":
					return "G";
				case "T":
					return "A";
				case "A":
					return "U";
				default:
					throw new Error("Invalid input DNA.");
			}
		})
		.join("");
};

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2036%20-%20Challenge/36thChallenge.js