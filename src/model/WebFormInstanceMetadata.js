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
    define(['ApiClient', 'model/InstanceSource', 'model/SubmittedDateTime', 'model/WebFormUserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InstanceSource'), require('./SubmittedDateTime'), require('./WebFormUserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WebFormInstanceMetadata = factory(root.Docusign.ApiClient, root.Docusign.InstanceSource, root.Docusign.SubmittedDateTime, root.Docusign.WebFormUserInfo);
  }
}(this, function(ApiClient, InstanceSource, SubmittedDateTime, WebFormUserInfo) {
  'use strict';


  /**
   * The WebFormInstanceMetadata model module.
   * @module model/WebFormInstanceMetadata
   */

  /**
   * Constructs a new <code>WebFormInstanceMetadata</code>.
   * Web Form Instance metadata containing information like created by, created time, etc.
   * @alias module:model/WebFormInstanceMetadata
   * @class
   * @param expirationDateTime {String} 
   * @param createdDateTime {String} 
   * @param createdBy {module:model/WebFormUserInfo} The user that created the Web Form Instance
   */
  var exports = function(expirationDateTime, createdDateTime, createdBy) {
    var _this = this;

    _this['expirationDateTime'] = expirationDateTime;    _this['createdDateTime'] = createdDateTime;    _this['createdBy'] = createdBy;
  };

  /**
   * Constructs a <code>WebFormInstanceMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebFormInstanceMetadata} obj Optional instance to populate.
   * @return {module:model/WebFormInstanceMetadata} The populated <code>WebFormInstanceMetadata</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('expirationDateTime')) {
        obj['expirationDateTime'] = ApiClient.convertToType(data['expirationDateTime'], 'String');
      }
      if (data.hasOwnProperty('createdDateTime')) {
        obj['createdDateTime'] = ApiClient.convertToType(data['createdDateTime'], 'String');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = WebFormUserInfo.constructFromObject(data['createdBy']);
      }
      if (data.hasOwnProperty('lastModifiedDateTime')) {
        obj['lastModifiedDateTime'] = ApiClient.convertToType(data['lastModifiedDateTime'], 'String');
      }
      if (data.hasOwnProperty('lastModifiedBy')) {
        obj['lastModifiedBy'] = WebFormUserInfo.constructFromObject(data['lastModifiedBy']);
      }
      if (data.hasOwnProperty('submittedDateTime')) {
        obj['submittedDateTime'] = SubmittedDateTime.constructFromObject(data['submittedDateTime']);
      }
      if (data.hasOwnProperty('instanceSource')) {
        obj['instanceSource'] = InstanceSource.constructFromObject(data['instanceSource']);
      }
    }
    return obj;
  }

  /**
   * @member {String} expirationDateTime
   */
  exports.prototype['expirationDateTime'] = undefined;
  /**
   * @member {String} createdDateTime
   */
  exports.prototype['createdDateTime'] = undefined;
  /**
   * The user that created the Web Form Instance
   * @member {module:model/WebFormUserInfo} createdBy
   */
  exports.prototype['createdBy'] = undefined;
  /**
   * @member {String} lastModifiedDateTime
   */
  exports.prototype['lastModifiedDateTime'] = undefined;
  /**
   * The user that last modified the Web Form Instance
   * @member {module:model/WebFormUserInfo} lastModifiedBy
   */
  exports.prototype['lastModifiedBy'] = undefined;
  /**
   * @member {module:model/SubmittedDateTime} submittedDateTime
   */
  exports.prototype['submittedDateTime'] = undefined;
  /**
   * @member {module:model/InstanceSource} instanceSource
   */
  exports.prototype['instanceSource'] = undefined;



  return exports;
}));


