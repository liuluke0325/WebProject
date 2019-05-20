// All you JavaScript code for assignment 4 should be in this file



window.onload = function () {   

   
   
    // *************Create a <img> element***************


function getImgElement(url, alt, height, width)

{    var image = document.createElement("img");   

image.setAttribute("src", url); 

  image.setAttribute("alt", alt); 

  if (height) image.setAttribute("height", height); 

  if (width) image.setAttribute("width", width);    return image;}



   // *************Create a <th> element***************

function CreateColumnInRow(NodeToDisplay){ // Ex : inputarray[i].AreaInKm2


var CreateColumn = document.createElement("td");
var ColumnBody = document.createTextNode(NodeToDisplay);
    CreateColumn.appendChild(ColumnBody);//combine them
    return CreateColumn;
    
}



//******clean table******* */

function cleantable(){
    var tb = outputTable.querySelector("tbody");
    if(tb){outputTable.removeChild(tb);}
}

//************By Population”******** */

function generateTable(inputarray, headerword, language) {
  EditHeader(headerword);

    //Create tbody.
    cleantable();

    var table = document.createElement("tbody");

      
      //count the number of array
      var NumOfRow = inputarray.length;
 
      //Create several row
      for(var i=0; i<NumOfRow; i++){

       //Create several column in one row
       var CreateOneRow = document.createElement("tr"); // a row in table

       CreateOneRow.appendChild(getImgElement("./flags/"+inputarray[i].Code+".png", "",20,35)) ;// create flags
       CreateOneRow.appendChild(CreateColumnInRow(inputarray[i].Code));
       CreateOneRow.appendChild(CreateColumnInRow(inputarray[i].Name[language]));      
       CreateOneRow.appendChild(CreateColumnInRow(inputarray[i].Continent));
       CreateOneRow.appendChild(CreateColumnInRow(inputarray[i].AreaInKm2));
       CreateOneRow.appendChild(CreateColumnInRow(inputarray[i].Population));
       CreateOneRow.appendChild(CreateColumnInRow(inputarray[i].Capital));
      table.appendChild(CreateOneRow); // Append a row into the whole table
      }

   
     return table;

}



//************querySelector************* */


 
    var outputTable = document.querySelector("#outputTable");

//******edit header***** */
    function EditHeader(string){
      var subtitle = document.querySelector("#subtitle");   
      if (typeof string !== 'undefined'){
        subtitle.innerHTML = "List of Countries and Dependencies "+ string;
      } else {
        subtitle.innerHTML = "List of Countries and Dependencies";
       }

      }




//*********************create new array****** */
var filter1to2 = countries.filter(countries => (countries.Population > 1000000 && countries.Population<2000000));
var filter100 = countries.filter(countries => countries.Population > 100000000);
var filter1inAmerica = countries.filter(countries => (countries.AreaInKm2 > 1000000 && countries.Continent == "Americas"));
var filterAsia= countries.filter(countries => countries.Continent == "Asia");


    /********************create Button */
  
    outputTable.appendChild(generateTable(countries, undefined , "English")); // display every data in the first pages

    document.querySelector("#menu_21").onclick = function () { outputTable.appendChild(generateTable(filter100,"- Population greater than 100 million", "English")); }; // click to run function
    document.querySelector("#menu_22").onclick = function () { outputTable.appendChild(generateTable(filter1to2,"- Population between 1 and 2 million", "English")); }; // click to run function
    
    document.querySelector("#menu_31").onclick = function () { outputTable.appendChild(generateTable(filter1inAmerica, "- Area greater than 1 million Km2, Americas", "English")); }; // click to run function
    document.querySelector("#menu_32").onclick = function () { outputTable.appendChild(generateTable(filterAsia,"- All countries in Asia", "English")); }; // click to run function

    document.querySelector("#menu_41").onclick = function() { outputTable.appendChild(generateTable(countries, "– Country / Dep. Name in English", "English")); }; 
    document.querySelector("#menu_42").onclick = function() { outputTable.appendChild(generateTable(countries, "– Country / Dep. Name in Arabic", "Arabic")); }; 
    document.querySelector("#menu_43").onclick = function() { outputTable.appendChild(generateTable(countries, "– Country / Dep. Name in Chinese (中文)", "Chinese")); };
    document.querySelector("#menu_44").onclick = function() { outputTable.appendChild(generateTable(countries, "– Country / Dep. Name in Franch", "Franch")); }; 
    document.querySelector("#menu_45").onclick = function() { outputTable.appendChild(generateTable(countries, "– Country / Dep. Name in Hindi", "Hindi")); }; 
    document.querySelector("#menu_46").onclick = function() { outputTable.appendChild(generateTable(countries, "– Country / Dep. Name in Korean", "Korean")); };   
    document.querySelector("#menu_47").onclick = function() { outputTable.appendChild(generateTable(countries, "– Country / Dep. Name in Japanese", "Japanese")); };  
    document.querySelector("#menu_48").onclick = function() { outputTable.appendChild(generateTable(countries, "– Country / Dep. Name in Russian", "Russian")); }; 
    };