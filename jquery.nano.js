/* Nano Templates (Tomasz Mazur, Jacek Becela) */

(function($){
  $.nano = function(template, data) {
    return template.replace(/\{([\w\.]*)\}/g, function (str, key) {
      var keys = key.split("."), value = data[keys.shift()];
      $.each(keys, function () {
        value = (typeof value[this] == 'function' ? value[this](data) : value[this]);
      };
      return (value === null || value === undefined) ? "" : (typeof value == 'function' ? value.apply(data) : value);
    });
  };
})(jQuery);
