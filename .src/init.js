const config = {
    widht: 320*2,
    height: 180*2,
    parent: "container",
    type: Phaser.AUTO,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics:{
        default: "arcade",
        arcade: {
            gravity: {
                //y: 500
            }
        }
    }
}

var game = new Phaser.Game(config);

function preload(){
    this.load.image("bird", "./assets/bird.png");
}
function create(){
    //console.log(Phaser.Input.Keyboard.KeyCodes);
    
    this.pajaro = this.physics.add.image(100,50,"bird");

    ///
    this.pajaro.setScale(2)
    this.pajaro.flipX=false;
    this.pajaro.setOrigin(0);
    ///

    /*
    this.input.keyboard.on("keydown-RIGHT", () => {
        this.pajaro.setAcceleration(100, 0);
    });

    this.input.keyboard.on("keyup-RIGHT", () => {
        this.pajaro.setAcceleration(0, 0);
        this.pajaro.setVelocity(0);
    });
    */

    this.cursor = this.input.keyboard.createCursorKeys();
    console.log(this.cursor);

    //this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    //this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
}
function update(time, delta){

    if(this.cursor.right.isDown){
        this.pajaro.x++;
    }else if(this.cursor.left.isDown) {
        this.pajaro.x--;
    }
}
document.write("b");