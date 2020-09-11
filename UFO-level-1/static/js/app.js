var sightings = data;
var tbody = d3.select("tbody");

data.forEach((table) => {
  var row = tbody.append("tr");
  Object.entries(table).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});



// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runFilter);
form.on("submit", runFilter);


// Complete the event handler function for the form
function runFilter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  // $("#ufo-table").find("tbody").empty();
  // $("#ufo-table  tbody").remove();
  var td= d3.selectAll("td");
  td.remove();

  // // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // // // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = sightings.filter(x => x.datetime === inputValue);
  
  filteredData.forEach((x) => {
    var row = tbody.append("tr");
    Object.entries(x).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  })
  };
