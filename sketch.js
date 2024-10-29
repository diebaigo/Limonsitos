// Variables generales
var Limon,Limon_Salto,Limon_Chocar;
var Suelo,gSuelo,Sueloinvisible;
var Fondo;
var Obstaculo1,Obstaculo2,Obstaculo3;

function preload(){
    Limon_Salto = loadImage("Salto-removebg-preview.png");
    Limon_Chocar = loadImage("Chocar-removebg-preview.png");

    gSuelo = loadImage("Suelo.jpg");

    Fondo = loadImage("fondo-maravilloso-retro-fondo-pantalla-fondo-rayos-remolino-vintage_92086-473.avif");

    Obstaculo1 = loadImage("Osbtaculo_1-removebg-preview.png");
    Obstaculo2 = loadImage("Obstaculo_2-removebg-preview.png");
    Obstaculo3 = loadImage("Obstaculo_3-removeng-preview.png");

}

function setup(){
Limon= createSprite(26,181,11,21);
 Limon.scale=0.4;

 Suelo = createSprite(300,185,300,10);
  Suelo.velocityX=-4
 Suelo.addImage("Suelo", gSuelo);

 Sueloinvisible = createSprite(100,197,200,5);
  Sueloinvisible.visible = true;

}

function draw(){
createCanvas(600,200);
drawSprites();
background(Fondo);

}

function Obstaculos(){
  if(frameCount % 50 == 0){
    var Obstaculo = createSprite(700,180,10,40);
    Obstaculo.velocityX= -3;

    var uno = Math.round
}
}