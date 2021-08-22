var chica, chicaI, chicaM;
var zombie, zombieI, zombieG; 
var arbol, arbolI, rama, ramaI;
var flecha, flechaI; 
var fondo, fondoI, perdiste, perdisteI;
var state ;
var play = 1;
var end = 0; 
var sueloI;
var ramaG, flechaG, arbolG; 
var cuadrosF, cuadrosA, cuadrosR;
state = play;
  

function preload(){
  chicaI = loadAnimation ("chica corriendo .gif");
  chicaM = loadImage ("chicaMuestaBuena.jpg");
  zombieI = loadAnimation ("zombie bueno corriendo.gif");
  arbolI = loadImage ("arbol.png");
  ramaI = loadImage ("rama.png");
  flechaI =loadImage ("flecha verde .png");
  fondoI = loadImage ("fondo funciona.png");
  zombieG = loadImage ("zombieGane.jpg");
  perdisteI = loadAnimation ("perdiste.gif");

} 
function setup() {
  createCanvas (windowWidth, windowHeight);
  
  fondo = createSprite (0,0);
  fondo.addImage (fondoI);
  fondo.scale = 2.7;
  perdiste = createSprite ( width/2, height/2);
  chica = createSprite (450, height-160);
  chica.addAnimation ("corriendo", chicaI);
  chica.addAnimation ("muerta", chicaM);
  chica.scale = 0.5;
  zombie = createSprite (70, height-120);
  zombie.addAnimation ("corriendo", zombieI);
  zombie.addAnimation ("gane", zombieG)
  zombie.scale = 0.4;
  zombie.setCollider ("rectangle", 0,90, 300,400);
  ramaG = createGroup ();
  flechaG = createGroup ();
  arbolG = createGroup ();
  sueloI = createSprite (width/2, height-0, width, 5);
  sueloI.visible = false; 
  
}
function draw() {
    background ("red");
  
  
    if (state === play)
    {
        perdiste.visible = false;

    fondo.velocityX = -(7 + puntaje/ 1000);
    if (fondo.x < 0){
    fondo.x = fondo.width/2;
    }
        puntaje = puntaje + Math.round(getFrameRate()/60);
      
    if (keyDown("space") && chica.y >= 360)
      {
   chica.velocityY = -15;
      
       }
    chica.velocityY = chica.velocityY + 0.8;
    // chica.collide (sueloI);
      
    ramas ();
    arboles ();
    flechas ();
      if (ramaG.isTouching (chica))
      {
      chica.changeAnimation ("muerta", chicaM);
      chica.x = chica.x - 2;
      }
      else
      {
      chica.changeAnimation ("corriendo", chicaI);
      }
      if (chica.isTouching (flechaG)){
        chica.x = chica.x + 3; 
      }

      if (arbolG.isTouching(chica))
      {
        state = end;
      }
      if (zombie.isTouching (chica)){
        state = end;

      }
    }

    if (state === end){
      
  perdiste.addAnimation ("perdi", perdisteI);
  perdiste.scale = 1.3;
      perdiste.visible = true;
       fondo.visible = false;
      puntaje = puntaje;
     perdiste.depth = chica.depth;
       chica.depth = chica.depth+1;
       perdiste.depth = zombie.depth;
       zombie.depth = zombie.depth + 1;
       chica.changeAnimation ("muerta", chicaM);
       zombie.changeAnimation ("gane", zombieG);
       ramaG.destroyEach();
       arbolG.destroyEach();
       flechaG.destroyEach ();
    }
  if (mousePressedOver (perdiste)){
reset();
  }
       chica.collide (sueloI);
   drawSprites ();



}

 

































function reset (){
state = play;
  perdiste.visible = false;
  fondo.visible = true;
  chica.changeAnimation ("corriendo", chicaI);
  zombie.changeAnimation ("corriendo", zombieI);
  puntaje = 0;
}

function ramas(){
  cuadrosR = Math.round(random(0, 1000));
  if (frameCount % cuadrosR === 0){
    rama = createSprite (width, height-30);
    rama.addImage(ramaI)
    rama.scale = 0.2; 
    rama.velocityX = -(7 + puntaje/ 100);
    rama.lifetime = 1000;
    
    chica.depth = rama.depth;
   rama.depth = rama.depth + 1;
    
    ramaG.add (rama);
  rama.setCollider ("rectangle",-13,0, 400, 150);
  
  }
 
}

function arboles (){
  cuadrosA = Math.round(random(0, 1000));
 if (frameCount % cuadrosA === 0 ){
    arbol = createSprite (width, height-60);
    arbol.addImage (arbolI);
    arbol.scale = 0.2;
  
    arbol.velocityX = -(7 + puntaje/ 100);
    arbol.lifetime = 1000;
 
    

   
    arbolG.add (arbol);
 arbol.setCollider ("circle", 0,0,200);
  }
}

function flechas (){
 
    if (frameCount % 500  === 0){
    flecha = createSprite (width, height-30);
    flecha.addImage (flechaI);
    flecha.scale = 0.08;
  
    flecha.velocityX = -(7 + puntaje/ 100);
    

    flecha.lifetime = 1000;
    
  chica.depth = flecha.depth;
    flecha.depth = flecha.depth + 1;
    flechaG.add (flecha);
   flecha.setCollider ("circle",0,0,400);
      
  }
}






