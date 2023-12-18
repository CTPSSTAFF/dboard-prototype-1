function initialize_roadway_safety() {
	// Generate viz of number of fatalities
	var xValue = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
	var yValue = [120, 131, 102, 120, 117, 140,  99, 99, 106];

	var trace1 = {
	  x: xValue,
	  y: yValue,
	  type: 'bar',
	  text: yValue.map(String),
	  textposition: 'auto',
	  hoverinfo: 'none',
	  marker: {
		color: 'rgb(158,202,225)',
		opacity: 0.6,
		line: {
		  color: 'rgb(8,48,107)',
		  width: 1.5
		}
	  }
	};
	
	var data = [trace1];
	var layout = {
	  title: 'Roadway Fatalities in the Boston MPO Region 2011-2019',
	  barmode: 'stack'
	};
	Plotly.newPlot('roadway-fatalities-viz', data, layout);
} // initialize_roadway_safety

function initialize() {
	// Initialize the accordion control
    $( "#accordion" ).accordion();
	
	// Initialize the tabs controls  
	$( "#roadway-safety-tabs" ).tabs();
	$( "#transit-safety-tabs" ).tabs();
	$( "#bridge-pavement-tabs" ).tabs();
	$( "#tam-tabs" ).tabs();
	$( "#ttr-tabs" ).tabs();
	$( "#cmaq-tabs" ).tabs();
	
	initialize_roadway_safety();
	
	return;
}