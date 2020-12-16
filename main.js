//function to generate random number based on length of value in object

const generateRandomNumber = (num) => {


    return Math.floor(Math.random() * num);

}

// create object with arrays that will be referenced later when generating random sentence

const sentenceStructure = {

    howFast: ["Today I ran", "Today I walked", "Today I skipped", "Today I crawled"],
    howFar: ["5km", "10km", "20km", "40km", "50km"],
    bodyPart: ["my arms", "my legs", "my thighs", "my back"],
    felt: ["felt great", "felt strong", "felt sore", "felt weak"],
    get sentence(){
        console.log(`${this.howFast[generateRandomNumber(this.howFast.length)]} ${this.howFar[generateRandomNumber(this.howFar.length)]} ${this.bodyPart[generateRandomNumber(this.bodyPart.length)]} ${this.felt[generateRandomNumber(this.felt.length)]}`)

    }
};





sentenceStructure.sentence;