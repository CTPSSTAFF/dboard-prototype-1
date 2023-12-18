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
	
	var fatalityData = [trace1];
	var layout = {
	  title: 'Roadway Fatalities in the Boston MPO Region 2011-2019',
	  barmode: 'stack'
	};
	Plotly.newPlot('roadway-fatalities-viz', fatalityData, layout);
	
	//////////////////////////////////////
	// Generate viz of number of injuries
	var xValue = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
	var yValue = [15359, 15744, 15823, 16265, 16876, 17339, 17657, 16870, 16104];

	var trace2 = {
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
	
	var injuriesData = [trace2];
	var layout = {
	  title: 'Roadway Injuries in the Boston MPO Region 2011-2019',
	  barmode: 'stack'
	};
	Plotly.newPlot('roadway-injuries-viz', injuriesData, layout);
	
	
} // initialize_roadway_safety

function initialize() {
	// Initialize the accordion control
    $( "#accordion" ).accordion( { heightStyle: "content" } );
	
	// Initialize the tabs controls  
	$( "#roadway-safety-tabs" ).tabs( { heightStyle: "content" } );
	$( "#transit-safety-tabs" ).tabs( { heightStyle: "auto" } );
	$( "#bridge-pavement-tabs" ).tabs( { heightStyle: "auto" } );
	$( "#tam-tabs" ).tabs( { heightStyle: "auto" }  );
	$( "#ttr-tabs" ).tabs( { heightStyle: "auto" } );
	$( "#cmaq-tabs" ).tabs( { heightStyle: "auto" } );
	
	initialize_roadway_safety();
	
	return;
}