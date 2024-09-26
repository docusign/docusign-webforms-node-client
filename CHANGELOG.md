## [v2.0.0-rc1] - WebForms API v1.1.0-1.0.4 - 2024-09-24
### Changed
- Added support for version v1.1.0-1.0.4 of the DocuSign WebForms API.
- Updated the SDK release version.

### Breaking changes
- Substituted the Superagent proxy with Axios 1.6.8, addressing security vulnerabilities.

## Important Action Required
- User needs to update the base URL in your codebase (if passing to SDK explicitly) and remove the /v1.1 component at the end of the URL for the SDK to work properly with this release.
## [v1.0.0] - WebForms API v1.1.0-1.0.2 - 2024-02-14
## Version 1.0.0 (Initial Release)
- Introducing the SDK based on the OpenAPI specification of DocuSign WebForms APIs.
- This release marks the initial availability of the SDK, providing developers with the necessary tools to interact with DocuSign WebForms APIs seamlessly.
## [v1.0.2-rc12] - WebForms API v1.1.0-1.0.3 - 2024-04-23
### Changed
**Security Updates**
- Updated HTTP Client: Due to identified security vulnerabilities in Superagent proxy version 3.0.0, we have transitioned from using Superagent to the more secure Axios HTTP client. This update helps in safeguarding your interactions by patching potential security gaps.

**New Features**
- Proxy Support for HTTP Requests: We've introduced the ability to make HTTP requests through a proxy. This enhancement is particularly useful for users operating within corporate or restricted networks.
- JWT Token Request Functionality: The new sendJWTTokenRequest method allows you to obtain authentication tokens without exposing your privateKey. This method is designed to enhance security in your authentication processes.

**Changes to Existing Features**
- Updated Callback Response Structure: We have made changes to the response structure for callbacks. If you are using callback functions in your integration, please note the updated response object attributes:
> statusCode
header
body

**Migration Guide**
- For those using callback functions, please adjust your implementation to handle the new response structure as detailed above.

**Breaking Changes**
- **`baseUrl` Defaulting to DEMO URL:** 
  - The `baseUrl` now defaults to the DEMO URL if not provided. Please update your configurations accordingly.
  
## [v1.0.2-rc11] - WebForms API v1.1.0-1.0.2 - 2024-02-08
### Changed
- Added support for version v1.1.0-1.0.2 of the DocuSign WebForms API.
- Updated the SDK release version.

## [v1.0.1-rc9] - WebForms API v1.1.0-1.0.1 - 2024-02-05
### Changed
- Added support for version v1.1.0-1.0.1 of the DocuSign WebForms API.
- Updated the SDK release version.

## [v1.0.0-rc4] - WebForms API v1.1.0-1.0.0 - 2024-01-18
### Changed
- Added support for version v1.1.0-1.0.0 of the DocuSign WebForms API.
- Updated the SDK release version.

## [v1.0.0-rc3] - WebForms API v1.1.0-1.0.0 - 2024-01-03
### Changed
- Added support for version v1.1.0-1.0.0 of the DocuSign WebForms API.
- Updated the SDK release version.

## [v1.0.0] - WebForms API v1.1-1.1.1 - 2023-11-27
### Changed
- Added support for version v1.1-1.1.1 of the DocuSign WebForms API.
- Updated the SDK release version.

