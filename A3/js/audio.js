// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/Track03.ogg", type: "audio/ogg"}
    ]
};




window.onload=function(){


var mycontainer = document.querySelector("#audiojs");
var mymusic = "<figure>";

    if(audio.controls == true)
    {mymusic+= "<audio controls>"} else {mymusic += "<audio>"}
    
for(var i = 0; i<audio.source.length;i++){


mymusic+= '<source src="'+audio.source[i].src+'" type="'+audio.source[i].type+'">';

}

mycontainer.innerHTML+=mymusic+"</audio></figure>";

}