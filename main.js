var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start() {
  recognition.start();
}

camera = document.getElementById("camera");
Webcam.set({
  width: 500,
  height: 400,
  image_format: "jpeg",
  jpeg_quality: 90,
});

function speak() {
  var synth = window.speechSynthesis;
  Webcam.attach(camera);

  speak_data = "Taking your next Selfie in 5 seconds";
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
}
function take_snapshot() {
  Webcam.snap((data_url) => {
    if ((imgId = "selfie1")) {
      document.querySelector(
        "#result"
      ).innerHTML += `<img id="selfie1" src="${data_url}" />`;
    } else if ((imgId = "selfie2")) {
      document.querySelector(
        "#result"
      ).innerHTML += `<img id="selfie2" src="${data_url}" />`;
    } else if ((imgId = "selfie3")) {
      document.querySelector(
        "#result"
      ).innerHTML += `<img id="selfie3" src="${data_url}" />`;
    }
  });
}
