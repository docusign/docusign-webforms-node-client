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
	define(['Configuration', 'ApiClient', 'model/HttpError', 'model/WebForm', 'model/WebFormSummaryList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/HttpError'), require('../model/WebForm'), require('../model/WebFormSummaryList'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.FormManagementApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.HttpError, root.Docusign.WebForm, root.Docusign.WebFormSummaryList);
  }
}(this, function(Configuration, ApiClient, HttpError, WebForm, WebFormSummaryList) {
  'use strict';

  /**
   * FormManagement service.
   * @module api/FormManagementApi
   */

  /**
   * Constructs a new FormManagementApi. 
   * @alias module:api/FormManagementApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient() || ApiClient.instance;


    this.setApiClient = function(apiClient) {
      this.apiClient = apiClient;
    };

    this.getApiClient = function() {
      return this.apiClient;
    };


    /**
     * (Optional) Callback function to receive the result of the getForm operation. If none specified a Promise will be returned.
     * @callback module:api/FormManagementApi~getFormCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebForm} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get Form
     * Retrieves form information filter by form id and state. The `state` parameter is optional and can accept value from `draft, active`.
     * @param {String} accountId Account identifier in which the web form resides
     * @param {String} formId Unique identifier for a web form that is consistent for it's lifetime
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/String} optsOrCallback.state The state of the web form configuration (default to draft)
     * @param {module:api/FormManagementApi~getFormCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebForm}
     */
    this.getForm = function(accountId, formId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getForm");
      }

      // verify the required parameter 'formId' is set
      if (formId === undefined || formId === null) {
        throw new Error("Missing the required parameter 'formId' when calling getForm");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'formId': formId
      };
      var queryParams = {
        'state': optsOrCallback['state']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WebForm;

      return this.apiClient.callApi(
        '/accounts/{accountId}/forms/{formId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listForms operation. If none specified a Promise will be returned.
     * @callback module:api/FormManagementApi~listFormsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebFormSummaryList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * List Forms
     * List all the forms for the active user that can be in an active or draft state
     * @param {String} accountId Account identifier in which the webform resides
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/String} optsOrCallback.userFilter Filter which forms are returned (default to all)
     * @param {Boolean} optsOrCallback.isStandalone Is the form a standalone form
     * @param {Boolean} optsOrCallback.isPublished Has the form been published
     * @param {String} optsOrCallback.sortBy Sort result set in mentioned sort property:order. Default is lastModifiedDateTime:desc. Default sort is descending if not mentioned.
     * @param {String} optsOrCallback.search Search through form names
     * @param {String} optsOrCallback.startPosition Starting position for desired page of results.
     * @param {String} optsOrCallback.count Number of results to return per page.
     * @param {module:api/FormManagementApi~listFormsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebFormSummaryList}
     */
    this.listForms = function(accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listForms");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId
      };
      var queryParams = {
        'user_filter': optsOrCallback['userFilter'],
        'is_standalone': optsOrCallback['isStandalone'],
        'is_published': optsOrCallback['isPublished'],
        'sort_by': optsOrCallback['sortBy'],
        'search': optsOrCallback['search'],
        'start_position': optsOrCallback['startPosition'],
        'count': optsOrCallback['count']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WebFormSummaryList;

      return this.apiClient.callApi(
        '/accounts/{accountId}/forms', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));