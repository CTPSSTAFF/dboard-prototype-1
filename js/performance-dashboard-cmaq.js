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

function cmaq_viz(cmaq_data) {
	
} // cmaq_viz

