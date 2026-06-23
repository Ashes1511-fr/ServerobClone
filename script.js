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

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "top top",
    end: "+=1500",
    scrub: 2,
    pin: true,
    // markers: true
  }
});

tl.to(".page2 svg", {
  y: -100,
  duration: 1
})
.to(".page2 svg", {
  scale: 0.5,
  duration: 1
})
.to(".page2 svg", {
  filter: "blur(15px)",
  duration: 1
});

const word = document.querySelector(".word");
console.log(word);

word.innerHTML = word.textContent
  .split("")
  .map(char => char === " " ? " " : `<span>${char}</span>`)
  .join("");

gsap.to(".word span", {
  opacity: 1,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".word",
    start: "top 80%",
    scrub: true,
    markers : true
  },
});
