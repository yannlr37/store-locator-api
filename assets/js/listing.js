var Listing = function(ctx) {
	
	var _ctx = ctx;
	var $el = $('#' + ctx);
	var _items = [];
	var _template = '';

	function init() {
		_render();
		_bindEvents();
	}

	function _bindEvents() {
		pubsub.subscribe('update-poi', function(template) {
			addItem(template)
		});
	}

	function _unbindEvents() {
		pubsub.unsubscribe('update-poi', function(template) {
			addItem(template)
		});
	}

	function _render() {
		_template = '<div class="listing">';
		for (var i = 0; i < _items.length; i++) {
			_template += _items[i];
			if (i < _items.length -2) {
				_template += '<hr>';
			}
		}
		_template += '</div>';
		$el.html(_template);
	}

	function addItem(html) {
		_items.push(html);
		_render();
	}

	function removeItem(index) {
		_items.splice(index, 1);
		_render();
	}

	return {
		init: init,
		addItem: addItem,
		removeItem: removeItem
	}

};