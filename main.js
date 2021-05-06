Webcam.set({
    height: 300,
    width:300,
    image_format:"png",
    png_quality:90
})
Webcam.attach("#webcam")
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result_2").innerHTML="<img src='"+data_uri+"' id='result'>";
    })
}
console.log("ml5",ml5.version);
classifier=ml5.imageClassifier("mobilenet",modelLoaded);
function modelLoaded(){
    console.log("YAY IT'S WORKING!!!😍😍😍👏👏👏👏✔✔✔🎞🎞🎢🎢🎩🎩🎓🎩🎩🎓🎩🎓🎓🎓🥇🥇🥇🥇🥈🥇🥇🥇🏆🧸⏲⏱⏰⌚🕰🍗🍘🍙🥓🥨🌯✈🛫✈🛫🛬🛫🛬💺☢☣")
}
function identify(){
 img=document.getElementById("result")
    classifier.classify(img,gotResult)
}
function gotResult(error,result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result)
        document.getElementById("identifier").innerHTML=result[0].label
    }
}
