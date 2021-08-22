var ima1, ima2, ima3, ima4, ima5, ima6, ima7, ima8, ima9, ima10, ima11, ima12, ima13; 
var h1;
var estado = 1;
function preload ()
    {
        ima1 = loadImage ("niña1.JPG");
        ima2 = loadImage ("asteroide1.PNG");
        ima3 = loadImage ("asteroide2.PNG");
        ima4 = loadImage ("asteroide3.PNG");
        ima5 = loadImage ("humanos1.PNG");
        ima6 = loadImage ("genetica.jpeg");
        ima7 = loadImage ("humano2.jpeg");
        ima8 = loadImage ("humanos3.JPG");
        ima9 = loadImage ("niña2.JPG");
        ima10 = loadImage ("cura1.PNG");
        ima11 = loadImage ("niña3.JPG");
        ima12 = loadImage ("zombie1.PNG");
        ima13 = loadImage ("instrucciones1.PNG");
        ima14 = loadImage ("chicaGane1.PNG");
    }

function  setup () 
    {
        createCanvas (windowWidth, windowHeight);
        h1 = createSprite (width/2, height/2);
        h1.addImage ("i1", ima1);
        h1.addImage ("i2", ima2);
        h1.addImage ("i3", ima3);
        h1.addImage ("i4", ima4);

        h1.scale = 0.5;

    }

function draw ()
    {
        background ("black");

        if ( ("right") && state === 1)
        {
            h1.changeImage ("i2", ima2)
            state = 2;
            console.log (state);
        }
       else if (state === 2 && keyDown ("rigth") )
        {
            h1.addImage ("i3", ima3);
            state = 3;
            console.log (state);
        }
      else  if (state === 3 && keyDown ("rigth") )
        {
            h1.addImage ("i4", ima4);
            state = 5;
            console.log (state);

        }
        drawSprites();
    }   

