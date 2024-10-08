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
    root.Docusign.InstanceSource = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Enum class InstanceSource.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "PUBLIC_URL"
     * @const
     */
    "PUBLIC_URL": "PUBLIC_URL",
    /**
     * value: "API_EMBEDDED"
     * @const
     */
    "API_EMBEDDED": "API_EMBEDDED",
    /**
     * value: "API_REMOTE"
     * @const
     */
    "API_REMOTE": "API_REMOTE",
    /**
     * value: "UI_REMOTE"
     * @const
     */
    "UI_REMOTE": "UI_REMOTE",
    /**
     * value: "WORKFLOW"
     * @const
     */
    "WORKFLOW": "WORKFLOW"  };

  /**
   * Returns a <code>InstanceSource</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/InstanceSource} The enum <code>InstanceSource</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  };

  return exports;
}));


