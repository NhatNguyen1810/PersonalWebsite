
var cdongTimeLine = anime.timeline(); 




cdongTimeLine.add({
  targets:'.path1',
  strokeDashoffset:{
    value:0,
    duration:3000,
    easing:'easeOutSine'
  },
  loop:true
  
  
  
 })


cdongTimeLine.add({
  targets:'.path2',
  strokeDashoffset:{
    value:0,
    duration:3000,
    easing:'easeOutSine'
  },
  loop:true,
  offset:"-=2000ms"
  
})


cdongTimeLine.add({
  targets:'.path3',
  strokeDashoffset:{
    value:0,
    duration:3000,
    easing:'easeOutSine'
  },
  loop:true,
  offset:"-=2000ms"
  
  
})

cdongTimeLine.add({
  targets:'.path1',
  strokeDashoffset:{
    value:0,
    duration:3000,
    easing:'easeOutSine'
  },
  loop:true,
  offset:"-=2000ms"
  
  
})
cdongTimeLine.add({
  targets:'.path4',
  strokeDashoffset:{
    value:0,
    duration:2000,
    easing:'easeOutSine'
  },
  loop:true,
  offset:"-=2000ms"
  
  
})
cdongTimeLine.add({
  targets:'.path5',
  strokeDashoffset:{
    value:0,
    duration:3000,
    easing:'easeOutSine'
  },
  loop:true,
  offset:"-=2000ms"
  
  

})





cdongTimeLine.add({
  targets:'.path6',
  strokeDashoffset:{
    value:0,
    duration:3000,
    easing:'easeOutSine'
  },
  loop:true,
  offset:"-=2000ms"
  
  
})



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







