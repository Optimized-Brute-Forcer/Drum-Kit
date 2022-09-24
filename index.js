var childNum=document.querySelector(".container").childElementCount;

for(var i=0;i<childNum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var pressed=this.innerHTML;
        playAudio(pressed);
        btnAnimitation(pressed);
    });
}
document.addEventListener("keypress",function(e){
    playAudio(e.key);
    btnAnimitation(e.key);
}); 
function playAudio(d){
    switch(d){
        case "w":
            var audio1 = new Audio("songs/Drum-Kit_sounds_tom-1.mp3");
            audio1.play();
        break;
        case "a":
            var audio2 = new Audio("songs/Drum-Kit_sounds_tom-2.mp3");
            audio2.play();
        break;
            
        case "s":
            var audio3 = new Audio("songs/Drum-Kit_sounds_tom-3.mp3");
            audio3.play();
        break;
        
        case "d":
            var audio4 = new Audio("songs/Drum-Kit_sounds_tom-4.mp3");
            audio4.play();
        break;
        
        case "j":
            var audio5 = new Audio("songs/Drum-Kit_sounds_kick-bass.mp3");
            audio5.play();
        break;
        
        case "k":
            var audio6 = new Audio("songs/Drum-Kit_sounds_crash.mp3");
            audio6.play();
        break;
        
        case "l":
            var audio7 = new Audio("songs/Drum-Kit_sounds_snare.mp3");
            audio7.play();
        break;
        default:
            console.log(d);
    }
}

function btnAnimitation(str){
    document.querySelector("."+str).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+str).classList.remove("pressed");},100);
};