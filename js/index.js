// const faders = document.querySelectorAll(".fade-in");
// const sliders = document.querySelectorAll(".slide-in");

// const appearOptions = {
//   threshold: 0,
//   rootMargin: "0px 0px -250px 0px",
// };
// const appearOnScroll = new IntersectionObserver(function (
//   entries,
//   appearOnScroll
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear");
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// },
// appearOptions);

// faders.forEach((fader) => {
//   appearOnScroll.observe(fader);
// });

// sliders.forEach((slider) => {
//   appearOnScroll.observe(slider);
// });

//========================== For the reveal on scroll=====================================
// Real all sections
const allSections = document.querySelectorAll(".scroll");
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

//========================== For the reveal on scroll for products=====================================
const images = document.querySelectorAll("[data-src]");

const imgOptions = {
  threshold: 0.2,
};

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }
  img.src = src;
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});
