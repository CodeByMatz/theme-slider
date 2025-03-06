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

        if (sliderState) {
          sun.style.opacity = "1";
          dot.style.marginLeft = "5%";
          sun.classList.add("show");
          moon.classList.remove("show");
          body.style.backgroundImage = "url('assets/images/br-morning.png')"; // Imagem para o modo claro
          slider.style.backgroundColor = "#f1fd50";
          footer.style.backgroundColor = "#FFFFFF";
          footer.style.color = "#000000";
          sliderImage1.style.display = "block";
          sliderImage2.style.display = "none";
          body.style.backgroundImage = "url(assets/images/bg-morning.png)";
        } else {
          dot.style.marginLeft = `calc(100% - 75px)`;
          sun.style.opacity = "0";
          sun.classList.remove("show");
          moon.classList.add("show");

          body.style.backgroundImage = "url(assets/images/bg-night.png)"; // Imagem para o modo escuro
          slider.style.backgroundColor = "#002176";
          footer.style.backgroundColor = "#000000";
          footer.style.color = "#FFFFFF";
          sliderImage1.style.display = "none";
          sliderImage2.style.display = "block";
        }

        sliderState = !sliderState;
      }