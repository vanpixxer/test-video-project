// the DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading

// the load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images

// we need to select the button - with class switch-btn -  and the class .video-container 
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

// set up event listener for the button
btn.addEventListener("click", function() {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        // to give the button control of the video use pause() method and invoke it
        video.pause();
    } else {
        btn.classList.remove("slide");
        // add play functionality with play() method
        video.play();
    }
});
// pause() and play() are methods on the Video Object
// we didn't use the toggle() method because we wanted to add video functionality