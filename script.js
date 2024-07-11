let leftButton = document.querySelector("#leftButton")
let rightButton = document.querySelector("#rightButton")
let skinTone = document.querySelector('#skinTone');
let eye = document.querySelector('#eye');
let eyelash = document.querySelector('#eyelash');
let mouth = document.querySelector('#mouth');
let leftEye = document.querySelector('#leftEye');
let rightEye = document.querySelector('#rightEye');
function render(skin) {
  if(skin==0){
    skinTone.src = "./assets/skin1.PNG"
    console.log ("test")
  }
  else if(skin==1){
    skinTone.src = "./assets/skin2.PNG"
  }
  else if(skin==2){
    skinTone.src = "./assets/skin2.PNG"
  }
  else if(skin==3){
    skinTone.src = "./assets/skin3.PNG"
  }
  else if(skin==4){
    skinTone.src = "./assets/skin4.PNG"
  }
  else if(skin==5){
    skinTone.src = "./assets/skin5.PNG"
  }
}
function renderEye(eyeCounter) {
  if(eyeCounter==0){
    eye.src = "./assets/eye/brown.PNG"
  }
  else if(eyeCounter==1){
    eye.src = "./assets/eye/darkBrown.PNG"
  }
  else if(eyeCounter==2){
    eye.src = "./assets/eye/blue.PNG"
  }
  else if(eyeCounter==3){
    eye.src = "./assets/eye/green.PNG"
  }
  else if(eyeCounter==4){
    eye.src = "./assets/eye/pink.PNG"
  }
}
let eyeCounter=0
let skin=0;

leftButton.addEventListener("click",function(){
  if(skin<1){
    skin=5
  }
  else {
    skin--
  }
  render(skin)

})
rightButton.addEventListener("click",function(){
  if(skin>4){
    skin=0
  }
  else {
    skin++
  }  
  render(skin)
})
leftEye.addEventListener("click",function(){
  if(eyeCounter<1){
    eyeCounter=0
  }
  else {
    eyeCounter++
  }  
  renderEye(eyeCounter)
})
rightEye.addEventListener("click",function(){
  if(eyeCounter>3){
    eyeCounter=0
  }
  else {
    eyeCounter++
  }  
  renderEye(eyeCounter)
})

  

