let sliderState = false;

function toggleSlider() {
  const dot = document.getElementById("dot");
  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");
  const body = document.getElementById("body");
  const footer = document.getElementById("footer");

  if (sliderState) {
    sun.style.opacity = "1";
    dot.style.marginLeft = "15px";
    sun.classList.add("show");
    moon.classList.remove("show");
    body.style.backgroundColor = "#f1fd50";
    slider.style.backgroundColor = "#f1fd50";
    footer.style.backgroundColor = "#FFFFFF";
    footer.style.color = "#000000";
  } else {
    dot.style.marginLeft = `calc(100% - 75px)`;
    sun.style.opacity = "0";
    sun.classList.remove("show");
    moon.classList.add("show");
    body.style.backgroundColor = "#002176";
    slider.style.backgroundColor = "#002176";
    footer.style.backgroundColor = "#000000";
    footer.style.color = "#FFFFFF";
  }

  sliderState = !sliderState;
}