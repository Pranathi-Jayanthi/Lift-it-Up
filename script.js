var character = document.getElementById("character");
var ball = document.getElementById("ball");
const message = document.querySelector(".msg")
function jump() {
	if(character.classList != "animate"){
			character.classList.add("animate");
	}
	setTimeout(function () {
		character.classList.remove("animate");
	}, 500);
}

var checkDead = setInterval(function(){
	var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var ballLeft = parseInt(window.getComputedStyle(ball).getPropertyValue("left"));
	if(ballLeft<25 && ballLeft>0 && characterTop>=120){
		ball.style.animation = "none";
		ball.style.display = "none";
		message.innerHTML="YOU LOSE..";
		setTimeout(function () {
			message.innerHTML = "1..";
			setTimeout(function () {
				message.innerHTML = "2..";
				setTimeout(function () {
					message.innerHTML = "3..";
					setTimeout(function () {
						message.innerHTML = "START.."
						location.reload();
					}, 500);
				}, 500);
			}, 500);
		}, 1000);
	}
},10)


