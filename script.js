let leftButton = document.querySelector("#leftButton")
let rightButton = document.querySelector("#rightButton")
let skinTone = document.querySelector('#skinTone');
function render(skin) {
  if(skin==0){
    skinTone.src = "./assets/skin1.PNG"
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

let skin=0
render(skin)
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

  

