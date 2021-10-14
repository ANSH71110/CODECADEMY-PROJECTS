let Number = Math.floor(Math.random()*1000);
let earlyReg = true;
let runnerAge  = 19;

if (earlyReg==false){
Number += 1000;
}

if (Number>18 && earlyReg=== true && raceNumber <1000){
  console.log(`Your race starts at 9:30 am and your race number is: ${Number}`);
} 
else if (earlyReg=== true || runnerAge > 18){
  console.log(`Your race starts at 11:00 am and your race number is: ${Number}`);
} 
else if (runnerAge < 18 && earlyReg===false){
   console.log(`Your race starts at 12:30 pm and your race number is: ${Number}`);
 } 
else{
   console.log(`Please see the registration desk to get your number`);
 }
