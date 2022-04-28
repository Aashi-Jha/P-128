song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    song1=loadSound("Unstoppable(PagalWorld).mp3");
    song2=loadSound("Harry Potter Theme Ringtone.mp3")
    }

    function setup(){
        canvas=createCanvas(500,400);
        canvas.center();
    
        video=createCapture(VIDEO);
        video.hide();

        poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    function modelLoaded(){
        console.log("PoseNet is Initialized!");
    }
    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
    
            leftWristX= results[0].pose.leftWrist.x;
            leftWristY= results[0].pose.leftWrist.y;
            console.log("Left Wrist X= "+leftWristX+"Left Wrist Y= "+leftWristY);
    
            righttWristX= results[0].pose.rightWrist.x;
            rightWristY= results[0].pose.rightWrist.y;
            console.log("Right Wrist X= "+righttWristX+"Right Wrist Y= "+rightWristY);
        }
    }
    
    function draw(){
        image(video,0,0,500,400);
    }