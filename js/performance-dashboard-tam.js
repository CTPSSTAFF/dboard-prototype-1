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


function tam_viz(tam_data) {
	
	
} // tam_viz
