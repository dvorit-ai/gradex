
	$.fn.marqueeify = function (options) {
		var settings = $.extend({
			horizontal: true,
			vertical: true,
			speed: 100, // In pixels per second
			container: $(this).parent(),
			bumpEdge: function () {}
		}, options);
		
		return this.each(function () {
			var containerWidth, containerHeight, elWidth, elHeight, move, getSizes,
				$el = $(this);

			getSizes = function () {
				containerWidth = settings.container.outerWidth();
				containerHeight = settings.container.outerHeight();
				elWidth = $el.outerWidth();
				elHeight = $el.outerHeight();
			};

			move = {
				right: function () {
					$el.animate({left: (containerWidth - elWidth)}, {duration: ((containerWidth/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.left();
					}});
				},
				left: function () {
					$el.animate({left: 0}, {duration: ((containerWidth/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.right();
					}});
				},
				down: function () {
					$el.animate({top: (containerHeight - elHeight)}, {duration: ((containerHeight/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.up();
					}});
				},
				up: function () {
					$el.animate({top: 0}, {duration: ((containerHeight/settings.speed) * 1000), queue: false, easing: "linear", complete: function () {
						settings.bumpEdge();
						move.down();
					}});
				}
			};

			getSizes();

			if (settings.horizontal) {
				var r = Math.random(); //generates a random number between 0 and 1
				if (r > 0.5) {		   // if more than 0.5 (50% chance)
					move.left();	   // then move left
				} else {			   // otherwise (50% chance)
					move.right();	   // then move right
				}
			}

			if (settings.vertical) {
				var r = Math.random(); //generates a random number between 0 and 1
				if (r > 0.5) {		   // if more than 0.5 (50% chance)
					move.up();	   	   // then move up
				} else {			   // otherwise (50% chance)
					move.down();	   // then move down
				}
			}


      // Make that shit responsive!
      $(window).resize( function() {
        getSizes();
      });
		});
	};