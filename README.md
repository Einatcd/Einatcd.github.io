# Einat's Website

Welcome to my website. Below is a quick guide on how to get the best of it.  
In this website I used JavaScript, CSS and Html.

## Running the website 

To open the website, just follow the link:
https://upbeat-dubinsky-70f6c1.netlify.app/


## External Frameworks

I used 'Bootstrap 5' for styling my website in adittion to my CSS code.  
In the 'Photos' and 'Contact Me' sections, I also added a script from bootstrap to generate the photos carousel and the modal.

## Header and Footer

I made one header with navigation options for all the website pages: 

![image](https://user-images.githubusercontent.com/96620177/147372671-4a9048d9-b6c0-4e05-9321-7301932db6a3.png)

You can click on any section and navigate easly between them.  
In any moment you can see in which section your'e on by the bold section in the header.
The 'ES' logo on the right side stands for 'Einat Sidi'.  
The header code also includes a 'go-back' button, which appears beneath the navigation bar.  

### JS
the code below allowed me to generate only one header for all the pages, by replacing the appropriate line in each page with the header's html code:  

```JavaScript
fetch('header.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_header");  // look for the line: "replace_with_header"
    let name = oldelem.getAttribute("name")
    let newelem = document.createElement("div");
    newelem.innerHTML = text;                                    // put the text from 'header.html' file in a new html element
    oldelem.parentNode.replaceChild(newelem,oldelem);            // replace between the old element to the new one
    document.getElementById(name).classList.add("active");
})
```

I also made a footer:

![image](https://user-images.githubusercontent.com/96620177/147372842-f76be7b3-0305-4213-af04-30585921e7c2.png)

Each icon links to my correspoding social media account.  
The whats-app icon:  
  Links to send me the next automated message on Whats-app: "Hi Einat! I love your website!".  
  It works better if you have the app on your computer.
  
### JS
The JavaScript code of the footer is exactly the same as the header's.

# Sections:

## Home page
I used CSS animations to generate the slide-in headline:

https://user-images.githubusercontent.com/96620177/147373003-287f0300-d9ae-4e34-af71-7f7cf8df650e.mp4

By this code:

```CSS
#main-title-home, #main-title-part2{    // each line is a different header
  color: ivory;
    font-size: 10vw;
    animation-duration: 3s;
    animation-name: slidein;
  }
  #main-title-part2{
    animation-delay: .3;
  }
  @keyframes slidein {
    from {
      margin-top: 100%;
      height: 300%;
    } 
    to {
      margin-top: 0%;
      height: 100%;
    }
  }
```
# About Me
In this page you'll find my information, devided by sections.  
I added a navigation option to help you find the section your'e looking for:

![image](https://user-images.githubusercontent.com/96620177/147373332-2e4a6702-c92c-4c5e-bd6c-764244f6d56e.png)

The division made by making each section an html card element.  
I sincerely reccomend you to visit the 'Favorite Song' section:

![image](https://user-images.githubusercontent.com/96620177/147373384-c0699837-e0f6-4cb9-8aba-35e7d15d261b.png)

You can click the play button again to pause.  
The text area contains a small datalist of songs (which I wrote), to help you narrow down the options.  
By clicking on the send arrow, you'll get an alert that informs you if you got it right.  

### JS

```JavaScript

let acc = document.getElementById("acc-button");      // accordion for the hint button
let hint = document.getElementById("hint")           
acc.addEventListener("click", function () {
  this.classList.toggle("active");                  //on click - if it's closed, open it, and if it's open, close it.
  if (hint.style.maxHeight) {
    hint.style.maxHeight = null;
  } else {
    hint.style.maxHeight = hint.scrollHeight + "px";
  }
});

const myAudio = new Audio("/favorite_song.mp3");

function play() {
  return myAudio.paused ? myAudio.play() : myAudio.pause();     //play or pause
};

function check() {            // Alerts for right and wrong answers
  if (ans()) {                
    alert("Good job!");  
  } else {
    alert("Sorry, wrong answer! Try again");
  }
}

function ans() {                  // Checks your guess
  const val = document.querySelector('input').value;      
  if (val == "???") {             // The original code has the answer instead of '???'
    return true;
  }
  return false;
}
```
## My photos
In this section You can see a carousel of my photos.  

### Functuality and JS
You can navigate between photos by clicking on the bottom navigation buttons or the left/right arrows,  
by touch, by keyboard, or just let them slide on their on.  
The following JS script allowed me to add this features:

```JavaScript
let myCarousel = document.querySelector('#myCarousel')
let carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2500,             //the auto-slide interval
  touch: true,
  keyboard: true
})

```
As I mentioned above, I also got help from a 'Bootstrap 5' script.

## Contact Me
In this section your'e able to send me a message through an html form.  
The message is sent by 'Formspree' service straight to my email.  
On submittion, a new tab would open saying that you successfuly send the message.  
In the same time, you'll get a modal that would verify the success of sending the message:  

<img width="430" alt="image" src="https://user-images.githubusercontent.com/96620177/147374380-1c34a693-8c47-4b5d-8930-f33094906e8d.png">

If you'll enter yes, you'll be redirect to a 'Thank you' page. Else, you'll return to the form page.  

### Validation
I validate the form using html code.  
For each input, I validate 3 things:  
1. If it's filled in (by 'required' attribute)
2. If it matches the correct pattern (by 'pattern'/'type' attribute)
3. If it has a minimum length (by 'minlength' attribute)

### Html example of validation

```Html
<label class="form-label">Email address</label>
<!-- the "type='email' attribute validates that the input has the correct pattern -->
<input type="email" class="form-control is-invalid" id="email" name="email" placeholder="name@example.com" required minlength="5">
```

### JS
The following JavaScript code makes the submit button disabled until all inputs are filled in.  

```JavaScript
const inputs = document.querySelectorAll("input,textarea");

inputs.forEach(element => {
    element.addEventListener("change", () => {      //on change in the input, check if all the inputs are filled
        let submit = true;
        inputs.forEach(element => {
            if (!element.value) {       //if an input value is null then stay disabled
                submit = false;
            }
        });
        if (submit) {
            const button = document.getElementById("sub-button");
            button.classList.toggle("disabled");
        }
    })
});
```
As I mentioned above, I also got help from a 'Bootstrap 5' script, for the modal activation.






