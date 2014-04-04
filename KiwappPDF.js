(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"../utils/extend":3,"./version":2}],2:[function(require,module,exports){
module.exports = '1.0.0';

},{}],3:[function(require,module,exports){
'use strict';
(function(){
    /**
     * A method which imitate jQuery extend method
     * @return {object} The concat final object
     */
    module.exports = function extend(){
        for(var i=1; i<arguments.length; i++)
            for(var key in arguments[i])
                if(arguments[i].hasOwnProperty(key))
                    arguments[0][key] = arguments[i][key];
        return arguments[0];
    };
})();
},{}]},{},[1]);