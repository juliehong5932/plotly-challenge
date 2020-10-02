
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
    var sample1 = sampleData[0];
    buildChart(sample1);
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

// d3.json(file_path).then(function(data) {
//     var otu_ids = data.samples.map(d => d.otu_ids[0]);
//     var sample_values = data.samples.map(d => d.sample_values[0]);
//     var otu_labels = data.samples.map(d => d.otu_labels[0]);
//     // console.log('otu_ids', otu_ids);
//     // console.log('sample_values', sample_values);
//     // console.log('otu_labels', otu_labels);
//     console.log(otu_ids);
// });



d3.json(file_path).then(function(data) {
    var otu_ids = data.samples.map(d => d.otu_ids[0]);
    var sample_values = data.samples.map(d => d.sample_values[0]); 
  
    var x_value = sample_values;
    var y_value = otu_ids;

    var trace1 = {
        type: 'bar',
        x: x_value,
        y: y_value,
        orientation:'h'
    };

    var trace1 = [trace1];
    var layout = {
        title: "OTU"
    };

    Plotly.newPlot("bar", trace1, layout)
});


d3.json(file_path).then(function(data) {
    var otu_ids = data.samples.map(d => d.otu_ids[0]);
    var sample_values = data.samples.map(d => d.sample_values[0]);
    var otu_labels = data.samples.map(d => d.otu_labels[0]);

    var xvalue = otu_ids;
    var yvalue = sample_values;
    var marker_size = sample_values;
    var marker_color = otu_ids;
    var text_value = otu_labels 

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
