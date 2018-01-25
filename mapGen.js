function initMap() {
	console.log("init");
	mapboxgl.accessToken = 'pk.eyJ1Ijoibm9haGhvbG0iLCJhIjoiY2lrZWNmNDI2MDA0YnY4bHo3aXU1dGZkeSJ9.8Eavws7sLknJNwX_9YcEpw';

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/light-v9',
		center: [45, 0],
		zoom: 2
	});

	var peaks = {
		"type": "FeatureCollection",
		  "features": [
		    {
		      "type": "Feature",
		      "geometry": {
		        "type": "Point",
		        "coordinates": [
		          42.439167, 43.355
		        ]
		      },
		      "properties": {
		        "name": "Elbrus",
		        "country": "Russia",
		        "height": "5642",
		        "completed": "1 aug 2017",
		        "link": "http://49peaks.com/2017/08/07/elbrus/"
		      }
		    },
		    {
		      "type": "Feature",
		      "geometry": {
		        "type": "Point",
		        "coordinates": [
		          6.865, 45.833611		          
		        ]
		      },
		      "properties": {
		        "name": "Mont Blanc",
		        "country": "France & Italy",
		        "height": "4810",
		        "completed": "17 aug 2017",
		        "link": "http://49peaks.com/2017/08/18/mont-blanc-france-italy/"
		      }
		    }
		  ]
	}

	map.on('load', function(e) {
		map.addLayer({
			id: 'peaks',
			type: 'symbol',
			source: {
				type: 'geojson',
				data: peaks
			},
			layout: {
				'icon-image': 'restaurant-15',
      			'icon-allow-overlap': true,
			}
		});
	});
}