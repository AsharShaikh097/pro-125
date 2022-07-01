differance = 0;
leftwristX = 0;
rightwristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 100);
    posenet = ml5.poseNet(video, moadelloaded);
    posenet.on('pose', gotposes);
}

function draw() {
    background('#a9def9');
    document.getElementById("square_side").innerHTML = "Font size of the text will be = " + differance + "px";
    textSize(differance);
    fill('#FFE787');
    text('Ashar', 50, 400);
}

function moadelloaded() {
    console.log("posenet is initialized");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        differance = floor(leftwristX - rightwristX);
        console.log("rightWristX = " + rightwristX + " leftWristX = " + leftwristX + " difference = " + differance);
    }
}