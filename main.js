
best_of_me_song = "";
destiny_song = "";

function preload() {
    best_of_me_song = loadSound("Best of Me.mp3");
    destiny_song = loadSound("Destiny.mp3")
}

function setup() {
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() 
{
    image(video, 0, 0, 600, 530)
}