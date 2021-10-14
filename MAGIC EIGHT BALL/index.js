let userName = 'NEO71110';

userName ? console.log(`Hello, ${userName}.`) : console.log('Hello!');

let userQuestion = 'Will I do this exercise?';
let randomNumber = Math.floor(Math.random() * 7);
let eightBall = '';

if (randomNumber>=0){
  if(randomNumber==0):
    eigthBall = 'It is certain';
  else if (randomNumber==1):
    eightBall = 'It is decidedly so';
  else if (randomNumber==2):
    eightBall = 'Reply hazy try again';
  else if (randomNumber==3):
    eightBall = 'Cannot predict now';
  else if (randomNumber==4):
    eightBall = 'Dont count on it';
  else if (randomNumber==5):
    eightBall = 'My sources say no';
  else if (randomNumber==6):
    eightBall = 'Outlook not so good';
  else if (randomNumber==7):
    eightBall = 'Signs point to yes';
}

console.log('User question: ' + userQuestion); 
console.log('The eight ball answer: ' + eightBall);
