//utility functions

(function(MODULE, $, win) {
    //local variables

    var sampleFunction = function() {

        },
        processHandlebarsTemplate = (function() {
            var compiledTemplates = {};

            return function(config) {
                var template,
                    html;

                if (!config.templateID) {
                    throw 'template ID is required';
                }
                if (!config.context) {
                    throw 'context is required';
                }

                if (!compiledTemplates[config.templateID]) {
                    //compile the template using configs
                    template = Handlebars.compile($('#' + config.templateID).html());
                    //add template to compiled templates
                    compiledTemplates[config.templateID] = template;
                }

                html = template(config.context);

                if (config.containerID) {
                    $('#' + containerID).html(html);
                } else if (config.containerEl) {
                    if (config.containerEl instanceof $) {
                        config.containerEl.html(html);
                    } else {
                        $(config.containerEl).html(html);
                    }
                } else {
                    return html;
                }
            }
        })();
    //remember to update the semicolon position 
    //to prevent functions from being declared in the global scope


    //exports
    MODULE.Utils = {
        "processHandlebarsTemplate": processHandlebarsTemplate
    };

})(times.mobile.pwa, jQuery, window)
