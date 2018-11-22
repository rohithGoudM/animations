//New 2.0.float

var myWaterBodyAY;
var myWaterBodyY;
var myTimePeriod;
var myAmax;

var mySceneTLX;
var mySceneTLY;
var mySceneBRX;
var mySceneBRY;
var mySceneW;       
var mySceneH;    
var myCenterX;       
var myCenterY;

var g = -9.8;
var heightImmersed ;

//Water
var WaterDensity = 1000;
var myBlockDensity = 400;

// Weights
var myWeight;
var myWeightMass = 0;
var myWeightX;
var myWeightY;
var myWeightZ = 0;

/* Room Variables */
var leftB;              /* Left Barrier */
var rightB;             /* Right Barrier */
var bottomB;            /* Bottom Barrier */
var topB;               /* Top Barrier */
var backB=-4.0;         /* Back Barrier */
var wallThickness;      /* Wall Thickness */

/* Room Objects */
var myWaterBody;        /* Water Body */
var myCeiling;          /* Ceiling */
var myBack;             /* Back */
var myRight;            /* Right */
var myLeft;             /* Left */

/* block variables */
var myBlock;             /* block Object */
var myBlockWidth=0.5;
var myBlockHeight =0.5;
var myBlockDepth = 1;
var myBlockVolume = (myBlockHeight * myBlockWidth * myBlockDepth);
var myBlockMass = myBlockDensity * myBlockVolume;
var TotalMass = myBlockMass + myWeightMass;

	myAmax = myBlockHeight/50;
 myTimePeriod=1000;


var myBlockX;            /* X Position */
var myBlockY;            /* Y Position */
var myBlockVY;           /* Y Velocity */
var myBlockAY;           /* Y Acceleration */
var myBlockZ;            /* Z Position for placing block */

/* Parameters, Variables */
var gravityY;           /* Y component of Gravity in m/S2 */

var myWeightHeight = myBlockHeight/6;
var myWeightWidth = myBlockWidth/1.2;
var myWeightDepth = myBlockDepth;

/******************* GUI control objects code ***********************/
var Height;
var PosY;           /* Y Position Slider Label */
var Width;
var VelX;           /* X Velocity Slider Label */
var VelY;           /* Y Velocity Slider Label */
var AccY;           /* Y Acceleration Slider Label */
var Xdefault;       /* X Position Slider Default Value */
var HeightDefault;
var Ydefault;       /* Y Position Slider Default Value */
var WidthDefault;
var VXdefault;      /* X Velocity Slider Default Value */
var VYdefault;      /* Y Velocity Slider Default Value */
var AYdefault;      /* Y Acceleration Slider Default Value */
var Xmin;           /* X Position Slider Minimum Value */
var Xmax;           /* X Position Slider Maximum Value */
var HeightMin;
var HeightMax;
var WidthMin;
var WidthMax;
var Ymin;           /* Y Position Slider Minimum Value */
var Ymax;           /* Y Position Slider Maximum Value */
var VXmin;          /* X Velocity Slider Minimum Value */
var VXmax;          /* X Velocity Slider Maximum Value */
var VYmin;          /* Y Velocity Slider Minimum Value */
var VYmax;          /* Y Velocity Slider Maximum Value */
var AYmin;          /* Y Acceleration Slider Minimum Value */
var AYmax;          /* Y Acceleration Slider Maximum Value */
var Xstep;          /* X Position Slider Step */
var HeightStep;
var WidthStep;
var Ystep;          /* Y Position Slider Step */
var VXstep;         /* X Velocity Slider Step */
var VYstep;         /* Y Velocity Slider Step */
var AYstep;         /* Y Acceleration Slider Step */

var Weight;
var WeightDefault;
var WeightMax;
var WeightMin;
var WeightStep;

function handleWeight(newValue){
	
if(newValue == 0){
	
	var variableY = myBlockY;
	PIEremoveElement(myWeight);
	myWeightMass = newValue;
	TotalMass = myBlockMass + myWeightMass;
	resetExperiment();
	myBlockY = variableY;
	myBlock.position.set(myBlockX, myBlockY, myBlockZ);
}else{
	
	var variableY = myBlockY;
	myWeightMass = newValue;
	TotalMass = myBlockMass + myWeightMass;
	resetExperiment();
	PIEremoveElement(myWeight);
	
	geometry = new THREE.BoxGeometry( myWeightWidth, myWeightHeight, myWeightDepth );
    material = new THREE.MeshLambertMaterial( {color: 0x000000} );
    myWeight = new THREE.Mesh( geometry, material );
    myWeight.position.set(myCenterX, myCenterY ,myWeightZ);
    myWeight.receiveShadow = true;
    PIEaddElement(myWeight);
	
	myBlockY = variableY;
	myWeightY = myBlockY + myBlockHeight/2 + myWeightHeight/2;
	myBlock.position.set(myBlockX, myBlockY, myBlockZ);
	myWeight.position.set(myWeightX, myWeightY, myWeightZ);
}	
	PIErender();
}

function handleHeight(newValue){
	myBlockHeight = newValue;
	myAmax = myBlockHeight/50;
	myBlockWidth = myBlockVolume/(myBlockHeight*myBlockDepth);	
	PIEremoveElement(myBlock);
	geometry = new THREE.BoxGeometry( myBlockWidth, myBlockHeight, myBlockDepth );
    material = new THREE.MeshLambertMaterial( {color: 0xc1a132} );
    myBlock = new THREE.Mesh( geometry, material );
    myBlock.position.set( myCenterX, myCenterY + myBlockHeight/2 , myBlockZ );
    myBlock.receiveShadow = true;
    PIEaddElement(myBlock);
	resetExperiment();
	
	if( myWeightMass != 0){
		PIEaddElement(myWeight);
	}	
	PIErender();	
}

function handleX(newValue)
{
    myBlockX = newValue;
    myBlock.position.set(myBlockX, myBlockY, myBlockZ);
    PIErender();
}


function handleY(newValue)
{
    myBlockY = newValue;
    myBlock.position.set(myBlockX, myBlockY, myBlockZ);
    PIErender();
}


function handleVX(newValue)
{
    myBlockVX = newValue;
}


function handleVY(newValue)
{
    myBlockVY = newValue;
}


function handleAY(newValue)
{
    myBlockAY = newValue;
}

function initialiseControlVariables()
{
    /* Labels */
    PosX="X";                  /* X Position Slider Label */
	Height="Height";
    PosY="Y";                  /* Y Position Slider Label */
    VelX="VX";                 /* X Velocity Slider Label */
    VelY="VY";                 /* Y Velocity Slider Label */
    AccY="AY";                 /* Y Acceleration Slider Label */
	Weight="Added Weight";

    /* Default (initial) Values */
    Xdefault=myCenterX;        /* X Position Slider Default Value */
    Ydefault=myCenterY;        /* Y Position Slider Default Value */
	HeightDefault=myBlockHeight;
	WidthDefault=myBlockWidth;
	
	WeightDefault=0;
	WeightMax=200;
	WeightMin=0;
	WeightStep=20;
	
    VXdefault=0.1;             /* X Velocity Slider Default Value */
    VYdefault=0.1;             /* Y Velocity Slider Default Value */
    AYdefault=-9.8;            /* Y Acceleration Slider Default Value */

    /* Slider Limits */
    Xmin=leftB+myBlockWidth;   /* X Position Slider Minimum Value */
	HeightMin= 0.1;
	HeightMax= 1;
	WidthMin = myBlockVolume/HeightMax;
	WidthMax = myBlockVolume/HeightMin;
    Xmax=rightB-myBlockWidth;  /* X Position Slider Maximum Value */
    Ymin=bottomB+myBlockHeight; /* Y Position Slider Minimum Value */
    Ymax=topB-myBlockHeight;    /* Y Position Slider Maximum Value */
    VXmin=-1.0;                /* X Velocity Slider Minimum Value */
    VXmax= 1.0;                /* X Velocity Slider Maximum Value */
    VYmin=-1.0;                /* Y Velocity Slider Minimum Value */
    VYmax= 1.0;                /* Y Velocity Slider Maximum Value */
    AYmin=-15.0;               /* Y Acceleration Slider Maximum Value */
    AYmax= 0.0;                /* Y Acceleration Slider Minimum Value */

    /* Slider Steps */
    Xstep=0.1;                 /* X Position Slider Step */
	HeightStep=0.1;
	WidthStep=0.1;
    Ystep=0.1;                  /* Y Position Slider Step */
    VXstep=0.1;                 /* X Velocity Slider Step */
    VYstep=0.1;                 /* Y Velocity Slider Step */
    AYstep=-0.1;               /* Y Acceleration Slider Step */
}


function initialiseControls()
{
    initialiseControlVariables();
    /* Create Input Panel */
	PIEaddInputSlider(Height, HeightDefault, handleHeight, HeightMin, HeightMax, HeightStep);
	PIEaddInputSlider(Weight, WeightDefault, handleWeight, WeightMin, WeightMax, WeightStep);

    /* Create Display Panel */
    PIEaddDisplayText(Height,HeightDefault);
    PIEaddDisplayText(Weight, WeightDefault);
    PIEaddDisplayText(AccY, AYdefault);
}


/******************* End of GUI control objects code ***********************/

/******************* Load Experiment objects code ***********************/

var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Buoyancy experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows a wooden block constrained in middle of a large pool where the rise of water level in the pool is negligable when the block is totally submerged.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to two sliders.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Height&nbsp;&nbsp;:&nbsp;Controls the Height of the wooden block.</li>";
    helpContent = helpContent + "<li>Added Weights&nbsp;&nbsp;:&nbsp;Controls the Weights to be added to the given block.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the wooden block will either sink or float obeying the laws of physics.</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of the four experiment variables during animation.</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Height&nbsp;&nbsp;:&nbsp;Shows the Height of the block.</li>";
    helpContent = helpContent + "<li>Weights&nbsp;&nbsp;:&nbsp;Shows the added weight to the wooden block.</li>";
    helpContent = helpContent + "<li>VY&nbsp;:&nbsp;Shows the Y velocity of the block.</li>";
    helpContent = helpContent + "<li>AY&nbsp;:&nbsp;Shows the Y acceleration of the block.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Buoyancy experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a wooden block of density 400 kg/(m^3), constrained in middle of a large pool where the rise of water level in the pool is negligable when the block is totally submerged.</p>";
    infoContent = infoContent + "<h3>Upthrust</h3>";
    infoContent = infoContent + "<p>Buoyancy or upthrust, is an upward force exerted by a fluid that opposes the weight of an immersed object.</p>";
    infoContent = infoContent + "<p>At first, when only the wooden block is placed in water, it submerges in water according to its own weight.</p>";
    infoContent = infoContent + "<p>When additional weights are added gradually the blocks submerges more and more. After certain amount of weights, the block sinks along with the weights.</p>";
    infoContent = infoContent + "<p>When the block starts to sink, it sinks with a certain acceleration, which is less than the earth's gravity.</p>";
    infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
}

function initialiseScene()
{
    /* Initialise Scene Variables */
    mySceneTLX = 0.0;
    mySceneTLY = 3.0;
    mySceneBRX = 4.0;
    mySceneBRY = 0.0;
    mySceneW   = (mySceneBRX - mySceneTLX);
    mySceneH   = (mySceneTLY - mySceneBRY);
    myCenterX  = (mySceneTLX + mySceneBRX) / 2.0;
    myCenterY  = (mySceneTLY + mySceneBRY) / 2.0;
    myBlockZ    = 0;
}

function initialiseOtherVariables()
{
    /* Initialise variables */

    wallThickness = 0.20;
	

    /* Gravity */
    gravityX = 0.0;
	
    gravityY = -9.8;
	
//	heightImmersed = ((myBlockDensity/WaterDensity)*myBlockHeight);
	heightImmersed = TotalMass/(WaterDensity*myBlockDepth*myBlockWidth);
//	console.log("Height Immersed = "+ heightImmersed);

    /* Barriers */
    leftB=mySceneTLX;
    rightB=mySceneBRX;
    bottomB=mySceneBRY+0.1;
    topB=mySceneTLY;
}


function loadExperimentElements()
{
var geometry;
var material;
var loader;
var texture;

    PIEsetExperimentTitle("Buoyancy");
    PIEsetDeveloperName("M Rohith Goud");

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();
	
	geometry = new THREE.BoxGeometry( myBlockWidth, myBlockHeight, myBlockDepth );
    material = new THREE.MeshLambertMaterial( {color: 0xc1a132} );
    myBlock = new THREE.Mesh( geometry, material );
    myBlock.position.set(myCenterX, myCenterY ,myBlockZ);
    myBlock.receiveShadow = true;
    PIEaddElement(myBlock);
		
	geometry = new THREE.BoxGeometry( myWeightWidth, myWeightHeight, myWeightDepth );
    material = new THREE.MeshLambertMaterial( {color: 0x000000} );
    myWeight = new THREE.Mesh( geometry, material );
    myWeight.position.set(myCenterX, myCenterY ,myWeightZ);
    myWeight.receiveShadow = true;
    
    geometry = new THREE.BoxGeometry( mySceneW,mySceneH/2, 2.5);
    material = new THREE.MeshLambertMaterial( {color: 0x306B9B,
    transparent: true,
    opacity: 0.7,
    overdraw: 0.5} );
    myWaterBody  = new THREE.Mesh( geometry, material );
    // myWaterBody.lookAt(new THREE.Vector3(0,1,0));
    myWaterBody.position.set(myCenterX, bottomB - (wallThickness / 2), 0.0);
    myWaterBody.receiveShadow = true;
    PIEaddElement(myWaterBody);
    
    geometry = new THREE.BoxGeometry(2,mySceneH, 1 );
    material = new THREE.MeshLambertMaterial( {color: 0xF2290E} );
    myLeft = new THREE.Mesh( geometry, material );
    myLeft.position.set(leftB-(wallThickness/2), myCenterY, 0.0);
    myLeft.receiveShadow = false;
    PIEaddElement(myLeft);
    /* Right */
    geometry = new THREE.BoxGeometry( 2, mySceneH ,1 );
    material = new THREE.MeshLambertMaterial( {color: 0xF2290E} );
    myRight = new THREE.Mesh( geometry, material );
    myRight.position.set(rightB+(wallThickness/2), myCenterY, 0.0);
    myRight.receiveShadow = false;
    PIEaddElement(myRight);

	
    geometry = new THREE.BoxGeometry( mySceneW * 4, mySceneH * 4, wallThickness );
    material = new THREE.MeshLambertMaterial( {color: 0xF2290E} );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
    myBack.receiveShadow = true;
    PIEaddElement(myBack);
	
//	var materialFront = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
//    var materialSide = new THREE.MeshBasicMaterial( { color: 0x000088 } );
//    var materialArray = [ materialFront, materialSide ];
//    var loader = new THREE.FontLoader();
//	
//	loader.load( 'optimer_bold.typeface.js', function ( font ) {
//        choice3= (Math.floor(Math.random()*10)+21)+30;
//        var textGeom = new THREE.TextGeometry(choice3,{
//            size: 3, height: 1, curveSegments: 3,
//            font: font, weight: "bold", style: "normal",
//            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
//            material: 0, extrudeMaterial: 0
//        });  
//    var textMaterial = new THREE.MeshFaceMaterial(materialArray);
//        textMesh3 = new THREE.Mesh(textGeom, textMaterial );
//    textMesh3.position.set(myCenterX, myCenterY,2);
//        
//     PIEaddElement(textMesh3);
//        
//        
//    });

//    loader.load( 'optimer_bold.typeface.js', function ( font ) {
//        
//        var textGeom = new THREE.TextGeometry("your text in quotes", 
//        {
//            size: 3, height: 1, curveSegments: 3,
//            font: font, weight: "bold", style: "normal",
//            bevelThickness: 0.01, bevelSize: 0.01, bevelEnabled: true,
//            material: 0, extrudeMaterial: 0
//        });  
//    var textMaterial = new THREE.MeshFaceMaterial(materialArray);
//    var textMesh1 = new THREE.Mesh(textGeom, textMaterial );
//        textMesh1.position.set(myCenterX, myCenterY,myBlockDepth);
//        
//        PIEaddElement(textMesh1);
//
//    });

    /* Instantiate experiment controls */
    initialiseControls();
	initialiseOtherVariables();

    /* Reset all positions */
    resetExperiment();

    PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);

}


/******************* End of Load Experiment objects code ***********************/

/******************* Reset Experiment code ***********************/


function resetExperiment()
{
    /* initialise Other Variables */
    initialiseOtherVariables();
	

    /* Initialise block variables */
    myBlockX      = myCenterX;
    myBlockY      = myCenterY + (myBlockHeight/2);
    myBlockVX     = 0.0;
	
    
    myBlockAX     = gravityX;
    if(TotalMass > WaterDensity*myBlockVolume){
		myBlockAY     = ((TotalMass - WaterDensity * myBlockVolume)/TotalMass) * g;
		myBlockVY     = 0.0;
	}else{
		myBlockAY = 0;
		myBlockVY = -0.1;
		
	}
	myWeightX = myCenterX;
	myWeightY = myBlockY + myBlockHeight/2 + myWeightHeight/2;
	myWeightZ = 0;
	
	
    /* Reset block position */
    myBlock.position.set(myBlockX, myBlockY, myBlockZ);
	
	myWeight.position.set(myWeightX, myWeightY, myWeightZ);
	
//    /* Floor */
    myWaterBody.position.set(myCenterX,myCenterY/2,0);
//    /* Left */
    myLeft.position.set(leftB-(0.5), myCenterY, 1);
//    /* Right */
    myRight.position.set(rightB+(0.5), myCenterY, 1);
    /* Back */
    myBack.position.set(myCenterX, myCenterY,myBlockZ-(0.1));
}

/******************* End of Reset Experiment code ***********************/

function updateExperimentElements(t, dt)
{
var newX;           /* new X position of block */
var newY;           /* new Y position of block */
var newVX;          /* new X velocity of block */
var newVY;          /* new Y velocity of block */
var changeX;        /* X boundary hit */
var changeY;        /* Y boundary hit */
var boundaryT;      /* Boundary Event Time */
var tempT;          /* Temporary time */

    /* Load block coordinates */
    myBlockX = myBlock.position.x;
    myBlockY = myBlock.position.y;
    myBlockZ = myBlock.position.z;

    /* Intialise for boundary detection */
    changeX   = 1;
    changeY   = 1;
    boundaryT = dt / 1000.0;    /* convert to seconds */

    /* Compute new myBlock position and check for boundary event */
	
	var tita;
			tita = (2*Math.PI/myTimePeriod)*t;
			myWaterBodyY = myAmax*Math.cos(tita);
	myBlockOsY = 0;
	
	if(TotalMass < WaterDensity * myBlockVolume ){
		
		if(heightImmersed > myAmax && heightImmersed < myBlockHeight - myAmax){
			
			
//			var myBlockAmax = myBlockHeight/300;
			myBlockOsY = (myAmax/10)*Math.cos(tita);
			myWeightY  = (myBlockY + myBlockHeight/2 + myWeightHeight/2);
			
//			myBlock.position.set(myBlockX, myBlockY + myBlockOsY, myBlockZ);
			myWeight.position.set(myWeightX, myWeightY, myWeightZ);
			
		}
		
		if(myBlockY - (myBlockHeight/2 + 1.5 - heightImmersed) > boundaryT ){
		
			if(myBlockVY > 0){
			myBlockVY = -myBlockVY;
		}			
		myBlockY  = (myBlockY + myBlockVY * boundaryT + 0.5 * myBlockAY * boundaryT * boundaryT);
		myWeightY  = (myBlockY + myBlockHeight/2 + myWeightHeight/2+ myBlockVY * boundaryT + 0.5 * myBlockAY * boundaryT * boundaryT);
		myBlockVY = (myBlockVY + myBlockAY * boundaryT) * changeY;
		
	}else if(myBlockY - (myBlockHeight/2 + 1.5 - heightImmersed) < 0){
		
		if(myBlockVY < 0){
			myBlockVY = -myBlockVY;
		}
				
		myBlockY  = (myBlockY + myBlockVY * boundaryT + 0.001 * myBlockAY * boundaryT * boundaryT);
		myWeightY  = (myBlockY + myBlockHeight/2 + myWeightHeight/2+ myBlockVY * boundaryT + 0.5 * myBlockAY * boundaryT * boundaryT);
		myBlockVY = (myBlockVY + myBlockAY * boundaryT) * changeY;
			
	}
		
		
		
	}else{
		myBlockY  = (myBlockY + myBlockVY * boundaryT + 0.5 * myBlockAY * boundaryT * boundaryT);
		myWeightY  = (myBlockY + myBlockHeight/2 + myWeightHeight/2+ myBlockVY * boundaryT + 0.5 * myBlockAY * boundaryT * boundaryT);
		myBlockVY = (myBlockVY + myBlockAY * boundaryT) * changeY;
	}
   
	
		newY = myBlockY + myBlockVY * boundaryT + 0.5 * myBlockAY * boundaryT * boundaryT;
    if ((newY >= (topB - myBlockWidth)) || (newY <= (bottomB + myBlockWidth)))
    {   /* Y boundary violated */
	
	if (newY < (bottomB + (myBlockHeight/2)  )  )
        {   /* block hits bottom */
			myBlockVY = 0;
			myBlockAY = 0; 
         
        }
	if (tempT == boundaryT) { changeY = -1; }
	if (tempT < boundaryT)  { changeY = -1; changeX = 1; boundaryT = tempT }
    
	}
	if(myBlockY - (myBlockHeight/2 + 1.5 - heightImmersed) < 0){}

    /* Recompute Position, Velocity, Acceleration using boundaryT */
    myBlockX  = (myBlockX + myBlockVX * boundaryT + 0.5 * myBlockAX * boundaryT * boundaryT);    
    myBlockVX = (myBlockVX + myBlockAX * boundaryT) * changeX;    
    myBlockAX = myBlockAX;
    myBlockAY = myBlockAY;

    /* Set block position */
	myWaterBody.position.set(myCenterX,myCenterY/2 + myWaterBodyY,0);
    myBlock.position.set(myBlockX, myBlockY + myBlockOsY, myBlockZ);
	myWeight.position.set(myWeightX, myWeightY ,myWeightZ);


    /* Adjust Simulation time in case boundary event has occured */
    boundaryT *= 1000;
    if (boundaryT < dt) { PIEadjustAnimationTime(dt - boundaryT); }

    /* Finally Update the Display Panel with new values */
//    PIEchangeDisplayText(PosX, myBlockX);
	
    PIEchangeDisplayText(Height, myBlockHeight);
    PIEchangeDisplayText(Weight, myWeightMass);
    PIEchangeDisplayText(PosY, myBlockY);
    PIEchangeDisplayText(AccY, myBlockAY);
	PIEshowInputPanel();
	PIEchangeDisplayText(AccY, myBlockAY);}


function PIEremoveElement(b){var a;var c;PIEscene.remove(b);c=false;for(a=PIEsceneElements.length-1;(c==false)&&(a>=0);a--){if(b==PIEsceneElements[a]){while(a<PIEsceneElements.length-1){PIEsceneElements[a]=PIEsceneElements[a+1];a++}PIEsceneElements.pop();c=true}}}
/******************* Update (animation changes) code ***********************/
