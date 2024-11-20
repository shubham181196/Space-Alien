class MenuScene extends Phaser.Scene {
    constructor() {
       super({key:'menuScene'}); 
       this.menuScreenBackgroundImage=null;
       this.startButton=null;
    }
    init(data){
        this.cameras.main.setBackgroundColor('#ffffff');
        
    }

    preload(){
        console.log("this is menu scene");
        this.load.image('menuSceneBackground','./assets/aliens_screen_image2.jpg')
        this.load.image('startButton','./assets/start.png');
    }

    create (data){
        this.menuScreenBackgroundImage=this.add.sprite(0,0,'menuSceneBackground');
        this.startButton=this.add.sprite(1920/2,(1080/2)+100,'startButton');
        this.startButton.setInteractive({useHandCursor:true});
        this.startButton.on('pointerdown',()=>this.clickButton());
        this.menuScreenBackgroundImage.x=1920/2;
        this.menuScreenBackgroundImage.y=1080/2;
    }
    update(time,delta){

    }
    clickButton(){
        this.scene.start('gameScene');
    }
}
export default MenuScene;