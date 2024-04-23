const docusign = require('../src/index');
const oAuth = docusign.ApiClient.OAuth;
const restApi = docusign.ApiClient.RestApi;
const { scopes } = require('./constants');
let config;
try {
  config = require('../test-config');
} catch (err) {
  console.error(err);
}
const assert = require('assert');
const path = require('path');
const axios = require('axios');

const Buffer = global.Buffer.from ? global.Buffer : require('safe-buffer').Buffer;
const fs = require('fs');

const{
  privateKey,
  integratorKey,
  integratorKeyAuthCode
}  = config || {};


const basePath = restApi.BasePath.DEMO;
const oAuthBasePath = oAuth.BasePath.DEMO;

const userId = config.userId;
const RedirectURI = 'https://www.docusign.com/api';
const privateKeyFilename = 'keys/docusign_private_key.txt';
const expiresIn = 3600;

if (privateKey) {
  let buf;
  if (typeof Buffer.from === 'function') {
    // Node 5.10+
    buf = Buffer.from(privateKey, 'base64'); // Ta-da
  } else {
    // older Node versions, now deprecated
    buf = new Buffer(privateKey, 'base64'); // Ta-da
  }

  const text = buf.toString('ascii');
  fs.writeFileSync(path.resolve('test', privateKeyFilename), text);
}

describe('SDK Unit Tests:', function (done) {
  const apiClient = new docusign.ApiClient({
    basePath: basePath,
    oAuthBasePath: oAuthBasePath
  });


  before(function (done) {
    // IMPORTANT NOTE:
    // the first time you ask for a JWT access token, you should grant access by making the following call
    // get DocuSign OAuth authorization url:
    const oauthLoginUrl = apiClient.getJWTUri(integratorKey, RedirectURI, oAuthBasePath);
    // open DocuSign OAuth authorization url in the browser, login and grant access
    console.log(oauthLoginUrl);
    // END OF NOTE
    const fs = require('fs');
    const privateKeyFile = fs.readFileSync(path.resolve(__dirname, privateKeyFilename));
    apiClient.requestJWTUserToken(integratorKey, userId, scopes, privateKeyFile, expiresIn)
      .then(function (res) {
        let baseUri,
          accountDomain;
        apiClient.addDefaultHeader('Authorization', 'Bearer ' + res.body.access_token);

        apiClient.getUserInfo(res.body.access_token)
          .then(function (userInfo) {
            baseUri = userInfo.accounts[0].baseUri;
            accountDomain = baseUri.split('/v2');
            apiClient.setBasePath(accountDomain[0] + '/restapi');
            done();
          })
          .catch(function (error) {
            if (error) {
              return done(error);
            }
          });
      })
      .catch(function (err) {
        if (err) {
          return done(err);
        }
      });
  });
  it('oAuthBasePAth should update whenever BasePath does and match the environment', function (done) {
    const apiClient = new docusign.ApiClient({
      basePath: restApi.BasePath.DEMO
    });
    assert.equal(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.DEMO);
    assert.notEqual(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.PRODUCTION);

    apiClient.setBasePath(restApi.BasePath.STAGE);
    assert.equal(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.STAGE);

    apiClient.setBasePath(restApi.BasePath.PRODUCTION);
    assert.equal(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.PRODUCTION);

    apiClient.setBasePath(restApi.BasePath.DEMO);
    assert.equal(apiClient.oAuthBasePath, apiClient.OAuth.BasePath.DEMO);

    return done();
  });
  /**
   *
   * New OAuth Methods Tests Start
   *
   */
  it('should be able to request a JWT user token', function (done) {
    const fs = require('fs');
    const privateKeyFile = fs.readFileSync(path.resolve(__dirname, privateKeyFilename));
    apiClient.requestJWTUserToken(integratorKey, userId, scopes, privateKeyFile, expiresIn)
      .then(function (response) {
        assert.ok(response.body.access_token);
        done();
      })
      .catch(function (err) {
        return done(err);
      });
  });

  it('should be able to request a JWT application token', function (done) {
    const fs = require('fs');
    const privateKeyFile = fs.readFileSync(path.resolve(__dirname, privateKeyFilename));

    apiClient.requestJWTApplicationToken(integratorKey, scopes, privateKeyFile, expiresIn)
      .then(function (response) {
        assert.ok(response.body.access_token);
        done();
      }).catch(function (err) {
        return done(err);
      });
  });

  it('should return a properly formatted authorization uri', function (done) {
    const responseType = apiClient.OAuth.ResponseType.CODE;
    const scopes = [apiClient.OAuth.Scope.EXTENDED];
    const randomState = '*^.$DGj*)+}Jk';
    const formattedScopes = scopes.join(encodeURI(' '));
    let authUri;
    let correctAuthUri;
    authUri = apiClient.getAuthorizationUri(integratorKeyAuthCode, scopes, RedirectURI, responseType, randomState);
    correctAuthUri = 'https://' +
      oAuthBasePath +
      '/oauth/auth' +
      '?response_type=' + responseType +
      '&scope=' + formattedScopes +
      '&client_id=' + integratorKeyAuthCode +
      '&redirect_uri=' + encodeURIComponent(RedirectURI) +
      (randomState ? '&state=' + encodeURIComponent(randomState) : '');

    assert.equal(authUri, correctAuthUri);
    done();
  });

  it('should return an authorization uri to a valid page', function (done) {
    let responseType = apiClient.OAuth.ResponseType.CODE;
    let scopes = [apiClient.OAuth.Scope.EXTENDED];
    let randomState = '*^.$DGj*)+}Jk';
    let authUri = apiClient.getAuthorizationUri(integratorKeyAuthCode, scopes, RedirectURI, responseType, randomState);

    axios.get(authUri)
      .then(function (res) {        
        assert.equal(res.status, 200);
        done();
      })
      .catch((err)=>{
        assert.notEqual(err, undefined);
      });
  });
});
