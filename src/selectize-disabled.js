/**
 * Selectize plugin for allowing disabling of options
 * @param  {Object} options - modify attributes of selectize-disable
 *   fieldName: sets the name of the field to use to determine if an option should be disabled
 *     (default is 'disabled')
 *
 *   inverse: if true, a option[fieldName] == false will disable the option (by default option[fieldName] == true disables the option)
 *     (default is false)
 */
Selectize.define('option-disable', function (options) {
  var fieldName = 'disabled';

  if (options && typeof options.fieldName !== 'undefined') {
    fieldName = options.fieldName
  }

  // override addItem to not add items that are disabled
  var originalAddItem = this.addItem;
  this.addItem = function (value) {
    if (this.options.hasOwnProperty(value) && (this.options[value][fieldName])) {
      return;
    }
    originalAddItem.apply(this, arguments);
  }
});