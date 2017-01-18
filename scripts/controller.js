//controller for the MVC

(function(MODULE, $, win) {
    //local variables

    function init(model, view) {
        //things to be done before initializing the view

        //initialize the view
        view.init(model);
    }


    //exports
    MODULE.Controller = {
        "init": init
    };

})(times.mobile.pwa, jQuery, window)
