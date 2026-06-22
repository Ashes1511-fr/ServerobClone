const video = document.getElementById("bgVideo");

const videoSrc =
  "https://stream.mux.com/01ob2hs00AwqPMSEyTsQifp4CJgAuZvvSS6mf9Kjfr45k.m3u8?max_resolution=1080p&min_resolution=480p&redundant_streams=true";

if (Hls.isSupported()) {
  const hls = new Hls();
  hls.loadSource(videoSrc);
  hls.attachMedia(video);
} else if (video.canPlayType("application/vnd.apple.mpegurl")) {
  video.src = videoSrc;
}

gsap.registerPlugin(ScrollTrigger);

// navbar
ScrollTrigger.create({
  trigger: "body",
  start: "20% top",
  end: "max",
});

lastScroll = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll) {
    gsap.to(".navbar", { y: -100, duration: 1, ease: "power2.out" });
  } else {
    gsap.to(".navbar", { y: 0, duration: 1, ease: "power2.out" });
  }

  lastScroll = currentScroll;
});

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "top top",
    end: "+=500",
    scrub: 2,
    pin: true,
    markers: true
  }
});

tl.to(".page2 svg", {
  scale: 0.5,
  filter: "blur(10px)"
});

let word = document.querySelector(".word");

word.innerHTML = word.textContent
  .split("")
  .map(char => char === " " ? " " : `<span>${char}</span>`)
  .join("");

gsap.to(".word span", {
  color: "#000",
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".word",
    start: "top 80%",
    scrub: true,
    markers : true
  },
});