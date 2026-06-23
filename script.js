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

let lastscroll = 0;

window.addEventListener("scroll", () => {
    let currentscroll = window.pageYOffset;

    if (currentscroll > 300) {

        if (currentscroll > lastscroll) {
            gsap.to("header", { y: -100 });
        }
         else {
            gsap.to("header", { y: 0 });
        }

    } 
    else {
        gsap.to("header", { y: 0 });
    }

    lastscroll = currentscroll;
});