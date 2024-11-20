class TitleScene extends Phaser.Scene {
    constructor() {
       super({key:'titleScene'}); 
       this.titleSceneBackgroundImage=null;
       this.titleScreenText=null;
       this.titleSceneTextStyle={font:'200px Times',fill:'#fde4b9',align:'center'}
    }
    init(data){
        this.cameras.main.setBackgroundColor('#ffffff');
        
    }

    preload(){
        console.log("this is title scene");
        this.load.image('titleSceneBackground','assets/aliens_screen_image.jpg')
    }

    create (data){
        this.splashSceneBackgroundImage=this.add.sprite(0,0,'titleSceneBackground').setScale(2.75);
        this.splashSceneBackgroundImage.x=1920/2;
        this.splashSceneBackgroundImage.y=1080/2;
        this.titleScreenText=this.add.text(1920/2,(1080/2) + 350,'Space Aliens',this.titleSceneTextStyle).setOrigin(0.5)
    }
    update(time,delta){
        if(time>6000) this.scene.switch('menuScene')
    }
}
export default TitleScene;