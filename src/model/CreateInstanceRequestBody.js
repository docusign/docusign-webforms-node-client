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
    root.Docusign.CreateInstanceRequestBody = factory(root.Docusign.ApiClient, root.Docusign.WebFormValues);
  }
}(this, function(ApiClient, WebFormValues) {
  'use strict';


  /**
   * The CreateInstanceRequestBody model module.
   * @module model/CreateInstanceRequestBody
   */

  /**
   * Constructs a new <code>CreateInstanceRequestBody</code>.
   * Request body containing properties that will be used to create instance.
   * @alias module:model/CreateInstanceRequestBody
   * @class
   * @param clientUserId {String} 
   */
  var exports = function(clientUserId) {
    var _this = this;

    _this['clientUserId'] = clientUserId;
  };

  /**
   * Constructs a <code>CreateInstanceRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateInstanceRequestBody} obj Optional instance to populate.
   * @return {module:model/CreateInstanceRequestBody} The populated <code>CreateInstanceRequestBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('formValues')) {
        obj['formValues'] = WebFormValues.constructFromObject(data['formValues']);
      }
      if (data.hasOwnProperty('clientUserId')) {
        obj['clientUserId'] = ApiClient.convertToType(data['clientUserId'], 'String');
      }
      if (data.hasOwnProperty('authenticationInstant')) {
        obj['authenticationInstant'] = ApiClient.convertToType(data['authenticationInstant'], 'String');
      }
      if (data.hasOwnProperty('authenticationMethod')) {
        obj['authenticationMethod'] = ApiClient.convertToType(data['authenticationMethod'], 'String');
      }
      if (data.hasOwnProperty('assertionId')) {
        obj['assertionId'] = ApiClient.convertToType(data['assertionId'], 'String');
      }
      if (data.hasOwnProperty('securityDomain')) {
        obj['securityDomain'] = ApiClient.convertToType(data['securityDomain'], 'String');
      }
      if (data.hasOwnProperty('returnUrl')) {
        obj['returnUrl'] = ApiClient.convertToType(data['returnUrl'], 'String');
      }
      if (data.hasOwnProperty('expirationOffset')) {
        obj['expirationOffset'] = ApiClient.convertToType(data['expirationOffset'], 'Number');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/WebFormValues} formValues
   */
  exports.prototype['formValues'] = undefined;
  /**
   * @member {String} clientUserId
   */
  exports.prototype['clientUserId'] = undefined;
  /**
   * @member {String} authenticationInstant
   */
  exports.prototype['authenticationInstant'] = undefined;
  /**
   * @member {String} authenticationMethod
   */
  exports.prototype['authenticationMethod'] = undefined;
  /**
   * @member {String} assertionId
   */
  exports.prototype['assertionId'] = undefined;
  /**
   * @member {String} securityDomain
   */
  exports.prototype['securityDomain'] = undefined;
  /**
   * @member {String} returnUrl
   */
  exports.prototype['returnUrl'] = undefined;
  /**
   * @member {Number} expirationOffset
   */
  exports.prototype['expirationOffset'] = undefined;
  /**
   * List of tags provided by the user with each request. This field is optional.
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;



  return exports;
}));


