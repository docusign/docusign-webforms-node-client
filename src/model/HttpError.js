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
    root.Docusign.HttpError = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The HttpError model module.
   * @module model/HttpError
   */

  /**
   * Constructs a new <code>HttpError</code>.
   * An error occurred while processing a request. Source - https://www.baeldung.com/rest-api-error-handling-best-practices
   * @alias module:model/HttpError
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>HttpError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HttpError} obj Optional instance to populate.
   * @return {module:model/HttpError} The populated <code>HttpError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errorCode')) {
        obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * A granular, human and computer readable code indicating more deeply what error occurred.
   * @member {String} errorCode
   */
  exports.prototype['errorCode'] = undefined;
  /**
   * A human-readable description of the error, meant for developers to store for their review.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));


