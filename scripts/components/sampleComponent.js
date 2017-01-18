//controller for the MVC

(function(MODULE, $, win) {
    //local variables

    function SampleComponent($el, sm, utl) {
        this.init($el, sm, utl);
    }

    SampleComponent.prototype = $.extend(SampleComponent.prototype, (function() {
        //local variables
        var utils,
        	serviceManager;

        function getData($el, callback) {
        	serviceManager.executeRequest({
        		"url" : $el.data("url"),
        		"success": function(response){
        			var data = typeof response === 'string' ? JSON.parse(response) : response;
        			$el.data("context", data);
        			typeof callback ==='function' && callback();
        		},
        		"error": function(){
        			$el.html("Some error occurred while contacting the server. Please try later.");
        		}
        	});
        }

        function loadHTML($el) {
        	utils.processHandlebarsTemplate({
        		"templateID": "sampleComponentTemplate",
        		"containerEl": $el,
        		"context": $el.data("context")
        	});
        }

        function handleEvents($el) {

        }

        function init($el, sm, utl) {
            //set Local Variables
            if(!utils){
            	utils = utl;
            }
            if(!serviceManager){
            	serviceManager = sm;
            }

            //get data for the component
            getData($el, function(){
            	//load the html generated using the data
            	loadHTML($el);	
            	//add required event handlers
            	handleEvents($el);

            	console.log("sampleComponent loaded");
            });

            console.log("sampleComponent initialized");
        }

        return {
            "init": init
        }
    })());


    //expose as jQuery plugin
    $.fn.sampleComponent = function(sm, utl) {
        this.each(function() {
            var $el = $(this);
            //check if the component has already been initialized
            if (!$el.data("data-sampleComponent")) {
                //initialize component object and store it in data-sampleComponent attribute for future reference
                $el.data("data-sampleComponent", new SampleComponent($el, sm, utl));
            }

        });
        return this;
    };

})(times.mobile.pwa, jQuery, window)
