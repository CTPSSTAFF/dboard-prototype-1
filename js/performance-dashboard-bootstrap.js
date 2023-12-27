// performance-dashboard-bootstrap.js - main JS file for this application
// The following JS files MUST be loaded before this one:
//	1. performance-dashboard-roadway-safety.js
// 	2. performance-dashbard-transit-safety.js
//	3. performance-dashboard-tam.js
//	4. performance-dashboard-bridge-pavement.js
//	5. performance-dashboard-ttr.js
//	6. performance-dashboard-cmaq.js


/ URLs for CSV files to be loaded
var roadwaySafetyURL 	= 'csv/roadway_safety.csv',
	transitSafetyURL 	= 'csv/transit_safety.csv',
	bridgeAndPavementURL = 'csv/bridge_and_pavement.csv',
	tamURL				= 'csv/tam.csv',
	ttrURL				= 'csv/ttr.csv',
	cmaqURL				= 'csv/cmaq.csv';


function initialize() {
	Promise.all([
		d3.csv(roadwaySafetyURL, rs_RowConverter),
		d3.csv(transitSafetyURL, ts_RowConverter),
		d3.csv(tamURL, tam_RowConverter),
		d3.csv(bridgeAndPavementURL, b_and_p_RowConverter),
		d3.csv(ttrURL, ttr_RowConverter),
		d3.csv(cmaqURL, cmaq_RowConverter)
		
	]).then(function(files) {
		rs_data = files[0];
		ts_data = files[1];
		tam_data = files[2];
		bp_data = files[3];
		ttr_data = files[4];
		cmaq_data = files[5];
		roadway_safety_viz(rs_data);
		transit_safety_viz(ts_data);
		tam_viz(tam_data);
		bridge_pavement_viz(bp_data);
		ttr_viz(ttr_data);
		cmaq_viz(cmaq_data);
		var _DEBUG_HOOK = 0;
	}).catch(function(err) {
		var _DEBUG_HOOK = 0;
		alert('Error loading CSV file(s). Exiting.');
	});
}