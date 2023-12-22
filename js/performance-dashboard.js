function initialize_roadway_safety() {
		/////////////////////////////////////////////////
	// Generate viz of number of (motorized) fatalities
	
/*
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
	
*/
	
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
		targ_2023_fat:			+d['2023 Target - Fatalities'],
		perf_2019_21_fat:		+d['2019-21 Performance - Fatalities'],
		
		targ_2023_fat_rate:		+d['2023 Target - Fatality Rate'],
		targ_2019_21_fat_rate:	+d['2019-21 Performance - Fatality Rate'],
		
		targ_2023_inj:			+d['2023 Target - Injuries'],
		perf_2019_21_inj:		+d['2019-21 Performance - Injuries'],
		
		// targ_2023_inj_rate:		d['2023 Target - Injury Rate'],
	
		// targ_2023_saf:		d['2023 Target - Safety Events'],
		
		targ_2023_saf_rate:		+d['2023 Target - Safety Event Rate'],
		targ_2023_sys:			+d['2023 Target - System Reliability'],
		perf_2019_21_sys:		+d['2019-21 Performance - System Reliability']
	};
};

// CSV parser for bridge and pavement CSV file
var b_and_p_RowConverter = function(d) {
	return {
		perf_meas:	 	d['Performance Measure'],
		baseline:		+d['Baseline'],
		two_yr_targ:	+d['Two-Year Target (CY 2023)'],
		four_yr_targ:	+d['Four-Year Target (CY 2025)']
	}
};

// CSV parser for TAM (transit asset management) CSV file
var tam_RowConverter = function(d) {
	return {
		pm_or_ac:	d['Performance Measure or Asset Category'],
		agency:		d['Agency'],
		mode:		d['Mode'],
		targ_2023:	+d['2023 Target (Percent)'],
		perf_2022:	+d['2022 Performance (Percent)'],
		targ_2022:	+d['2022 Target (Percent)']
	}
};

// CSV parser for TTR (travel time reliability) CSV file
var ttr_RowConverter = function(d) {
	return {
		perf_meas:		d['Performance Measure'],
		targ_2025:		+d['Four-Year Target (2025)'],
		targ_2023:		+d['Two-Year Target (2023)'],
		targ_2021:		+d['2021 Target'],
		perf_2021:		+d['2021 Performance'],
		targ_2019:		+d['2019 Target'],
		perf_2019:		+d['2019 Performance']
	}
};

// CSV parser for CMAQ (congestion management and air quality) CSV file
var cmaq_RowConverter = function(d) {
	return {
		perf_meas:		d['Performance Measure'],
		geo_area:		d['Geographic Area'],
		baseline:		+d['Baseline'],
		targ_2023:		+d['Two-Year Target (2023)'],
		targ_2025:		+d['Four-Year Target (2025)'],
		targ_2019:		+d['Two-Year Target (2019)'],
		perf_2019:		+d['Two-Year Performance (2019)'],
		targ_2021:		+d['Four-Year Target (2021)'],
		perf_2021:		+d['Four-Year Performance (2021)']
	}
};


// C'est une petit hacque temporaire, Pierre
var rs_data = []
    ts_data = [],
	bp_data = [],
	tam_data = [],
	ttr_data = [],
	cmaq_data = [];
	
function roadway_safety_viz() {
	// Roadway fatalities
	road_fat = _.find(rs_data, function(o) { return o.perf_meas == 'Number of fatalities'; });
	
	var xValues = ['2023' , '2022', '2021', '2020', '2019'];
	              
	var yValues_targ = [ road_fat.targ_2023, road_fat.targ_2022, road_fat.targ_2021,
	                     road_fat.targ_2020, road_fat.targ_2019 ];
	var yValues_perf = [ 0, road_fat.perf_2022, road_fat.perf_2021,
	                     road_fat.perf_2020, road_fat.perf_2019 ];
/*
	var yValues_targ = [ 0, 20, 30, 40, 50 ];
	var yValues_perf   = [ 9, 25, 30, 41, 32 ];
*/
						 
						 
	var trace_targ = {
	  x: xValues,
	  y: yValues_targ,
	  type: 'bar',
	  name: 'Target',
	  text: yValues_targ.map(String),
	  textposition: 'auto',
	  hoverinfo: 'none',
	  opacity: 0.5,
	  marker: {
		color: 'rgb(158,202,225)',
		line: {
		  color: 'rgb(8,48,107)',
		  width: 1.5
		}
	  }
	};	

	var trace_perf = {
	  x: xValues,
	  y: yValues_perf,
	  type: 'bar',
	  name: 'Performance',
	  text: yValues_perf.map(String),
	  textposition: 'auto',
	  hoverinfo: 'none',
	  marker: {
		color: 'rgba(58,200,225,.5)',
		line: {
		  color: 'rgb(8,48,107)',
		  width: 1.5
		}
	  }
	};	
	
	var data = [trace_perf,trace_targ];

	var layout = {
		xaxis: { type: 'category' },
		title: 'Roadway Fatalities'
	};

	Plotly.newPlot('roadway-fatalities-viz', data, layout);
						 
} // roadway_safety_viz

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
		d3.csv(transitSafetyURL, ts_RowConverter),
		d3.csv(bridgeAndPavementURL, b_and_p_RowConverter),
		d3.csv(tamURL, tam_RowConverter),
		d3.csv(ttrURL, ttr_RowConverter),
		d3.csv(cmaqURL, cmaq_RowConverter)
	]).then(function(files) {
		rs_data = files[0];
		ts_data = files[1];
		bp_data = files[2];
		tam_data = files[3];
		ttr_data = files[4];
		cmaq_data = files[5];
		roadway_safety_viz();
		var _DEBUG_HOOK = 0;
	}).catch(function(err) {
		var _DEBUG_HOOK = 0;
		alert('Error loading CSV file(s). Exiting.');
	});
	


	
	// Once the code for the viz-generation is aligned with the data,
	// the following statement should be moved _inside_ the above 'then' function
	initialize_roadway_safety();
	
	return;
}