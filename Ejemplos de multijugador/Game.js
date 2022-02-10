class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }

      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200,50,50);
    car1.addImage("car1",car1img);
    car2 = createSprite(300,200,50,50);
    car2.addImage("car2",car2img);
    car3 = createSprite(500,200,50,50);
    car3.addImage("car3",car3img);
    car4 = createSprite(700,200,50,50);
    car4.addImage("car4",car4img);
    cars = [car1,car2,car3,car4];
  }
  play(){
    form.hide();
    textSize(30);
    text("game start", 120,100);
    Player.getPlayerInfo();
    Player.getCarsAtEnd();
    if(allPlayers !== undefined){
      background(0);
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
      var index = 0;
      var x =270;
      var y;
      //var displayPositions = 130;
      for(var plr in allPlayers){
        index = index + 1;
        x = x + 200;
        y = displayHeight - allPlayers[plr].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        if(index === player.index){
          stroke(10);
          fill(255,0,0);
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = rgb(255,0,0);
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
  }
    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance+=50
      player.update();
    }
    if(player.distance > 2000){
      gameState = 2;
      player.rank+=1;
      Player.updateCarsAtEnd(player.rank);   
    }
    drawSprites();
  }
  end(){
    console.log("end")
    console.log(player.rank)
  }
}