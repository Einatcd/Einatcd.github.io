let acc = document.getElementById("acc-button")
let hint= document.getElementById("hint")
  acc.addEventListener("click", function() {
    this.classList.toggle("active");
    if (hint.style.maxHeight) {
        hint.style.maxHeight = null;
    } else {
      hint.style.maxHeight = hint.scrollHeight + "px";
    }
  });


const myAudio = new Audio("/favorite_song.mp3");

function play() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};

function check() {
  if (ans()){
    alert("Good job!");
    fireworks.start();

  } else{
    alert("Sorry, wrong answer! Try again");
  }
}

function ans(){
  const val = document.querySelector('input').value;
  if (val == "November rain - Guns N' Roses"){
    return true;
  }
  return false;
}

