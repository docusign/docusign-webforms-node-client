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
    define(['ApiClient', 'model/TemplateProperties'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TemplateProperties'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WebFormContent = factory(root.Docusign.ApiClient, root.Docusign.TemplateProperties);
  }
}(this, function(ApiClient, TemplateProperties) {
  'use strict';


  /**
   * The WebFormContent model module.
   * @module model/WebFormContent
   */

  /**
   * Constructs a new <code>WebFormContent</code>.
   * Container for the components map used during configuration and data collection
   * @alias module:model/WebFormContent
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WebFormContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebFormContent} obj Optional instance to populate.
   * @return {module:model/WebFormContent} The populated <code>WebFormContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('components')) {
        obj['components'] = ApiClient.convertToType(data['components'], {'String': {'String': Object}});
      }
      if (data.hasOwnProperty('isStandalone')) {
        obj['isStandalone'] = ApiClient.convertToType(data['isStandalone'], 'Boolean');
      }
      if (data.hasOwnProperty('brandId')) {
        obj['brandId'] = ApiClient.convertToType(data['brandId'], 'String');
      }
      if (data.hasOwnProperty('templates')) {
        obj['templates'] = ApiClient.convertToType(data['templates'], [TemplateProperties]);
      }
    }
    return obj;
  }

  /**
   * Key/value dictionary of components that represent the form
   * @member {Object.<String, Object.<String, Object>>} components
   */
  exports.prototype['components'] = undefined;
  /**
   * @member {Boolean} isStandalone
   */
  exports.prototype['isStandalone'] = undefined;
  /**
   * @member {String} brandId
   */
  exports.prototype['brandId'] = undefined;
  /**
   * Optional template information that will be used to seed the form.
   * @member {Array.<module:model/TemplateProperties>} templates
   */
  exports.prototype['templates'] = undefined;



  return exports;
}));


