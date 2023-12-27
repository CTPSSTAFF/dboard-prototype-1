// CSV parser for bridge and pavement CSV file
var b_and_p_RowConverter = function(d) {
	return {
		perf_meas:	 	d['Performance Measure'],
		baseline:		+d['Baseline'],
		two_yr_targ:	+d['Two-Year Target (CY 2023)'],
		four_yr_targ:	+d['Four-Year Target (CY 2025)']
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

function bridge_pavement_viz(bp_data) {
	var xValues = [ 'Baseline' , 'Two-year Target (CY 2023)', 'Five-year Target (CY 2025)' ];
	var yValues = [];
	
	// NHS bridges in GOOD condition
	var bridge_good = _.find(bp_data, function(o) { return o.perf_meas == 'Percent of NHS bridges by deck area classified as in good condition'; });
	yValues = [ bridge_good.baseline, bridge_good.two_yr_targ, bridge_good.four_yr_targ ];
	bridge_good_viz(xValues, yValues);
	
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
