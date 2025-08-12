var docusign = require('../src/index');

var oAuth = docusign.ApiClient.OAuth;
var restApi = docusign.ApiClient.RestApi;
var config;

try {
  config = require('../test-config');
  if (!config) throw new Error('missed required configs');
} catch (err) {
  console.error(err);
}

var EMAIL = config.email;
var INTEGRATOR_KEY = config.integratorKey;
var INTEGRATOR_KEY_AUTH_CODE = config.integratorKeyAuthCode;
var INTEGRATOR_KEY_IMPLICIT = config.integratorKeyImplicit;
var CLIENT_SECRET = config.clientSecret;
var TEMPLATE_ID = config.templateId;


var BASE_PATH = restApi.BasePath.DEMO;
var OAUTH_BASE_PATH = oAuth.BasePath.DEMO;

var USER_ID = config.userId;
var REDIRECT_URI = 'https://www.docusign.com/api';
var PRIVATE_KEY_FILENAME = 'keys/docusign_private_key.txt';
var EXPIRES_IN = 3600;

var apiClient = new docusign.ApiClient({
  basePath: BASE_PATH,
  oAuthBasePath: OAUTH_BASE_PATH
});

var scopes = [
  oAuth.Scope.IMPERSONATION,
  oAuth.Scope.SIGNATURE,
  'webforms_read',
  'webforms_instance_read',
  'webforms_instance_write'
];

module.exports = {
  EMAIL,
  INTEGRATOR_KEY,
  INTEGRATOR_KEY_AUTH_CODE,
  INTEGRATOR_KEY_IMPLICIT,
  CLIENT_SECRET,
  TEMPLATE_ID,
  BASE_PATH,
  OAUTH_BASE_PATH,
  USER_ID,
  REDIRECT_URI,
  PRIVATE_KEY_FILENAME,
  EXPIRES_IN,
  apiClient,
  scopes
};
