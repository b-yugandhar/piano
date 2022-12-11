const pinaokeys = document.querySelectorAll(".piano-keys .key")
const volumeSlider =  document.querySelector(".volume-slider input")
const keyCheckbox =  document.querySelector(".keys-checkbox input")



let allKeys=[]
const audio = new Audio("alltune/a.wav")
const playTune = (key) => {
    audio.src=`alltune/${key}.wav`
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add('active')
    setTimeout(() => {
    clickedKey.classList.remove('active')
        
    }, 150);
}



pinaokeys.forEach((key)=>{
    allKeys.push(key.dataset.key)
    key.addEventListener('click',()=>playTune(key.dataset.key))
    
})

const showHidenkeys = (e)=>{
    pinaokeys.forEach(key => key.classList.toggle("hide"))
}
const handleVolume = (e) => {
    audio.volume = e.target.value;
}
const pressedKey = (e)=>{
    if(allKeys.includes(e.key)) playTune(e.key)
}
document.addEventListener('keydown',pressedKey)
volumeSlider.addEventListener('input',handleVolume)
keyCheckbox.addEventListener('click',showHidenkeys)
