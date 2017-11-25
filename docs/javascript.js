var map;

function myFunction() {
    alert("I am an alert box!");
}
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: -33.865427, lng: 151.196123},
    mapTypeId: 'terrain'
  });

  // Create a <script> tag and set the USGS URL as the source.
  var script = document.createElement('script');

  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
  document.getElementsByTagName('head')[0].appendChild(script);

  map.data.setStyle(function(feature) {
    var magnitude = feature.getProperty('mag');
    return {
      icon: getCircle(magnitude)
    };
  });
}

function getCircle(magnitude) {
  return {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'red',
    fillOpacity: .2,
    scale: Math.pow(2, magnitude) / 2,
    strokeColor: 'white',
    strokeWeight: .5
  };
}

function eqfeed_callback(results) {
  map.data.addGeoJson(results);
}

//Pie chart

window.onload = function () {
var pieChart = new CanvasJS.Chart("pieChart", {
	exportEnabled: true,
	animationEnabled: true,
	title:{
		text: "State Operating Funds"
	},
	legend:{
		cursor: "pointer",
		itemclick: explodePie
	},
	data: [{
		type: "pie",
		showInLegend: true,
		toolTipContent: "{name}: <strong>{y}%</strong>",
		indexLabel: "{name} - {y}%",
		dataPoints: [
			{ y: 26, name: "School Aid", exploded: true },
			{ y: 20, name: "Medical Aid" },
			{ y: 5, name: "Debt/Capital" },
			{ y: 3, name: "Elected Officials" },
			{ y: 7, name: "University" },
			{ y: 17, name: "Executive" },
			{ y: 22, name: "Other Local Assistance"}
		]
	}]
});
pieChart.render();
    
    // bar chart
    
var barChart = new CanvasJS.Chart("barChart", {
	animationEnabled: true,
	
	title:{
		text:"Fortune 500 Companies by Country"
	},
	axisX:{
		interval: 1
	},
	axisY2:{
		interlacedColor: "rgba(1,77,101,.2)",
		gridColor: "rgba(1,77,101,.1)",
		title: "Number of Companies"
	},
	data: [{
		type: "bar",
		name: "companies",
		axisYType: "secondary",
		color: "#014D65",
		dataPoints: [
			{ y: 3, label: "Sweden" },
			{ y: 7, label: "Taiwan" },
			{ y: 5, label: "Russia" },
			{ y: 9, label: "Spain" },
			{ y: 7, label: "Brazil" },
			{ y: 7, label: "India" },
			{ y: 9, label: "Italy" },
			{ y: 8, label: "Australia" },
			{ y: 11, label: "Canada" },
			{ y: 15, label: "South Korea" },
			{ y: 12, label: "Netherlands" },
			{ y: 15, label: "Switzerland" },
			{ y: 25, label: "Britain" },
			{ y: 28, label: "Germany" },
			{ y: 29, label: "France" },
			{ y: 52, label: "Japan" },
			{ y: 103, label: "China" },
			{ y: 134, label: "US" }
		]
	}]
});
barChart.render();
    
}

function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();

}