function initialize_roadway_safety() {
		/////////////////////////////////////////////////
	// Generate viz of number of (motorized) fatalities
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
	
	/////////////////////////////////////////////////
	// Generate viz of number of (motorized) injuries
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
	
	////////////////////////////////////////////////////
	// Generate viz of number of nonmotorized fatalities
	var xValue = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
	var yValue = [ 26, 38, 32, 34, 36, 54, 32, 38, 33 ]; 

	var trace3 = {
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
	
	var nonmotFatalitiesData = [trace3];
	var layout = {
	  title: 'Nonmotorized Roadway Fatalities in the Boston MPO Region 2011-2019',
	  barmode: 'stack'
	};
	Plotly.newPlot('nonmotorized-fatalities-viz', nonmotFatalitiesData, layout);
	
	////////////////////////////////////////////////////
	// Generate viz of number of nonmotorized injuries
	var xValue = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
	var yValue = [ 1307, 1518, 1432, 1517, 1387, 1633, 1674, 1504, 1463 ];
	
	var trace4 = {
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
	
	var nonmotInjuriesData = [trace4];
	var layout = {
	  title: 'Nonmotorized Roadway Injuries in the Boston MPO Region 2011-2019',
	  barmode: 'stack'
	};
	Plotly.newPlot('nonmotorized-injuries-viz', nonmotInjuriesData, layout);
	
} // initialize_roadway_safety

// CSV parser for roadway safety CSV file
var rs_RowConverter = function(d) {
	return {
		perf_meas:		d['Performance Measure'],
		targ_2023:		+d['2023 Targets'],
		targ_2022:		+d['2022 Targets'],
		perf_2022:		+d['2022 Performance'],
		targ_2021:		+d['2021 Targets'],
		perf_2021:		+d['2021 Performance'],
		targ_2020:		+d['2020 Targets'],
		perf_2020:		+d['2020 Performance'],
		targ_2019:		+d['2019 Targets'],
		perf_2019:		+d['2019 Performance']
	};
};

var roadwaySafetyURL = 'csv/roadway_safety.csv';

// C'est une petit hacque temporaire, Pierre
var rs_data = [];

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
	
	// Test loading one CSV file  
	d3.csv(roadwaySafetyURL, rs_RowConverter).then(
		function(raw_rs_data){
			rs_data = raw_rs_data;
			var _DEBUG_HOOK_ = 0;
		});
	
	// Once the code for the viz-generation is aligned with the data,
	// the following statement should be moved _inside_ the above function.
	initialize_roadway_safety();
	
	return;
}