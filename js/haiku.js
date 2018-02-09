export class Haiku {
  constructor(lineOne, lineTwo, lineThree) {
    this.lineOne = lineOne;
    this.lineTwo = lineTwo;
    this.lineThree = lineThree;
  }

  readingHaiku(){

    let vowels = "aeiou".split('');
    let diphthong = ["ai", "au", "ay", "ee", "ea", "ie", "ei", "oo", "ow", "oe", "oa", "oi", "ou", "ue"];

    console.log("something");
    console.log(lineTwo);
    let syllableNumber = 0;
    let lineOneSplit = this.lineOne.split(" ");
    let lineTwoSplit = this.lineTwo.split(" ");
    let lineThreeSplit = this.lineThree.split(" ");
    // let lineTwoSplit = lineTwo.split(" ");
    // let lineThreeSplit = lineThree.split(" ");
    let splitWords = [];

    console.log(lineOneSplit[1]);
    debugger;
    for (let i = 0; i < lineOneSplit.length; i++) {
      let charOne = lineOneSplit[i].split('');
      console.log(charOne);
      let previousIsACOnsonant = false;
      if (vowels.includes(charOne[i]) && (previousIsACOnsonant)) {//true if charOne[i] is a vowel
        previousIsACOnsonant = false;
        syllableNumber += 1;
      } else {
        previousIsACOnsonant = true;
        // syllableNumber = syllableNumber;
        console.log();
      }
    }

    for (var i = 0; i < lineTwoSplit.length; i++) {
      let charTwo = lineTwoSplit[i].split('');
      console.log(charTwo);
    }

    for (var i = 0; i < lineThreeSplit.length; i++) {
      let charThree = lineThreeSplit[i].split('');
      console.log(charThree);
    }





  }
};
