var Poi = function(latitude, longitude, data) {
	
	var _lat = latitude;
	var _lng = longitude;
	var data = data;
	var template = '';

	function init() {
		_render();
	}

	function _render() {
		template = '<div class="poi-popup">';
		template += '<div class="poi-popup-content">';
		template += '<h3>' + data.title + '</h3>';
		template += '<p>' + data.description + '</p>';
		template += '<div>';
		template += '<ul>';
		template += '<li><a href="' + data.website + '" target="_blank">' + data.website + '</a></li>';
		template += '<li>' + data.phone + '</li>';
		template += '<li>' + data.email + '</li>';
		template += '</ul>';
		template += '</div>';
		template += '</div>';
		template += '</div>';

		pubsub.publish('update-poi', template);
	}

	function getLatitude() {
		return _lat;
	}

	function getLongitude() {
		return _lng;
	}

	function getTemplate() {
		return template;
	}

	function setLatitude(latitude) {
		_lat = latitude;
	}

	function setLongitude(longitude) {
		_lng = longitude;
	}

	function setData(data) {
		data = data;
		_render();
	}

	function toString() {
		console.log('latitude = ' + _lat, 'longitude = ' + _lng, 'data = ' + data);
		console.log(template);
	}

	return {
		init: init,
		toString: toString,
		setLatitude: setLatitude,
		setLongitude: setLongitude,
		setData: setData,
		getLatitude: getLatitude,
		getLongitude: getLongitude,
		getTemplate: getTemplate
	}

};