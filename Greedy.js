export default class Greedy {
    constructor(posX, posY, speed, points)
    {
       this.posX = posX
       this.posY = posY
       this.speed = speed
       this.points = points
    }

    draw(){
       ctx.drawImage(document.getElementById('life-1'), this.posX, this.posY, 50, 55);
    }
 }