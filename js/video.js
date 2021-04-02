var video = document.getElementById("player1");;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Play Video slower");
	// get current speed
	//console.log(video.playbackRate)
	// *0.95
	var oldplaybackRate1 = video.playbackRate;
	var newplaybackRate1 = oldplaybackRate1* 0.95;
	// set speed
	video.playbackRate = newplaybackRate1;
	// print new speed
	console.log(video.playbackRate);
	// video.playbackRate = 0.5
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Play Video faster");
	// get current speed
	var oldplaybackRate2 = video.playbackRate;
	var newplaybackRate2 = oldplaybackRate2* 1.05;
	video.playbackRate = newplaybackRate2;
	console.log(video.playbackRate);
	// print to confirm
	video.duration
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	if (video.currentTime + 15 > video.duration) {
		video.currentTime = 0;
		console.log(video.currentTime);
		video.play();
	} else {
		video.currentTime += 15;
		console.log(video.currentTime);
		video.play();
	};
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted === false) {
		video.muted = true;
		console.log("Mute Video");
		document.querySelector("#mute").innerHTML = "Unmute";
 	}else{
		video.muted = false;
		console.log("Unmute Video");
		document.querySelector("#mute").innerHTML="Mute";
	 };
 
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video";
});

document.querySelector("#slider").addEventListener("click", function() {
	var volume = document.querySelector("#slider").value;
	video.volume = volume/100;
	document.querySelector("#volume").innerHTML= volume + "%";
});
