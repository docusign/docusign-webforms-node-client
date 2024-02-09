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
    root.Docusign.TokenExpirationDateTime = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The TokenExpirationDateTime model module.
   * @module model/TokenExpirationDateTime
   */

  /**
   * Constructs a new <code>TokenExpirationDateTime</code>.
   * The datetime after which the token is expired and form instance is inaccessible.
   * @alias module:model/TokenExpirationDateTime
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TokenExpirationDateTime</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TokenExpirationDateTime} obj Optional instance to populate.
   * @return {module:model/TokenExpirationDateTime} The populated <code>TokenExpirationDateTime</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


