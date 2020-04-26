var Map = function(ctx, center_x, center_y, zoom = 10) {

	var _ctx = ctx
	var $el = $('#' + ctx);
	var _map = null;
	var _layer = null;
	var _poiLayer = null;
	var _center_x = center_x;
	var _center_y = center_y;
	var _zoom = zoom;
	var _tileset = 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}'
	var _mapOpts =  {
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		subdomains: 'abcd',
		minZoom: 0,
		maxZoom: 20,
		ext: 'png'
	};
	var _pois = [];

	function _render() {
		_poiLayer.clearLayers();
		$.each(_pois, function(index, marker) {
			_poiLayer.addLayer(marker);
		});
	}

	function init() {
		_map = L.map(_ctx).setView([_center_x, _center_y], _zoom);
		_layer = L.tileLayer(_tileset, _mapOpts).addTo(_map);
		_poiLayer = L.layerGroup(_pois).addTo(_map);
		_render();
		_bindEvents();
	}

	function _bindEvents() {
	}

	function _unbindEvents() {
	}

	function addPoi(poi) {
		var marker = L.marker([poi.getLatitude(), poi.getLongitude()]);
		marker.bindPopup(poi.getTemplate());
		_pois.push(marker);
	}

	function setTileset(tileset) {
		_tileset = tileset;
		_layer.setUrl(_tileset);
	}

	function refresh() {
		_render();
	}

	return {
		init: init,
		addPoi: addPoi,
		refresh: refresh,
		setTileset: setTileset
	}
};