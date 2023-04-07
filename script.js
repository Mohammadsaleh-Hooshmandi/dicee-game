const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const player1Image = document.querySelector(".img1");
const player2Image = document.querySelector(".img2");

const randomImage1 = `images/dice${randomNumber1}.png`;
const randomImage2 = `images/dice${randomNumber2}.png`;

player1Image.setAttribute("src", randomImage1);
player2Image.setAttribute("src", randomImage2);

const title = document.querySelector("h1").innerHTML;

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩" + title;
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "draw";
} else {
    document.querySelector("h1").innerHTML = title + "🚩";
}