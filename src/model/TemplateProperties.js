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
    root.Docusign.TemplateProperties = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The TemplateProperties model module.
   * @module model/TemplateProperties
   */

  /**
   * Constructs a new <code>TemplateProperties</code>.
   * Information about a DocuSign template that will be used to seed a web form.
   * @alias module:model/TemplateProperties
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TemplateProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateProperties} obj Optional instance to populate.
   * @return {module:model/TemplateProperties} The populated <code>TemplateProperties</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('originalTemplateId')) {
        obj['originalTemplateId'] = ApiClient.convertToType(data['originalTemplateId'], 'String');
      }
      if (data.hasOwnProperty('clonedTemplateId')) {
        obj['clonedTemplateId'] = ApiClient.convertToType(data['clonedTemplateId'], 'String');
      }
      if (data.hasOwnProperty('importedDateTime')) {
        obj['importedDateTime'] = ApiClient.convertToType(data['importedDateTime'], 'String');
      }
      if (data.hasOwnProperty('recipientIds')) {
        obj['recipientIds'] = ApiClient.convertToType(data['recipientIds'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Template identifier for original Template that is used by the DocuSign Template API.
   * @member {String} originalTemplateId
   */
  exports.prototype['originalTemplateId'] = undefined;
  /**
   * Template identifier for cloned Template that is used by the DocuSign Template API.
   * @member {String} clonedTemplateId
   */
  exports.prototype['clonedTemplateId'] = undefined;
  /**
   * Track the time of assignment of Template information to the Form.
   * @member {String} importedDateTime
   */
  exports.prototype['importedDateTime'] = undefined;
  /**
   * Track mapped recipients on Template.
   * @member {Array.<String>} recipientIds
   */
  exports.prototype['recipientIds'] = undefined;



  return exports;
}));


