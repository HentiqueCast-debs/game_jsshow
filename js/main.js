 var gatito=
  document.getElementById("gatito");var
  block=
  document.getElementById("block")
  function jump(){
    if(gatito.classList != "animation"){
    gatito.classList.add("animation")
    }
    

    setTimeout(function(){
        gatito.classList.remove("animation")
    },500);
  }

  var vermort = setInterval(function(){
        var gatitotop= 
    parseInt(window.getComputedStyle(gatito).getPropertyValue("top"));
    var blockleft= 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if(blockleft<20 && blockleft>0 && gatitotop>=130){
    block.style.animation= "none";
    block.style.display= "none";

    alert("foi capado")
  }
},10);