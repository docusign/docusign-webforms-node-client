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
    root.Docusign.WebFormProperties = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The WebFormProperties model module.
   * @module model/WebFormProperties
   */

  /**
   * Constructs a new <code>WebFormProperties</code>.
   * General information about the web form that is consistent across versions
   * @alias module:model/WebFormProperties
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WebFormProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebFormProperties} obj Optional instance to populate.
   * @return {module:model/WebFormProperties} The populated <code>WebFormProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('isPrivateAccess')) {
        obj['isPrivateAccess'] = ApiClient.convertToType(data['isPrivateAccess'], 'Boolean');
      }
      if (data.hasOwnProperty('allowSending')) {
        obj['allowSending'] = ApiClient.convertToType(data['allowSending'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Boolean} isPrivateAccess
   */
  exports.prototype['isPrivateAccess'] = undefined;
  /**
   * When this property is true, form can be used for remote signing.
   * @member {Boolean} allowSending
   */
  exports.prototype['allowSending'] = undefined;



  return exports;
}));


