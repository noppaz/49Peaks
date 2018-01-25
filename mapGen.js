function initMap() {
	console.log("init");
	mapboxgl.accessToken = 'pk.eyJ1Ijoibm9haGhvbG0iLCJhIjoiY2lrZWNmNDI2MDA0YnY4bHo3aXU1dGZkeSJ9.8Eavws7sLknJNwX_9YcEpw';

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/light-v9',
		center: [20, 45],
		zoom: 2
	});

	var peaks = dataInit();

	map.on('load', function(e) {
		map.addLayer({
			id: 'peaks',
			type: 'symbol',
			source: {
				type: 'geojson',
				data: peaks
			},
			layout: {
				'icon-image': 'mountain-15',
      			'icon-allow-overlap': true,
			}
		});
	});

	buildLocationList(peaks);
}


function buildLocationList(data) {
  // Iterate through the list of stores
  for (i = 0; i < data.features.length; i++) {
    var currentFeature = data.features[i];
    var prop = currentFeature.properties;
    // Select the listing container in the HTML and append a div
    // with the class 'item' for each store
    var listings = document.getElementById('listings');
    var listing = listings.appendChild(document.createElement('div'));
    listing.className = 'item';
    listing.id = 'listing-' + i;

    // Create a new link with the class 'title' for each store
    // and fill it with the store address
    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.dataPosition = i;
    link.innerHTML = prop.name;

    // Create a new div with the class 'details' for each store
    // and fill it with the city and phone number
    var details = listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.country;
    var details2 = listing.appendChild(document.createElement('div'));
    details2.innerHTML = prop.height + " m";
    var details3 = listing.appendChild(document.createElement('div'));
    details3.href = "http://49peaks.com/2017/08/07/elbrus/";
    details3.innerHTML = prop.completed;
    var details4 = listing.appendChild(document.createElement('div'));
    details4.innerHTML = prop.link;
    // if (prop.phone) {
    //   details.innerHTML += ' &middot; ' + prop.phoneFormatted;
    // }
  }
}


//####################################################################

function dataInit() {
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

	return peaks;
}