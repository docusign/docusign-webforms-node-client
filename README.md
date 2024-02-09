# The Official DocuSign WebForms Node Client SDK

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]

[NPM module](https://www.npmjs.com/package/docusign-webforms) that wraps the <a href="https://www.docusign.com">DocuSign</a> WebForms API

[Documentation about the DocuSign API](https://developers.docusign.com/)

<!-- Here needs to tag WebForms API docs -->
<!-- Could be this or below mwntioned
https://developers.docusign.com/docs/monitor-api -->
[Documentation about DocuSign WebForms API](http://docusign.github.io/docusign-webforms-node-client)
<!---
[Changelog](./CHANGELOG.md)
commented out
-->

## Requirements
*   Node 12
*   Free [Developer Account](https://go.docusign.com/sandbox/productshot/?elqCampaignId=16531)

## Compatibility
*   Node 12+

## Installation
This SDK is provided as open source, which enables you to customize its functionality to suit your particular use case. To do so, download or clone the repository. If the SDK’s given functionality meets your integration needs, or if you’re working through our [code examples](https://developers.docusign.com/docs/webforms-rest-api/how-to/) from the [DocuSign Developer Center](https://developers.docusign.com/), you merely need to install it by following the instructions below.

### NPM:
1. Open your preferred command-line console, then navigate to your project.
2. In the console, type the following commands: \
**npm install docusign-webforms -save**

## Dependencies
This client has the following external dependencies:

**Minimum:**
*   DocuSign-webforms
*   Superagent 3.8.2

**Optional:**
*   Async v2.6.2
*   Jsonwebtoken v9.0.0
*   Passport-oauth2
*   Path

## Code examples
DocuSign provides a sample application code referred to as a [Launcher](https://github.com/docusign/code-examples-node). The Launcher includes, besides a full set of WebForms code examples, a set of code examples and associated source files for common use cases. These examples can use either the [Authorization Code Grant](https://developers.docusign.com/platform/auth/authcode/) or [JSON Web Token (JWT) Grant](https://developers.docusign.com/platform/auth/jwt/) authentication flow.

### Launchers
DocuSign provides a sample application referred to as a [Launcher](https://github.com/docusign/code-examples-node/). The Launcher contains a set of 6 common use cases and associated source files. These examples use DocuSign&#39;s [Authorization Code Grant](https://developers.docusign.com/platform/auth/authcode/authcode-get-token/) flow.

## OAuth implementations
For details regarding which type of OAuth grant will work best for your DocuSign integration, see [Choose OAuth Type](https://developers.docusign.com/platform/auth/choose/) in the [DocuSign Developer Center](https://developers.docusign.com/).

For security purposes, DocuSign recommends using the [Authorization Code Grant](https://developers.docusign.com/platform/auth/authcode/authcode-get-token/) or [JWT](https://developers.docusign.com/platform/auth/jwt/) flow.

## Support
Log issues against this client through GitHub. We also have an [active developer community on Stack Overflow](http://stackoverflow.com/questions/tagged/docusignapi).

## License
The DocuSign WebForms Node Client SDK is licensed under the [MIT License](https://github.com/docusign/docusign-node-client/blob/master/LICENSE).

### Additional resources
*   [DocuSign Developer Center](https://developers.docusign.com/)
*   [DocuSign API on Twitter](https://twitter.com/docusignapi)
*   [DocuSign For Developers on LinkedIn](https://www.linkedin.com/showcase/docusign-for-developers/)
*   [DocuSign For Developers on YouTube](https://www.youtube.com/channel/UCJSJ2kMs_qeQotmw4-lX2NQ)

[npm-image]: https://img.shields.io/npm/v/docusign-webforms.svg?style=flat
[npm-url]: https://npmjs.org/package/docusign-webforms
[downloads-image]: https://img.shields.io/npm/dm/docusign-webforms.svg?style=flat
[downloads-url]: https://npmjs.org/package/docusign-webforms
[travis-image]: https://travis-ci.com/docusign/docusign-webforms-node-client.svg?branch=master
[travis-url]: https://travis-ci.com/docusign/docusign-webforms-node-client
[coveralls-image]: https://coveralls.io/repos/github/docusign/DocuSign-Node-Client/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/docusign/DocuSign-Node-Client?branch=master
