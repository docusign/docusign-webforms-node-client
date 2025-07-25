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
    root.Docusign.PhoneNumber = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The PhoneNumber model module.
   * @module model/PhoneNumber
   */

  /**
   * Constructs a new <code>PhoneNumber</code>.
   * Phone number of the user.
   * @alias module:model/PhoneNumber
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PhoneNumber</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PhoneNumber} obj Optional instance to populate.
   * @return {module:model/PhoneNumber} The populated <code>PhoneNumber</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('countryCode')) {
        obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
      }
      if (data.hasOwnProperty('nationalNumber')) {
        obj['nationalNumber'] = ApiClient.convertToType(data['nationalNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * country code of the registered phone number.
   * @member {String} countryCode
   */
  exports.prototype['countryCode'] = undefined;
  /**
   * Phone number of the user (without country code).
   * @member {String} nationalNumber
   */
  exports.prototype['nationalNumber'] = undefined;



  return exports;
}));


