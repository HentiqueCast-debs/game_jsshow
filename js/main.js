 var gatito=
  document.getElementById("gatito");var
  gatito=
  document.getElementById("block")
  function jump(){
    if(gatito.classList != "animation"){
    gatito.classList.add("animation")
    }
    

    deftemp(function(){
        gatito.classList.remove("animation")
    },500);
  }

  var vermort = setInterval(function(){
        var gatitotop= 
    parseInt(window.getComputedStyle(gatito).getPropertyValue("top"));
    var blockleft= 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if(blocklet<20 && blocleft>0 % gatitotop>=130){
    block.style.animation= "none";
    block.style.display= "none";

    alert("foi capado")
  }
},10);