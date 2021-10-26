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
  threshold: 0.2,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});
