let sliderState = false;

function toggleSlider() {
  const dot = document.getElementById("dot");
  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");
  const body = document.getElementById("body");
  const footer = document.getElementById("footer");
  const slider = document.getElementById("slider");
  const sliderImage1 = document.getElementById("slider-image1");
  const sliderImage2 = document.getElementById("slider-image2");
const fontFooter = document.getElementById("font-footer");


  if (sliderState) {
    sun.style.opacity = "1";
    dot.style.marginLeft = "5%";
    sun.classList.add("show");
    moon.classList.remove("show");
    body.style.backgroundImage = "url('assets/images/bg-morning.png')";
    body.style.backgroundSize = "100% 100%"; // 
    body.style.backgroundPosition = "center center"; //
    slider.style.backgroundColor = "#f1fd50";
    footer.style.backgroundColor = "#FFFFFF";
    footer.style.color = "#000000";
    sliderImage1.style.display = "block";
    sliderImage2.style.display = "none";
  } else {
    dot.style.marginLeft = `calc(100% - 75px)`;
    sun.style.opacity = "0";
    sun.classList.remove("show");
    moon.classList.add("show");

    body.style.backgroundImage = "url('assets/images/bg-night.png')";
    body.style.backgroundSize = "100% 100%"; // 
    body.style.backgroundPosition = "center center"; 
    slider.style.backgroundColor = "#002176";
    footer.style.backgroundColor = "#000000";
    fontFooter.style.color = "#002176";
    sliderImage1.style.display = "none";
    sliderImage2.style.display = "block";
  }

  sliderState = !sliderState;
}
