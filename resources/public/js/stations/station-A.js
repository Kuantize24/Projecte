var myGamePiece;
var myObstacles = [];
var myScore;

window.onload=function startGame(){
    myGamePiece = new component(30, 30, "blue", 280, 560);
    myGamePiece.gravity = 0.5;
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 560;
        this.canvas.height = 720;
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");            
        })
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
      }
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    this.gravity = 100;
    this.gravitySpeed = 100;
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
        /*this.hitWall = function() {
        var wall = myGameArea.canvas.widht - this.widht;
        if (this.x > wall) {
            this.x = wall;
        }
        else if (this.x < 0) {
            this.x = 0;
        } 
    }*/
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var  gap, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            return;
        } 
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    interval1 = 50;
    interval2 = 40;
    interval3 = 25;
    if (myGameArea.frameNo == 1 || everyinterval(interval1) ||  everyinterval(interval2) || everyinterval(interval3)) {
        y = myGameArea.canvas.height;
        minGap = 1;
        maxGap = 270;
        badLuck = Math.floor(Math.random() * 10) + 1; 
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(20, 20, "black", gap, 0));
        if (badLuck >3) {
            myObstacles.push(new component(20, 20, "black", gap*2, 0));
        }
        
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].y += 10;
        myObstacles[i].update();
    }
    

    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;    
    if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -5; }
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 5; }
    if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -5; }
    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 5; }
    myGamePiece.newPos();
    myGamePiece.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function accelerate(n) {
    myGamePiece.gravity = n;
}