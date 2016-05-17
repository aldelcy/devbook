function save_layout () {
	$("#method-row > .component-col").each( function() {
		var col = $(this)
		var idx = 0
		col.children().each( function() {
			var panel = $(this).find("div[id$=-panel]")
			var key = "m" + col.attr("class").match(/col-([ab])/)[1] + (++idx)
			var value = panel.attr("id") + ","
			value += panel.attr("class").match(/js-panel-(open|closed)/)[1]
			console.log(panel.attr("class").match(/js-panel-(open|closed)/))
			localStorage.setItem(key, value)
		});
	});
}

function load_layout () {
	var cols = {a: [], b: [] }
	Object.keys(cols).forEach(function(col) {
		var idx = 1
		var settings = true
		while( true ){
			settings = localStorage.getItem("m"+col+(idx++))
			if(!settings) break;
			settings = settings.split(",")

			var panel = $("#"+settings[0])
			panel.removeClass("js-panel-open js-panel-closed")
			panel.addClass("js-panel-" + settings[1])

			cols[col].push( panel.closest(".component").detach() )
		}
	})

	rebuild_layout(cols)
}

function rebuild_layout (cols) {
	Object.keys(cols).forEach(function(alpha) {
		var col = $("#method-row > .col-" + alpha)
		while(cols[alpha].length){
			col.append(cols[alpha].shift())
		}
	})
}





$(document).ready(function(){
	load_layout()

	window.addEventListener("beforeunload", function(e){
	localStorage.clear()
		save_layout()
	})
})