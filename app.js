console.log("hello world");

const thumbnailContainer = document.getElementById("thumbnail-container");
const backgroundImage = document.getElementById("background-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const images = [
  {
    src: "image/bowsers-castle.jpg",
    alt: "an image of bowsers castle",
  },
  {
    src: "image/mario-characters.jpg",
    alt: "an image of mario characters",
  },
  {
    src: "image/super mario.jpg",
    alt: "an image of super mario",
  },
  {
    src: "image/yoshi.jpg",
    alt: "an image of yoshi",
  },
  {
    src: "image/yoshis-adventure.jpg",
    alt: "an image of yoshis land",
  },
];

let imageIndex = 0; 

function createThumbnails() {
  console.log("createThumbnails invoked!");

  for (let i = 0; i < images.length; i++) {
    const imgTag = document.createElement("img");
    imgTag.src = images[i].src;
    imgTag.alt = images[i].alt;

    imgTag.addEventListener("click", function () {
      createBackgroundImage(images[i]);
      imageIndex = i; 
    });

    thumbnailContainer.appendChild(imgTag);
  }
}

function createBackgroundImage(currentImage) {
  backgroundImage.innerHTML = "";
  console.log("The thing passed in is", currentImage);

  const bigImgTag = document.createElement("img");
  bigImgTag.src = currentImage.src;
  bigImgTag.alt = currentImage.alt;

  backgroundImage.appendChild(bigImgTag);
}

function updateBackgroundImage() {
  createBackgroundImage(images[imageIndex]);
}


prevButton.addEventListener("click", function () {
  imageIndex = (imageIndex > 0) ? imageIndex - 1 : images.length - 1;
  updateBackgroundImage();
});

nextButton.addEventListener("click", function () {
  imageIndex = (imageIndex < images.length - 1) ? imageIndex + 1 : 0;
  updateBackgroundImage();
});

document.addEventListener('DOMContentLoaded', () => {
    const leftButton = document.getElementById('prev');
    const rightButton = document.getElementById('next');
  
    const leftSound = new Audio('sound/super-mario-64-yellow-coin.mp3');
    const rightSound = new Audio('sound/super-mario-64-yellow-coin.mp3');
  
    leftButton.addEventListener('click', () => {
      leftSound.play();
    });
  
    rightButton.addEventListener('click', () => {
      rightSound.play();
    });
  });

  document.addEventListener('DOMContentLoaded', (event) => {
    const backgroundMusic = document.getElementById('background-music');
    backgroundMusic.volume = 0.4;
});

createThumbnails();

updateBackgroundImage();