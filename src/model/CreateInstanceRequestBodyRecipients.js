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
    define(['ApiClient', 'model/Email', 'model/Name', 'model/PhoneNumber', 'model/RoleName'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Email'), require('./Name'), require('./PhoneNumber'), require('./RoleName'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.CreateInstanceRequestBodyRecipients = factory(root.Docusign.ApiClient, root.Docusign.Email, root.Docusign.Name, root.Docusign.PhoneNumber, root.Docusign.RoleName);
  }
}(this, function(ApiClient, Email, Name, PhoneNumber, RoleName) {
  'use strict';


  /**
   * The CreateInstanceRequestBodyRecipients model module.
   * @module model/CreateInstanceRequestBodyRecipients
   */

  /**
   * Constructs a new <code>CreateInstanceRequestBodyRecipients</code>.
   * @alias module:model/CreateInstanceRequestBodyRecipients
   * @class
   * @param roleName {module:model/RoleName} 
   * @param name {module:model/Name} 
   * @param email {module:model/Email} 
   */
  var exports = function(roleName, name, email) {
    var _this = this;

    _this['roleName'] = roleName;    _this['name'] = name;    _this['email'] = email;
  };

  /**
   * Constructs a <code>CreateInstanceRequestBodyRecipients</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateInstanceRequestBodyRecipients} obj Optional instance to populate.
   * @return {module:model/CreateInstanceRequestBodyRecipients} The populated <code>CreateInstanceRequestBodyRecipients</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('roleName')) {
        obj['roleName'] = RoleName.constructFromObject(data['roleName']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = Name.constructFromObject(data['name']);
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = Email.constructFromObject(data['email']);
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = PhoneNumber.constructFromObject(data['phoneNumber']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RoleName} roleName
   */
  exports.prototype['roleName'] = undefined;
  /**
   * @member {module:model/Name} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/Email} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {module:model/PhoneNumber} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;



  return exports;
}));


