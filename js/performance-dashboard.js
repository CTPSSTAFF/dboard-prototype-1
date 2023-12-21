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

// URLs for CSV files to be loaded
var roadwaySafetyURL 	= 'csv/roadway_safety.csv',
	transitSafetyURL 	= 'csv/transit_safety.csv',
	bridgeAndPavementURL = 'csv/bridge_and_pavement.csv',
	tamURL				= 'csv/tam.csv',
	ttrURL				= 'csv/ttr.csv',
	cmaqURL				= 'csv/cmaq.csv';

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

// CSV parser for transit safety CSV file
var ts_RowConverter = function(d) {
	return {
		agency:					d['Agency'],
		targ_2023_fat:			d['2023 Target - Fatalities'],
		perf_2019_21_fat:		d['2019-21 Performance - Fatalities'],
		
		targ_2023_fat_rate:		d['2023 Target - Fatality Rate'],
		targ_2019_21_fat_rate:	d['2019-21 Performance - Fatality Rate'],
		
		targ_2023_inj:			d['2023 Target - Injuries'],
		perf_2019_21_inj:		d['2019-21 Performance - Injuries'],
		
		// targ_2023_inj_rate:		d['2023 Target - Injury Rate'],
	
		// targ_2023_saf:		d['2023 Target - Safety Events'],
		
		targ_2023_saf_rate:		d['2023 Target - Safety Event Rate'],
		targ_2023_sys:			d['2023 Target - System Reliability'],
		perf_2019_21_sys:		d['2019-21 Performance - System Reliability']
	};
};


// CSV parser for bridge and pavement CSV file
var b_and_p_RowConverter = function(d) {
	
};

// CSV parser for TAM (transit asset management) CSV file
var tam_RowConverter = function(d) {
	
};

// CSV parser for TTR (travel time reliability) CSV file
var ttr_RowConverter = function(d) {
	
};

// CSV parser for CMAQ (congestion management and air quality) CSV file
var cmaq_RowConverter = function(d) {
	
};


// C'est une petit hacque temporaire, Pierre
var rs_data = []
    ts_data = [];

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
	
	
	Promise.all([
		d3.csv(roadwaySafetyURL, rs_RowConverter),
		d3.csv(transitSafetyURL, ts_RowConverter)
	]).then(function(files) {
		rs_data = files[0];
		ts_data = files[1];
		var _DEBUG_HOOK = 0;
	}).catch(function(err) {
		alert('Error loading CSV file(s). Exiting.');
	});
	
/*	
	// Test loading 2 CSV files
	d3.csv(roadwaySafetyURL, rs_RowConverter).then(
		function(raw_rs_data){
			rs_data = raw_rs_data;
			d3.csv(transitSafetyURL, ts_RowConverter).then(
				function(raw_ts_data) {
					ts_data = raw_ts_data;
					var _DEBUG_HOOK = 0;
				});
		});
*/

	
	// Once the code for the viz-generation is aligned with the data,
	// the following statement should be moved _inside_ the above 'then' function
	initialize_roadway_safety();
	
	return;
}