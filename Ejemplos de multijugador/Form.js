class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton("Play");
    this.resetButton = createButton("Reset");
    this.greeting = createElement("h3");
  }
  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }
  display(){
    var title = createElement("h2")
    title.html("Juego de Carreras de Autos");
    title.position(displayWidth/2-50,0);
    
    this.input.position(displayWidth/2-40,0);
    this.button.position(displayWidth/2+30,0);
    this.resetButton.position(displayWidth/2, displayHeight/2);
    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
      this.greeting.html("Hola " + player.name )
      this.greeting.position(displayWidth/2-50, displayHeight/4)
    });

    this.resetButton.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);

    });
  }
}
