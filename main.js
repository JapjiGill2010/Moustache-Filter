nose_x = 0;
nose_y = 0;
function preload(){
    moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}

function draw(){
    image(video, 0 , 0 , 300 , 300);
    image(moustache, nose_x - 15, nose_y + 30,30, 30);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(nose_x, nose_y, 20);
}

function take_snapshot(){
    save("filterImage.png");
}

function modelLoaded(){
    console.log("Model has been successfully loaded!");
}

function getPoses(results){
if(results.length > 0){
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
    console.log("nose x = " + nose_x);
    console.log("nose y = " + nose_y);
}
}