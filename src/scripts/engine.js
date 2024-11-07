const emojis = [
    "😺",
    "😺",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🙉",
    "🙉",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐼",
    "🐼",
    "🐮",
    "🐮",
];
let openCards = [];



let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);//->Para cada elemento vai colocar o peso de 2 -1 quem esta com o peso de 2 vai para frente e quem tiver -1 vai para tráz.


for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild
        (box);
}


function handleClick() {
   if (openCards.length < 2) {
     this.classList.add("openBox");
     openCards.push(this);
   }

   if(openCards.length == 2){
    setTimeout(checkMatch, 500);
   }

}


function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("openBox");
        openCards[1].classList.remove("openBox");
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você venceu !");
    }
}