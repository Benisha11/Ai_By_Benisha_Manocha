img = "";
status = "";
function preload(){
    img = loadImage('bed_room.jpg');
}


    function setup(){
        canvas = createCanvas(550, 395);
        canvas.center();
        objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
       
    }
    function modelLoaded(){
        console.log('Model Loaded!')
        status = true;
        objectDetector.detect(img, gotResult);
    }
    function draw(){
        image(img, 0, 0, 640, 420);
        fill("#FF0000");
        text("Bed", 320, 120);
        noFill();
        stroke("#FF0000");
        rect(100, 30, 400, 350);
    }
    function gotResult(error, results) {
        if (error) {
            console.error(error);
        } else {
            console.log(results);
        }
    }