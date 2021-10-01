class LOGIN{
    constructor(){
        //CREATING THE INPUT BOX
        this.input = createInput("ENTER  YOUR  NAME  HERE");

        //CREATING THE PLAY BUTTON
        this.button = createButton('PLAY |>');

        //CREATING THE RESET BUTTON
        this.reset=createButton('*LOG-OFF*');
    }

     //HIDE FUNCTION TO HIDE THE ELEMENTS
     hide() {
        this.button.hide();
        this.input.hide();
    }

    display(){
         //POSITIONING THE INPUT BOX AND DESIGNING IT
         this.input.position(425,300);
         this.input.style("width",'300px');
         this.input.style("height",'60px');
         this.input.style('font-size','20px');
         this.input.style('color','lightgreen');
         this.input.style('background',"black");

         //POSITIONING THE PLAY BUTTON AND DESIGNING IT
         this.button.position(525,375);
         this.button.style("width",'100px');
         this.button.style("height",'60px');
         this.button.style('font-size','20px');
         this.button.style("color",'yellow');
         this.button.style('background','black');

        //POSITIONING THE RESET BUTTON AND DESIGNING IT
        this.reset.position(900,50);
        this.reset.style("width",'100px');
        this.reset.style("height",'60px');
        this.reset.style("font-size",'20px');
        this.reset.style("color",'yellow');
        this.reset.style('background','black');

         //FUNCTION TO TELL WHAT TO DO WHEN PLAY BUTTON IS PRESSED
         this.button.mousePressed(() => {
            
            //sound3.play();
            //HIDING THE INPUT AND PLAYBUTTON
            this.input.hide();
            this.button.hide();

            gameState+=1;
            //UPDATING THE PLAYER NAME,PLAYER COUNT ETC TO THE DATABASE
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

         })

         if(gameState===1){
            background(bg2); 

            dashboard=new DASHBOARD();
            dashboard.display();
            
         }

            this.reset.mousePressed(()=>{
                player.updateCount(0);
                game.update(0);
                gameState=0;
            })
    }
}