/**
* Progress Indicator Control
*/

/* start-amd-strip-block */
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {
/* end-amd-strip-block */

  $.fn.progress = function(options) {

    // Settings and Options
    var pluginName = 'progress',
        defaults = {
          animationLength: 1000
        },
        settings = $.extend({}, defaults, options);

    // Plugin Constructor
    function Plugin(element) {
      this.element = $(element);
      this.settings = settings;
      this.init();
    }

    // Actual Plugin Code
    Plugin.prototype = {

      init: function() {
        var self = this;
        self.update();
        this.element.on('updated.progress', function () {
          self.update();
        });
      },

      updateAria: function (value) {
        this.element.attr({'role': 'progressbar', 'aria-valuenow': value, 'aria-maxvalue':'100'});
        var container = this.element.parent();
        if (container.data('tooltip')) {
          container.data('tooltip').content = value + '%';
        } else {
          container.attr('title', value + '%').tooltip();
        }
      },

      update: function (value) {
        var perc = this.element.attr('data-value'),
          animationLength = this.settings.animationLength;

        if (value) {
          perc = value;
        }

        this.element.stop().animate({
            width: perc + '%'
        }, animationLength);

        this.updateAria(perc);
      },

      //Teardown
      destroy: function() {
        $.removeData(this.element[0], pluginName);
        this.element.off('updated.progress');
      }
    };

    // Initialize the plugin (Once)
    return this.each(function() {
      var instance = $.data(this, pluginName);
      if (instance) {
        instance.settings = $.extend({}, defaults, options);
      } else {
        instance = $.data(this, pluginName, new Plugin(this, settings));
      }
    });
  };

/* start-amd-strip-block */
}));
/* end-amd-strip-block */
