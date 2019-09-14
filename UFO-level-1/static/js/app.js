// from data.js
var tableData = data;
//console.log(data)

var tbody = d3.select("tbody");
console.log(tbody)

// YOUR CODE HERE!
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function () {
    // Select the input element and get the raw HTML node
    var datetimeElement = d3.select("#datetime");
    var cityElement = d3.select("#city");
    var countryElement = d3.select("#country");
    var shapeElement = d3.select("#shape");


    var tableData = data;
    console.log(tableData)

    // Get the value property of the input element
    var datetimeValue = datetimeElement.property("value").toLowerCase();
    var cityValue = cityElement.property("value").toLowerCase();
    var countryValue = countryElement.property("value").toLowerCase();
    var shapeValue = shapeElement.property("value").toLowerCase();

    if (datetimeValue != "") {
        console.log(datetimeValue);
        var tableData = tableData.filter(ufoSighting => ufoSighting.datetime === datetimeValue);
    }
    if (cityValue != "") {
        console.log(cityValue);
        var tableData = tableData.filter(ufoSighting => ufoSighting.city === cityValue);
    }
    if (countryValue != "") {
        console.log(countryValue);
        var tableData = tableData.filter(ufoSighting => ufoSighting.country === countryValue);
    }
    if (shapeValue != "") {
        console.log(shapeValue);
        var tableData = tableData.filter(ufoSighting => ufoSighting.shape === shapeValue);
    }
    console.log(tableData);

    d3.select("tbody").selectAll("tr").remove()

    tableData.forEach((filterSighting) => {
        var row = tbody.append("tr");
        Object.entries(filterSighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    })
});



