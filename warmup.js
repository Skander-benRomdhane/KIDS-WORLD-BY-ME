
function ifTrue(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var res = 0;


	if (question1 == "Cairo") {
		res++;
    }
	if (question2 == "Tunis") {
		res++;
    }	
	if (question3 == "10") {
		res++;
	}
	if (question4 == "18") {
		res++;
	}
	if (question5 == "16") {
		res++;
	}
	
	var pictures = ["gif/bestRes.gif", "gif/normalRes.jpeg", "gif/wasteRes.gif"];
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (res === 0) {
		score = 2;
	}

	if (res > 0 && res <= 4) {
		score = 1;
	}

	if (res === 5) {
		score = 0;
	}

	document.getElementById("submit").style.visibility = "visible";
	// style.visibility property returns an element when it should be visible

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("correctNumber").innerHTML = "You got " + res + " res.";
	document.getElementById("picture").src = pictures[score];
	}


	$('#button1').after('#quiz')
	
