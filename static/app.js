
//submit button 
var submit = d3.select("#submit");
submit.on("click", function() {

console.log('hi')
// Prevent the page from refreshing
d3.event.preventDefault();

// I want the table rows that I created (within the "selection" variable) below to be cleared out each time
// the function is called 
d3.selectAll("tr").remove();
d3.selectAll("svg").remove();

// Select the input element and get the raw HTML node
var inputElement = d3.select("#patient-form-input");


// Get the value property of the input element
var inputValue = inputElement.property("value");
//console.log(inputValue);


// Loop through csv 
var myjsdata = '{{mydata}}';
console.log(myjsdata);
function getdata(d){
    return d;
}

//d3.json("/data", function(error, data) {
d3.json("/data") 
.then(function(data) { 
    // cast variables of interests to a number
    data.abv = +data.abv;
    console.log(data)

    var filteredData = data.filter(person => person.abv === inputValue);
    //console.log(filteredData)


     // once list are gathered, print on html page
     var selection =  d3.select("tbody")
     .selectAll("tr")
     .data(filteredData)
     .enter()
     .append("tr")
     .html(function(d) {
         console.log(d);
         return `<td>${d.abv}</td><td>${d.name_1}</td><td>${d.description}</td>`    })
         console.log(myjsdata);


});

console.log(myjsdata);


});



