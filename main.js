
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;


	if (question1 == "Cairo") {
		correct++;
    }
	if (question2 == "Tunis") {
		correct++;
    }	
	if (question3 == "10") {
		correct++;
	}
	if (question4 == "18") {
		correct++;
	}
	if (question5 == "16") {
		correct++;
	}
	
	var pictures = ["img/win.gif","img/win.gif", "img/meh.jpeg", "img/lose.gif"];
	var messages = ["Great job!","Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct === 0) {
		score = 3;
	}

	if (correct > 0 && correct < 4) {
		score = 3;
	}

	if (correct === 3) {
		score = 2;
	}
	if (correct === 4) {
		score = 2;
	}
	if (correct === 5) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
	
