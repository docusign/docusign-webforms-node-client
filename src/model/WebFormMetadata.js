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
    define(['ApiClient', 'model/WebFormComponentType', 'model/WebFormSource', 'model/WebFormType', 'model/WebFormUserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WebFormComponentType'), require('./WebFormSource'), require('./WebFormType'), require('./WebFormUserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WebFormMetadata = factory(root.Docusign.ApiClient, root.Docusign.WebFormComponentType, root.Docusign.WebFormSource, root.Docusign.WebFormType, root.Docusign.WebFormUserInfo);
  }
}(this, function(ApiClient, WebFormComponentType, WebFormSource, WebFormType, WebFormUserInfo) {
  'use strict';


  /**
   * The WebFormMetadata model module.
   * @module model/WebFormMetadata
   */

  /**
   * Constructs a new <code>WebFormMetadata</code>.
   * Form metadata
   * @alias module:model/WebFormMetadata
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WebFormMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebFormMetadata} obj Optional instance to populate.
   * @return {module:model/WebFormMetadata} The populated <code>WebFormMetadata</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('source')) {
        obj['source'] = WebFormSource.constructFromObject(data['source']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = WebFormType.constructFromObject(data['type']);
      }
      if (data.hasOwnProperty('sourceFormId')) {
        obj['sourceFormId'] = ApiClient.convertToType(data['sourceFormId'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = WebFormUserInfo.constructFromObject(data['owner']);
      }
      if (data.hasOwnProperty('sender')) {
        obj['sender'] = WebFormUserInfo.constructFromObject(data['sender']);
      }
      if (data.hasOwnProperty('lastModifiedBy')) {
        obj['lastModifiedBy'] = WebFormUserInfo.constructFromObject(data['lastModifiedBy']);
      }
      if (data.hasOwnProperty('formContentModifiedBy')) {
        obj['formContentModifiedBy'] = WebFormUserInfo.constructFromObject(data['formContentModifiedBy']);
      }
      if (data.hasOwnProperty('formPropertiesModifiedBy')) {
        obj['formPropertiesModifiedBy'] = WebFormUserInfo.constructFromObject(data['formPropertiesModifiedBy']);
      }
      if (data.hasOwnProperty('lastPublishedBy')) {
        obj['lastPublishedBy'] = WebFormUserInfo.constructFromObject(data['lastPublishedBy']);
      }
      if (data.hasOwnProperty('lastEnabledBy')) {
        obj['lastEnabledBy'] = WebFormUserInfo.constructFromObject(data['lastEnabledBy']);
      }
      if (data.hasOwnProperty('lastDisabledBy')) {
        obj['lastDisabledBy'] = WebFormUserInfo.constructFromObject(data['lastDisabledBy']);
      }
      if (data.hasOwnProperty('archivedDateTime')) {
        obj['archivedDateTime'] = ApiClient.convertToType(data['archivedDateTime'], 'String');
      }
      if (data.hasOwnProperty('createdDateTime')) {
        obj['createdDateTime'] = ApiClient.convertToType(data['createdDateTime'], 'String');
      }
      if (data.hasOwnProperty('lastModifiedDateTime')) {
        obj['lastModifiedDateTime'] = ApiClient.convertToType(data['lastModifiedDateTime'], 'String');
      }
      if (data.hasOwnProperty('formContentModifiedDateTime')) {
        obj['formContentModifiedDateTime'] = ApiClient.convertToType(data['formContentModifiedDateTime'], 'String');
      }
      if (data.hasOwnProperty('formPropertiesModifiedDateTime')) {
        obj['formPropertiesModifiedDateTime'] = ApiClient.convertToType(data['formPropertiesModifiedDateTime'], 'String');
      }
      if (data.hasOwnProperty('lastPublishedDateTime')) {
        obj['lastPublishedDateTime'] = ApiClient.convertToType(data['lastPublishedDateTime'], 'String');
      }
      if (data.hasOwnProperty('lastEnabledDateTime')) {
        obj['lastEnabledDateTime'] = ApiClient.convertToType(data['lastEnabledDateTime'], 'String');
      }
      if (data.hasOwnProperty('lastDisabledDateTime')) {
        obj['lastDisabledDateTime'] = ApiClient.convertToType(data['lastDisabledDateTime'], 'String');
      }
      if (data.hasOwnProperty('lastSenderConsentDateTime')) {
        obj['lastSenderConsentDateTime'] = ApiClient.convertToType(data['lastSenderConsentDateTime'], 'String');
      }
      if (data.hasOwnProperty('publishedSlug')) {
        obj['publishedSlug'] = ApiClient.convertToType(data['publishedSlug'], 'String');
      }
      if (data.hasOwnProperty('publishedComponentNames')) {
        obj['publishedComponentNames'] = ApiClient.convertToType(data['publishedComponentNames'], {'String': WebFormComponentType});
      }
    }
    return obj;
  }

  /**
   * The source from which the webform is created. Accepted values are [templates, blank, form]
   * @member {module:model/WebFormSource} source
   */
  exports.prototype['source'] = undefined;
  /**
   * Represents webform type. Possible values are [standalone, hasEsignTemplate]
   * @member {module:model/WebFormType} type
   */
  exports.prototype['type'] = undefined;
  /**
   * The source form id from which the webform is created.
   * @member {String} sourceFormId
   */
  exports.prototype['sourceFormId'] = undefined;
  /**
   * The user that created the form or has been transferred ownership
   * @member {module:model/WebFormUserInfo} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * The user that has added their consent to the form for sending actions
   * @member {module:model/WebFormUserInfo} sender
   */
  exports.prototype['sender'] = undefined;
  /**
   * Track the user that last modified anything related to the form
   * @member {module:model/WebFormUserInfo} lastModifiedBy
   */
  exports.prototype['lastModifiedBy'] = undefined;
  /**
   * Track the user that last modified the form content
   * @member {module:model/WebFormUserInfo} formContentModifiedBy
   */
  exports.prototype['formContentModifiedBy'] = undefined;
  /**
   * Track the user that last modified the form properties
   * @member {module:model/WebFormUserInfo} formPropertiesModifiedBy
   */
  exports.prototype['formPropertiesModifiedBy'] = undefined;
  /**
   * Track the user that last published a draft version to active
   * @member {module:model/WebFormUserInfo} lastPublishedBy
   */
  exports.prototype['lastPublishedBy'] = undefined;
  /**
   * Track the user that last unpublished an active version
   * @member {module:model/WebFormUserInfo} lastEnabledBy
   */
  exports.prototype['lastEnabledBy'] = undefined;
  /**
   * Track the user that last unpublished an active version
   * @member {module:model/WebFormUserInfo} lastDisabledBy
   */
  exports.prototype['lastDisabledBy'] = undefined;
  /**
   * The last time the web form was archived
   * @member {String} archivedDateTime
   */
  exports.prototype['archivedDateTime'] = undefined;
  /**
   * Track the time the web form was created
   * @member {String} createdDateTime
   */
  exports.prototype['createdDateTime'] = undefined;
  /**
   * The last time anything was modified on the form
   * @member {String} lastModifiedDateTime
   */
  exports.prototype['lastModifiedDateTime'] = undefined;
  /**
   * Track the last time web form content changed.
   * @member {String} formContentModifiedDateTime
   */
  exports.prototype['formContentModifiedDateTime'] = undefined;
  /**
   * Track the last time the form properties changed.
   * @member {String} formPropertiesModifiedDateTime
   */
  exports.prototype['formPropertiesModifiedDateTime'] = undefined;
  /**
   * Track the last time a draft version was published to active
   * @member {String} lastPublishedDateTime
   */
  exports.prototype['lastPublishedDateTime'] = undefined;
  /**
   * Track the last time the form was enabled
   * @member {String} lastEnabledDateTime
   */
  exports.prototype['lastEnabledDateTime'] = undefined;
  /**
   * Track the last time the form was disabled
   * @member {String} lastDisabledDateTime
   */
  exports.prototype['lastDisabledDateTime'] = undefined;
  /**
   * Track the last time a user added their consent for the form.
   * @member {String} lastSenderConsentDateTime
   */
  exports.prototype['lastSenderConsentDateTime'] = undefined;
  /**
   * The public friendly slug that is used to access the form from the player
   * @member {String} publishedSlug
   */
  exports.prototype['publishedSlug'] = undefined;
  /**
   * A dictionary containing the mapping of component names to their respective component types for all the published components.
   * @member {Object.<String, module:model/WebFormComponentType>} publishedComponentNames
   */
  exports.prototype['publishedComponentNames'] = undefined;



  return exports;
}));


