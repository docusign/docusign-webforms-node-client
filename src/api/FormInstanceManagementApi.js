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
	define(['Configuration', 'ApiClient', 'model/CreateInstanceRequestBody', 'model/HttpError', 'model/WebFormInstance', 'model/WebFormInstanceList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/CreateInstanceRequestBody'), require('../model/HttpError'), require('../model/WebFormInstance'), require('../model/WebFormInstanceList'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.FormInstanceManagementApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.CreateInstanceRequestBody, root.Docusign.HttpError, root.Docusign.WebFormInstance, root.Docusign.WebFormInstanceList);
  }
}(this, function(Configuration, ApiClient, CreateInstanceRequestBody, HttpError, WebFormInstance, WebFormInstanceList) {
  'use strict';

  /**
   * FormInstanceManagement service.
   * @module api/FormInstanceManagementApi
   */

  /**
   * Constructs a new FormInstanceManagementApi. 
   * @alias module:api/FormInstanceManagementApi
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
     * (Optional) Callback function to receive the result of the createInstance operation. If none specified a Promise will be returned.
     * @callback module:api/FormInstanceManagementApi~createInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebFormInstance} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates an instance of the web form
     * Creates an instance of the web form.
     * @param {String} accountId Account identifier in which the web form resides
     * @param {String} formId Unique identifier for a web form entity that is consistent for it's lifetime
     * @param {module:model/CreateInstanceRequestBody} createInstanceBody Request body containing properties that will be used to create instance.
     * @param {module:api/FormInstanceManagementApi~createInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebFormInstance}
     */
    this.createInstance = function(createInstanceBody, accountId, formId, callback) {
      var postBody = createInstanceBody;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createInstance");
      }

      // verify the required parameter 'formId' is set
      if (formId === undefined || formId === null) {
        throw new Error("Missing the required parameter 'formId' when calling createInstance");
      }

      // verify the required parameter 'createInstanceBody' is set
      if (createInstanceBody === undefined || createInstanceBody === null) {
        throw new Error("Missing the required parameter 'createInstanceBody' when calling createInstance");
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
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WebFormInstance;

      return this.apiClient.callApi(
        '/v1.1/accounts/{accountId}/forms/{formId}/instances', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getInstance operation. If none specified a Promise will be returned.
     * @callback module:api/FormInstanceManagementApi~getInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebFormInstance} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get form instance
     * Retrieves instance information filter by instance id
     * @param {String} accountId Account identifier in which the web form resides
     * @param {String} formId Unique identifier for a web form entity that is consistent for it's lifetime
     * @param {String} instanceId Unique identifier for a Web Form Instance that is consistent until its expiration
     * @param {module:api/FormInstanceManagementApi~getInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebFormInstance}
     */
    this.getInstance = function(accountId, formId, instanceId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getInstance");
      }

      // verify the required parameter 'formId' is set
      if (formId === undefined || formId === null) {
        throw new Error("Missing the required parameter 'formId' when calling getInstance");
      }

      // verify the required parameter 'instanceId' is set
      if (instanceId === undefined || instanceId === null) {
        throw new Error("Missing the required parameter 'instanceId' when calling getInstance");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'formId': formId,
        'instanceId': instanceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WebFormInstance;

      return this.apiClient.callApi(
        '/v1.1/accounts/{accountId}/forms/{formId}/instances/{instanceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the listInstances operation. If none specified a Promise will be returned.
     * @callback module:api/FormInstanceManagementApi~listInstancesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebFormInstanceList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * List instances
     * List all the instances of a web form in an account. When filtered by clientUserId, it will return instances having same clientUserId
     * @param {String} accountId Account identifier in which the web form resides
     * @param {String} formId Unique identifier for a web form that is consistent for it's lifetime
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.clientUserId A unique identifier for a user that should originate from client's system. This value can be anything your backend system would use to track individual form instances. Examples include employee IDs, email addresses, surrogate key values, etc.
     * @param {module:api/FormInstanceManagementApi~listInstancesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebFormInstanceList}
     */
    this.listInstances = function(accountId, formId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling listInstances");
      }

      // verify the required parameter 'formId' is set
      if (formId === undefined || formId === null) {
        throw new Error("Missing the required parameter 'formId' when calling listInstances");
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
        'client_user_id': optsOrCallback['clientUserId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WebFormInstanceList;

      return this.apiClient.callApi(
        '/v1.1/accounts/{accountId}/forms/{formId}/instances', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };

    /**
     * (Optional) Callback function to receive the result of the refreshToken operation. If none specified a Promise will be returned.
     * @callback module:api/FormInstanceManagementApi~refreshTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebFormInstance} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Refreshes the instance token
     * Generates new instance token for the existing Web Form Instance.
     * @param {String} accountId Account identifier in which the web form resides
     * @param {String} formId Unique identifier for a web form entity that is consistent for it's lifetime
     * @param {String} instanceId Unique identifier for a Web Form Instance that is consistent until its expiration
     * @param {module:api/FormInstanceManagementApi~refreshTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebFormInstance}
     */
    this.refreshToken = function(accountId, formId, instanceId, callback) {
      var postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling refreshToken");
      }

      // verify the required parameter 'formId' is set
      if (formId === undefined || formId === null) {
        throw new Error("Missing the required parameter 'formId' when calling refreshToken");
      }

      // verify the required parameter 'instanceId' is set
      if (instanceId === undefined || instanceId === null) {
        throw new Error("Missing the required parameter 'instanceId' when calling refreshToken");
      }

      if (typeof callback !== 'function' &&  arguments.length && typeof arguments[arguments.length-1] === 'function'){
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length-1];
      }

      var pathParams = {
        'accountId': accountId,
        'formId': formId,
        'instanceId': instanceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['docusignAccessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = WebFormInstance;

      return this.apiClient.callApi(
        '/v1.1/accounts/{accountId}/forms/{formId}/instances/{instanceId}/refresh', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    };
  };

  return exports;
}));