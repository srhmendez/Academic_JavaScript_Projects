document.querySelector('#title').innerHTML = "Pizza Emporium"
document.querySelector('#slogan').innerHTML = "Literal Objects"

//show results of function in the DOM
let story = document.createElement("p");
let results = document.querySelector("#result");

//main function

function tellStory() {

    let nounsArray = document.querySelector("#nouns").value.toLowerCase().split(/\s*[,\n." "]+\s*/);
    console.log(nounsArray)

    let adjectivesArray = document.querySelector('#adjectives').value.toLowerCase().split(/\s*[,\n." "]+\s*/)
    console.log(adjectivesArray)

    let verbsArray = document.querySelector('#verbs').value.toLowerCase().split(/\s*[,\n." "]+\s*/)
    console.log(verbsArray)


theStory = `Once upon a time the ${nounsArray[0]} was ${adjectivesArray[0]}, but the ${nounsArray[1]} begged to differ. After much contemplation, the ${nounsArray[2]} decided to ${verbsArray[0]} to make his ${adjectivesArray[1]} family feel better. Unfortunately nothing seemed to ${verbsArray[1]}. ${nounsArray[3]} wanted everything to be ${adjectivesArray[2]} but ${nounsArray[4]}, ${nounsArray[5]}, and ${nounsArray[6]} were too busy playing to notice. THE END. `;
const output = document.querySelector("#result");

output.innerHTML = theStory;

}