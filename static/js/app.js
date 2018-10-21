// from data.js
var tableData = data;
var button = d3.select('#filter-btn');
var inputField = d3.select("#datetime");

window.addEventListener('load', () => {displayTable(tableData)});
button.on("click", handleClick);

function handleClick() {
    d3.event.preventDefault();
    var inputValue = inputField.property("value");

    var filteredData = tableData.filter(ufrow => ufrow.datetime === inputValue);
    displayTable(filteredData);
}

/**
 * Make the HTML table from the tableData variable,
 * and display it on the page.
 */
function displayTable(anyInput){
    var tbody = d3.select("tbody");
    var rowCount = 0;
    // Empty the table, so we can display what is in anyInput
    tbody.html("");
    anyInput.forEach(function(ufrow) {
        var row = tbody.append("tr");
        // rowCount += 1;
        console.log("Added another row");
        Object.entries(ufrow).forEach(function([key, value]) {
            if (key !== 'durationMinutes'){
                var cell = row.append("td");
                cell.text(value);
                // if (rowCount%2 == 0) {
                //     console.log("Hi . . . row count = ", rowCount);
                //     cell.property('style','background-color: #ffffff;');
                // }
            }
        });
    });


}


