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
    root.Docusign.SecurityDomain = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The SecurityDomain model module.
   * @module model/SecurityDomain
   */

  /**
   * Constructs a new <code>SecurityDomain</code>.
   * The domain in which the user authenticated.
   * @alias module:model/SecurityDomain
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SecurityDomain</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityDomain} obj Optional instance to populate.
   * @return {module:model/SecurityDomain} The populated <code>SecurityDomain</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

    }
    return obj;
  }




  return exports;
}));


