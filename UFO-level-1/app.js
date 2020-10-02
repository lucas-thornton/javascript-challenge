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
  var inputElement_date = d3.select("#datetime");
  var inputElement_city = d3.select("#city");
  var inputElement_state = d3.select("#state");
  var inputElement_country = d3.select("#country");
  var inputElement_shape = d3.select("#shape");
  var inputElement_duration = d3.select("#duration");

  // // // Get the value property of the input element
  var inputValue_date = inputElement_date.property("value");
  var inputValue_city = inputElement_city.property("value");
  var inputValue_state = inputElement_state.property("value");
  var inputValue_country = inputElement_country.property("value");
  var inputValue_shape = inputElement_shape.property("value");
  var inputValue_duration = inputElement_duration.property("value");


  var filteredData = sightings.filter(x => x.datetime === inputValue_date && x.city === inputValue_city && x.state === inputValue_state && x.country === inputValue_country && x.shape === inputValue_shape && x.durationMinutes === inputElement_duration);
  
  filteredData.forEach((x) => {
    var row = tbody.append("tr");
    Object.entries(x).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  })
  };
