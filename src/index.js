function generateGardenTips(event) { 
    event.preventDefault();

new Typewriter("#tips", {
  strings: "Fertilize: Use high-quality plant food to feed your plants regularly.",
  autoStart: true,
  cursor: null,
  delay: 1
});}
      


let tipsFormElement = document.querySelector("#gardentips-generator-form");
tipsFormElement.addEventListener("submit", generateGardenTips);