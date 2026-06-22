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

// navbar animation
ScrollTrigger.create({
  trigger: "body",
  start: "20% top",
  end: "max",
});

const scrollContainer = document.querySelector("[data-scroll-container]");
let locomotiveScroll = null;

if (typeof LocomotiveScroll !== "undefined") {
  locomotiveScroll = new LocomotiveScroll({
    el: scrollContainer || document.querySelector("body"),
    smooth: true,
  });

  ScrollTrigger.scrollerProxy(scrollContainer || document.body, {
    scrollTop(value) {
      return arguments.length
        ? locomotiveScroll.scrollTo(value, 0, 0)
        : locomotiveScroll.scroll && locomotiveScroll.scroll.instance
        ? locomotiveScroll.scroll.instance.scroll.y
        : 0;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: scrollContainer && scrollContainer.style.transform ? "transform" : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locomotiveScroll.update());
  ScrollTrigger.refresh();
}

let lastscroll = 0;

const animateNavbar = (y) => {
  gsap.killTweensOf(".navbar");
  gsap.to(".navbar", { y, duration: 0.6, ease: "power2.out" });
};

if (locomotiveScroll) {
  locomotiveScroll.on("scroll", (obj) => {
    const currentScroll = (obj && obj.scroll && obj.scroll.y) || 0;
    if (currentScroll > 200) {
      if (currentScroll > lastscroll) animateNavbar(-100);
      else animateNavbar(0);
    } else {
      animateNavbar(0);
    }
    lastscroll = currentScroll;
  });
} else {
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || 0;
    if (currentScroll > 200) {
      if (currentScroll > lastscroll) animateNavbar(-100);
      else animateNavbar(0);
    } else {
      animateNavbar(0);
    }
    lastscroll = currentScroll;
  });
}


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


