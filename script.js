let leftButton =document.querySelector("#leftButton")
let rightButton =document.querySelector("#rightButton")
let skin=0
leftButton.addEventListener("click",function(){
if(skin<1){
  skin=5
}
else {
  skin--
}
})
rightButton.addEventListener("click",function(){
  if(skin>5){
    skin=0
  }
  else {
    skin++
  }
  })
