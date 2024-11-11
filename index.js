// let box = document.querySelector(".box");
// box.addEventListener("mousemove", (e) => {
//   let x = e.offsetX;
//   let y = e.offsetY;

//   let BoxWidth = box.clientWidth;
//   let BoxHeight = box.clientHeight;

//   let moveX = x - BoxWidth / 2;
//   let moveY = y - BoxHeight / 2;

//   box.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
// });

// box.addEventListener("mouseout", (e) => {
//   box.style.transform = ``;
// });

let box = document.querySelector(".img_type-1");

box.addEventListener("mousemove", (e) => {
  // Remove the transition during mousemove for immediate response
  box.style.transition = "";

  let x = e.offsetX;
  let y = e.offsetY;

  let BoxWidth = box.clientWidth;
  let BoxHeight = box.clientHeight;

  let moveX = x - BoxWidth / 2; // Dividing by 10 to reduce movement scale
  let moveY = y - BoxHeight / 2;

  box.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

box.addEventListener("mouseout", () => {
  // Restore the transition for a smooth return effect
  box.style.transition = "transform 0.5s ease";
  box.style.transform = "translate(0, 0)";
});

// ------------------------------------------------------------------------------------------------

let box2 = document.querySelector(".img_type-2");

box2.addEventListener("mousemove", (e) => {
  // Remove the transition during mousemove for immediate response
  box2.style.transition = "";

  let x = e.offsetX;
  let y = e.offsetY;

  let BoxWidth = box2.clientWidth;
  let BoxHeight = box2.clientHeight;

  let moveX = x - BoxWidth / 2; // Dividing by 10 to reduce movement scale
  let moveY = y - BoxHeight / 2;

  box2.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

box2.addEventListener("mouseout", () => {
  // Restore the transition for a smooth return effect
  box2.style.transition = "transform 0.5s ease";
  box2.style.transform = "translate(0, 0)";
});

// ---------------------------------------------------------------------------------------------------

let box3 = document.querySelector(".img_type-3");

box3.addEventListener("mousemove", (e) => {
  // Remove the transition during mousemove for immediate response
  box3.style.transition = "";

  let x = e.offsetX;
  let y = e.offsetY;

  let BoxWidth = box3.clientWidth;
  let BoxHeight = box3.clientHeight;

  let moveX = x - BoxWidth / 2; // Dividing by 10 to reduce movement scale
  let moveY = y - BoxHeight / 2;

  box3.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

box3.addEventListener("mouseout", () => {
  // Restore the transition for a smooth return effect
  box3.style.transition = "transform 0.5s ease";
  box3.style.transform = "translate(0, 0)";
});

// ----------------------------------------------------------------------------------------------------

let box4 = document.querySelector(".img_type-4");

box4.addEventListener("mousemove", (e) => {
  // Remove the transition during mousemove for immediate response
  box4.style.transition = "";

  let x = e.offsetX;
  let y = e.offsetY;

  let BoxWidth = box4.clientWidth;
  let BoxHeight = box4.clientHeight;

  let moveX = x - BoxWidth / 2; // Dividing by 10 to reduce movement scale
  let moveY = y - BoxHeight / 2;

  box4.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

box4.addEventListener("mouseout", () => {
  // Restore the transition for a smooth return effect
  box4.style.transition = "transform 0.5s ease";
  box4.style.transform = "translate(0, 0)";
});

// Select all images with the 'img' class
document.querySelectorAll(".img").forEach((img) => {
  // Add an event listener for the mouseenter event (hover)
  img.addEventListener("mouseenter", () => {
    document.querySelectorAll(".img").forEach((otherImg) => {
      // Hide all other images except the hovered one
      if (otherImg !== img) {
        otherImg.closest(".img-box").style.display = "none";
      }
    });
  });

  // Add an event listener for the mouseleave event
  img.addEventListener("mouseleave", () => {
    // Show all images again when hover is removed
    document.querySelectorAll(".img-box").forEach((otherImgBox) => {
      otherImgBox.style.display = "block";
    });
  });
});

// -------------------------

// const images = document.querySelectorAll(".image-sec .img");
// const textSec = document.querySelector(".text-sec");

// images.forEach((image) => {
//   image.addEventListener("mouseover", () => {
//     textSec.classList.add("active");
//   });

//   image.addEventListener("mouseleave", () => {
//     textSec.classList.remove("active");
//   });
// });

// -------------

const images = document.querySelectorAll(".img");
const textSec = document.querySelector(".text-sec");

images.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    // Apply active class to text section
    textSec.classList.add("active");

    // Dim and shift down other images
    images.forEach((otherImg) => {
      if (otherImg !== img) {
        otherImg.style.transform = "translateY(20px)"; // Move down
        otherImg.style.opacity = "0.5"; // Dim non-hovered images
      }
    });
  });

  img.addEventListener("mouseleave", () => {
    // Remove active class from text section
    textSec.classList.remove("active");

    // Reset other images
    images.forEach((otherImg) => {
      otherImg.style.transform = "translateY(0)";
      otherImg.style.opacity = "1";
    });
  });
});

const tl = gsap.timeline();

tl.from(".text-1", {
  y: 200,
  duration: 0.5,
  opacity: 0,
  // stagger: -1,
});

tl.from(".text-2", {
  y: 200,
  duration: 0.5,
  opacity: 0,
  // stagger: -1,
});
tl.from(".text-3", {
  y: 200,
  duration: 0.5,
  opacity: 0,
  // stagger: -1,
});
tl.from(".text-4", {
  y: 200,
  duration: 0.5,
  opacity: 0,
  // stagger: -1,
});
tl.from(".text-5", {
  y: 200,
  duration: 0.5,
  opacity: 0,
  // stagger: -1,
});

gsap.from(" .img", {
  scale: 0,
  duration: 1,
  // opacity: 0,
});
