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

         const idTrigger = e.detail.body.el.id;
         const triggers = {
            'trigger': () =>{
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
            },
            'trigger1': () =>{
               var luz = document.querySelector("#luz");
               luz.setAttribute("light", "color: red");
               let audio = document.querySelector("#A4");
               audio.play();
               e.detail.body.el.parentNode.removeChild(e.detail.body.el);
            },
            'trigger2': () =>{
               let audio = document.querySelector("#A2");
               audio.play();
               e.detail.body.el.parentNode.removeChild(e.detail.body.el);
            },
            'trigger3': () =>{
               let audio = document.querySelector("#A3");
               audio.play();
               e.detail.body.el.parentNode.removeChild(e.detail.body.el);
            },
            'trigger4': () =>{
               var luz = document.querySelector("#luz");
               luz.setAttribute("light", "color: grey");
               e.detail.body.el.parentNode.removeChild(e.detail.body.el);
            },
            'trigger5': () =>{
               var model = document.querySelector("#MonstruoPasillo");
               model.setAttribute("visible", "true");
               model.setAttribute("animation", "property: position; dur: 3000; to: 35 0.1 -5; autoplay: true;");
               model.setAttribute("sound", "src:#A5; autoplay: true;");
               setTimeout(function(){
                  model.parentNode.removeChild(model);
               },3000);
               e.detail.body.el.parentNode.removeChild(e.detail.body.el);
            },
            'trigger6': () =>{
               var model = document.querySelector("#MonstruoPasillo1");
               model.setAttribute("visible", "true");
               model.setAttribute("animation", "property: position; dur: 3000; to: -10 0 22; autoplay: true;");
               model.setAttribute("sound", "src:#A6; autoplay: true;");
               setTimeout(function(){
                  model.parentNode.removeChild(model);
               },3000);
               e.detail.body.el.parentNode.removeChild(e.detail.body.el);
            }
         }
         triggers[idTrigger] ? triggers[idTrigger](): null;
      });
   }
})
var animationG=true;
function animationGhost(){
   if(animationG){
      var model = document.querySelector("#ghostM");
      model.setAttribute("animation", "property: position; dur: 3000; to: -6 8 -16; autoplay: true;");
      model.setAttribute("sound", "src:#A7; autoplay: true;");
      setTimeout(function(){
         model.parentNode.removeChild(model);
      },3000);
      animationG=false;
   }
}
function empezar(){
   var player = document.querySelector("#player");
   player.setAttribute("position", "0 0 -1");
   player.setAttribute("sound", "src: #Fondo; autoplay: true");
   var luz = document.querySelector("#luz");
   luz.setAttribute("light", "intensity: 0.4");
}
        