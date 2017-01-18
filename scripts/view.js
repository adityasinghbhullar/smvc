//view for the MVC

(function(MODULE, $, win) {
    //local variables
    var $components,
    	sm = MODULE.ServiceManager,
    	utl = MODULE.Utils;

    function findComponents() {
        $components = $('[data-component-name]');
    }

    function initializeComonents() {
        $components.each(function() {
            var $el = $(this);
            $el[$el.attr('data-component-name')](sm, utl);
        });
    }

    function init(model) {
        //find components in the document
        findComponents();
        //initialize found components
        initializeComonents();
    }



    //exports
    MODULE.View = {
        "init": init
    };

})(times.mobile.pwa, jQuery, window)
