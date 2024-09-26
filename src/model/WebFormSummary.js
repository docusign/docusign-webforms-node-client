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
    define(['ApiClient', 'model/WebFormMetadata', 'model/WebFormProperties', 'model/WebFormState'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WebFormMetadata'), require('./WebFormProperties'), require('./WebFormState'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WebFormSummary = factory(root.Docusign.ApiClient, root.Docusign.WebFormMetadata, root.Docusign.WebFormProperties, root.Docusign.WebFormState);
  }
}(this, function(ApiClient, WebFormMetadata, WebFormProperties, WebFormState) {
  'use strict';


  /**
   * The WebFormSummary model module.
   * @module model/WebFormSummary
   */

  /**
   * Constructs a new <code>WebFormSummary</code>.
   * An object that summarizes an instance of a form that can be used to display a listing
   * @alias module:model/WebFormSummary
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WebFormSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebFormSummary} obj Optional instance to populate.
   * @return {module:model/WebFormSummary} The populated <code>WebFormSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('isPublished')) {
        obj['isPublished'] = ApiClient.convertToType(data['isPublished'], 'Boolean');
      }
      if (data.hasOwnProperty('isEnabled')) {
        obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('isUploaded')) {
        obj['isUploaded'] = ApiClient.convertToType(data['isUploaded'], 'Boolean');
      }
      if (data.hasOwnProperty('hasDraftChanges')) {
        obj['hasDraftChanges'] = ApiClient.convertToType(data['hasDraftChanges'], 'Boolean');
      }
      if (data.hasOwnProperty('formState')) {
        obj['formState'] = WebFormState.constructFromObject(data['formState']);
      }
      if (data.hasOwnProperty('formProperties')) {
        obj['formProperties'] = WebFormProperties.constructFromObject(data['formProperties']);
      }
      if (data.hasOwnProperty('formMetadata')) {
        obj['formMetadata'] = WebFormMetadata.constructFromObject(data['formMetadata']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * Has the form been published
   * @member {Boolean} isPublished
   */
  exports.prototype['isPublished'] = undefined;
  /**
   * Is the form currently enabled and available for data collection
   * @member {Boolean} isEnabled
   */
  exports.prototype['isEnabled'] = undefined;
  /**
   * Has the form created through upload
   * @member {Boolean} isUploaded
   */
  exports.prototype['isUploaded'] = undefined;
  /**
   * Does the form have draft changes that need to be published?
   * @member {Boolean} hasDraftChanges
   */
  exports.prototype['hasDraftChanges'] = undefined;
  /**
   * @member {module:model/WebFormState} formState
   */
  exports.prototype['formState'] = undefined;
  /**
   * @member {module:model/WebFormProperties} formProperties
   */
  exports.prototype['formProperties'] = undefined;
  /**
   * @member {module:model/WebFormMetadata} formMetadata
   */
  exports.prototype['formMetadata'] = undefined;



  return exports;
}));


