const images = [
    "cat1.jpeg","cat2.jpeg","cat3.jpeg","cat4.jpeg","cat5.jpeg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// 해당 엘리먼트를 뒤에 추가
document.body.appendChild(bgImage);
// 해당 엘리먼트를 앞에 추가
// document.body.prepend(bgImage);