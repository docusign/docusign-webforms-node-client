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
    define(['ApiClient', 'model/WebFormValues'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WebFormValues'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.UpdateInstanceRequestBody = factory(root.Docusign.ApiClient, root.Docusign.WebFormValues);
  }
}(this, function(ApiClient, WebFormValues) {
  'use strict';


  /**
   * The UpdateInstanceRequestBody model module.
   * @module model/UpdateInstanceRequestBody
   */

  /**
   * Constructs a new <code>UpdateInstanceRequestBody</code>.
   * Request body containing properties that needs to be updated.
   * @alias module:model/UpdateInstanceRequestBody
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UpdateInstanceRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateInstanceRequestBody} obj Optional instance to populate.
   * @return {module:model/UpdateInstanceRequestBody} The populated <code>UpdateInstanceRequestBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('formValues')) {
        obj['formValues'] = WebFormValues.constructFromObject(data['formValues']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/WebFormValues} formValues
   */
  exports.prototype['formValues'] = undefined;



  return exports;
}));


