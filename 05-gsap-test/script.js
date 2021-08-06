//comment out either of the options to test

gsap.from("header", { duration: 1, y: "-100%", ease: "bounce" });

gsap.from(".link", {
  duration: 1,
  opacity: 0,
  ease: "power1",
  delay: 1,
  stagger: 0.5,
});

gsap.from(".right", { duration: 2, x: "-100vw", ease: "power2.in", delay: 1 });

gsap.from(".left", { duration: 1, x: "-100%", ease: "power2", delay: 2 });

gsap.to("footer", { duration: 1, y: 0, ease: "elastic", delay: 2.5 });

gsap.fromTo(
  "button",
  { opacity: 0, scale: 0, rotation: 720 },
  { opacity: 1, scale: 1, rotation: 0, duration: 1, delay: 3.5 }
);

// N O T E S
// Above can be refactored to timeline. Default values, such as duration can be set up initially
// so they're no longer needed for separate calls. Chained calls will run one after another by default,
// so the delay property is redundant as well. However, it's still possible to set a delay which can
// be absolute - relative to the first timeline element (see 1) or relative to the previous or next element (see 2)

const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
  .from("header", { y: "-100%", ease: "bounce" })
  .from(".link", {
    duration: 1,
    opacity: 0,
    ease: "power1",
    stagger: 0.5,
  })
  .from(".right", { x: "-100vw", ease: "power2.in" }, 1) //absolute delay
  .from(".left", { x: "-100%", ease: "power2" }, "<.5") //relative delay - will set a delay of .5 relative to the previous element
  .to("footer", { y: 0, ease: "elastic" })
  .fromTo(
    "button",
    { opacity: 0, scale: 0, rotation: 720 },
    { opacity: 1, scale: 1, rotation: 0 }
  );

document.querySelector("button").addEventListener("click", () => {
  timeline.timeScale(3);
  timeline.reverse();
});
