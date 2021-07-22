var SpeechRecognition = window.webkitSpeechRecognition; //Web SPeech API-convert speech to text
  
var recognition = new SpeechRecognition();

function start() //start the selfie process
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
      if(Content =="take my selfie")
      {
        console.log("taking selfie --- ");
        speak();
      }
}



camera = document.getElementById("camera");
Webcam.set({ //seting the camera
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function speak() //speaking the selfie comment
{
    var synth = window.speechSynthesis; //converting text to speech
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera); //loading the camera
    timer();
    setTimeout(function(){ //setting the timer to delay
        take_snapshot();
        save();
    },13000);
    
}
 function timer() //speaking the timer content
 {
    var synth = window.speechSynthesis;
    for(var i=5;i>=1;i--)
    {
        speak_data = i;
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }
    speak_data = "Taking your selfie now";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
 }

 function take_snapshot() //take the image
 {
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML='<img id = "selfie" src = "'+data_uri+'"/>';
     });
 }

 function save() //save the image
 {
     link=document.getElementById("link");
     image = document.getElementById("selfie").src;
     link.href =image;
     link.click(); //makes the computer think we clicked on the link
 }
