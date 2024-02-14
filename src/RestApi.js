const PRODUCTION_BASE_PATH = 'https://us.services.docusign.net/webforms/v1.1';
const DEMO_BASE_PATH = 'https://apps-d.docusign.com/api/webforms/v1.1';
const STAGE_BASE_PATH = 'https://apps-s.docusign.com/api/webforms/v1.1';

module.exports = {
  BasePath: {
    PRODUCTION: PRODUCTION_BASE_PATH,
    DEMO: DEMO_BASE_PATH,
    STAGE: STAGE_BASE_PATH
  }
};