class Form{
    constructor(){
        this.input = createInput("Name");

        this.button = createButton("Play");

        this.greeting = createElement("h2");
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(535,100);

        this.input.position(550,200);
        this.button.position(600,250);

        this.button.mousePressed(()=>{       
            this.input.hide();
            this.button.hide();     
            player.name = this.input.value();
            playerCount+=1;
            player.updateCount(playerCount);

            player.index = playerCount;
            player.update();

            this.greeting.html("Hello " + player.name);
            this.greeting.position(575,200);
        });
    }
}