global.jQuery = require('jquery');
bootstrap = require('bootstrap');
Mustache = require('mustache');

jQuery(document).ready(function($) {
    var jqxhr = $.getJSON('data.json', function() {
      
    }).done(function(data) {
      var template = $('#template').html();
      var showTemplate = Mustache.render(template, data);
      $('#gallery').html(showTemplate);
    });
});