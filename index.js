// ParticlesJS Config.
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 150,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
var head = document.getElementById('Header'); 
var text1 = "I am Minh Nhat"; 
var text2 = "A CS Student"; 
var k = 0 ; 
function change(){
  if(k%2 == 0 ){
    head.innerHTML = text1 ; 
   head.style.cssText ="animation: typing-1 5s steps(200, end) infinite , blink-caret .65s step-end infinite ; "
   
  }
  else {
    head.innerHTML = text2; 
    head.style.cssText ="animation: typing-2 5s steps(200, end) infinite , blink-caret .65s step-end infinite ; "
  } k++; 
}

setInterval(change,5000); 

var myprofile = document.getElementById("my-profile"); 
var myskills = document.getElementById("skills"); 
var timeline = document.getElementById("timeline"); 
var projects = document.getElementById("projects"); 
console.log(myskills.offsetTop); 
document.addEventListener("DOMContentLoaded",function(){
  myprofile.onclick = function(){
       
     window.scrollTo({
       top:500,
       behavior:'smooth'
     });
  };
  myskills.onclick = function(){
    window.scrollTo({
      top:800,
      behavior:'smooth'
    });
  };
  timeline.onclick = function(){
    window.scrollTo({
      top:1200,
      behavior:'smooth'
    });
  };
  projects.onclick = function(){
    window.scrollTo({
      top:1800,
      behavior:'smooth'
    });
  };
  
  
});
