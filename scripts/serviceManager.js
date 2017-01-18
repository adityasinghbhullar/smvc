//service manager for handling ajax calls

(function(MODULE, $, win) {
    //local variables
    var defaults = {
    	"method": "GET",
    	"contentType": "application/json"
    }
    //serviceManager class
    function executeRequest(config) {
    	var options = $.extend({}, defaults, config);
    	$.ajax({
    		"url": options.url,
    		"method": options.method,
    		"contentType": options.contentType,
    		"success": options.success
    	});
    }

    //exports
    MODULE.ServiceManager = {
        "executeRequest": executeRequest
    };

})(times.mobile.pwa, jQuery, window)
