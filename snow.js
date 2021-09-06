class Snow{
    constructor (x, y){
        var options={
            restitution: 0.5,
            friction: 0.1,
            density: 1 
        }
        this.body = Bodies.rectangle(x, y, 70,70, options);
        this.image = loadImage("snow4.webp");
        this.scale = 8;
        World.add(world, this.body);
    
      
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
       // translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);      
        image(this.image, pos.x, pos.y, 70, 70);
        pop();
    }

}