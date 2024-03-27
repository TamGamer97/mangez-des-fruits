export default class Hungry {
    constructor(posX, posY, speed, points, targetFruit)
    {
       this.posX = posX
       this.posY = posY
       this.speed = speed
       this.points = points
       this.targetFruit = targetFruit
    }

    draw(){
       ctx.drawImage(document.getElementById('hungry'), this.posX, this.posY, 50, 50);
    }
 }