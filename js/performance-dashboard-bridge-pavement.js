// CSV parser for bridge and pavement 'state' CSV file
var b_and_p_state_RowConverter = function(d) {
	return {
		perf_meas:	 	d['Performance Measure'],
		baseline:		+d['Baseline'],
		targ_2023:		+d['Two-Year Target (CY 2023)'],
		targ_2025:		+d['Four-Year Target (CY 2025)']
	}
};

var b_and_p_mpo_RowConverter = function(d) {
	return {
		perf_meas:	 	d['Performance Measure'],
		cond_2021:		+d['2021 Conditions']
	}
};

function bridge_good_viz(xValues, yValues) {
	var data = [
	  {
		x: xValues,
		y: yValues,
		type: 'bar',
		name: 'Target',
	    text: yValues.map(String),
	    textposition: 'auto',
	    hoverinfo: 'none',
	    opacity: 0.75,
	  }
	];

	var layout = {
		xaxis: { type: 'category' },
		title: 'Percent of NHS bridges by deck area classified as in good condition'
	};

	Plotly.newPlot('bridges-good-viz', data, layout);	
}

function bridge_poor_viz(xValues, yValues) {
	var data = [
	  {
		x: xValues,
		y: yValues,
		type: 'bar',
		name: 'Target',
	    text: yValues.map(String),
	    textposition: 'auto',
		marker: {
			color: 'orange'
		},
	    hoverinfo: 'none',
	    opacity: 0.75,
	  }
	];

	var layout = {
		xaxis: { type: 'category' },
		title: 'Percent of NHS bridges by deck area classified as in poor condition'
	};

	Plotly.newPlot('bridges-poor-viz', data, layout);
}

function interstate_pavement_good_viz(xValues, yValues) {
	var data = [
	  {
		x: xValues,
		y: yValues,
		type: 'bar',
		name: 'Target',
	    text: yValues.map(String),
	    textposition: 'auto',
	    hoverinfo: 'none',
	    opacity: 0.75,
	  }
	];

	var layout = {
		xaxis: { type: 'category' },
		title: 'Percent of Pavement on the Interstate System in Good Condition'
	};

	Plotly.newPlot('interstate-pavement-good-viz', data, layout);
}

function interstate_pavement_poor_viz(xValues, yValues) {
	var data = [
	  {
		x: xValues,
		y: yValues,
		type: 'bar',
		name: 'Target',
	    text: yValues.map(String),
	    textposition: 'auto',
		marker: {
			color: 'orange'
		},
	    hoverinfo: 'none',
	    opacity: 0.75,
	  }
	];

	var layout = {
		xaxis: { type: 'category' },
		title: 'Percent of Pavement on the Interstate System in Poor Condition'
	};

	Plotly.newPlot('interstate-pavement-poor-viz', data, layout);	
}

function noninterstate_pavement_good_viz(xValues, yValues) {
	var data = [
	  {
		x: xValues,
		y: yValues,
		type: 'bar',
		name: 'Target',
	    text: yValues.map(String),
	    textposition: 'auto',
	    hoverinfo: 'none',
	    opacity: 0.75,
	  }
	];

	var layout = {
		xaxis: { type: 'category' },
		title: 'Percent of pavements on the non-Interstate NHS in Good Condition'
	};

	Plotly.newPlot('non-interstate-pavement-good-viz', data, layout);	
}

function noninterstate_pavement_poor_viz(xValues, yValues) {
	var data = [
	  {
		x: xValues,
		y: yValues,
		type: 'bar',
		name: 'Target',
	    text: yValues.map(String),
	    textposition: 'auto',
		marker: {
			color: 'orange'
		},
	    hoverinfo: 'none',
	    opacity: 0.75,
	  }
	];

	var layout = {
		xaxis: { type: 'category' },
		title: 'Percent of pavements on the non-Interstate NHS in Poor Condition'
	};

	Plotly.newPlot('non-interstate-pavement-poor-viz', data, layout);	
}


function generate_bp_viz(xValues, yValues_state, yValues_mpo, layout, div_id) {
	var trace_state = {
		x: xValues,
		y: yValues_state,
		name: 'Statewide',
		text: yValues_state.map(String),
		mode: 'lines+markers',
		connectgaps: true
	}
	
	if (yValues_mpo != null) {
		var trace_mpo = {
			x: xValues,
			y: yValues_mpo,
			name: 'MPO (2021 Conditions)',
			text: yValues_mpo.map(String),
			mode: 'markers'	
		};
	}
	
	if (yValues_mpo != null) {
		data = [trace_state, trace_mpo]; 
	} else {
		data = [trace_state];
	}
	
	Plotly.newPlot(div_id, data, layout);
} //generate_bp_viz

function bridge_pavement_viz(bp_state_data, bp_mpo_data) {
	console.log('Entered bridge_pavement_viz');
	

	// Percent of NHS bridges in good condition
	var xValues = [ '2020 Baseline', '2021', '2022',  '2-year Target (2023)', '2024', '5-year Target (2025)' ];
	var yValues_state = [], yValues_mpo = [];
	var div_id = '';
	var caption = '';
	var layout = {};
	
	// NHS bridges in GOOD condition
	div_id = 'bridges-good-viz';
	caption = 'Percent of NHS Bridges in Good Condition';
	var bridge_good_state = _.find(bp_state_data, function(o) { return o.perf_meas == 'Percent of NHS bridges by deck area classified as in good condition'; });
	var bridge_good_mpo   = _.find(bp_mpo_data, function(o) { return o.perf_meas == 'Percent of NHS bridges by deck area classified as in good condition'; });
	
	yValues_state = [ bridge_good_state.baseline, null, null, bridge_good_state.targ_2023, null, bridge_good_state.targ_2025 ];
	yValues_mpo   = [ null, bridge_good_mpo.cond_2021, null, null, null, null ];
	layout = {	
		xaxis: { type: 'category' },
		yaxis: { range: [0, 20] },
		title: caption
	};
	generate_bp_viz(xValues, yValues_state, yValues_mpo, layout, div_id);
	
	
	// NHS bridges in POOR condition
	div_id = 'bridges-poor-viz';
	caption = 'Percent of NHS Bridges in Poor Condition';
	var bridge_poor_state = _.find(bp_state_data, function(o) { return o.perf_meas == 'Percent of NHS bridges by deck area classified as in poor condition'; });
	var bridge_poor_mpo   = _.find(bp_mpo_data, function(o) { return o.perf_meas == 'Percent of NHS bridges by deck area classified as in poor condition'; });
	
	yValues_state = [ bridge_poor_state.baseline, null, null, bridge_poor_state.targ_2023, null, bridge_poor_state.targ_2025 ];
	yValues_mpo   = [ null, bridge_poor_mpo.cond_2021, null, null, null, null ];
	layout.caption = caption;
	generate_bp_viz(xValues, yValues_state, yValues_mpo, layout, div_id);
	

	// Interstate pavement in GOOD condition
	div_id = 'interstate-pavement-good-viz';
	caption = 'Percent of Pavements on the Interstate System in Good Condition';
	var interstate_good_state = _.find(bp_state_data, function(o) { return o.perf_meas == 'Percent of pavements on the Interstate System in good condition'; });    
	// NOTE: There is **NO** interstate pavement condition data for the MPO only
	yValues_state = [ interstate_good_state.baseline, null, null, interstate_good_state.targ_2023, null, interstate_good_state.targ_2025 ];		
	layout = {	
		xaxis: { type: 'category' },
		yaxis: { range: [0, 100] },
		title: caption
	};
	generate_bp_viz(xValues, yValues_state, null, layout, div_id);
	
	
	// Interstate pavement in POOR condition
	div_id = 'interstate-pavement-poor-viz';
	caption = 'Percent of Pavements on the Interstate System in Poor Condition';
	var interstate_poor_state = _.find(bp_state_data, function(o) { return o.perf_meas == 'Percent of pavements on the Interstate System in poor condition'; });  
	// NOTE: There is **NO** interstate pavement condition data for the MPO only
	yValues_state = [ interstate_poor_state.baseline, null, null, interstate_poor_state.targ_2023, null, interstate_poor_state.targ_2025 ];	
	layout.caption = caption;
	layout.yaxis = { range: [0, 10] };
	generate_bp_viz(xValues, yValues_state, null, layout, div_id);
	

	// Non-interstate NHS pavement in GOOD condition
	div_id = 'non-interstate-pavement-good-viz';
	caption = 'Percent of pavements on the non-Interstate NHS in good condition';
	var noninterstate_good_state = _.find(bp_state_data, function(o) { return o.perf_meas == 'Percent of pavements on the non-Interstate NHS in good condition'; });  
	var noninterstate_good_mpo   = _.find(bp_mpo_data, function(o) { return o.perf_meas == 'Percent of pavements on the non-Interstate NHS in good condition'; });
	
	yValues_state = [ noninterstate_good_state.baseline, null, null, noninterstate_good_state.targ_2023, null, noninterstate_good_state.targ_2025 ];
	yValues_mpo   = [ null, noninterstate_good_mpo.cond_2021, null, null, null, null ];
	layout = {	
		xaxis: { type: 'category' },
		title: caption
	};
	generate_bp_viz(xValues, yValues_state, yValues_mpo, layout, div_id);
		
	
	
	
	return; // for now	
	
	
	
	// Non-interstate NHS pavement in POOR condition
	div_id = 'non-interstate-pavement-poor-viz';
	caption = 'Percent of pavements on the non-Interstate NHS in poor condition';
	var noninterstate_poor = _.find(bp_data, function(o) { return o.perf_meas == 'Percent of pavements on the non-Interstate NHS in poor condition'; });  
	yValues = [ noninterstate_poor.baseline, noninterstate_poor.two_yr_targ, noninterstate_poor.four_yr_targ ];		 
	noninterstate_pavement_poor_viz(xValues, yValues);	
} // bridge_pavement_viz
