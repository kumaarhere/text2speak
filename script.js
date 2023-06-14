const speakBtn=document.querySelector("#play")
const text=document.querySelector("#text")

speakBtn.addEventListener("click",() => {
    const speech=new SpeechSynthesisUtterance(text.value)
    speechSynthesis.speak(speech)
});

