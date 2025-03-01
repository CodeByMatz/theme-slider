let sliderState = false;

function toggleSlider() {
  const dot = document.getElementById('dot');
  const sun = document.getElementById('sun');
  const moon = document.getElementById('moon');
  const body = document.getElementById('body')
  


  // Alterar o estado do slider e aplicar a animação
  if (sliderState) {
    sun.style.opacity = "1";
    dot.style.marginLeft = '15px'; 
    sun.classList.add('show');
    moon.classList.remove('show');
    body.style.backgroundColor = "#f1fd50";
    slider.style.backgroundColor = "#f1fd50";
  
  } else {
    dot.style.marginLeft = '175px'; 
    sun.style.opacity = "0";
    sun.classList.remove('show');
    moon.classList.add('show'); 
    body.style.backgroundColor = "#002176";
    slider.style.backgroundColor = "#002176";
 
  }
  
  // Inverter o estado para a próxima interação
  sliderState = !sliderState;
}
