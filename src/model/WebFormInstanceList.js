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
    define(['ApiClient', 'model/WebFormInstance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WebFormInstance'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WebFormInstanceList = factory(root.Docusign.ApiClient, root.Docusign.WebFormInstance);
  }
}(this, function(ApiClient, WebFormInstance) {
  'use strict';


  /**
   * The WebFormInstanceList model module.
   * @module model/WebFormInstanceList
   */

  /**
   * Constructs a new <code>WebFormInstanceList</code>.
   * A list of web form instance items.
   * @alias module:model/WebFormInstanceList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WebFormInstanceList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebFormInstanceList} obj Optional instance to populate.
   * @return {module:model/WebFormInstanceList} The populated <code>WebFormInstanceList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [WebFormInstance]);
      }
    }
    return obj;
  }

  /**
   * Array of web form instance items.
   * @member {Array.<module:model/WebFormInstance>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));


