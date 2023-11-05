const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was really warm outside, about 94 fahrenheit , so :insertx: went to go swim. When they got to :inserty:, they fell into the pool, then :insertz:. Bob saw the whole thing, so they joined too — :insertx: weighs 300 pounds, and it was a hot and scary day." ;
const insertX = ["Willy Wonka","Santa Claus", "Sleepy from Snow White"]; /* this is a way to create an array of words */

const insertY = ["the gym", "Area 51","Florida"];
const insertZ = ["fell apart in a million pieces", "threw up", "jumped and ran away"];

randomize.addEventListener('click', result);

let newStory = storyText;
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(":insertx:", xItem);
newStory = newStory.replace(":inserty:", yItem);
newStory = newStory.replace(":insertz:", zItem);

function result(){   

    if(customName.value !== '') {
      const name = customName.value;
    newStory = newStory.replace("Bob", name); 
    }
  
    if(document.getElementById("uk").checked) {
      const weight = Math.round(300/14);
      newStory = newStory.replace("pounds", "stone");
      const temperature =  Math.round((94-32)*(5/9)) +" centigrade ";
      newStory = newStory.replace("94 fahrenheit", temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
  }



