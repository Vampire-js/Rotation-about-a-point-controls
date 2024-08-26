import { c } from "../app.js";
import { Entity } from "../js/Entity.js";
import { Vector2d } from "../utils/utils.js";

export class Box extends Entity{
    constructor(position = new Vector2d(10,10), size = new Vector2d(100,100)){
        super(position)
        this.size = size
        this.c = c
        this.color = "black"
        this.draw()
    }
    draw(){
        this.c.fillStyle = this.color
        this.c.fillRect(this.position.x, this.position.y, this.size.x, this.size.y)
       
    }
    update(){
        
        this.applyPhysics()
   
        this.draw()
  
    }
}