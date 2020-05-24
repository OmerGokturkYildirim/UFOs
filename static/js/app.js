// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep track of all filters
var filters = {};

// This function will replace your handleClick function
function updateFilters() {
    
    //for datetime 
    let date = d3.select("#datetime").property("value");
    
    //for city
    let city = d3.select("#city").property("value");
    
    //for state
    let state = d3.select("#state").property("value");
    
    //for country
    let country = d3.select("#country").property("value");
    
    //for shape
    let shape = d3.select("#shape").property("value");

    let filteredData = tableData;

    // Loop through all of the filters and keep any data that
    // matches the filter values  
    // filter for datetime
    if (date){
    filteredData = filteredData.filter(row => row.datetime === date)
    }
   
    //filter for city
    if (city){
    filteredData = filteredData.filter(row => row.city === city)
    }
   
    //filter for state
    if (state){
    filteredData = filteredData.filter(row => row.state === state)
    }
    
    //filter for country
    if (country){
    filteredData = filteredData.filter(row => row.country === country)
    }
    
    //filter for shape
    if (shape){
    filteredData = filteredData.filter(row => row.shape === shape)
    }
    
    buildTable(filteredData);
};
// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("#filter-btn").on("click", updateFilters);


// Build the table when the page loads
buildTable(tableData);

