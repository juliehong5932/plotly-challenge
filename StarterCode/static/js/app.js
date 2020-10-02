
// Fetch JSON sample data 
var file_path = "samples.json"

d3.json(file_path).then(function(data){
    // console.log(data);
    dropDown(data);
});

function dropDown(sampleData){
    sampleData['names'].forEach(name=>{
        var newOption=d3.select('#selDataset').append('option');
        newOption.text(name);
        newOption.property('value', name);
    });
};

// function optionChanged(selected) {
//     buildBar(selected);
//     buildTable(selected);
// };

// function buildBar(sampleID){
//     d3.json(file_path).then(function(data){
//         var samples=data['samples'];
// //         var selectedSameple = samples.filter(smaple =>)

    
// })
// };


d3.json(file_path).then(function(data) {
  var data = data.samples
  console.log(data);

  // var x_value = data.sample_values;
  // var y_value = data.otu_ids;
  
  // var trace1 = {
  //     type: 'bar',
  //     x: x_value,
  //     y: y_value,
  //     orientation:'h'
  // };

  // var trace1 = [trace1];
  // var layout = {
  //     title: "OTU"
  // };

  // Plotly.newPlot("bar", trace1, layout)
});







// d3.json(file_path).then(function(data) {
//     var x_value = data.sample_values;
//     var y_value = data.otu_ids;
    
//     var trace1 = {
//         type: 'bar',
//         x: x_value,
//         y: y_value,
//         orientation:'h'
//     };

//     var trace1 = [trace1];
//     var layout = {
//         title: "OTU"
//     };

//     Plotly.newPlot("bar", trace1, layout)
// });


d3.json(file_path).then(function(data) {
    var xvalue = data.otu_ids;
    var yvalue = data.sample_values;
    var marker_size = data.sample_values;
    var marker_color = data.otu_ids;
    var text_value = data.otu_labels 

    var trace1 = {
      x: xvalue,
      y: yvalue,
      text: text_value,
      mode: 'markers',
      marker: {
        color: marker_color,
        size: marker_size,
        colorscale: "Earth"
      }
    };

    var trace1 = [trace1];
    var layout = {
      title: "OTU ID",
      showlegend: false,
      height: 600,
      width: 1500
    };

    Plotly.newPlot("bubble", trace1, layout)
});
