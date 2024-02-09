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
    root.Docusign.WebFormComponent = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * The WebFormComponent model module.
   * @module model/WebFormComponent
   */

  /**
   * Constructs a new <code>WebFormComponent</code>.
   * Each component type contains additional properties
   * @alias module:model/WebFormComponent
   * @class
   * @extends Object
   * @param componentKey {String} 
   * @param componentType {String} The type of component this object represents
   */
  var exports = function(componentKey, componentType) {
    var _this = this;


    _this['componentKey'] = componentKey;    _this['componentType'] = componentType;
    return _this;
  };

  /**
   * Constructs a <code>WebFormComponent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebFormComponent} obj Optional instance to populate.
   * @return {module:model/WebFormComponent} The populated <code>WebFormComponent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'Object');

      if (data.hasOwnProperty('componentKey')) {
        obj['componentKey'] = ApiClient.convertToType(data['componentKey'], 'String');
      }
      if (data.hasOwnProperty('componentType')) {
        obj['componentType'] = ApiClient.convertToType(data['componentType'], 'String');
      }
      if (data.hasOwnProperty('componentName')) {
        obj['componentName'] = ApiClient.convertToType(data['componentName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} componentKey
   */
  exports.prototype['componentKey'] = undefined;
  /**
   * The type of component this object represents
   * @member {String} componentType
   */
  exports.prototype['componentType'] = undefined;
  /**
   * Name value that is used for mapping components to external sources
   * @member {String} componentName
   */
  exports.prototype['componentName'] = undefined;



  return exports;
}));


