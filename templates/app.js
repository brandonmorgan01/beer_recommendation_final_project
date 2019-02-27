
//submit button 
var submit = d3.select("#submit");
submit.on("click", function() {

// Prevent the page from refreshing
// d3.event.preventDefault();

// I want the table rows that I created (within the "selection" variable) below to be cleared out each time
// the function is called 
d3.selectAll("tr").remove();
d3.selectAll("svg").remove();

// Select the input element and get the raw HTML node
var inputElement = d3.select("#patient-form-input");


// Get the value property of the input element
var inputValue = inputElement.property("value");
//console.log(inputValue);


// Loop through school csv 

//d3.json("/data", function(error, data) {
d3.json("/data") 
.then(function(data) { 
    // cast variables of interests to a number
    data.abv = +data.abv;
    //console.log(data)

    var filteredData = data.filter(person => person.abv === inputValue);
    //console.log(filteredData)


     // once list are gathered, print on html page
     var selection =  d3.select("tbody")
     .selectAll("tr")
     .data(filteredData)
     .enter()
     .append("tr")
     .html(function(d) {
         return `<td>${d.abv}</td><td>${d.name_1}</td><td>${d.description}</td>`    })


var inputElementAle = d3.select("#aleCheck");
var inputValueAle = inputElementAle.property("value");
//console.log(inputValue, inputValueTWO)     


var inputElementHops = d3.select("#hopsCheck");
var inputValueHops = inputElementHops.property("value");


var inputElementPale = d3.select("#paleCheck");
var inputValuePale = inputElementPale.property("value");

var inputElementLight = d3.select("#lightCheck");
var inputValueLight = inputElementLight.property("value");

var inputElementDark = d3.select("#darkCheck");
var inputValueDark = inputElementDark.property("value");

var inputElementStout = d3.select("#stoutCheck");
var inputValueStout = inputElementStout.property("value");

var elements=document.getElementsByName('beer');

///////////////////////////
//var checkbox = document.getElementById('hopsCheck').checked;
//console.log(checkbox);
//if(checkbox == true){
 //   console.log(inputValue3);
//}

//var checkbox1 = document.getElementById('aleCheck').checked;
//console.log(checkbox);
//if(checkbox1 == true & checkbox == true){
//    console.log(inputValue, inputValueTWO, inputValue3);//
//}

var aleCheck = document.getElementById('aleCheck').checked;
var hopsCheck = document.getElementById('hopsCheck').checked;
var paleCheck = document.getElementById('paleCheck').checked;
var lightCheck = document.getElementById('lightCheck').checked;
var darkCheck = document.getElementById('darkCheck').checked;
var stoutCheck = document.getElementById('stoutCheck').checked;

if(aleCheck == true & hopsCheck == false & paleCheck == false & lightCheck == false & darkCheck == false & stoutCheck == false) {
console.log(inputValue, inputValueAle)
}

if(aleCheck == true & hopsCheck == false & paleCheck == true & lightCheck == false & darkCheck == false & stoutCheck == false) {
    console.log(inputValue, inputValueAle, inputValuePale)
}

if(aleCheck == true & hopsCheck == false & paleCheck == false & lightCheck == false & darkCheck == true & stoutCheck == false) {
        console.log(inputValue, inputValueAle, inputValueDark)
}
    
if(aleCheck == true & hopsCheck == false & paleCheck == false & lightCheck == false & darkCheck == false & stoutCheck == true) {
        console.log(inputValue, inputValueAle, inputValueStout)
}

if(aleCheck == true & hopsCheck == true & paleCheck == false & lightCheck == false & darkCheck == false & stoutCheck == false) {
    console.log(inputValue, inputValueAle, inputValueHops)
}

if(aleCheck == true & hopsCheck == true & paleCheck == true & lightCheck == false & darkCheck == false & stoutCheck == false) {
    console.log(inputValue, inputValueAle, inputValueHops, inputValuePale)
}

if(aleCheck == true & hopsCheck == true & paleCheck == true & lightCheck == true & darkCheck == false & stoutCheck == false) {
        console.log(inputValue, inputValueAle, inputValueHops, inputValuePale, inputValueLight)
}

if(aleCheck == true & hopsCheck == true & paleCheck == true & lightCheck == true & darkCheck == true & stoutCheck == false) {
    console.log(inputValue, inputValueAle, inputValueHops, inputValuePale, inputValueLight, inputValueDark)
}

if(aleCheck == true & hopsCheck == true & paleCheck == true & lightCheck == true & darkCheck == true & stoutCheck == true) {
    console.log(inputValue, inputValueAle, inputValueHops, inputValuePale, inputValueLight, inputValueDark, inputValueStout)
}

////////////////////////////////////////////

if(hopsCheck == true & paleCheck == false & lightCheck == false & aleCheck == false & darkCheck == false & stoutCheck == false) {
    console.log(inputValue, inputValueHops)
    }

    if(hopsCheck == true & paleCheck == false & lightCheck == true & aleCheck == false & darkCheck == false & stoutCheck == false) {
        console.log(inputValue, inputValueHops, inputValueLight)
        }
    if(hopsCheck == true & paleCheck == false & lightCheck == false & aleCheck == false & darkCheck == true & stoutCheck == false) {
            console.log(inputValue, inputValueHops, inputValueDark)
        }
    if(hopsCheck == true & paleCheck == false & lightCheck == false & aleCheck == false & darkCheck == false & stoutCheck == true) {
            console.log(inputValue, inputValueHops, inputValueStout)
        }

    
    if(hopsCheck == true & paleCheck == true & lightCheck == false & aleCheck == false & darkCheck == false & stoutCheck == false) {
        console.log(inputValue, inputValueHops, inputValuePale)
    }
    
    if(hopsCheck == true & paleCheck == true & lightCheck == true & aleCheck == false & darkCheck == false & stoutCheck == false) {
        console.log(inputValue, inputValueHops, inputValuePale, inputValueLight)
    }

    if(hopsCheck == true & paleCheck == true & lightCheck == true & aleCheck == false & darkCheck == true & stoutCheck == true) {
        console.log(inputValue, inputValueHops, inputValuePale, inputValueLight, inputValueStout, inputValueDark)
    }
  
    if(hopsCheck == true & paleCheck == false & lightCheck == true & aleCheck == false & darkCheck == true & stoutCheck == false) {
        console.log(inputValue, inputValueHops, inputValueLight, inputValueDark)
        }

        if(hopsCheck == true & paleCheck == false & lightCheck == false & aleCheck == false & darkCheck == true & stoutCheck == true) {
            console.log(inputValue, inputValueHops, inputValueDark, inputValueStout)
     
   }


////////////////////////////////////////////

if(paleCheck == true & lightCheck == false & aleCheck == false & hopsCheck == false & darkCheck == false & stoutCheck == false) {
    console.log(inputValue, inputValuePale)
    }
 
    if(paleCheck == true & lightCheck == false & aleCheck == false & hopsCheck == false & darkCheck == true & stoutCheck == false) {
        console.log(inputValue, inputValuePale, inputValueDark)
    }

    if(paleCheck == true & lightCheck == false & aleCheck == false & hopsCheck == false & darkCheck == false & stoutCheck == true) {
        console.log(inputValue, inputValuePale, inputValueStout)
    }

    if(paleCheck == true & lightCheck == true & aleCheck == false & hopsCheck == false & darkCheck == false & stoutCheck == false) {
        console.log(inputValue, inputValuePale, inputValueLight)
    }
    
    if(paleCheck == true & lightCheck == true & aleCheck == true & hopsCheck == false & darkCheck == false & stoutCheck == false) {
        console.log(inputValue, inputValuePale, inputValueLight, inputValueAle)
    }
    if(paleCheck == true & lightCheck == true & aleCheck == false & hopsCheck == false & darkCheck == true & stoutCheck == true) {
        console.log(inputValue, inputValuePale, inputValueLight, inputValueDark, inputValueStout)
        }   

    if(paleCheck == true & lightCheck == true & aleCheck == false & hopsCheck == false & darkCheck == true & stoutCheck == false) {
            console.log(inputValue, inputValuePale, inputValueLight, inputValueDark)
        }


////////////////////////////////////////////

if(lightCheck == true & aleCheck == false & hopsCheck == false & paleCheck == false & darkCheck == false & stoutCheck == false) {
    console.log(inputValue, inputValueLight)
    }
    
    if(lightCheck == true & aleCheck == true & hopsCheck == false & paleCheck == false & darkCheck == false & stoutCheck == false) {
        console.log(inputValue, inputValueLight, inputValueAle)
    }
    
    if(lightCheck == true & aleCheck == true & hopsCheck == true & paleCheck == false & darkCheck == false & stoutCheck == false) {
        console.log(inputValue, inputValueLight, inputValueAle, inputValueHops)
    }
    

    if(lightCheck == true & aleCheck == false & hopsCheck == false & paleCheck == false & darkCheck == true & stoutCheck == true) {
        console.log(inputValue, inputValueLight, inputValueDark, inputValueStout)
        }







////////////////////////////////////////////

if(darkCheck == true & lightCheck == false & aleCheck == false & hopsCheck == false & paleCheck == false & stoutCheck == false) {
    console.log(inputValue, inputValueDark)
    }

    if(darkCheck == true & lightCheck == false & aleCheck == false & hopsCheck == false & paleCheck == false & stoutCheck == true) {
        console.log(inputValue, inputValueDark, inputValueStout)
        }  
    
    if(darkCheck == true & lightCheck == true & aleCheck == false & hopsCheck == false & paleCheck == false & stoutCheck == false) {
        console.log(inputValue, inputValueDark, inputValueLight)
    }
    
    if(darkCheck == true & lightCheck == true & aleCheck == true & hopsCheck == false & paleCheck == false & stoutCheck == false) {
        console.log(inputValue, inputValueDark, inputValueLight, inputValueAle)
    }
    
    if(darkCheck == true & lightCheck == true & aleCheck == true & hopsCheck == true & paleCheck == false & stoutCheck == false) {
            console.log(inputValue, inputValueDark, inputValueLight, inputValueAle, inputValueHops)
    } 




////////////////////////////////////////////

if(stoutCheck == true & lightCheck == false & aleCheck == false & hopsCheck == false & paleCheck == false & darkCheck == false) {
    console.log(inputValue, inputValueStout)
    }
    
    if(stoutCheck == true & lightCheck == true & aleCheck == false & hopsCheck == false & paleCheck == false & darkCheck == false) {
        console.log(inputValue, inputValueStout, inputValueLight)
    }
    
    if(stoutCheck == true & lightCheck == true & aleCheck == true & hopsCheck == false & paleCheck == false & darkCheck == false) {
        console.log(inputValue, inputValueStout, inputValueLight, inputValueAle)
    }
    
    if(stoutCheck == true & lightCheck == true & aleCheck == true & hopsCheck == true & paleCheck == false & darkCheck == false) {
            console.log(inputValue, inputValueStout, inputValueLight, inputValueAle, inputValueHops)
    } 

    if(stoutCheck == true & lightCheck == true & aleCheck == true & hopsCheck == true & paleCheck == true & darkCheck == false) {
        console.log(inputValue, inputValueStout, inputValueLight, inputValueAle, inputValueHops, inputValuePale)
    } 








});



});



