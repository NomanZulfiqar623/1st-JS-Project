let speech = new SpeechSynthesisUtterance();

// let voices = [];
// let voiceselected = doucment.queryselector("select");

// window.SpeechSynthesis.onvoiceschanged = () => {
//     voices = window.speechSynthesis.getVoices();
//     speech.voices = voices[0];
    
//     voiceSelect.innerHTML = "";
//     voices.forEach((voice, i) => {
//         let option = new option(voices.name, i);
//         voiceSelect.add(option);
//     });
// };

let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voices = voices[0];

    voiceSelect.innerHTML = "";
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voiceSelect.add(option);
    });
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
 