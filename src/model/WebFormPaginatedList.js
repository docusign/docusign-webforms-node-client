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
    define(['ApiClient', 'model/ModelNumber', 'model/WebFormSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelNumber'), require('./WebFormSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.WebFormPaginatedList = factory(root.Docusign.ApiClient, root.Docusign.ModelNumber, root.Docusign.WebFormSummary);
  }
}(this, function(ApiClient, ModelNumber, WebFormSummary) {
  'use strict';


  /**
   * The WebFormPaginatedList model module.
   * @module model/WebFormPaginatedList
   */

  /**
   * Constructs a new <code>WebFormPaginatedList</code>.
   * A list of 0 or more paginated and filtered form summary items
   * @alias module:model/WebFormPaginatedList
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>WebFormPaginatedList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebFormPaginatedList} obj Optional instance to populate.
   * @return {module:model/WebFormPaginatedList} The populated <code>WebFormPaginatedList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [WebFormSummary]);
      }
      if (data.hasOwnProperty('resultSetSize')) {
        obj['resultSetSize'] = ApiClient.convertToType(data['resultSetSize'], ModelNumber);
      }
      if (data.hasOwnProperty('totalSetSize')) {
        obj['totalSetSize'] = ApiClient.convertToType(data['totalSetSize'], ModelNumber);
      }
      if (data.hasOwnProperty('startPosition')) {
        obj['startPosition'] = ApiClient.convertToType(data['startPosition'], ModelNumber);
      }
      if (data.hasOwnProperty('endPosition')) {
        obj['endPosition'] = ApiClient.convertToType(data['endPosition'], ModelNumber);
      }
      if (data.hasOwnProperty('nextUrl')) {
        obj['nextUrl'] = ApiClient.convertToType(data['nextUrl'], 'String');
      }
      if (data.hasOwnProperty('previousUrl')) {
        obj['previousUrl'] = ApiClient.convertToType(data['previousUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * Array of form summary items
   * @member {Array.<module:model/WebFormSummary>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * Result set size for current page
   * @member {module:model/ModelNumber} resultSetSize
   */
  exports.prototype['resultSetSize'] = undefined;
  /**
   * Total result set size
   * @member {module:model/ModelNumber} totalSetSize
   */
  exports.prototype['totalSetSize'] = undefined;
  /**
   * Starting position of fields returned for the current page
   * @member {module:model/ModelNumber} startPosition
   */
  exports.prototype['startPosition'] = undefined;
  /**
   * Ending position of fields returned for the current page
   * @member {module:model/ModelNumber} endPosition
   */
  exports.prototype['endPosition'] = undefined;
  /**
   * Url for the next page of results
   * @member {String} nextUrl
   */
  exports.prototype['nextUrl'] = undefined;
  /**
   * Url for the previous page of results
   * @member {String} previousUrl
   */
  exports.prototype['previousUrl'] = undefined;



  return exports;
}));


