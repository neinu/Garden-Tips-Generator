function displayTips(response) {
  new Typewriter("#tips", {
  strings: response.data.answer,
  autoStart: true,
  cursor: null,
  delay: 1
});

}

function generateGardenTips(event) { 
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "0e8d8te310o65c302134ad82cbe5fff8";
    let context = "You are a garden expect and love to write short gardening tips. Your mission is to generate 4 line tips in basic HTML and seperate each line with a <br/>. Make sure to follow the user instructions. Sign the tips with `SheCodes AI` inside a <strong> element";
    let prompt = `User instructions: Generate garden tips ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let tipsElement = document.querySelector("#tips");
    tipsElement.classList.remove("hidden");
    tipsElement.innerHTML = `<div class="generating">⌛Generating garden tips for you about ${instructionsInput.value}</div>`;
    
    //make an api call
    axios.get(apiUrl).then(displayTips);
    //display the generated tips
   
}
      


let tipsFormElement = document.querySelector("#gardentips-generator-form");
tipsFormElement.addEventListener("submit", generateGardenTips);