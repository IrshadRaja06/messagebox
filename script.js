
let questions = [
   "what is your name",
   "how are you",
   "are you a programmer",
   "how many programming languages you know",
   "are you an skilled person",
   "what is your salary",
   "who is the owner of google",
   "what is your profession",
]

function accepted(){
   let ques = document.getElementById("ques").value;
   ques = ques.toLowerCase();
   if(questions.includes(ques))
    window.alert("Your question accepted");
   else
    window.alert("Your question is rejected");
}

function declined(){
    alert("Question Declined");
}