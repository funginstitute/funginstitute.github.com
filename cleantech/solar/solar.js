var data; // loaded asynchronously

var path = d3.geo.path();

var svg = d3.select("#chart")
  .append("svg");

var counties = svg.append("g")
    .attr("id", "counties")
    .attr("class", "Blues");

var states = svg.append("g")
    .attr("id", "states");

var jones = svg.append("g")
    .attr("id", "jones");

d3.json("/cleantech/us-counties.json", function(json) {
  counties.selectAll("path")
      .data(json.features)
    .enter().append("path")
      .attr("class", data ? quantize : null)
      .attr("d", path);
});

d3.json("/cleantech/us-states.json", function(json) {
  states.selectAll("path")
      .data(json.features)
    .enter().append("path")
      .attr("d", path);
});


d3.json("/cleantech/solar/biofuel.json", function(json) {
  data = json;
  counties.selectAll("path")
      .attr("class", quantize);
});


d3.select("select").on("change", function() {
  //d3.selectAll("svg").attr("class", this.value);
  //d3.selectAll("#counties").attr("class", this.value);
  console.log("In the select handler...");
  d3.select("#counties").attr("class", this.value);
});


/*
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
*/

function quantize(d) {
  return "q" + Math.min(8, ~~(data[d.id] * 9 / 12)) + "-9";
}
