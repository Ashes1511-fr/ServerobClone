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

// navbar hide/show on scroll
let lastScroll = 0;

window.addEventListener("scroll", () => {
  let currentscroll = window.pageYOffset;

  if (currentscroll > window.innerHeight * 0.5) {
    if (currentscroll > lastscroll) {
      gsap.to(header, {
        y: -120,
        duration: 0.4,
        ease: "power2.out"
      });
    } else {
      gsap.to(header, {
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    }
  } else {
    gsap.to(header, {
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  }

  lastscroll = currentscroll;
});

// ── PAGE 2 ANIMATION ──

// Split chars for text reveal
const word = document.querySelector(".word");

word.innerHTML = word.textContent
  .split("")
  .map((char) => (char === " " ? " " : `<span>${char}</span>`))
  .join("");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "top top",
    end: "+=2000",
    scrub: 2,
    pin: true,
  },
});

tl.from(".page2 svg", {
  y: 100,
  duration: 0.5,
  ease: "power2.out",
})

  .to(".page2 svg", {
    scale: 0.8,
    duration: 1,
    ease: "power1.inOut",
  })

  .to(".page2 svg", {
    scale: 1,
    filter: "blur(28px)",
    duration: 1.5,
    ease: "power1.inOut",
  })

  .to(
    ".word span",
    {
      opacity: 1,
      stagger: 0.03,
      ease: "none",
    },
    "<0.2",
  );

let pr = gsap.timeline({
  scrollTrigger: {
    trigger: ".page6",
    start: "top 20",
    end: "+=2000",
    pin: true,
    scrub: 15,
    markers: true,
  },
});
