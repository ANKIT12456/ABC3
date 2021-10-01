class DASHBOARD{

    constructor(){

        this.store=createButton('STORE');
        this.canteen=createButton('CANTEEN');
        this.islands=createButton("MAPS");
    }

    display(){
        background(bg2);
        this.store.position(100,650);
        this.store.style("width",'150px');
        this.store.style("height",'100px');
        this.store.style("font-size",'20px');
        this.store.style("color",'yellow');
        this.store.style('background','black');

        this.canteen.position(250,650);
        this.canteen.style("width",'150px');
        this.canteen.style("height",'100px');
        this.canteen.style("font-size",'20px');
        this.canteen.style("color",'yellow');
        this.canteen.style('background','black');

        this.islands.position(400,650);
        this.islands.style("width",'150px');
        this.islands.style("height",'100px');
        this.islands.style("font-size",'20px');
        this.islands.style("color",'yellow');
        this.islands.style('background','black');

        this.islands.mousePressed(()=>{
            island=new ISLANDS();
            island.display();

            this.store.hide();
            this.canteen.hide();
            this.islands.hide();
            
        })

         
    }
}