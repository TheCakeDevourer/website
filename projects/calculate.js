var firstNo = 0;
var secondNo = 0;
var currentNo = 0;
var addedNo = 0;
var answerNo = 0;
//FIRST CHANGE
var operator= ""

function updateDisplay(nos) {

var screenn = document.getElementById('display');
var scdata = document.getElementById('display').innerHTML;

String(nos);
String(scdata);

screenn.innerHTML =scdata + nos;
if (currentNo==0) {


addedNo = String(firstNo);

addedNo = addedNo + nos;

firstNo = Number(addedNo);

}if (currentNo==1) {

addedNo = String(secondNo);

addedNo = addedNo + nos;

secondNo = Number(addedNo);


}	

}

function clearScreen() {
	
document.getElementById('display').innerHTML = "";
firstNo = 0;
secondNo = 0;
currentNo = 0;

	
}

function setOperator(opo) {
//SECOND CHANGE
operator = opo;

currentNo = currentNo + 1;	
document.getElementById('display').innerHTML = "";
	
}



function calculate() {
   //THIRD CHANGE
if (operator =="+") {
	
document.getElementById('display').innerHTML = parseFloat(firstNo) + parseFloat(secondNo);
console.log(firstNo)
answerNo = 	Number(document.getElementById('display').innerHTML);
firstNo = 0;
secondNo = 0;
currentNo = 0; 	
	
}
  //FORTH CHANGE
if (operator =="*") {
	
document.getElementById('display').innerHTML = firstNo * secondNo;	
answerNo = 	Number(document.getElementById('display').innerHTML);
firstNo = 0;
secondNo = 0;
currentNo = 0; 
	
}
  //FITH CHANGE
if (operator =="/") {
	
document.getElementById('display').innerHTML = firstNo / secondNo;
answerNo = 	Number(document.getElementById('display').innerHTML);	
firstNo = 0;
secondNo = 0;
currentNo = 0; 
	
}
   //SIXTH CHANGE
   if (operator =="-") {
	
document.getElementById('display').innerHTML = firstNo - secondNo;
answerNo = 	Number(document.getElementById('display').innerHTML);	
firstNo = 0;
secondNo = 0;
currentNo = 0; 
	
}

	if (operator =="power") {
	
document.getElementById('display').innerHTML = Math.pow(firstNo,secondNo);
answerNo = 	Number(document.getElementById('display').innerHTML);	
firstNo = 0;
secondNo = 0;
currentNo = 0; 
	
}

	if (operator =="sqrt") {
	
document.getElementById('display').innerHTML = Math.sqrt(firstNo);
answerNo = 	Number(document.getElementById('display').innerHTML);	
firstNo = 0;
secondNo = 0;
currentNo = 0; 
	
}
	
	
}