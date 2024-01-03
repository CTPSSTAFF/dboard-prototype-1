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


function generate_bp_viz(xValues, yValues_state, yValues_mpo, div_id, caption) {
	var trace_state = {
		x: xValues,
		y: yValues_state,
		name: 'Statewide',
		text: yValues_state.map(String),
		mode: 'lines+markers',
		connectgaps: true
	}
	
	var trace_mpo = {
		x: xValues,
		y: yValues_mpo,
		name: 'MPO (2021 Conditions)',
		text: yValues_mpo.map(String),
		mode: 'markers'	
	};
	
	var layout = {	
		xaxis: { type: 'category' },
		yaxis: { range: [0, 20] },
		title: caption
	};
	
	data = [trace_state, trace_mpo];
	
	Plotly.newPlot(div_id, data, layout);
} //generate_bp_viz

function bridge_pavement_viz(bp_state_data, bp_mpo_data) {
	console.log('Entered bridge_pavement_viz');
	

	// Percent of NHS bridges in good condition
	var xValues = [ '2020 Baseline', '2021', '2022',  '2-year Target (2023)', '2024', '5-year Target (2025)' ];
	var yValues_state = [], yValues_mpo = [];
	
	// NHS bridges in GOOD condition
	var div_id = 'bridges-good-viz';
	var caption = 'Percent of NHS Bridges in Good Condition';
	var bridge_good_state = _.find(bp_state_data, function(o) { return o.perf_meas == 'Percent of NHS bridges by deck area classified as in good condition'; });
	var bridge_good_mpo   = _.find(bp_mpo_data, function(o) { return o.perf_meas == 'Percent of NHS bridges by deck area classified as in good condition'; });
	
	yValues_state = [ bridge_good_state.baseline, null, null, bridge_good_state.targ_2023, null, bridge_good_state.targ_2025 ];
	yValues_mpo   = [ null, bridge_good_mpo.cond_2021, null, null, null, null ];
	
	generate_bp_viz(xValues, yValues_state, yValues_mpo, div_id, caption);
	
	return;	// for now	
	
	
	
	
	// NHS bridges in POOR condition
	var bridge_poor = _.find(bp_data, function(o) { return o.perf_meas == 'Percent of NHS bridges by deck area classified as in poor condition'; });
	
	
	
	
	yValues = [ bridge_poor.baseline, bridge_poor.two_yr_targ, bridge_poor.four_yr_targ ];
	bridge_poor_viz(xValues, yValues);
	
	
	
	
	// Interstate pavement in GOOD condition
	var interstate_good = _.find(bp_data, function(o) { return o.perf_meas == 'Percent of pavements on the Interstate System in good condition'; });    
	yValues = [ interstate_good.baseline, interstate_good.two_yr_targ, interstate_good.four_yr_targ ];		 
	interstate_pavement_good_viz(xValues, yValues);
	
	// Interstate pavement in POOR condition
	var interstate_poor = _.find(bp_data, function(o) { return o.perf_meas == 'Percent of pavements on the Interstate System in poor condition'; });  
	yValues = [ interstate_poor.baseline, interstate_poor.two_yr_targ, interstate_poor.four_yr_targ ];		 
	interstate_pavement_poor_viz(xValues, yValues);
	
	// Non-interstate NHS pavement in GOOD condition
	var noninterstate_good = _.find(bp_data, function(o) { return o.perf_meas == 'Percent of pavements on the non-Interstate NHS in good condition'; });  
	yValues = [ noninterstate_good.baseline, noninterstate_good.two_yr_targ, noninterstate_good.four_yr_targ ];
	noninterstate_pavement_good_viz(xValues, yValues);	
	
	// Non-interstate NHS pavement in POOR condition
	var noninterstate_poor = _.find(bp_data, function(o) { return o.perf_meas == 'Percent of pavements on the non-Interstate NHS in poor condition'; });  
	yValues = [ noninterstate_poor.baseline, noninterstate_poor.two_yr_targ, noninterstate_poor.four_yr_targ ];		 
	noninterstate_pavement_poor_viz(xValues, yValues);	
} // bridge_pavement_viz
