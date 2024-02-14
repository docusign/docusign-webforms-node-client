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
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Configuration', 'ApiClient', 'model/AuthenticationMethod', 'model/CreateInstanceRequestBody', 'model/HttpError', 'model/HttpSuccess', 'model/InstanceSource', 'model/InstanceStatus', 'model/TemplateProperties', 'model/WebForm', 'model/WebFormComponentType', 'model/WebFormContent', 'model/WebFormInstance', 'model/WebFormInstanceEnvelopes', 'model/WebFormInstanceList', 'model/WebFormInstanceMetadata', 'model/WebFormMetadata', 'model/WebFormProperties', 'model/WebFormSource', 'model/WebFormState', 'model/WebFormSummary', 'model/WebFormSummaryList', 'model/WebFormUserInfo', 'model/WebFormValues', 'api/FormInstanceManagementApi', 'api/FormManagementApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./Configuration'), require('./ApiClient'), require('./model/AuthenticationMethod'), require('./model/CreateInstanceRequestBody'), require('./model/HttpError'), require('./model/HttpSuccess'), require('./model/InstanceSource'), require('./model/InstanceStatus'), require('./model/TemplateProperties'), require('./model/WebForm'), require('./model/WebFormComponentType'), require('./model/WebFormContent'), require('./model/WebFormInstance'), require('./model/WebFormInstanceEnvelopes'), require('./model/WebFormInstanceList'), require('./model/WebFormInstanceMetadata'), require('./model/WebFormMetadata'), require('./model/WebFormProperties'), require('./model/WebFormSource'), require('./model/WebFormState'), require('./model/WebFormSummary'), require('./model/WebFormSummaryList'), require('./model/WebFormUserInfo'), require('./model/WebFormValues'), require('./api/FormInstanceManagementApi'), require('./api/FormManagementApi'));
  }
}(function(Configuration, ApiClient, AuthenticationMethod, CreateInstanceRequestBody, HttpError, HttpSuccess, InstanceSource, InstanceStatus, TemplateProperties, WebForm, WebFormComponentType, WebFormContent, WebFormInstance, WebFormInstanceEnvelopes, WebFormInstanceList, WebFormInstanceMetadata, WebFormMetadata, WebFormProperties, WebFormSource, WebFormState, WebFormSummary, WebFormSummaryList, WebFormUserInfo, WebFormValues, FormInstanceManagementApi, FormManagementApi) {
  'use strict';

  /**
   * DocuSign Node.js API client..<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Docusign = require('index'); // See note below*.
   * var xxxSvc = new Docusign.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Docusign.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Docusign.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Docusign.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   */
  var exports = {
	/**
	 * The configuration constructor.
	 * @property {module:Configuration}
	 */
	 Configuration: Configuration,
	/**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AuthenticationMethod model constructor.
     * @property {module:model/AuthenticationMethod}
     */
    AuthenticationMethod: AuthenticationMethod,
    /**
     * The CreateInstanceRequestBody model constructor.
     * @property {module:model/CreateInstanceRequestBody}
     */
    CreateInstanceRequestBody: CreateInstanceRequestBody,
    /**
     * The HttpError model constructor.
     * @property {module:model/HttpError}
     */
    HttpError: HttpError,
    /**
     * The HttpSuccess model constructor.
     * @property {module:model/HttpSuccess}
     */
    HttpSuccess: HttpSuccess,
    /**
     * The InstanceSource model constructor.
     * @property {module:model/InstanceSource}
     */
    InstanceSource: InstanceSource,
    /**
     * The InstanceStatus model constructor.
     * @property {module:model/InstanceStatus}
     */
    InstanceStatus: InstanceStatus,
    /**
     * The TemplateProperties model constructor.
     * @property {module:model/TemplateProperties}
     */
    TemplateProperties: TemplateProperties,
    /**
     * The WebForm model constructor.
     * @property {module:model/WebForm}
     */
    WebForm: WebForm,
    /**
     * The WebFormComponentType model constructor.
     * @property {module:model/WebFormComponentType}
     */
    WebFormComponentType: WebFormComponentType,
    /**
     * The WebFormContent model constructor.
     * @property {module:model/WebFormContent}
     */
    WebFormContent: WebFormContent,
    /**
     * The WebFormInstance model constructor.
     * @property {module:model/WebFormInstance}
     */
    WebFormInstance: WebFormInstance,
    /**
     * The WebFormInstanceEnvelopes model constructor.
     * @property {module:model/WebFormInstanceEnvelopes}
     */
    WebFormInstanceEnvelopes: WebFormInstanceEnvelopes,
    /**
     * The WebFormInstanceList model constructor.
     * @property {module:model/WebFormInstanceList}
     */
    WebFormInstanceList: WebFormInstanceList,
    /**
     * The WebFormInstanceMetadata model constructor.
     * @property {module:model/WebFormInstanceMetadata}
     */
    WebFormInstanceMetadata: WebFormInstanceMetadata,
    /**
     * The WebFormMetadata model constructor.
     * @property {module:model/WebFormMetadata}
     */
    WebFormMetadata: WebFormMetadata,
    /**
     * The WebFormProperties model constructor.
     * @property {module:model/WebFormProperties}
     */
    WebFormProperties: WebFormProperties,
    /**
     * The WebFormSource model constructor.
     * @property {module:model/WebFormSource}
     */
    WebFormSource: WebFormSource,
    /**
     * The WebFormState model constructor.
     * @property {module:model/WebFormState}
     */
    WebFormState: WebFormState,
    /**
     * The WebFormSummary model constructor.
     * @property {module:model/WebFormSummary}
     */
    WebFormSummary: WebFormSummary,
    /**
     * The WebFormSummaryList model constructor.
     * @property {module:model/WebFormSummaryList}
     */
    WebFormSummaryList: WebFormSummaryList,
    /**
     * The WebFormUserInfo model constructor.
     * @property {module:model/WebFormUserInfo}
     */
    WebFormUserInfo: WebFormUserInfo,
    /**
     * The WebFormValues model constructor.
     * @property {module:model/WebFormValues}
     */
    WebFormValues: WebFormValues,
    /**
     * The FormInstanceManagementApi service constructor.
     * @property {module:api/FormInstanceManagementApi}
     */
    FormInstanceManagementApi: FormInstanceManagementApi,
    /**
     * The FormManagementApi service constructor.
     * @property {module:api/FormManagementApi}
     */
    FormManagementApi: FormManagementApi
  };

  return exports;
}));