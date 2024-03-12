var takeImageM = ""
var video = ""
var results = []
var rightWristX, rightWristY
var takeImageH = ""
var rightEarX, rightEarY, leftEarX, leftEarY




function preload(){
   
    takeImageH = loadImage("m.png")
}

function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function modelLoaded(){
    console.log("modelLoaded")
}

function gotPoses(results){
   if(results.length > 0){
    console.log(results);
   //  console.log("rightWristX"+results[0].pose.nose.x)
    //   console.log("rightWristY"+results[0].pose.nose.y)
    rightWristX = results[0].pose.rightWrist.x - 100;
    rightWristY = results[0].pose.rightWrist.y - 60;   
    
    rightEarX = results[0].pose.rightEar.x - 80
    rightEarY = results[0].pose.rightEar.y 

    leftEarX = results[0].pose.leftEar.x
    leftEarY = results[0].pose.leftEar.y - 80
   }
    
}

function draw(){
    image(video,0, 0, 500, 400)
    fill("red")
    //circle(rightWristX, rightWristY, 25)
    

    image(takeImageH, rightEarX, leftEarY, 90,130)
}

function takeSnapshot(){
    save("img.png")
}



