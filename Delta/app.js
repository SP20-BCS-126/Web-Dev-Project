//Elements
const startBtn = document.querySelector("#start");
const endBtn = document.querySelector("#stop"); //endBtn was changed from stopBtn
const speakBtn = document.querySelector("#speak");

//Speech Recognition Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log("voicerec activated");
};

recognition.onresult = function (event) {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;

    console.log(transcript);
};

recognition.onend = function (event) {
    console.log("voicerec deactivated");
};

//for continouos input
//recognition.continuous = true;

startBtn.addEventListener("click", () => {
    recognition.start();
});

endBtn.addEventListener("click", () => {
    recognition.stop();
});

//DELTA AI Speech
function readOut(message){
    const speech = new SpeechSynthesisUtterance();
    //for different voices
    const allVoices = speechSynthesis.getVoices();
    speech.text = message;
    speech.voice = allVoices[13];
    speech.volume = 20;
    window.speechSynthesis.speak(speech);
    console.log("Delta Speaking");
}

//example
speakBtn.addEventListener("click", () => {
    readOut("おはよう ございます");
});
window.onload = function () {
    readOut("   ");
}