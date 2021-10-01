class ISLANDS{
    constructor(){

    }
    display(){
        background("black");

        this.back=createButton('BACK');
        this.back.position(50,50);
        this.back.style("width",'100px');
        this.back.style("height",'60px');
        this.back.style("font-size",'20px');
        this.back.style("color",'yellow');
        this.back.style('background','blue');

        island1=createSprite(200,250);
        island1.addImage(island1img);
        this.play1=createButton('PLAY');
        this.play1.position(150,375);
        this.play1.style("width",'100px');
        this.play1.style("height",'50px');
        this.play1.style('color','yellow');
        this.play1.style('background','purple');

        island2=createSprite(450,250);
        island2.addImage(island2img);
        this.play2=createButton('PLAY');
        this.play2.position(400,375);
        this.play2.style("width",'100px');
        this.play2.style("height",'50px');
        this.play2.style('color','yellow');
        this.play2.style('background','purple');

        island3=createSprite(700,250);
        island3.addImage(island3img);
        this.play3=createButton('PLAY');
        this.play3.position(650,375);
        this.play3.style("width",'100px');
        this.play3.style("height",'50px');
        this.play3.style('color','yellow');
        this.play3.style('background','purple');

        island4=createSprite(950,250);
        island4.addImage(island4img);
        this.play4=createButton('PLAY');
        this.play4.position(900,375);
        this.play4.style("width",'100px');
        this.play4.style("height",'50px');
        this.play4.style('color','yellow');
        this.play4.style('background','purple');

        
        this.back.mousePressed(()=>{
            dashboard=new DASHBOARD();
            dashboard.display();


            island1.visible=false;
            island2.visible=false;
            island3.visible=false;
            island4.visible=false;

            this.play1.hide();
            this.play2.hide();
            this.play3.hide();
            this.play4.hide();
        })

        this.play1.mousePressed(()=>{
                lavaisland=new LAVAISLAND();
                lavaisland.display();

                island1.visible=false;
                island2.visible=false;
                island3.visible=false;
                island4.visible=false;

                this.play1.hide();
                this.play2.hide();
                this.play3.hide();
                this.play4.hide();
            })
    }

}