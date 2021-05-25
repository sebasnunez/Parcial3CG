//Movimiento
AFRAME.registerComponent('static-movement', {
    schema: {default: ''},
    init: function () {
       var el = this.el;
       el.addEventListener('click', function () {
          document.querySelector('#player').setAttribute('position', el.getAttribute('position'));
          console.log("Click: Player moved");
       });
    }
});

AFRAME.registerComponent('collider', {
   init: function(){
      this.el.addEventListener('collide', function(e) {
         if(e.detail.body.el.id=="trigger"){
            var scream = document.querySelector("#Scream");
            let audio = document.querySelector("#A1");
            audio.play();
            e.detail.body.el.parentNode.removeChild(e.detail.body.el);
            setTimeout(function(){
               scream.setAttribute("visible",true);
            scream.setAttribute("src","#Screamer1");
            },200)
            setTimeout(function(){
               scream.setAttribute("visible",false);
            },2000);
         }
      });
   }
})

function empezar(){
   var player = document.querySelector("#player");
   player.setAttribute("position", "0 0 -1");
   player.setAttribute("sound", "src: #Fondo; autoplay: true");
}