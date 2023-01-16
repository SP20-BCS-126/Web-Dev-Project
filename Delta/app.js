//Elements
const startBtn = document.querySelector("#start");
const endBtn = document.querySelector("#stop"); 
const speakBtn = document.querySelector("#speak");
const time = document.querySelector("#time");

//Speech Recognition Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log("voicerec activated");
};

recognition.onresult = function (event) {
    let current = event.resultIndex;
    let transcript = event.results[current][0].transcript;
    transcript = transcript.toLowerCase();

    if(transcript.includes("hello")){
        readOut("hello to you too");
        console.log("greeting");
    };

    if(transcript.includes("open youtube")){
        readOut("opening youtube");
        window.open("https://www.youtube.com/");
        console.log("opening youtube"); 
    };

    if(transcript.includes("open google")){
        readOut("opening google");
        window.open("https://www.google.com/");
        console.log("opening google"); 
    };

    if(transcript.includes("search for")){
        readOut("I found this through search");
        let input = transcript.split(""); // to split the the transcript to find index
        input.splice(0,11);
        input = input.join("").split(" ").join("+");

        console.log(input);
        window.open(`https://www.google.com/search?q=${input}`);
        console.log("opening google search"); 
    };

    if(transcript.includes("search youtube for")){
        readOut("I found this through youtube search");
        let input = transcript.split(""); // to split the the transcript to find index
        input.splice(0,19);
        input = input.join("").split(" ").join("+");

        console.log(input);
        window.open(`https://www.youtube.com/results?search_query=${input}`);
        console.log("opening youtube search"); 
    };

    console.log(`user words : ${transcript}`);
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

//example greeting
speakBtn.addEventListener("click", () => {
    readOut("おはよう ございます");
});
window.onload = function () {
    readOut("   ");
}

//time setup
let date = new Date();
let hrs = date.getHours();
let mins = date.getMinutes();
let secs = date.getSeconds();
window.onload = () => {
    time.textContent = `${hrs} : ${mins} : ${secs}`;
    setInterval(() => {
        let date = new Date();
        let hrs = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();
        time.textContent = `${hrs} : ${mins} : ${secs}`;
    }, 1000)
}