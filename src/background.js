const images = ["image1.jpeg", "image2.jpeg", "lalaland.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);
