// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function () { $('#jstree_methods').jstree(); });

function update_components (method) {
	$("div#description-body").html(method.description)
	$("div#syntax-body").html(method.signature)
	$("div#examples-body").html(method.example)
	$("div#source-body").html(method.source)

}

$(document).ready(function() {
	$("div#jstree_methods").on('click', '.js-class-select', function(event) {
		// console.log("class")
	})
	$("div#jstree_methods").on('click', '.js-method-select', function(event) {
		event.preventDefault();
		var button = $(event.currentTarget)
		var id = button.data("method-id")
		$.get('/api/meths/'+id, function(data) {
			update_components(data)
		})
	});
})
