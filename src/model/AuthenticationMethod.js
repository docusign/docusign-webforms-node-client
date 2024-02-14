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
    root.Docusign.AuthenticationMethod = factory(root.Docusign.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Enum class AuthenticationMethod.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "Biometric"
     * @const
     */
    "biometric": "Biometric",
    /**
     * value: "Email"
     * @const
     */
    "email": "Email",
    /**
     * value: "HTTPBasicAuth"
     * @const
     */
    "hTTPBasicAuth": "HTTPBasicAuth",
    /**
     * value: "Kerberos"
     * @const
     */
    "kerberos": "Kerberos",
    /**
     * value: "KnowledgeBasedAuth"
     * @const
     */
    "knowledgeBasedAuth": "KnowledgeBasedAuth",
    /**
     * value: "None"
     * @const
     */
    "none": "None",
    /**
     * value: "PaperDocuments"
     * @const
     */
    "paperDocuments": "PaperDocuments",
    /**
     * value: "Password"
     * @const
     */
    "password": "Password",
    /**
     * value: "RSASecureID"
     * @const
     */
    "rSASecureID": "RSASecureID",
    /**
     * value: "SingleSignOn_CASiteminder"
     * @const
     */
    "singleSignOnCASiteminder": "SingleSignOn_CASiteminder",
    /**
     * value: "SingleSignOn_InfoCard"
     * @const
     */
    "singleSignOnInfoCard": "SingleSignOn_InfoCard",
    /**
     * value: "SingleSignOn_MicrosoftActiveDirectory"
     * @const
     */
    "singleSignOnMicrosoftActiveDirectory": "SingleSignOn_MicrosoftActiveDirectory",
    /**
     * value: "SingleSignOn_Other"
     * @const
     */
    "singleSignOnOther": "SingleSignOn_Other",
    /**
     * value: "SingleSignOn_Passport"
     * @const
     */
    "singleSignOnPassport": "SingleSignOn_Passport",
    /**
     * value: "SingleSignOn_SAML"
     * @const
     */
    "singleSignOnSAML": "SingleSignOn_SAML",
    /**
     * value: "Smartcard"
     * @const
     */
    "smartcard": "Smartcard",
    /**
     * value: "SSLMutualAuth"
     * @const
     */
    "sSLMutualAuth": "SSLMutualAuth",
    /**
     * value: "X509Certificate"
     * @const
     */
    "x509Certificate": "X509Certificate"  };

  /**
   * Returns a <code>AuthenticationMethod</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/AuthenticationMethod} The enum <code>AuthenticationMethod</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  };

  return exports;
}));


