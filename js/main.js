 		var draw = SVG().addTo('#background').size($(window).width(), $(window).height())

 		var line1 = draw.line($(window).width(), 0, 0, $(window).height()).stroke({ width: 2, color:"#0F0" })

		var line2 = draw.line(0, 0, $(window).width(), $(window).height()).stroke({ width: 2, color:"#0F0" })