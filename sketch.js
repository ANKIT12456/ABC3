var bg1,bg2,bg3;

var login,game,player,dashboard,island,lavaisland;
var gameState=0,playerCount=0,allPlayers,database;

var island1,island1img;
var island2,island2img;
var island3,island3img;
var island4,island4img;

function preload(){
  bg1=loadImage("BACKGROUND/bg1.jpg");
  bg2=loadImage("BACKGROUND/bg2.jpeg");
  bg3=loadImage("BACKGROUND/bg3.jpg");

  island1img=loadImage("ISLANDS/a.png");
  island2img=loadImage("ISLANDS/b.png");
  island3img=loadImage("ISLANDS/c.png");
  island4img=loadImage("ISLANDS/d.png");
}

function setup(){
  createCanvas(1200,800);

	//CREATING THE DATABASE
	database = firebase.database();

	//ADDING THE BACKGROUD IMAGE
	background(bg1);
	
	//CREATING THE OBJECT OF GAMEC= CLASS
	game=new GAME();

	//CALLING THE GETSTATE FUNCTION OF GAME CLASS
	game.getState();

	//CALLING THE ASYNCHRONOUS START FUNCTION OF GAME CLASS
	game.start();
}

function draw(){
	//UPDATING THE GAMESTATE TO 1 IN THE DATABASE WHEN THE PLAYEE COUNT IS 2
	if(playerCount===1){
		game.update(1);
	}

	//CALLING THE PLAY FUNCTION OF GAME CLASS WHEN THE GAMESTATE IS 1
	if(gameState===1){
		game.play();
	}

  drawSprites();
}