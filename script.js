const wraper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", ()=> {
    question.innerHTML = "Aaaaaaa, I like you too";
    gif.src =
    "https://raw.githubusercontent.com/DzareDeveloper/img/main/gifyou.webp";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = no noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    cons maxY = window.innerHeight - noBtnRect.heig=globalThis;

    const randomX = Math.floor(Math.random() * maxX);
    cost randomY =Math.floor(Math.random() * maxY);

    noBtn.syle.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});