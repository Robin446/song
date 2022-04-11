song= "";
song1 = "";
song2 = "";


function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}

function preload(){
    song = loadSound("Cute.mp3");
    song1 = loadSound("boss.mp3");
    song2 = loadSound("firse.mp3");
}

function play(){
    song.play();
}