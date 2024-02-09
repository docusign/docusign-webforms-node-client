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
    define(['ApiClient', 'model/WebFormComponent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WebFormComponent'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WebFormComponentsMap = factory(root.Docusign.ApiClient, root.Docusign.WebFormComponent);
  }
}(this, function(ApiClient, WebFormComponent) {
  'use strict';


  /**
   * The WebFormComponentsMap model module.
   * @module model/WebFormComponentsMap
   */

  /**
   * Constructs a new <code>WebFormComponentsMap</code>.
   * The components map for the web form
   * @alias module:model/WebFormComponentsMap
   * @class
   * @extends Object
   */
  var exports = function() {
    var _this = this;



    return _this;
  };

  /**
   * Constructs a <code>WebFormComponentsMap</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebFormComponentsMap} obj Optional instance to populate.
   * @return {module:model/WebFormComponentsMap} The populated <code>WebFormComponentsMap</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'WebFormComponent');

    }
    return obj;
  }




  return exports;
}));


