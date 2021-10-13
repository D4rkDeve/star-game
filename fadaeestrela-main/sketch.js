var fada,estrela1,estrela2
var imagemfada,imagemestrela1,imagemestrela2
//criar variável para sprite de fada e imgFada



function preload()
{
 imagemfada = loaImage("fairyImage1.png");
 imagemestrela1 = loadImage("star.png");
 imagemestrela2 = loadImage("starImage.png");
}

function setup() {
    createCanvas(800, 750);

 fada = createSprite(400,375);
 drawSprites();

 fada.addImage (imagemfada,"fairyImage1.png");
 fada.scale = 0.8
 estrela1.addImage(imagemestrela1,"star.png");
 estrela1.scale = 0.5
 estrela2.addImage(imagemestrela2,"starImage.png"); 
estrela2.scale = 0.3 
 
 estrela1 = createSprite(50,80)
if (KeyDown("RIGHT_ARROW")){

    fada.velocityX = - 2


}
if (KeyDown("LEFT_ARROW")){

    fada.velocityX =  2

}  
if (KeyDown("A")){


    estrela1.velocityY = 2

}

if (fada.isTouching(estrela1)){


    estrela1.setVelocity = 0
    fada.setVelocity = 0 
}



}
