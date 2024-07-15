let leftButton = document.querySelector("#leftButton")
let rightButton = document.querySelector("#rightButton")
let skinTone = document.querySelector('#skinTone');
let eye = document.querySelector('#eye');
let eyelash = document.querySelector('#eyelash');
let mouth = document.querySelector('#mouth');
let shirt = document.querySelector('#shirt');
let leftEye = document.querySelector('#leftEye');
let rightEye = document.querySelector('#rightEye');
let leftShirt = document.querySelector('#leftShirt');
let rightShirt = document.querySelector('#rightShirt');
let blonde = document.querySelector('#blonde');
let brown = document.querySelector('#brown');
let black = document.querySelector('#black');
let leftHair = document.querySelector('#leftHair');
let rightHair = document.querySelector('#rightHair');
function render(skin) {
  if(skin==0){
    skinTone.src = "./assets/body/skin1.PNG"
  }
  else if(skin==1){
    skinTone.src = "./assets/body/skin2.PNG"
  }
  else if(skin==2){
    skinTone.src = "./assets/body/skin3.PNG"
  }
  else if(skin==3){
    skinTone.src = "./assets/body/skin4.PNG"
  }
  else if(skin==4){
    skinTone.src = "./assets/body/skin5.PNG"
  }
}
function renderEyelash(eyelashCounter) {
  if(eyelashCounter==0){
    eyelash.src = "./assets/eyelash/down.PNG"
  }
  else if(eyelashCounter==1){
    eyelash.src = "./assets/eyelash/middle.PNG"
  }
  else if(eyelashCounter==2){
    eyelash.src = "./assets/eyelash/up.PNG"
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
function renderMouth(mouthCounter) {
  if(mouthCounter==0){
    mouth.src = "./assets/mouth/smile.PNG"
  }
  else if(mouthCounter==1){
    mouth.src = "./assets/mouth/neutral.PNG"
  }
  else if(mouthCounter==2){
    mouth.src = "./assets/mouth/frown.PNG"
  }
}
function renderShirt(shirtCounter) {
  if(shirtCounter==0){
    shirt.src = "./assets/clothes/shirt1.PNG"
  }
  else if(shirtCounter==1){
    shirt.src = "./assets/clothes/shirt2.PNG"
  }
  else if(shirtCounter==2){
    shirt.src = "./assets/clothes/shirt3.PNG"
  }
  else if(shirtCounter==3){
    shirt.src = "./assets/clothes/shirt4.PNG"
  }
  else if(shirtCounter==4){
    shirt.src = "./assets/clothes/shirt5.PNG"
  }
  else if(shirtCounter==5){
    shirt.src = "./assets/clothes/shirt6.PNG"
  }
  else if(shirtCounter==6){
    shirt.src = "./assets/clothes/shirt7.PNG"
  }
}
function renderPant(pantCounter) {
  if(pantCounter==0){
    pant.src = "./assets/pants/pant1.PNG"
  }
  else if(pantCounter==1){
    pant.src = "./assets/pants/pant2.PNG"
  }
  else if(pantCounter==2){
    pant.src = "./assets/pants/pant3.PNG"
  }
  else if(pantCounter==3){
    pant.src = "./assets/pants/pant4.PNG"
  }
  else if(pantCounter==4){
    pant.src = "./assets/pants/pant5.PNG"
  }
  else if(pantCounter==5){
    pant.src = "./assets/pants/pant6.PNG"
  }
  }
  function renderHair(hairCounter) {
    if(hairCounter==0){
      if(hairColor==0){
        front.src = "./assets/front/s1c0.PNG"
    }
    else if(hairColor==1){
      front.src = "./assets/front/s1c1.PNG"
    }
    else if(hairColor==2){
      front.src = "./assets/front/s1c2.PNG"
      console.log ('hi')
    }
  }
    else if(hairCounter==1){
      if(hairColor==0){
        front.src = "./assets/front/s2c0.PNG"
      }
      if(hairColor==1){
        front.src = "./assets/front/s2c1.PNG"
      }
      if(hairColor==2){
        front.src = "./assets/front/s2c2.PNG"
      }
    }
    else if(hairCounter==2){
      if(hairColor==0){
        front.src = "./assets/front/s3c0.PNG"
      }
      if(hairColor==1){
        front.src = "./assets/front/s3c1.PNG"
      }
      if(hairColor==2){
        front.src = "./assets/front/s3c2.PNG"
    }
  }
    else if(hairCounter==3){
      if(hairColor==0){
        front.src = "./assets/front/s4c0.PNG"
      }
      if(hairColor==1){
        front.src = "./assets/front/s4c1.PNG"
      }
      if(hairColor==2){
        front.src = "./assets/front/s4c2.PNG"
      }
    }
  }
  function renderBackHair(backCounter) {
    if(backCounter==0){
      if(hairColor==0){
        back.src = "./assets/back/s1c0.PNG"
    }
    else if(hairColor==1){
      back.src = "./assets/back/s1c1.PNG"
    }
    else if(hairColor==2){
      back.src = "./assets/back/s1c2.PNG"
      console.log ('hi')
    }
  }
    else if(backCounter==1){
      if(hairColor==0){
        back.src = "./assets/back/s2c0.PNG"
      }
      if(hairColor==1){
        back.src = "./assets/back/s2c1.PNG"
      }
      if(hairColor==2){
        back.src = "./assets/back/s2c2.PNG"
      }
    }
    else if(backCounter==2){
      if(hairColor==0){
        back.src = "./assets/back/s3c0.PNG"
      }
      if(hairColor==1){
        back.src = "./assets/back/s3c1.PNG"
      }
      if(hairColor==2){
        back.src = "./assets/back/s3c2.PNG"
    }
  }
    else if(backCounter==3){
      if(hairColor==0){
        back.src = "./assets/back/s4c0.PNG"
      }
      if(hairColor==1){
        back.src = "./assets/back/s4c1.PNG"
      }
      if(hairColor==2){
        back.src = "./assets/back/s4c2.PNG"
      }
    }
  }
let backCounter=0
let mouthCounter= 0
let eyelashCounter=0
let shirtCounter=0
let eyeCounter=0
let skin=0;
let pantCounter=0
let hairColor=0
let hairCounter=0
leftButton.addEventListener("click",function(){
  if(skin<1){
    skin=4
  }
  else {
    skin--
  }
  render(skin)

})
rightButton.addEventListener("click",function(){
  if(skin>3){
    skin=0
  }
  else {
    skin++
  }  
  render(skin)
})
leftEye.addEventListener("click",function(){
  if(eyeCounter<1){
    eyeCounter=4
  }
  else {
    eyeCounter--
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
leftShirt.addEventListener("click",function(){
  if(shirtCounter<1){
    shirtCounter=6
  }
  else {
    shirtCounter--
  }  
  renderShirt(shirtCounter)
})
rightShirt.addEventListener("click",function(){
  if(shirtCounter>5){
    shirtCounter=0
  }
  else {
    shirtCounter++
  }  
  renderShirt(shirtCounter)
})
leftEyelash.addEventListener("click",function(){
  if(eyelashCounter<1){
    eyelashCounter=2
  }
  else {
    eyelashCounter--
  }  
  renderEyelash(eyelashCounter)
})
rightEyelash.addEventListener("click",function(){
  if(eyelashCounter>1){
    eyelashCounter=0
  }
  else {
    eyelashCounter++
  }  
  renderEyelash(eyelashCounter)
})
leftMouth.addEventListener("click",function(){
  if(mouthCounter<1){
    mouthCounter=2
  }
  else {
    mouthhCounter--
  }  
  renderMouth(mouthCounter)
})
rightMouth.addEventListener("click",function(){
  if(mouthCounter>1){
    mouthCounter=0
  }
  else {
    mouthCounter++
  }  
  renderMouth(mouthCounter)
})
leftPant.addEventListener("click",function(){
  if(pantCounter<1){
    pantCounter=5
  }
  else {
    pantCounter--
  }  
  renderPant(pantCounter)
})
rightPant.addEventListener("click",function(){
  if(pantCounter>4){
    pantCounter=0
  }
  else {
    pantCounter++
  }  
  renderPant(pantCounter)
})
blonde.addEventListener("click",function(){ 
  hairColor=0
 renderHair(hairCounter)
 renderBackHair(backCounter)
})
brown.addEventListener("click",function(){
  hairColor=1
  renderHair(hairCounter)
  renderBackHair(backCounter)
 })
 black.addEventListener("click",function(){
  hairColor=2
  renderHair(hairCounter)
  renderBackHair(backCounter)
 })
 leftHair.addEventListener("click",function(){
  if(hairCounter<1){
  hairCounter=3
  renderHair(hairCounter)
}
else {
  hairCounter--
  renderHair(hairCounter)
}  
 })
 rightHair.addEventListener("click",function(){
  if(hairCounter>2){
  hairCounter=0
  renderHair(hairCounter)
}
else {
  hairCounter++
  renderHair(hairCounter)
}  
 })
 leftBackHair.addEventListener("click",function(){
  if(backCounter<1){
    backCounter=3
  renderBackHair(backCounter)
}
else {
  backCounter--
  renderBackHair(backCounter)
}  
 })
 rightBackHair.addEventListener("click",function(){
  if(backCounter>2){
    backCounter=0
  renderBackHair(backCounter)
}
else {
  backCounter++
  renderBackHair(backCounter)
}  
 })