// from data.js
// var tableData = data;

// YOUR CODE HERE!
// * Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//   * Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.

let tbody = d3.select("tbody");

function createTable(data) {
    data.forEach(d => {
    let row = tbody.append("tr");
    Object.entries(d).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value);
    });
});
}

createTable(data);

// * Use a date form in your HTML document and write JavaScript code that will listen for events
// and search through the `date/time` column to find rows that match user input.


var button = d3.select("#filter-btn");
button.on("click", filteredTable);

function filteredTable() {
    tbody.html("");
    var getDateInput = d3.select("#datetime");
    var dateValue = getDateInput.property("value");
    var newTable = data.filter(d => d.datetime === dateValue);
    createTable(newTable)
};










