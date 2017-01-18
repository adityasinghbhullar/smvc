(function(MODULE, $, win) {
    //local variables

    //kick start the app
    function bootstrap() {
        MODULE.Controller.init(MODULE.Model, MODULE.View);
    }

    //initialize app on document ready
    $(function() {
        bootstrap();
    });

})(times.mobile.pwa, jQuery, window)
