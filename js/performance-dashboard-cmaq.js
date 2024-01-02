// CSV parser for CMAQ (congestion management and air quality) CSV file
var cmaq_RowConverter = function(d) {
	return {
		perf_meas:		d['Performance Measure'],
		geo_area:		d['Geographic Area'],
		baseline:		+d['Baseline'],
		targ_2019:		+d['Two-Year Target (2019)'],
		perf_2019:		+d['Two-Year Performance (2019)'],
		targ_2021:		+d['Four-Year Target (2021)'],
		perf_2021:		+d['Four-Year Performance (2021)'],
		targ_2023:		+d['Two-Year Target (2023)'],
		targ_2025:		+d['Four-Year Target (2025)'],
	}
};

function percent_non_sov_viz(xValues, yValues_targ, yValues_perf, yValues_baseline) {
	

}


function phed_viz(xValues, yValues_targ, yValues_perf, yValues_baseline) {
	

}


function emissions_reduction_viz(xValues, yValues_targ, yValues_perf, yValues_baseline) {

	
}

function cmaq_viz(cmaq_data) {
	var xValues = ['2025', '2023' , '2022', '2021', '2020', '2019'];
	var yValues_targ = [], yValues_perf = [], yValues_baseline = [];
	
	// Percent non-SOV travel
	var non_sov = _.find(cmaq_data, function(o) { return o.perf_meas == 'Percentage of non-single-occupant vehicle travel'; }); 
	yValues_perf = [ non_sov.targ_2025, non_sov.targ_2023, non_sov.targ_2021, non_sov.targ_2019 ];
	yValues_perf = [ 0, 0, 0, non_sov.perf_2021, non_sov.perf_2019 ];
	yValues_baseline = [];
	percent_non_sov_viz(xValues, yValues_targ, yValues_perf, yValues_baseline);
	
	
	// Hours of peak hour excessive delay
	var phed = _.find(cmaq_data, function(o) { return o.perf_meas == 'Annual hours of peak hour excessive delay per capita (for travel on NHS roadways)'; }); 
	yValues_targ =  [ phed.targ_2025, phed.targ_2023, phed.targ_2021, phed.targ_2019 ];
	yValues_perf = [ 0, 0, 0, phed.perf_2021, phed.perf_2019 ];
	yValues_baseline = [];
	phed_viz(xValues, yValues_targ, yValues_perf, yValues_baseline);

	
	// Total emissions reductions for applicable pollutants...
	var emissions = _.find(cmaq_data, function(o) { 
	                       return o.perf_meas == 'Total emissions reduction for applicable pollutants and precursors for CMAQ-funded projects in designated nonattainment and maintenance areas*'; }); 
	
	yValues_targ =  [emissions.targ_2025, emissions.targ_2023, emissions.targ_2021, emissions.targ_2019 ];
	yValues_perf = [ 0, 0, 0, emissions.perf_2021, emissions.perf_2019 ];
	yValues_baseline = [];
	emissions_reduction_viz(xValues, yValues_targ, yValues_perf, yValues_baseline);
	
} // cmaq_viz

