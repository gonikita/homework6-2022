var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false
	
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	console.log("The current volume is" + video.volume)
	document.querySelector("#volume").innerHTML = video.volume *100+"%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate)
	video.playbackRate *= .95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate)
	video.playbackRate /= .95
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 15
	if (video.ended) {
		video.load();
		video.play();
		playbackRate = 1
	}
	console.log("Current location is " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is " + video.muted)
	video.muted = true
	// if I am currently muted (muted == True)
	// set muted to false and update the text in the button
	// else
	// set muted to true and update the text in the button
	if (video.muted) {
		video.muted = false;
		console.log("Unmuted")
	}
	else {
		video.muted = true
		console.log("Muted")
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(volumeSlider.value)
	// Use this.value to update the video volume AND
	// update the volume element below	
});

video.classList.add("oldSchool")
video.classList.remove("oldSchool")
