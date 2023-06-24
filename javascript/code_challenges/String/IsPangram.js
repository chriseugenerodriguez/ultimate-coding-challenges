const isPangram = (input) => {
	input = input.toLowerCase();
	let alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
	return alphabets.every((x) => input.includes(x));
};
  
  // 2nd Solution
  // 	let strArr = input.toLowerCase();
  // let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  //   for (let i = 0; i < alphabets.length; i++) {
  //     if(strArr.indexOf(alphabets[i]) < 0){
  //       return false;
  //     }
  //   }
  //   return true;

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2014%20-%20Challenge/14thChallenge.js