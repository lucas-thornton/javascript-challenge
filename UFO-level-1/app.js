var sightings = data;
var tbody = d3.select("tbody");


// // Select the button
// var button = d3.select("#filter-btn");

// // Select the form
// var input = d3.select("input");

// // Create event handlers 
// button.on("click", runFilter);
// form.on("submit",runFilter);

// Fill table with data

data.forEach((weatherReport) => {
    var row = tbody.append("tr");
    Object.entries(weatherReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  

// Complete the event handler function for the form
// function runFilter() {

//   // Prevent the page from refreshing
//   d3.event.preventDefault();
  
//   // Select the input element and get the raw HTML node
//   var inputElement = d3.select(".form-control");

//   // Get the value property of the input element
//   var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(sightings);

//   var filteredData = sightings.filter(sightings => sightings.datetime === inputValue);

//   console.log(filteredData);

