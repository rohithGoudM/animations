//New 2.0.float


var myBarryL;
var myBarryR;

var myBlockL;
var myBlockLX;
var myBlockLY;
var myBlockLZ;
var myBlockLheight;
var myBlockLdepth;
var myBlockLwidth;

var myBlockR;
var myBlockRX;
var myBlockRY;
var myBlockRZ;
var myBlockRheight;
var myBlockRdepth;
var myBlockRwidth;

var myPiston1;
var myPiston1X;
var myPiston1Y;
var myPiston1Z;
var myPiston1height;
var myPiston1depth;
var myPiston1width;

var myPiston2;
var myPiston2X;
var myPiston2Y;
var myPiston2Z;
var myPiston2height;
var myPiston2depth;
var myPiston2width;

var myWeightRadius;

var myWeight1X;
var myWeight1Y;
var myWeight1Z;

var myWeight2X;
var myWeight2Y;
var myWeight2Z;


var myWeight1;
var myWeight1Y;
var myWeight1height;
var myWeight1depth;
var myWeight1width;
var myWeight1Mass;
var myWeight1Radius;
var myForce1;

var A1;
var A2;
var H1;
var H2;
var roe;



var myWeight2;
var myWeight2Y;
var myWeight2height;
var myWeight2depth;
var myWeight2width;
var myWeight2Mass;
var myWeight1Radius;
var myForce2;

var myWaterBodyLX;
var myWaterBodyLY;
var myWaterBodyLZ;
var myWaterBodyLwidth;
var myWaterBodyLheight;
var myWaterBodyLdepth;
var myWaterBodyLYOs;

var myWaterBodyRX;
var myWaterBodyRY;
var myWaterBodyRZ;
var myWaterBodyRwidth;
var myWaterBodyRheight;
var myWaterBodyRdepth;
var myWaterBodyRYOs;

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

var g = 9.8;
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
var myWaterBodyL;        /* Water Body */
var myWaterBodyR;
var myCeiling;          /* Ceiling */
var myBack;             /* Back */
var myRight;            /* Right */
var myLeft;             /* Left */

var myVol1;
var myHeight1;
var myWidth1;
var myDepth1;

var myVol2;
var myHeight2;
var myWidth2;
var myDepth2;


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


var P1 = "P1";
var Pressure1;
var P2 = "P2";
var Pressure2;



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

var A1Default;
var A1Minimum;
var A1Maximum;
var A1Step;

var A2Default;
var A2Minimum;
var A2Maximum;
var A2Step;

var myWeight1Default;
var myWeight1Minimum;
var myWeight1Maximum;
var myWeight1Step;

var myWeight2Default;
var myWeight2Minimum;
var myWeight2Maximum;
var myWeight2Step;

function handleP1(newValue){
	
}
function handleP2(newValue){
	
}

function handleWeight1(newValue){
	myWeight1Mass = newValue/100;
var heightVar = myWeight1height;
//	myWeight1height = (newValue-302)/53.33;
	myWeight1X = myWeight1.position.x;
	myWeight1Y = myWeight1.position.y;
	myWeight1Z = myWeight1.position.z;
	myWeight1Radius = (newValue-302)/53.33;
	PIEremoveElement(myWeight1);
	
	
	geometry = new THREE.CylinderGeometry(myWeight1Radius, myWeight1Radius,myWeight1height,30);
    material = new THREE.MeshLambertMaterial( {color: 0x0A0A0A} );
    myWeight1 = new THREE.Mesh( geometry, material );
    myWeight1.position.set( myWeight1X, myWeight1Y - heightVar/2 + myWeight1height/2, myWeight1Z);
    myWeight1.receiveShadow = true;
    PIEaddElement(myWeight1);
	
	PIErender();

}
function handleWeight2(newValue){
	myWeight2Mass = newValue/100;
	myWeight2X = myWeight2.position.x;
	myWeight2Y = myWeight2.position.y;
	myWeight2Z = myWeight2.position.z;
	
	myWeight2Radius = (newValue-760)/166.67;
	myWeight2Z = 1+myPiston1depth/2 - (myWeight2Radius);
	PIEremoveElement(myWeight2);
	
	geometry = new THREE.CylinderGeometry(myWeight2Radius, myWeight2Radius,myWeight2height,30);
    material = new THREE.MeshLambertMaterial( {color: 0x0A0A0A} );
    myWeight2 = new THREE.Mesh( geometry, material );
    myWeight2.position.set( myWeight2X, myWeight2Y, myWeight2Z);
    myWeight2.receiveShadow = true;
    PIEaddElement(myWeight2);
	PIErender();
}

function handleA1(newValue){
	var geometry;
	var material;
	
	myPiston1width = newValue;
	myBlockLwidth = myBarryL - 1 - myPiston1width;
	
	var vary;

	vary = myHeight1;
	

	myHeight1 = myVol1/(myPiston1width * myPiston1depth);	
	
	myWaterBodyLY = myWaterBodyLY-(vary - myHeight1);	
	myWaterBodyL.position.set(myWaterBodyLX, myWaterBodyLY ,0);
	
	PIEremoveElement(myBlockL);
	PIEremoveElement(myPiston1);
	
	myPiston1Y = myWaterBodyLY + myWaterBodyLheight/2 + myPiston1height/2;
	
	
	geometry = new THREE.BoxGeometry(myPiston1width, myPiston1height,myPiston1depth );
    material = new THREE.MeshLambertMaterial( {color: 0xd3d3d3} );
    myPiston1 = new THREE.Mesh( geometry, material );
    myPiston1.position.set(myCenterX - myBlockLwidth - myPiston1width/2, myPiston1Y,myPiston1Z);
    myPiston1.receiveShadow = true;
    PIEaddElement(myPiston1);
	
	geometry = new THREE.CubeGeometry( myBlockLwidth, mySceneH, 1 );
    material = new THREE.MeshLambertMaterial( {color: 0xF2290E} );
    myBlockL = new THREE.Mesh( geometry, material );
    myBlockL.position.set(myCenterX-myBlockLwidth/2, myCenterY*1.5, 1);
    myBlockL.receiveShadow = true;
    PIEaddElement(myBlockL);
	
	myWeight1.position.set(myCenterX - myBlockLwidth - myPiston1width/2,myWaterBodyLY + myWaterBodyLheight/2  + myPiston1height + myWeight1height/2,1+myPiston1depth/2 - 0.15);
	
	A1 = myPiston1width * myPiston1depth;
	H1 = myBlockLheight/2 - ( (myBlockLY - myWaterBodyLY) - myWaterBodyLheight/2 );
	

	
	
	PIErender();

}

function handleA2(newValue){
	
	
	
	myPiston2width = newValue;
	myBlockRwidth = myBarryR - 1 - myPiston2width;
	
	var vary2;
	vary2 = myHeight2;
	
	myHeight2 = myVol2/(myPiston2width * myPiston2depth);
	var diff = vary2 - myHeight2;
	console.log(diff);
	console.log("v2 "+ myVol2);
	myWaterBodyRY = myWaterBodyRY - (vary2 - myHeight2);	
	myWaterBodyR.position.set(myWaterBodyRX, myWaterBodyRY ,0);
	
	PIEremoveElement(myBlockR);
	PIEremoveElement(myPiston2);
	
	geometry = new THREE.BoxGeometry(myPiston2width, myPiston2height,myPiston2depth );
    material = new THREE.MeshLambertMaterial( {color: 0xd3d3d3} );
    myPiston2 = new THREE.Mesh( geometry, material );
    myPiston2.position.set(myCenterX + myBlockRwidth + myPiston2width/2,myWaterBodyRY + myWaterBodyRheight/2 + myPiston2height/2,1);
    myPiston2.receiveShadow = true;
    PIEaddElement(myPiston2);
	
	geometry = new THREE.CubeGeometry(myBlockRwidth, mySceneH, 1 );
    material = new THREE.MeshLambertMaterial( {color: 0xF2290E} );
    myBlockR = new THREE.Mesh( geometry, material );
    myBlockR.position.set(myCenterX+myBlockRwidth/2, myCenterY*1.5, 1);
    myBlockR.receiveShadow = true;
    PIEaddElement(myBlockR);
	
	myWeight2.position.set(myCenterX + myBlockRwidth + myPiston2width/2,myWaterBodyRY + myWaterBodyRheight/2 + myPiston2height + myWeight2height/2,myWeight2Z);
	
	A2 = myPiston2width * myPiston2depth;
	H2 = myBlockRheight/2 - ( (myBlockRY - myWaterBodyRY) - myWaterBodyRheight/2 );
	
	PIErender();
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
	// ntg
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
	
	A1Default = 0.5;
	A1Minimum = 0.5;
	A1Maximum = 0.6;
	A1Step = 0.01;
	
	A2Default = 1.5;
	A2Minimum = 1.38;
	A2Maximum = 1.5;
	A2Step = 0.01;
	
	myWeight1Default = 3.1*100;
	myWeight1Minimum = 3.06*100;
	myWeight1Maximum = 3.1*100;
	myWeight1Step = (0.01*100)/2;
	
	myWeight2Default = 8.1*100;
	myWeight2Minimum = 8.1*100;
	myWeight2Maximum = 8.36*100;
	myWeight2Step = 0.01*100;
	
}


function initialiseControls()
{
    initialiseControlVariables();
    /* Create Input Panel */
	PIEaddInputSlider("Area 1", A1Default, handleA1, A1Minimum, A1Maximum, A1Step);
	PIEaddInputSlider("Area 2", A2Default, handleA2, A2Minimum, A2Maximum, A2Step);
	PIEaddInputSlider("Weight 1", myWeight1Default, handleWeight1, myWeight1Minimum, myWeight1Maximum, myWeight1Step);
	PIEaddInputSlider("Weight 2", myWeight2Default, handleWeight2, myWeight2Minimum, myWeight2Maximum, myWeight2Step);
	PIEaddInputText(P1, Pressure1, handleP1);
	PIEaddInputText(P2, Pressure2, handleP2);
}


var helpContent;
function initialiseHelp()
{
    helpContent="";
    helpContent = helpContent + "<h2>Hydraulic Press experiment help</h2>";
    helpContent = helpContent + "<h3>About the experiment</h3>";
    helpContent = helpContent + "<p>The experiment shows the cross section of a schematic hydraulic press.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls. There are two states of the experiment.</p>";
    helpContent = helpContent + "<h3>The setup stage</h3>";
    helpContent = helpContent + "<p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to four sliders.</p>";
    helpContent = helpContent + "<p>You can control the following:</p>";
    helpContent = helpContent + "<ul>";
    helpContent = helpContent + "<li>Area 1&nbsp;&nbsp;:&nbsp;Controls the Area of the smaller piston.</li>";
    helpContent = helpContent + "<li>Area 2&nbsp;&nbsp;:&nbsp;Controls the Area of the larger piston.</li>";
	helpContent = helpContent + "<li>Weight 1&nbsp;&nbsp;:&nbsp;Controls the weight on the smaller piston.</li>";
    helpContent = helpContent + "<li>Weight 2&nbsp;&nbsp;:&nbsp;Controls the Weight on the larger piston.</li>";
    helpContent = helpContent + "<li>P1&nbsp;&nbsp;:&nbsp;It just shows the pressure on the left piston.</li>";
    helpContent = helpContent + "<li>P2&nbsp;&nbsp;:&nbsp;It just shows the pressure on the right piston.</li>";
    helpContent = helpContent + "</ul>";
    helpContent = helpContent + "<p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p>";
    helpContent = helpContent + "<h3>The animation stage</h3>";
    helpContent = helpContent + "<p>In the animation stage, the weight on the larger piston is balanced by the weight on the smaller piston by obeying the laws of physics.</p>";
    helpContent = helpContent + "<p>The right hand panel now shows the values of the same four experiment variables as mentioned above, one can alter them during animation too.</p>";
  
    helpContent = helpContent + "<p>You can pause and resume the animation by using the pause/play nutton on the top line</p>";
    helpContent = helpContent + "<p>You can slow down and speed up the animaion by uing the speed control buttons</p>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

var infoContent;
function initialiseInfo()
{
    infoContent =  "";
    infoContent = infoContent + "<h2>Hydraulic Press experiment concepts</h2>";
    infoContent = infoContent + "<h3>About the experiment</h3>";
    infoContent = infoContent + "<p>The experiment shows a schematic hydraulic press containing fluid of density 800 kg/(m^3).</p>";
    infoContent = infoContent + "<h3>Hydraulic Press</h3>";
    infoContent = infoContent + "<p>In a hydraulic press,  a small weight can balance a large weight since liquids work with equal pressure.</p>";
    infoContent = infoContent + "<p>At first, the weights are at the same level of height but due to the pressure difference, they start to move according to the pressure they apply.</p>";
    infoContent = infoContent + "<p>When area is changed, the height of the water level changes as pressure is given by P = F/A. Where P is the pressure, F is the Force applied and A is the area on which the force is applied.</p>";
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
	myBarryL = 3;
	myBarryR = 3;
	
	
	myPiston1width = 0.5;
	myPiston1height = 0.06;
	myPiston1depth = 1;	
	
	
	myPiston2width = 1.5;
	myPiston2height = myPiston1height;
	myPiston2depth = 1;
	
	myBlockLwidth = myBarryL - 1 - myPiston1width;
	myBlockLheight = mySceneH;
	myBlockLdepth = 1;
	myBlockLX = myCenterX-myBlockLwidth/2;
	myBlockLY = myCenterY*1.5;
	myBlockLZ = 1;
		
	
	myBlockRwidth = myBarryR - 1 - myPiston2width;
	myBlockRheight = mySceneH;
	myBlockRdepth = 1;
	myBlockRX = myCenterX+myBlockRwidth/2;
	myBlockRY = myCenterY*1.5;
	myBlockRZ = 1;
	
	myWeight1height = 0.25;
	myWeight1width = myPiston1width/3;
	myWeight1depth = 1;
	myWeight2height = 0.25;
	myWeight2width = myPiston2width/3;
	myWeight2depth = 1;
	myWeightRadius = 0.15;
	
	myWaterBodyLX = myCenterX/2;
	myWaterBodyLY = myCenterY/8;
	myWaterBodyLZ = 0.0;
	myWaterBodyLwidth = mySceneW/2;
	myWaterBodyLheight = mySceneH;
	myWaterBodyLdepth = 2.98;
	
	
	myWaterBodyRX = myCenterX*1.5;
	myWaterBodyRY = myCenterY/8;
	myWaterBodyRZ = 0.0;
	myWaterBodyRwidth = mySceneW/2;
	myWaterBodyRheight = mySceneH;
	myWaterBodyRdepth = 2.98;
	
	myPiston1X = myCenterX - myBlockLwidth - myPiston1width/2;
	myPiston1Y = myCenterY + myPiston1height/2;
	myPiston1Z = 1;
	myPiston2X = myCenterX + myBlockRwidth + myPiston2width/2;
	myPiston2Y = myCenterY + myPiston2height/2;
	myPiston2Z = 1;
	
	myWeight1X = myCenterX - myBlockLwidth - myPiston1width/2;
	myWeight1Y = myCenterY + myPiston1height + myWeight1height/2;
	myWeight1Z = 1+myPiston1depth/2 - 0.15;
	myWeight2X = myCenterX + myBlockRwidth + myPiston2width/2;
	myWeight2Y = myCenterY + myPiston2height + myWeight2height/2;
	myWeight2Z = 1+myPiston1depth/2 - (myWeightRadius*2);
	
	myHeight1 = myWaterBodyLheight/2 + ( ( myBlockLY - myWaterBodyLY) - myBlockLheight/2 );
	myWidth1 = myPiston1width;
	myDepth1 = myPiston1depth;
	
	myHeight2 = myWaterBodyRheight/2 + ( ( myBlockRY - myWaterBodyRY) - myBlockRheight/2 );
	myWidth2 = myPiston2width;
	myDepth2 = myPiston2depth;
	
	myVol1 = myHeight1 * myWidth1 * myDepth1;
	myVol2 = myHeight2 * myWidth2 * myDepth2;
	
	roe = 0.8;
	
	myWeight1Mass = 3.1;
	myForce1 = myWeight1Mass*g;
	A1 = myPiston1width * myPiston1depth;
	H1 = myBlockLheight/2 - ( (myBlockLY - myWaterBodyLY) - myWaterBodyLheight/2 );
	Pressure1 = myForce1/A1;
	
	myWeight2Mass = 8.1;
	myForce2 = myWeight2Mass * g;
	A2 = myPiston2width * myPiston2depth;
	H2 = myBlockRheight/2 - ( (myBlockRY - myWaterBodyRY) - myWaterBodyRheight/2 );
	Pressure2 = myForce2/A2;
}

function initialiseOtherVariables()
{
    /* Initialise variables */

    wallThickness = 0.20;
	

    /* Gravity */
    gravityX = 0.0;
	
    gravityY = -9.8;
	
//	heightImmersed = ((myBlockDensity/WaterDensity)*myBlockHeight);
//	heightImmersed = TotalMass/(WaterDensity*myBlockDepth*myBlockWidth);
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

    PIEsetExperimentTitle("Hydraulic Press");
    PIEsetDeveloperName("M Rohith Goud");

    /* initialise help and info content */
    initialiseHelp();
    initialiseInfo();

    /* initialise Scene */
    initialiseScene();

    /* initialise Other Variables */
    initialiseOtherVariables();
	
	/* Water =  */
	

    
    geometry = new THREE.BoxGeometry( myWaterBodyLwidth,myWaterBodyLheight, myWaterBodyLdepth);
    material = new THREE.MeshLambertMaterial( {color: 0x306B9B,
    transparent: true,
    opacity: 0.8,
    overdraw: 0.5} );
    myWaterBodyL  = new THREE.Mesh( geometry, material );
    // myWaterBodyL.lookAt(new THREE.Vector3(0,1,0));
    myWaterBodyL.position.set(myWaterBodyLX, myWaterBodyLY ,myWaterBodyLZ);
    myWaterBodyL.receiveShadow = false;
    PIEaddElement(myWaterBodyL);
	
    geometry = new THREE.BoxGeometry( myWaterBodyRwidth, myWaterBodyRheight, myWaterBodyRdepth);
    material = new THREE.MeshLambertMaterial( {color: 0x306B9B,
    transparent: true,
    opacity: 0.8,
    overdraw: 0.5} );
    myWaterBodyR  = new THREE.Mesh( geometry, material );
    // myWaterBodyL.lookAt(new THREE.Vector3(0,1,0));
    myWaterBodyR.position.set( myWaterBodyRX, myWaterBodyRY, myWaterBodyRZ);
    myWaterBodyR.receiveShadow = false;
    PIEaddElement(myWaterBodyR);
    
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

	
    geometry = new THREE.BoxGeometry( mySceneW * 4, mySceneH * 4, 0.1 );
    material = new THREE.MeshLambertMaterial( {color: 0x821607} );
    myBack = new THREE.Mesh( geometry, material );
    myBack.position.set(myCenterX, myCenterY, backB - (wallThickness / 2));
    myBack.receiveShadow = true;
    PIEaddElement(myBack);
	
	geometry = new THREE.BoxGeometry(myPiston1width, myPiston1height,myPiston1depth );
    material = new THREE.MeshLambertMaterial( {color: 0xd3d3d3} );
    myPiston1 = new THREE.Mesh( geometry, material );
    myPiston1.position.set( myPiston1X, myPiston1Y, myPiston1Z);
    myPiston1.receiveShadow = true;
    PIEaddElement(myPiston1);
	
	geometry = new THREE.BoxGeometry(myPiston2width, myPiston2height,myPiston2depth );
    material = new THREE.MeshLambertMaterial( {color: 0xd3d3d3} );
    myPiston2 = new THREE.Mesh( geometry, material );
    myPiston2.position.set( myPiston2X, myPiston2Y, myPiston2Z);
    myPiston2.receiveShadow = true;
    PIEaddElement(myPiston2);
	
	geometry = new THREE.CylinderGeometry(myWeightRadius, myWeightRadius,myWeight1height,30);
    material = new THREE.MeshLambertMaterial( {color: 0x0A0A0A} );
    myWeight1 = new THREE.Mesh( geometry, material );
    myWeight1.position.set( myWeight1X, myWeight1Y, myWeight1Z);
    myWeight1.receiveShadow = true;
    PIEaddElement(myWeight1);
	
	geometry = new THREE.CylinderGeometry(myWeightRadius*2, myWeightRadius*2,myWeight2height,30);
    material = new THREE.MeshLambertMaterial( {color: 0x0A0A0A} );
    myWeight2 = new THREE.Mesh( geometry, material );
    myWeight2.position.set( myWeight2X, myWeight2Y, myWeight2Z);
    myWeight2.receiveShadow = true;
    PIEaddElement(myWeight2);

	geometry = new THREE.CubeGeometry( myBlockLwidth, myBlockLheight, myBlockLdepth );
    material = new THREE.MeshLambertMaterial( {color: 0xF2290E} );
    myBlockL = new THREE.Mesh( geometry, material );
    myBlockL.position.set( myBlockLX, myBlockLY, myBlockLZ);
    myBlockL.receiveShadow = true;
    PIEaddElement(myBlockL);

	geometry = new THREE.CubeGeometry( myBlockRwidth, myBlockRheight, myBlockRdepth );
    material = new THREE.MeshLambertMaterial( {color: 0xF2290E} );
    myBlockR = new THREE.Mesh( geometry, material );
    myBlockR.position.set( myBlockRX, myBlockRY, myBlockRZ);
    myBlockR.receiveShadow = true;
    PIEaddElement(myBlockR);
	
	var myBott;
	
	geometry = new THREE.BoxGeometry(6,mySceneH/6,0.99);
    material = new THREE.MeshLambertMaterial( {color: 0xF2290E} );
    myBott  = new THREE.Mesh( geometry, material );
    // myFloor.lookAt(new THREE.Vector3(0,1,0));
    myBott.position.set(myCenterX,0.5/2, 1);
    myBott.receiveShadow = true;
    PIEaddElement(myBott);

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
		
	myWaterBodyLY = myCenterY/8;
	myWaterBodyRY = myCenterY/8;
//    /* Floor */
    myWaterBodyL.position.set(myWaterBodyLX, myWaterBodyLY ,0);
    myWaterBodyR.position.set(myWaterBodyRX, myWaterBodyRY,0);
//    /* Left */
    myLeft.position.set(myCenterX - myBarryL, myCenterY, 1);
//    /* Right */
    myRight.position.set(myCenterX + myBarryR, myCenterY, 1);
    /* Back */
    myBack.position.set(myCenterX, myCenterY,1);
	
	myPiston1.position.set(myCenterX - myBlockLwidth - myPiston1width/2,myWaterBodyLY + myWaterBodyLheight/2 + myPiston1height/2,1);
	
	myPiston2.position.set(myCenterX + myBlockRwidth + myPiston2width/2,myWaterBodyRY + myWaterBodyRheight/2 + myPiston2height/2,1);
	
	myWeight1.position.set(myCenterX - myBlockLwidth - myPiston1width/2,myWaterBodyLY + myWaterBodyLheight/2 + myPiston1height + myWeight1height/2,1+myPiston1depth/2 - 0.15);
	
	myWeight2.position.set(myCenterX + myBlockRwidth + myPiston2width/2, myWaterBodyRY + myWaterBodyRheight/2 + myPiston2height + myWeight2height/2,myWeight2Z);
	
	myBlockL.position.set(myCenterX-myBlockLwidth/2, myCenterY*1.5, 1);
	
	myBlockR.position.set(myCenterX+myBlockRwidth/2, myCenterY*1.5, 1);
	
	
	
	
	
	
	
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

    boundaryT = dt / 1000.0;    /* convert to seconds */

    /* Compute new myBlock position and check for boundary event */
	
	var tita;
			tita = (2*Math.PI/myTimePeriod)*t;
			myWaterBodyLYOs = myAmax*Math.cos(tita);
			myWaterBodyRYOs = myAmax*Math.sin(tita);
	myBlockOsY = 0;
	
	myForce1 = myWeight1Mass*g;
	A1 = myPiston1width * myPiston1depth;
	H1 = myBlockLheight/2 - ( (myBlockLY - myWaterBodyLY) - myWaterBodyLheight/2 );
	
	myForce2 = myWeight2Mass * g;
	A2 = myPiston2width * myPiston2depth;
	H2 = myBlockRheight/2 - ( (myBlockRY - myWaterBodyRY) - myWaterBodyRheight/2 );
	
	if( ( ((myForce1/A1) + roe * g * H1) - ((myForce2/A2) + roe * g * H2) ) > 0.1){
		
		if (  ((((myForce1)/A1) + roe * g * H1) - (((myForce2)/A2) + roe * g * H2)) < 0 ){
			myWaterBodyLY = myWaterBodyLY ;
			myWaterBodyRY = myWaterBodyRY ;
		}else{
			myWaterBodyLY = myWaterBodyLY - 0.2 * boundaryT ;
			myWaterBodyRY = myWaterBodyRY + 0.2 * boundaryT;
		}
	}
	else if( ((((myForce1)/A1) + roe * g * H1) - (((myForce2)/A2) + roe * g * H2)) < 0 ){
			
	
			myWaterBodyLY = myWaterBodyLY + 0.2 * boundaryT ;
			myWaterBodyRY = myWaterBodyRY - 0.2 * boundaryT;
	
//		myWaterBodyLY = myWaterBodyLY + 0.3 * boundaryT ;
//			myWaterBodyRY = myWaterBodyRY - 0.3 * boundaryT;
	}
    /* Set block position */
	myWaterBodyL.position.set(myWaterBodyLX, myWaterBodyLY + myWaterBodyLYOs,0);
	myWaterBodyR.position.set(myWaterBodyRX, myWaterBodyRY + myWaterBodyRYOs,0);

	
	
	myPiston1.position.set(myCenterX - myBlockLwidth - myPiston1width/2,myWaterBodyLY + myWaterBodyLheight/2 + myPiston1height/2+ myWaterBodyLYOs,1);
	
	myPiston2.position.set(myCenterX + myBlockRwidth + myPiston2width/2,myWaterBodyRY + myWaterBodyRheight/2 + myPiston2height/2 + myWaterBodyRYOs,1);
	
	myWeight1.position.set(myCenterX - myBlockLwidth - myPiston1width/2,myWaterBodyLY + myWaterBodyLheight/2 + myPiston1height + myWeight1height/2+ myWaterBodyLYOs,1+myPiston1depth/2 - 0.15);
	
	myWeight2.position.set(myCenterX + myBlockRwidth + myPiston2width/2, myWaterBodyRY + myWaterBodyRheight/2 + myPiston2height + myWeight2height/2 + myWaterBodyRYOs,myWeight2Z);


    /* Adjust Simulation time in case boundary event has occured */
    boundaryT *= 1000;
    if (boundaryT < dt) { PIEadjustAnimationTime(dt - boundaryT); }
	Pressure1 = myForce1/A1;
	Pressure2 = myForce2/A2;
	PIEchangeInputText(P1, Pressure1);
	PIEchangeInputText(P2, Pressure2);
	PIEshowInputPanel();
}


function PIEremoveElement(b){var a;var c;PIEscene.remove(b);c=false;for(a=PIEsceneElements.length-1;(c==false)&&(a>=0);a--){if(b==PIEsceneElements[a]){while(a<PIEsceneElements.length-1){PIEsceneElements[a]=PIEsceneElements[a+1];a++}PIEsceneElements.pop();c=true}}}
/******************* Update (animation changes) code ***********************/
