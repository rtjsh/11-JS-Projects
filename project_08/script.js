
let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

     voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))); // Loops through the voices array, creating <option> elements with the voice name and index.
};

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];
})

// Adds an event listener to the <select> element.
// Updates the speech.voice property whenever a new voice is selected.


document.querySelector("button").addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

// How It Works Together
// When the page loads, the onvoiceschanged event populates the <select> dropdown with available voices.
// The user can choose a voice from the dropdown menu.
// The user types text into the <textarea> and clicks the <button> to hear the text spoken in the selected voice.