// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function(){
var myContainer = document.querySelector("#fruitlist");

var myfruitlist = "<ol>" ;// start the tag

for (var i = 0; i<fruits.length; i++){
myfruitlist += "<li>"+ fruits[i] +  "</li>" // print out the list
}

myfruitlist += "</ol>"; // close the tag 

myContainer.innerHTML = myfruitlist; // make the connection into html

///////first part end//////////

var myContainer2 = document.querySelector("#filelist");

var createlist = "<ul>"; // start the tag
for(var i=0;i<directory.length; i++){
if(directory[i].type == "file"){
createlist += "<li>" +  directory[i].name   +"</li>";}
else{
    createlist += "<li>" +  directory[i].name  + "<ul>" //nested list
                                       
                    for(var a =0; a<directory[i].files.length;a++){

                        createlist += "<li>"+directory[i].files[a].name+"</li>"
                    }//else's for end
    createlist += "</ul>"+"</li>"; // end nested list
}//else end

}//for end

myContainer2.innerHTML = createlist +"</ul>"; // create connection and end the tag

}


