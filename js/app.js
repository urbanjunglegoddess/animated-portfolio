const video1 = document.getElementById("projectVid1");
const video2 = document.getElementById("projectVid2");
const video3 = document.getElementById("projectVid3");
const hoverSign = document.querySelector(".hover-sign");

const videoList = [video1, video2, video3];

videoList.forEach(function (video) {
  video.addEventListener("mouseover", function () {
    video.play();
    hoverSign.classList.add("active");
  });
  video.addEventListener("mouseout", function () {
    video.pause();
    hoverSign.classList.remove("active");
  });
});
