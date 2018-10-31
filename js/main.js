window.onload = function() {
  // initialize navbar hover effects
  init_navbar();
  // resize iframe as needed
  set_iframe_size()
  window.onresize = function(){
    set_iframe_size();
  }
};

function init_navbar(){
  document.getElementById("nav-listen").addEventListener("mouseenter", navListenActive);
  document.getElementById("nav-listen").addEventListener("mouseleave", navListenInactive);
  document.getElementById("nav-about").addEventListener("mouseenter", navAboutActive);
  document.getElementById("nav-about").addEventListener("mouseleave", navAboutInactive);

  function navListenActive(){
    document.getElementById("nav-listen").classList.add("nav-item-active");
    document.getElementById("nav-about").classList.add("nav-item-minimized");
  }
  function navListenInactive(){
    document.getElementById("nav-listen").classList.remove("nav-item-active");
    document.getElementById("nav-about").classList.remove("nav-item-minimized");
  }
  function navAboutActive(){
    document.getElementById("nav-about").classList.add("nav-item-active");
    document.getElementById("nav-listen").classList.add("nav-item-minimized");
  }
  function navAboutInactive(){
    document.getElementById("nav-about").classList.remove("nav-item-active");
    document.getElementById("nav-listen").classList.remove("nav-item-minimized");
  }
}

function set_iframe_size(){
  var width = document.getElementById('episode-primary').offsetWidth;
  var iframe = document.querySelector('.episode-primary iframe');
  iframe.style.height = width + "px";
}
