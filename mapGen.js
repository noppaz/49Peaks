function initMap() {
	console.log("init");
	mapboxgl.accessToken = 'pk.eyJ1Ijoibm9haGhvbG0iLCJhIjoiY2lrZWNmNDI2MDA0YnY4bHo3aXU1dGZkeSJ9.8Eavws7sLknJNwX_9YcEpw';

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/light-v9',
		center: [20, 55],
		zoom: 2
	});

	var peaks = dataInit();

	// map.on('load', function(e) {
	// 	map.addLayer({
	// 		id: 'peaks',
	// 		type: 'symbol',
	// 		source: {
	// 			type: 'geojson',
	// 			data: peaks
	// 		},
	// 		layout: {
	// 			'icon-image': 'mountain-15',
 //      			'icon-allow-overlap': true,
	// 		}
	// 	});
	// });
	map.on('load', function(e) {
		map.addSource('places', {
			type: 'geojson',
			data: peaks
		});
	});

	buildPeakList(peaks, map);

	// Add custom markers and event listeners
	map.on('style.load', function() {
		peaks.features.forEach(function(marker, i) {
		    // Create image for marker
		    var el = document.createElement('div');
		    el.id = "marker-" + i;
		    el.className = 'marker';
		    // Add marker to map
		    new mapboxgl.Marker(el, {offset: [0, -23]})
		        .setLngLat(marker.geometry.coordinates)
		        .addTo(map);

			// Event listener for map icon clicks
			el.addEventListener('click', function(e) {
				flyToPeak(marker, map);
				createPopUp(marker, map);

				// Highlight sidebar
				var activeItem = document.getElementsByClassName('active');

				e.stopPropagation();
				if (activeItem[0]) {
					activeItem[0].classList.remove('active');
				}

				var listing = document.getElementById('listing-' + i);
				listing.classList.add('active');
			});
		});
	});
}


// ##############################################################
// ------------------- Listings builder -------------------------
// ##############################################################

function buildPeakList(data, map) {
  // Iterate through the list of peaks
  for (i = 0; i < data.features.length; i++) {
    var currentFeature = data.features[i];
    var prop = currentFeature.properties;

    var listings = document.getElementById('listings');
    var listing = listings.appendChild(document.createElement('div'));
    listing.className = 'item';
    listing.id = 'listing-' + i;
    console.log(listing.id);

    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.dataPosition = i;
    link.innerHTML = prop.name;

    // Add details from properties
    var details = listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.country;
    var details2 = listing.appendChild(document.createElement('div'));
    details2.innerHTML = prop.height + " m";
    var details3 = listing.appendChild(document.createElement('div'));
    details3.href = "http://49peaks.com/2017/08/07/elbrus/";
    details3.innerHTML = prop.completed;
    var details4 = listing.appendChild(document.createElement('div'));
    details4.innerHTML = prop.link;

    // Event listener
	link.addEventListener('click', function(e) {
		console.log("list click");
		var clickedListing = data.features[this.dataPosition];

		flyToPeak(clickedListing, map);

		createPopUp(clickedListing, map);

		var activeItem = document.getElementsByClassName('active');
		if (activeItem[0]) {
			activeItem[0].classList.remove('active');
		}
		this.parentNode.classList.add('active');
	});
  }
}

// ##############################################################
// ------------------- Interaction funcs ------------------------
// ##############################################################


function flyToPeak(currentFeature, map) {
	var zoomlvl;
	if (map.getZoom() > 6) {
		zoomlvl = map.getZoom();
	} else {
		zoomlvl = 6
	}

	map.flyTo({
		center: currentFeature.geometry.coordinates,
		zoom: zoomlvl
	});
	console.log(zoomlvl);
}

function createPopUp(currentFeature, map) {
	var popUps = document.getElementsByClassName('mapboxgl-popup');

	if (popUps[0]) popUps[0].remove(); //Remove existing popup

	var popup = new mapboxgl.Popup({})
	.setLngLat(currentFeature.geometry.coordinates)
	.setHTML('<h3>' + currentFeature.properties.name + '</h3>' +
	  '<h4>' + currentFeature.properties.country + ' | ' + currentFeature.properties.height + ' m</h4>')
	.addTo(map);
}


// ##############################################################
// -------------------------- Data ------------------------------
// ##############################################################

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