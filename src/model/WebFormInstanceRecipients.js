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
    define(['ApiClient', 'model/InstanceRecipientStatus', 'model/RecipientViewId'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InstanceRecipientStatus'), require('./RecipientViewId'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WebFormInstanceRecipients = factory(root.Docusign.ApiClient, root.Docusign.InstanceRecipientStatus, root.Docusign.RecipientViewId);
  }
}(this, function(ApiClient, InstanceRecipientStatus, RecipientViewId) {
  'use strict';


  /**
   * The WebFormInstanceRecipients model module.
   * @module model/WebFormInstanceRecipients
   */

  /**
   * Constructs a new <code>WebFormInstanceRecipients</code>.
   * @alias module:model/WebFormInstanceRecipients
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WebFormInstanceRecipients</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebFormInstanceRecipients} obj Optional instance to populate.
   * @return {module:model/WebFormInstanceRecipients} The populated <code>WebFormInstanceRecipients</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('recipientViewId')) {
        obj['recipientViewId'] = RecipientViewId.constructFromObject(data['recipientViewId']);
      }
      if (data.hasOwnProperty('instanceRecipientStatus')) {
        obj['instanceRecipientStatus'] = InstanceRecipientStatus.constructFromObject(data['instanceRecipientStatus']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/RecipientViewId} recipientViewId
   */
  exports.prototype['recipientViewId'] = undefined;
  /**
   * @member {module:model/InstanceRecipientStatus} instanceRecipientStatus
   */
  exports.prototype['instanceRecipientStatus'] = undefined;



  return exports;
}));


