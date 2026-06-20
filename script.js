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

let main = document.querySelector(".main");
let body = document.querySelector("body");

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


//page 2 animation
let page2 = document.querySelector(".page2");
let rings = document.querySelector(".rings");

tlpage.gsap({
  trigger: ".page2",
  start: "20% top",
  end: "max",
  amrkers : true
})

tlpage.to(".rings",{

});


