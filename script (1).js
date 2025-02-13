/*Add your JavaScript here*/
var magaliScore = 0; //magali score
var monicaScore = 0; //monica score

var questionCount = 0; //answer clicked on

var displayResult = document.getElementById ("displayResult");
var result = document.getElementById ("result");
var restart = document.getElementById ("restart");

var imgMonica = document.createElement ("img");
var imgMagali = document.createElement ("img");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");


q1a1.addEventListener("click", monica);
q1a2.addEventListener("click", magali);

q2a1.addEventListener("click", monica);
q2a2.addEventListener("click", magali);

q3a1.addEventListener("click", monica);
q3a2.addEventListener("click", magali);

q4a1.addEventListener("click", monica);
q4a2.addEventListener("click", magali);

q5a1.addEventListener("click", monica);
q5a2.addEventListener("click", magali);

restart.addEventListener ("click", restartQuiz);

imgMonica.src = "assets/monica.png";
imgMonica.alt = "Monica";
imgMagali.src = "assets/Magaliboa.png";
imgMagali.alt = "Magali";
imgMagali.style.height = "200px";
imgMagali.style.mawidth = "120px";


function magali() {
 magaliScore += 1;
 questionCount += 1;

 console.log(" questionCount = " + questionCount + " magaliScore = " + magaliScore);  
  
  if (questionCount == 5) {
    console.log("The Quiz is done!");
    uptadeResult();
  }
}


function monica(){
  monicaScore += 1;
  questionCount += 1;

  console.log(" questionCount = " + questionCount + "monicaScore " + monicaScore);
  
  if (questionCount == 5) {
    console.log("The Quiz is done!");
    uptadeResult();
  }
}

function uptadeResult (){
 displayResult.addEventListener("click", display);
 
}

function display(){
  if (monicaScore >= 3){
     result.innerHTML = "You are Mônica!";
     console.log ("You're mônica");
     result.appendChild (imgMonica);
    } else if (magaliScore >= 3) {
      result.innerHTML = "You're Magali!";
      console.log ( "You're magali");
      result.appendChild (imgMagali);
    }
  
}

function restartQuiz () {
  result.innerHTML = "You are...";
  questionCount = 0;
  monicaScore = 0;
  magaliScore = 0;
  console.log("questionCount = " + questionCount + "magaliScore = " + magaliScore + "monicaScore = " + monicaScore);
   enableQuestions();
  
  
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);

q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", disableQ5);

function disableQ1() {
  q1a1.disabled = true; 
  q1a2.disabled = true; 
}

function disableQ2() {
  q2a1.disabled = true; 
  q2a2.disabled = true; 
}

function disableQ3() {
  q3a1.disabled = true; 
  q3a2.disabled = true; 
}

function disableQ4() {
  q4a1.disabled = true; 
  q4a2.disabled = true; 
}

function disableQ5() {
  q5a1.disabled = true; 
  q5a2.disabled = true; 
}

function enableQuestions(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q3a1.disabled = false; 
  q3a2.disabled = false;
  q4a1.disabled = false; 
  q4a2.disabled = false;
  q5a1.disabled = false; 
  q5a2.disabled = false;
}


