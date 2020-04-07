//function to remove the transition property
function removeStyle(e) {
  //Any property but the transform , the function will return
  if (e.propertyName !== "transform") {
    return;
  }

  //   console.log(e.propertyName);

  //this means each key against which the transitionend event has launched
  console.log(this);

  //Removing the transform property , playing class
  this.classList.remove("playing");
}

//Function of playing the sound
function soundOn(e) {
  //matching the key code and audio tag data-key
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //matching the key code and .part class  data-key
  const key = document.querySelector(`.part[data-key="${e.keyCode}"]`);

  if (audio === null) {
    //returns if the keycode is not listed
    return;
  }

  //setting the play time to 0 , starting over
  audio.currentTime = 0;
  //playing the audio
  audio.play();
  //adding a class list for transition
  key.classList.add("playing");
}

//Selecting all the part class for ending transition
const keys = document.querySelectorAll(".part");
//Handling the event for Transition end
keys.forEach((key) => key.addEventListener("transitionend", removeStyle));
//handling the event of key press
window.addEventListener("keydown", soundOn);
