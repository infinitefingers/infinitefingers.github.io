function setItemActive(n){
  return function(){
    var animLg = document.getElementsByClassName("anim-lg");
    var animSm = document.getElementsByClassName("anim-sm");

    for(i=0; i<animLg.length;i++){
      animLg[i].className = "col-sm-3 center anim-lg";
      animSm[i].className = "anim-sm";
    }
    animLg[n].className = "col-sm-3 center anim-lg lg-active";
    animSm[n].className = "anim-sm sm-active";
  }
}

function itemEvent(){
  var btnLg = document.getElementsByClassName("anim-lg");
  var btnSm = document.getElementsByClassName("anim-sm");

  for(i=0; i<btnLg.length;i++){
    btnLg[i].addEventListener("click", setItemActive(i), "false");
    btnSm[i].addEventListener("click", setItemActive(i), "false");

  }
}

window.onload = function(){
  itemEvent();
}
