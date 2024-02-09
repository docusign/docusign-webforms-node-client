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
    define(['ApiClient', 'model/Guid', 'model/WebFormContent', 'model/WebFormId', 'model/WebFormMetadata', 'model/WebFormProperties', 'model/WebFormState', 'model/WebFormVersionId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Guid'), require('./WebFormContent'), require('./WebFormId'), require('./WebFormMetadata'), require('./WebFormProperties'), require('./WebFormState'), require('./WebFormVersionId'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WebFormWithMetadata = factory(root.Docusign.ApiClient, root.Docusign.Guid, root.Docusign.WebFormContent, root.Docusign.WebFormId, root.Docusign.WebFormMetadata, root.Docusign.WebFormProperties, root.Docusign.WebFormState, root.Docusign.WebFormVersionId);
  }
}(this, function(ApiClient, Guid, WebFormContent, WebFormId, WebFormMetadata, WebFormProperties, WebFormState, WebFormVersionId) {
  'use strict';


  /**
   * The WebFormWithMetadata model module.
   * @module model/WebFormWithMetadata
   */

  /**
   * Constructs a new <code>WebFormWithMetadata</code>.
   * An object that fully describes an instance of a form
   * @alias module:model/WebFormWithMetadata
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WebFormWithMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebFormWithMetadata} obj Optional instance to populate.
   * @return {module:model/WebFormWithMetadata} The populated <code>WebFormWithMetadata</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = WebFormId.constructFromObject(data['id']);
      }
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = Guid.constructFromObject(data['accountId']);
      }
      if (data.hasOwnProperty('isPublished')) {
        obj['isPublished'] = ApiClient.convertToType(data['isPublished'], 'Boolean');
      }
      if (data.hasOwnProperty('isEnabled')) {
        obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('hasDraftChanges')) {
        obj['hasDraftChanges'] = ApiClient.convertToType(data['hasDraftChanges'], 'Boolean');
      }
      if (data.hasOwnProperty('versionId')) {
        obj['versionId'] = WebFormVersionId.constructFromObject(data['versionId']);
      }
      if (data.hasOwnProperty('formState')) {
        obj['formState'] = WebFormState.constructFromObject(data['formState']);
      }
      if (data.hasOwnProperty('formProperties')) {
        obj['formProperties'] = WebFormProperties.constructFromObject(data['formProperties']);
      }
      if (data.hasOwnProperty('formContent')) {
        obj['formContent'] = WebFormContent.constructFromObject(data['formContent']);
      }
      if (data.hasOwnProperty('formMetadata')) {
        obj['formMetadata'] = WebFormMetadata.constructFromObject(data['formMetadata']);
      }
    }
    return obj;
  }

  /**
   * Unique identifier for the web form
   * @member {module:model/WebFormId} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Account identifier
   * @member {module:model/Guid} accountId
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
   * Does the form have draft changes that need to be published?
   * @member {Boolean} hasDraftChanges
   */
  exports.prototype['hasDraftChanges'] = undefined;
  /**
   * Identifier for the current version of the form that is published
   * @member {module:model/WebFormVersionId} versionId
   */
  exports.prototype['versionId'] = undefined;
  /**
   * @member {module:model/WebFormState} formState
   */
  exports.prototype['formState'] = undefined;
  /**
   * Form properties
   * @member {module:model/WebFormProperties} formProperties
   */
  exports.prototype['formProperties'] = undefined;
  /**
   * Content of the form that is used during configuration and data collection
   * @member {module:model/WebFormContent} formContent
   */
  exports.prototype['formContent'] = undefined;
  /**
   * Form metadata
   * @member {module:model/WebFormMetadata} formMetadata
   */
  exports.prototype['formMetadata'] = undefined;



  return exports;
}));


