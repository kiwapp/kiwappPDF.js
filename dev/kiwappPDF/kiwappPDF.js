(function(){
    'use strict';

    /**
    *  browserify modules dependencies
    **/
    var extend       = require('../utils/extend'),
        Kiwapp       = window.Kiwapp;

    /**
     * Wrapper for Kiwapp native API calls
     */
    var launch = function launch(name,data) {
        Kiwapp.driver().trigger('callApp', {
            call: name,
            data: data
        });
    };

    /**
     * KWReader class
     */
    function KWReader() {
        this.version = require('./version');
    }

    /**
     * Open the document reader with a custom configuration.
     * @param  {object} config The reader configuration
     */
    KWReader.prototype.open = function KWReaderOpen(config){
        config = extend({}, {
            origin_x : 0,
            origin_y : 0,
            width : 1024,
            height : 768,
            navigation_bar_is_hidden : false,
            modal_launch_with_animation : true,
            private_document: false
        }, config);
        launch('open_document_reader', config);
    };

    /**
     * Close the current opened document.
     */
    KWReader.prototype.close = function KWReaderClose(){
        launch('close_document_reader', {});
    };
    /**
     * add KWReader instance to window
     * @type {KWReader}
     */
    window.KWReader  = KWReader;
    module.exports = KWReader;
})();
