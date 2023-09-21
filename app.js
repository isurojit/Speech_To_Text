const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

// Parameter
rec.lang = "en-US";
rec.continuous = true;

rec.onresult = function (e) {
  let result = "";
  for (let i = e.resultIndex; i < e.results.length; i++) {
    let script = e.results[i][0].transcript.toLowerCase().trim();
    let scriptWithSpaces = script.split(" ").join(" ");
    result += scriptWithSpaces + " "; // Append the result with a space
  }
  document.querySelector("#txtid").textContent += result; // Append the result
};

rec.start();
