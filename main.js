Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})
webcam.attach("#camera");
function take_snapshot(){
    Webcam_snap(function(data){
        document.getElementById("result").innerHTML="<img id='captuered_image' src='"+data+"'>";

    })
}
console.log ("ml5.version",ml5.version);
classifier=ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/xlF-Fr_8S/model.json',modelloaded);
)
