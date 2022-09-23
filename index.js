var childNum=document.querySelector(".container").childElementCount;

for(var i=0;i<childNum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var pressed=this.innerHTML;
        switch(pressed){
            case "W":
                var audio1 = new Audio("songs/Drum-Kit_sounds_crash.mp3");
                audio1.play();
            break;
            case "A":
                var audio2 = new Audio("songs/Drum-Kit_sounds_kick-bass.mp3");
                audio2.play();
            break;
                
            case "S":
                var audio3 = new Audio("songs/Drum-Kit_sounds_snare.mp3");
                audio3.play();
            break;
            
            case "D":
                var audio4 = new Audio("songs/Drum-Kit_sounds_tom-1.mp3");
                audio4.play();
            break;
            
            case "J":
                var audio5 = new Audio("songs/Drum-Kit_sounds_tom-2.mp3");
                audio5.play();
            break;
            
            case "K":
                var audio6 = new Audio("songs/Drum-Kit_sounds_tom-3.mp3");
                audio6.play();
            break;
            
            case "L":
                var audio7 = new Audio("songs/Drum-Kit_sounds_tom-4.mp3");
                audio7.play();
            break;
            default:
                alert("BUG");
        }

    });
}
