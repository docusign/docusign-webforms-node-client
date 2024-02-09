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
    root.Docusign.WebFormUserInfo = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The WebFormUserInfo model module.
   * @module model/WebFormUserInfo
   */

  /**
   * Constructs a new <code>WebFormUserInfo</code>.
   * Information about a DocuSign system user. The user exists within the account associated with the form.
   * @alias module:model/WebFormUserInfo
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WebFormUserInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebFormUserInfo} obj Optional instance to populate.
   * @return {module:model/WebFormUserInfo} The populated <code>WebFormUserInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * Name of the user that can be displayed in the user interface.
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;



  return exports;
}));


