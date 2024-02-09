/**
 * Web Forms API version 1.1
 * The Web Forms API facilitates generating semantic HTML forms around everyday contracts. 
 *
 * OpenAPI spec version: 1.1.0
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WebFormValues = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The WebFormValues model module.
   * @module model/WebFormValues
   */

  /**
   * Constructs a new <code>WebFormValues</code>.
   * Key-value pairs (where key is the component name and value is the form value) used to create a form instance. For key of type TextBox, Email, Date, Select and RadioButtonGroup the value is of string type. For key of type Number, the value is of number type. For key of type of CheckboxGroup, the value is of type array of string.
   * @alias module:model/WebFormValues
   * @class
   * @extends Object
   */
  var exports = function() {
    var _this = this;



    return _this;
  };

  /**
   * Constructs a <code>WebFormValues</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebFormValues} obj Optional instance to populate.
   * @return {module:model/WebFormValues} The populated <code>WebFormValues</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'Object');

    }
    return obj;
  }




  return exports;
}));


