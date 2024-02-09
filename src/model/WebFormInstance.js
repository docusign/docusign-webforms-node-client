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
    define(['ApiClient', 'model/InstanceStatus', 'model/WebFormInstanceEnvelopes', 'model/WebFormInstanceMetadata', 'model/WebFormValues'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InstanceStatus'), require('./WebFormInstanceEnvelopes'), require('./WebFormInstanceMetadata'), require('./WebFormValues'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WebFormInstance = factory(root.Docusign.ApiClient, root.Docusign.InstanceStatus, root.Docusign.WebFormInstanceEnvelopes, root.Docusign.WebFormInstanceMetadata, root.Docusign.WebFormValues);
  }
}(this, function(ApiClient, InstanceStatus, WebFormInstanceEnvelopes, WebFormInstanceMetadata, WebFormValues) {
  'use strict';


  /**
   * The WebFormInstance model module.
   * @module model/WebFormInstance
   */

  /**
   * Constructs a new <code>WebFormInstance</code>.
   * An object that contains the Web Form Instance required to render it  and its metadata such as created by, created time
   * @alias module:model/WebFormInstance
   * @class
   * @param id {String} 
   */
  var exports = function(id) {
    var _this = this;

    _this['id'] = id;
  };

  /**
   * Constructs a <code>WebFormInstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebFormInstance} obj Optional instance to populate.
   * @return {module:model/WebFormInstance} The populated <code>WebFormInstance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('formUrl')) {
        obj['formUrl'] = ApiClient.convertToType(data['formUrl'], 'String');
      }
      if (data.hasOwnProperty('instanceToken')) {
        obj['instanceToken'] = ApiClient.convertToType(data['instanceToken'], 'String');
      }
      if (data.hasOwnProperty('tokenExpirationDateTime')) {
        obj['tokenExpirationDateTime'] = ApiClient.convertToType(data['tokenExpirationDateTime'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('formId')) {
        obj['formId'] = ApiClient.convertToType(data['formId'], 'String');
      }
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('clientUserId')) {
        obj['clientUserId'] = ApiClient.convertToType(data['clientUserId'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = InstanceStatus.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('envelopes')) {
        obj['envelopes'] = ApiClient.convertToType(data['envelopes'], [WebFormInstanceEnvelopes]);
      }
      if (data.hasOwnProperty('instanceMetadata')) {
        obj['instanceMetadata'] = WebFormInstanceMetadata.constructFromObject(data['instanceMetadata']);
      }
      if (data.hasOwnProperty('formValues')) {
        obj['formValues'] = WebFormValues.constructFromObject(data['formValues']);
      }
    }
    return obj;
  }

  /**
   * @member {String} formUrl
   */
  exports.prototype['formUrl'] = undefined;
  /**
   * @member {String} instanceToken
   */
  exports.prototype['instanceToken'] = undefined;
  /**
   * @member {String} tokenExpirationDateTime
   */
  exports.prototype['tokenExpirationDateTime'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Web form from which the instance is created
   * @member {String} formId
   */
  exports.prototype['formId'] = undefined;
  /**
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * @member {String} clientUserId
   */
  exports.prototype['clientUserId'] = undefined;
  /**
   * List of tags provided by the user with each request. This field is optional.
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {module:model/InstanceStatus} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The associated envelope that is created when the instance is submitted
   * @member {Array.<module:model/WebFormInstanceEnvelopes>} envelopes
   */
  exports.prototype['envelopes'] = undefined;
  /**
   * @member {module:model/WebFormInstanceMetadata} instanceMetadata
   */
  exports.prototype['instanceMetadata'] = undefined;
  /**
   * @member {module:model/WebFormValues} formValues
   */
  exports.prototype['formValues'] = undefined;



  return exports;
}));


