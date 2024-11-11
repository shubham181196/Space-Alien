// refrencing to gloabal phasor

// game scene
const config={
    type: Phaser.AUTO,
    width:1920,
    height:1080,
    physics:{
        default:'arcade',
        arcade:{
            debug:true
        }
    },
    backgroundColor:0x5f6e7a,
    scale:{
        mode:Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH
    }
}
const game=new Phaser.Game(config);
console.log(game);