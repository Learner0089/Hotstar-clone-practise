let movies = [
  {
    name: "Falcon and the Winter Soldier",
    des: "Winter soldier season 1 just after Captain America movie",
    image: "images/slider 2.PNG"
  },
  {
    name: "Loki",
    des: "Loki Season 2",
    image: "images/slider 1.PNG"
  },
  {
    name: "WandaVision",
    des: "After Endgame see Wanda's journey and her actions",
    image: "images/slider 3.PNG"
  },
  {
    name: "Raya and the Last Dragon",
    des: "Raya and the Last Dragon are coming to save the world",
    image: "images/slider 4.PNG"
  },
  {
    name: "Luca",
    des: "Help Luca in her adventures",
    image: "images/slider 5.PNG"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0; // Track the current slide

const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }

  // Create DOM elements
  let slide = document.createElement("div");
  let imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  // Attach all elements
  imgElement.src = movies[slideIndex].image;
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content); // Move the content div to the slide
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  // Setting up elements' class names
  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "des";

  sliders.push(slide);

  if (sliders.length > 1) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 1)}% - ${
      30 * (sliders.length - 1)
    }px)`;
  }
  slideIndex++;
};

for (let i = 0; i < 3; i++) {
  createSlide();
}

setInterval(() => {
  createSlide();
}, 3000);

//video cards
const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach((card) => {
  const video = card.querySelector("video");

  card.addEventListener("mouseover", () => {
    if (video) {
      video.play().catch((error) => {
        // Handle any potential errors when attempting to play the video.
        console.error("Error playing video:", error);
      });
    }
  });

  card.addEventListener("mouseleave", () => {
    if (video) {
      video.pause();
    }
  });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });
  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
