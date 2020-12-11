let question = document.getElementById('question')
let result = document.getElementById('result')
//create a question and answer
let binaryArray = [];

for(let i = 0; i < 4; i++){
  let digit = Math.floor(Math.random()*2);
  binaryArray.push(digit);
};

let binaryString = binaryArray.join('');
let expectedAnswer = parseInt(binaryString,2);
let askQuestion = `What is ${binaryString} in decimal?`;

//ask the question
question.innerHTML = askQuestion;

//execute on answer
function answer(){
  let userAnswer = parseInt(document.forms["quiz"]["answer"].value);
  //compare if answer is correct
  if(userAnswer === expectedAnswer){
    result.innerHTML = 'You are correct'
  }else{
    result.innerHTML = "You're wrong"
  }
}