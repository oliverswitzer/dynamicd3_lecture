var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "x", "z"];

var width = 960,
    height = 500;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(32," + (height/2) + ")");


d3.csv("data.csv", function(error, data) {
     // this is executed whenever the data is loaded;
}); 

// 1. Make an update function
function update(data){

  //2. Data Join
  var text = svg.selectAll("text")
    .data(data);

  //3. Update
  // data nodes that match up
  text.attr("class", "update");

  //4. Enter 
  text.enter().append("text") //appends a text svg element to enter?
    .attr("class", "enter")
    .attr("x", function(d, i){ return i*32} ) // d = data, i = index of data, 32px is the size of each letter
    .attr("dy", "0.35em")
    .attr("fill", "hotpink");

  //5. Enter + Update
  text.text(function(d) { return d; } );

  //6. Exit
  text.exit().remove();
}

setInterval(function() {
  update(shuffle(alphabet)
    .slice(0, Math.floor(Math.random() *26))
    .sort());
}, 1000)



function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m], array[m] = array[i], array[i] = t;
  }
  return array;
}