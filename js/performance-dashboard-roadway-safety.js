// CSV parser for roadway safety 'statewide' CSV file
var rs_state_RowConverter = function(d) {
	return {
		perf_meas:		d['Performance Measure'],
		targ_2023:		+d['2023 Targets'],
		targ_2022:		+d['2022 Targets'],
		targ_2021:		+d['2021 Targets'],
		targ_2020:		+d['2020 Targets'],
		perf_2022:		+d['2022 Performance'],	
		perf_2021:		+d['2021 Performance'],
		perf_2020:		+d['2020 Performance'],
		perf_2019:		+d['2019 Performance'],
		perf_2018:		+d['2018 Performance'],
		perf_2017:		+d['2017 Performance'],
		perf_2016:		+d['2016 Performance'],
		perf_2015:		+d['2015 Performance'],
		perf_2014:		+d['2014 Performance'],
		perf_2013:		+d['2013 Performance'],
	};
};

// CSV parser for roadway safety 'mpo' CSV file
var rs_mpo_RowConverter = function(d) {
	return {
		perf_meas:		d['Performance Measure'],
		perf_2022:		+d['2022 Performance'],	
		perf_2021:		+d['2021 Performance'],
		perf_2020:		+d['2020 Performance'],
		perf_2019:		+d['2019 Performance'],
		perf_2018:		+d['2018 Performance'],
		perf_2017:		+d['2017 Performance'],
		perf_2016:		+d['2016 Performance'],
		perf_2015:		+d['2015 Performance'],
		perf_2014:		+d['2014 Performance'],
		perf_2013:		+d['2013 Performance'],
	};
};


	
function roadway_fatality_viz(xValues, yValues_state_perf, yValues_state_targ, yValues_mpo_perf, div_id, caption) {
	var trace_state_perf = {
	  x: xValues,
	  y: yValues_state_perf,
	  type: 'bar',
	  name: 'Performance (State)',
	  text: yValues_state_perf.map(String),
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
	
	var trace_state_targ = {
	  x: xValues,
	  y: yValues_state_targ,
	  type: 'bar',
	  name: 'Target (State)',
	  text: yValues_state_targ.map(String),
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

	var trace_mpo_perf = {
	  x: xValues,
	  y: yValues_mpo_perf,
	  type: 'bar',
	  name: 'Performance (MPO)',
	  text: yValues_mpo_perf.map(String),
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
	
	var data = [trace_state_perf, trace_state_targ, trace_mpo_perf];

	var layout = {
		xaxis: { type: 'category' },
		title: caption
	};

	Plotly.newPlot(div_id, data, layout);		
} // roadway_fatality_viz

function roadway_fatality_rate_viz(xValues, yValues_state_perf, yValues_state_targ, yValues_mpo_perf, div_id, caption) {
	var trace_state_perf = {
	  x: xValues,
	  y: yValues_state_perf,
	  type: 'bar',
	  name: 'Performance (State)',
	  text: yValues_state_perf.map(String),
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
	
	var trace_state_targ = { 
	  x: xValues,
	  y: yValues_state_targ,
	  type: 'bar',
	  name: 'Target (State)',
	  text: yValues_state_targ.map(String),
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

	var trace_mpo_perf = {
	  x: xValues,
	  y: yValues_mpo_perf,
	  type: 'bar',
	  name: 'Performance (MPO)',
	  text: yValues_mpo_perf.map(String),
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
	
	var data = [trace_state_perf, trace_state_targ, trace_mpo_perf];

	var layout = {
		xaxis: { type: 'category' },
		title: caption
	};

	Plotly.newPlot(div_id, data, layout);	
}

function roadway_injury_viz(xValues, yValues_targ, yValues_perf) {
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
		title: 'Number of Serious Injuries on Roadways'
	};

	Plotly.newPlot('roadway-injuries-viz', data, layout);	
} // oadway_injury_viz

function roadway_injury_rate_viz(xValues, yValues_targ, yValues_perf) {
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
		title: 'Roadway Serioius Injury Rate per 100 million vehicle-miles traveled'
	};

	Plotly.newPlot('roadway-injury-rate-viz', data, layout);	
} // roadway_injury_rate_viz

function roadway_nonmotorized_viz(xValues, yValues_targ, yValues_perf) {
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
		title: 'Number of non-motorized fatalities and non-motorized serious injuries'
	};

	Plotly.newPlot('roadway-nonmotorized-viz', data, layout);
} // roadway_non_motorized_viz
	
function roadway_safety_viz(rs_state_data, rs_mpo_data) {
	
	console.log('Entered roadway_safety_viz');
	
	var xValues = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
	var yValues_state_perf = [], yValues_state_targ = [], yValues_mpo_perf = [];
	
	// 5-year rolling average of fatalities
	var caption = 'Roadway Fatalities - 5-year Rolling Average';
	var div_id = 'roadway-fatalities-5-yr-viz';
	var road_fat_state = _.find(rs_state_data, function(o) { return o.perf_meas == 'Fatalities_5 year rolling average'; });     
	var road_fat_mpo   = _.find(rs_mpo_data, function(o) { return o.perf_meas == 'Fatalities_5 year rolling average'; });
	
	yValues_state_perf = [ road_fat_state.perf_2013, road_fat_state.perf_2014, road_fat_state.perf_2015, road_fat_state.perf_2016,road_fat_state.perf_2017, 
						   road_fat_state.perf_2018, road_fat_state.perf_2019, road_fat_state.perf_2020, road_fat_state.perf_2021, road_fat_state.perf_2022 ];
						   
	yValues_state_targ = [ 0, 0, 0, 0, 0, 0, 0, road_fat_state.perf_2020, road_fat_state.perf_2021, road_fat_state.perf_2022 ];
						   
	yValues_mpo_perf = [ road_fat_mpo.perf_2013, road_fat_mpo.perf_2014, road_fat_mpo.perf_2015, road_fat_mpo.perf_2016,road_fat_mpo.perf_2017, 
						 road_fat_mpo.perf_2018, road_fat_mpo.perf_2019, road_fat_mpo.perf_2020, road_fat_mpo.perf_2021, road_fat_mpo.perf_2022 ];	
				
	roadway_fatality_viz(xValues, yValues_state_perf, yValues_state_targ, yValues_mpo_perf, div_id, caption);
	
	
	
	// Fatality rate for 100 million Vehicle Miles Traveled
	var caption = 'Roadway Fatalities - 5-year Rolling Average';
	var div_id = 'roadway-fatality-rate-viz';
	var road_fat_rate_state = _.find(rs_state_data, function(o) { return o.perf_meas == 'Fatality rate per 100 million Vehicle Miles Traveled'; });
	var road_fat_rate_mpo   = _.find(rs_mpo_data, function(o) { return o.perf_meas == 'Fatality rate per 100 million Vehicle Miles Traveled'; });
											
											
	yValues_state_perf = [ road_fat_rate_state.perf_2013, road_fat_rate_state.perf_2014, road_fat_rate_state.perf_2015, road_fat_rate_state.perf_2016, road_fat_rate_state.perf_2017, 
						   road_fat_rate_state.perf_2018, road_fat_rate_state.perf_2019, road_fat_rate_state.perf_2020, road_fat_rate_state.perf_2021, road_fat_rate_state.perf_2022 ];
						   
	yValues_state_targ = [ 0, 0, 0, 0, 0, 0, 0, road_fat_rate_state.perf_2020, road_fat_rate_state.perf_2021, road_fat_rate_state.perf_2022 ];
						   
	yValues_mpo_perf = [ road_fat_rate_mpo.perf_2013, road_fat_rate_mpo.perf_2014, road_fat_rate_mpo.perf_2015, road_fat_rate_mpo.perf_2016,road_fat_rate_mpo.perf_2017, 
						 road_fat_rate_mpo.perf_2018, road_fat_rate_mpo.perf_2019, road_fat_rate_mpo.perf_2020, road_fat_rate_mpo.perf_2021, road_fat_rate_mpo.perf_2022 ];	
				
	roadway_fatality_rate_viz(xValues, yValues_state_perf, yValues_state_targ, yValues_mpo_perf, div_id, caption);
	
	console.log('Returning from roadway_safety_viz');
	return;	
	
	
	// 2 sets of Y values for roadway injuries
	var road_inj = _.find(rs_data, function(o) {  return o.perf_meas == 'Number of serious injuries'; });
	yValues_targ = [ road_inj.targ_2023, road_inj.targ_2022, road_inj.targ_2021,
	                 road_inj.targ_2020, road_inj.targ_2019 ];
	yValues_perf = [ 0, road_inj.perf_2022, road_inj.perf_2021,
	                road_inj.perf_2020, road_inj.perf_2019 ];
	roadway_injury_viz(xValues, yValues_targ, yValues_perf);
	
	// 2 sets of Y values for roadway injury rate
	var road_inj_rate = _.find(rs_data, function(o) {  return o.perf_meas == 'Serious injury rate per 100 million vehicle-miles traveled'; });
	yValues_targ = [ road_inj_rate.targ_2023, road_inj_rate.targ_2022, road_inj_rate.targ_2021,
	                 road_inj_rate.targ_2020, road_inj_rate.targ_2019 ];
	yValues_perf = [ 0, road_inj_rate.perf_2022, road_inj_rate.perf_2021,
	                 road_inj_rate.perf_2020, road_inj_rate.perf_2019 ];
	roadway_injury_rate_viz(xValues, yValues_targ, yValues_perf);
	
	// 2 sets of Y values for nonmotorized fatalities+injuries
	var non_mot = _.find(rs_data, function(o) {  return o.perf_meas == 'Number of non-motorized fatalities and non-motorized serious injuries'; });
	yValues_targ = [ non_mot.targ_2023, non_mot.targ_2022, non_mot.targ_2021,
	                 non_mot.targ_2020, non_mot.targ_2019 ];
	yValues_perf = [ 0, non_mot.perf_2022, non_mot.perf_2021,
	                 non_mot.perf_2020, non_mot.perf_2019 ];
	roadway_nonmotorized_viz(xValues, yValues_targ, yValues_perf);
} // roadway_safey_viz	
