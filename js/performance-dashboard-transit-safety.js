// URLs for CSV files to be loaded
var roadwaySafetyURL 	= 'csv/roadway_safety.csv',
	transitSafetyURL 	= 'csv/transit_safety.csv',
	bridgeAndPavementURL = 'csv/bridge_and_pavement.csv',
	tamURL				= 'csv/tam.csv',
	ttrURL				= 'csv/ttr.csv',
	cmaqURL				= 'csv/cmaq.csv';


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


function transit_safety_viz(ts_data) {
	
} // transit_safety_viz

