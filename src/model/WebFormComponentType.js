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
    root.Docusign.WebFormComponentType = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Enum class WebFormComponentType.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "CheckboxGroup"
     * @const
     */
    "checkboxGroup": "CheckboxGroup",
    /**
     * value: "Date"
     * @const
     */
    "_date": "Date",
    /**
     * value: "Email"
     * @const
     */
    "email": "Email",
    /**
     * value: "Number"
     * @const
     */
    "_number": "Number",
    /**
     * value: "RadioButtonGroup"
     * @const
     */
    "radioButtonGroup": "RadioButtonGroup",
    /**
     * value: "Select"
     * @const
     */
    "select": "Select",
    /**
     * value: "TextBox"
     * @const
     */
    "textBox": "TextBox"  };

  /**
   * Returns a <code>WebFormComponentType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/WebFormComponentType} The enum <code>WebFormComponentType</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  };

  return exports;
}));


