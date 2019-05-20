// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~tanvir.alam/shared/fall-2018/web222/movie.ogg", type: "video/ogg"}
    ]
};




window.onload=function(){


    var mycontainer = document.querySelector("#videojs");
    var myvideo = "<figure><video width:"+video.width+" height: "+video.height;
    
        if(video.controls == true)
        {myvideo+= " controls>"} else {myvideo += ">"}
        
    for(var i = 0; i<video.source.length;i++){
    
    
        myvideo+= '<source src="'+video.source[i].src+'" type="'+video.source[i].type+'">';
    
    }
    
    mycontainer.innerHTML+=myvideo+"</video></figure>";
    
    }