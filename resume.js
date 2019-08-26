// make sure web page is loaded
if(document.readyState=='loading'){
  document.addEventListener('DOMContentLoaded', ready)
}
else {
  ready()
}

function ready(){
  var sections = document.getElementsByClassName('resume')[0].children;
  var info = document.getElementsByClassName('innerInfo');
  for (var i = 0; i < info.length; i++) {
    info[i].style.display = "none";
  }
}

function revealSection(index){
  var section = document.getElementsByClassName('innerInfo')[index];
  if(section.style.display === "none"){
    section.style.display = "block";
  }
  else{
    section.style.display = "none";
  }
}

function revealExperience(index) {
  var experience = document.getElementsByClassName('experienceItem')[index];
  if(experience.style.display === "none" || experience.style.display === ''){
    experience.style.display = "block";
  }
  else{
    experience.style.display = "none";
  }
}
