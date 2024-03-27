export default class Fruit {
    constructor(posX, posY, fruitType, beingAttacked)
    {
       this.posX = posX
       this.posY = posY
       this.fruitType = fruitType
       this.beingAttacked = beingAttacked
    }

    draw(){
       ctx.drawImage(document.getElementById(this.fruitType), this.posX, this.posY, 50, 50);
    }
 }