function initMap() {
	mapboxgl.accessToken = 'pk.eyJ1Ijoibm9haGhvbG0iLCJhIjoiY2lrZWNmNDI2MDA0YnY4bHo3aXU1dGZkeSJ9.8Eavws7sLknJNwX_9YcEpw';
	var no_completed = 0;

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/light-v9',
		center: [20, 55],
		zoom: 3
	});

	var peaks = loadData();
	peaks = sortData(peaks);

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

		    // Decide marker color based on completion
		    if (marker.properties.completed != "") {
		    	el.className = 'marker_completed';
		    	no_completed++;
		    } else {
		    	el.className = 'marker';
		    }
		    // Add marker to map

		    new mapboxgl.Marker(el, {offset: [0, 0]})
		        .setLngLat(marker.geometry.coordinates)
		        .addTo(map);

			// Event listener for map clicks
			el.addEventListener('click', function(e) {
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
    if (prop.completed != "") {
    	var details3 = listing.appendChild(document.createElement('a'));
    	details3.innerHTML = "Summited " + prop.completed;

    	if (prop.link != "") {
    		details3.className = 'completedlink';
    		details3.href = prop.link;
    	}
    }

    // Event listener
	link.addEventListener('click', function(e) {
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

function sortData(data) {
	data.features.sort(function(a, b) {
		sortProperty = "country";
		if (a.properties[sortProperty] > b.properties[sortProperty]) {
			return 1;
		}
		if (a.properties[sortProperty] < b.properties[sortProperty]) {
			return -1;
		}
		return 0; // a must be equal to b
	});

	return data;
}

// ##############################################################
// ------------------- Interaction funcs ------------------------
// ##############################################################


function flyToPeak(currentFeature, map) {
	map.flyTo({
		center: currentFeature.geometry.coordinates,
		zoom: 5
	});
}

function createPopUp(currentFeature, map) {
	var popUps = document.getElementsByClassName('mapboxgl-popup');

	if (popUps[0]) popUps[0].remove(); //Remove existing popup

	var completedText;
	if (currentFeature.properties.link != "") {
		completedText = '<h5>Summited <a href="' + currentFeature.properties.link + '">' + currentFeature.properties.completed + '</a></h5>';
	} else if (currentFeature.properties.completed != "") {
		completedText = '<h5>Summited ' + currentFeature.properties.completed + '</h5>';
	} else {
		completedText = "";
	}

	var popup = new mapboxgl.Popup({})
	.setLngLat(currentFeature.geometry.coordinates)
	.setHTML('<h3>' + currentFeature.properties.name + '</h3>' +
	  '<h4>' + currentFeature.properties.country + ' | ' + currentFeature.properties.height + ' m</h4>' +
	  completedText)
	.addTo(map);
}