/** @format */
'use strict';
$(function() {
	$('#weight').on('submit', function(e) {
		e.preventDefault();
		var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};
		that.find('[name]').each(function(index, value) {
			var that = $(this),
				name = that.attr('name'),
				value = that.val();
			data[name] = value;
		});
		$.ajax({
			url: url,
			type: type,
			data: data,
			success: function(response) {
				$('#display')
					.html(response)
					.delay(6000)
					.fadeOut(1000);
			},
		});
		return false;
	});
});

$(function() {
	$('#weights').on('submit', function(e) {
		e.preventDefault();
		var that = $(this),
			url = that.attr('action'),
			type = that.attr('method'),
			data = {};
		that.find('[name]').each(function(index, value) {
			var that = $(this),
				name = that.attr('name'),
				value = that.val();
			data[name] = value;
		});
		$.ajax({
			url: url,
			type: type,
			data: data,
			success: function(response) {
				$('#display')
					.html(response)
					.delay(6000)
					.fadeOut(1000);
			},
		});
		return false;
	});
});
