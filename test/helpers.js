const path = require('path');
const fs = require('fs');

const constants = require('./constants');

const {
  INTEGRATOR_KEY,
  OAUTH_BASE_PATH,
  USER_ID,
  REDIRECT_URI,
  PRIVATE_KEY_FILENAME,
  EXPIRES_IN,
  apiClient,
  scopes
} = constants || {};

const JWTAuth = () => {
  return new Promise(function (resolve, reject) {
    try {
      // IMPORTANT NOTE:
      // the first time you ask for a JWT access token, you should grant access by making the following call
      // get DocuSign OAuth authorization url:
      const authorizationUrl = apiClient.getJWTUri(
        INTEGRATOR_KEY,
        REDIRECT_URI,
        OAUTH_BASE_PATH
      );
      // open DocuSign OAuth authorization url in the browser, login and grant access
      console.log('OAuth authorization url:', authorizationUrl);
      const privateKeyFile = fs.readFileSync(
        path.resolve(__dirname, PRIVATE_KEY_FILENAME)
      );
      apiClient
        .requestJWTUserToken(
          INTEGRATOR_KEY,
          USER_ID,
          scopes,
          privateKeyFile,
          EXPIRES_IN
        )
        .then(function (res) {
          apiClient.setJWTToken(res.body.access_token);

          apiClient
            .getUserInfo(res.body.access_token)
            .then(function (userInfo) {
              const ACCOUNT_ID = userInfo.accounts[0].accountId;
              apiClient.setBasePath(
                `https://demo.services.docusign.net/webforms`
              );
              return resolve({ apiClient, ACCOUNT_ID });
            })
            .catch(function (err) {
              return reject(err);
            });
        })
        .catch(function (err) {
          return reject(err);
        });
    } catch (err) {
      return reject(err);
    }
  });
};

module.exports = { JWTAuth };
