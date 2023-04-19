
status="";
Objects=[];
objectDetector="";
song="";
function preload(){
    song=loadSound("alarm.mp3");
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
video=createCapture(VIDEO);
video.size(380,380);
video.hide();
objectDetector= ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status : Detecting objects";
 }

function modelLoaded(){
    console.log("model is initiallised");
status=true;
}
function draw(){
    image(video,0,0,380,380);
    if (status !=""){
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video,gotResults);
        for(i=0;i<Objects.length;i++){
document.getElementById("status").innerHTML="status:Detected";
fill(r,g,b);
percent=floor(Objects[i].confidence*100);
text(Objects[i].label+" "+percent+"%",Objects[i].x+15,Objects[i].y+15);
noFill();
stroke(r,g,b);
rect(Objects[i].x,Objects[i].y,Objects[i].width,Objects[i].height);

if (Objects[i].label=="person"){
    document.getElementById("number").innerHTML="baby found";
    song.stop();
    console.log("stop");
}else{
    song.play();
}
}
if(Objecs[i].length==0){
    document.getElementById("status").innerHTML="baby not found";
    song.play();
}

        }
    }
      
   
  

function gotResults(error,results){
    if(error){
        console.log(error);
    }
        console.log(results);
        Objects=results;

    }

  