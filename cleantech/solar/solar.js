var data; // loaded asynchronously

var path = d3.geo.path();

var svg = d3.select("#chart")
  .append("svg");

var counties = svg.append("g")
    .attr("id", "counties")
    .attr("class", "Greys");

var states = svg.append("g")
    .attr("id", "states");

var jones = svg.append("g")
    .attr("id", "jones");

d3.json("../us-counties.json", function(json) {
  counties.selectAll("path")
      .data(json.features)
    .enter().append("path")
      .attr("class", data ? quantize : null)
      .attr("d", path);
});

d3.json("../us-states.json", function(json) {
  states.selectAll("path")
      .data(json.features)
    .enter().append("path")
      .attr("d", path);
});


d3.csv("./solar2000.csv", function(csv) {
  jones.selectAll("circle").data(csv).enter()
    .append("circle")
    .attr("cx", lon)
    .attr("cy", lat)
    .attr("r", 3)
    .attr("fill", "red")
    .attr("class", "jones");
});


function lat(d) {
  var y = d3.geo.albersUsa();
  var latval = y([d.Lon, d.Lat]);
  //console.log(latval);
  return latval[1];
}

function lon(d) {
  var y = d3.geo.albersUsa();
  var latval = y([d.Lon, d.Lat]);
  return latval[0];
}

function quantize(d) {
  return "q" + Math.min(8, ~~(data[d.id] * 9 / 12)) + "-9";
}
