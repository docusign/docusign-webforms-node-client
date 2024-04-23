const docusign = require('../src/index');
const assert = require('assert');
const { JWTAuth } = require('./helpers');
const { apiClient } = require('./constants');

let ACCOUNT_ID = '';
let FORM_ID = '';

describe('FormManagementApi tests:', () => {
  before((done) => {
    try {
      JWTAuth(done)
        .then((response) => {
          ACCOUNT_ID = response.ACCOUNT_ID;
          if (!ACCOUNT_ID) {
            throw new Error('ACCOUNT_ID not found!');
          }
          done();
        })
        .catch((err) => {
          console.error(err);
          assert.fail('Authorization failed and account id not obtained!');
        });
    } catch (err) {
      console.error(err);
      assert.fail('Failure in obtaining authorization!');
    }
  });

  const formManagementApi = new docusign.FormManagementApi(apiClient);

  it('Should get form id after passing account_id', (done) => {
    formManagementApi
      .listForms(ACCOUNT_ID)
      .then((formsData) => {
        assert.notStrictEqual(
          formsData,
          undefined,
          "Ensure that the 'formsData' variable is defined."
        );
        const { items = [] } = formsData || {};
        assert.notStrictEqual(
          items,
          [],
          'Ensure that the items is not an empty array.'
        );
        const {
          id,
          accountId,
          isPublished,
          isEnabled,
          hasDraftChanges,
          formState,
          formProperties,
          formMetadata
        } = items[0];
        assert.notStrictEqual(
          id,
          undefined,
          'Ensure that the there is form id in the items.'
        );
        if (!id) {
          throw new Error('Form id not found! Halting the test.');
        } else {
          FORM_ID = id;
        }
        assert.strictEqual(
          accountId,
          ACCOUNT_ID,
          'Ensure that the account ID matches the expected value.'
        );
        assert.notStrictEqual(
          isPublished,
          undefined,
          "Ensure that the 'isPublished' flag is defined."
        );
        assert.notStrictEqual(
          isEnabled,
          undefined,
          "Ensure that the 'isEnabled' flag is defined."
        );
        assert.notStrictEqual(
          hasDraftChanges,
          undefined,
          "Ensure that the 'hasDraftChanges' flag is defined."
        );
        assert.notStrictEqual(
          formState,
          undefined,
          "Ensure that the 'formState' variable is defined."
        );
        assert.notStrictEqual(
          formProperties,
          undefined,
          "Ensure that the 'formProperties' variable is defined."
        );
        assert.notStrictEqual(
          formProperties,
          null,
          "Ensure that the 'formProperties' variable is not null."
        );
        assert.notStrictEqual(
          formMetadata,
          undefined,
          "Ensure that the 'formMetadata' variable is defined."
        );
        assert.notStrictEqual(
          formMetadata,
          null,
          "Ensure that the 'formMetadata' variable is not null."
        );
        done();
      })
      .catch((error) => {
        console.error(error);
        assert.fail('Error in calling the list forms API!');
      });
  });

  it('Should get the form by the form id', (done) => {
    formManagementApi
      .getForm(ACCOUNT_ID, FORM_ID, { 'state': 'active' })
      .then((formData) => {
        assert.notStrictEqual(
          formData,
          undefined,
          "Ensure that the 'formData' variable is defined."
        );
        const {
          id,
          accountId,
          isPublished,
          isEnabled,
          hasDraftChanges,
          formState,
          formProperties,
          formMetadata,
          versionId,
          formContent
        } = formData || {};

        assert.strictEqual(
          accountId,
          ACCOUNT_ID,
          'Ensure that the accountId matches the expected ACCOUNT_ID.'
        );
        assert.strictEqual(
          id,
          FORM_ID,
          'Ensure that the id matches the expected FORM_ID.'
        );
        assert.notStrictEqual(
          isPublished,
          undefined,
          "Ensure that the 'isPublished' flag is defined."
        );
        assert.notStrictEqual(
          isEnabled,
          undefined,
          "Ensure that the 'isEnabled' flag is defined."
        );
        assert.notStrictEqual(
          hasDraftChanges,
          undefined,
          "Ensure that the 'hasDraftChanges' flag is defined."
        );
        assert.notStrictEqual(
          formState,
          undefined,
          "Ensure that the 'formState' variable is defined."
        );
        assert.notStrictEqual(
          formProperties,
          undefined,
          "Ensure that the 'formProperties' variable is defined."
        );
        assert.notStrictEqual(
          formProperties,
          null,
          "Ensure that the 'formProperties' variable is not null."
        );
        assert.notStrictEqual(
          formMetadata,
          undefined,
          "Ensure that the 'formMetadata' variable is defined."
        );
        assert.notStrictEqual(
          formMetadata,
          null,
          "Ensure that the 'formMetadata' variable is not null."
        );
        assert.notStrictEqual(
          versionId,
          undefined,
          "Ensure that the 'versionId' variable is defined."
        );
        assert.notStrictEqual(
          formContent,
          undefined,
          "Ensure that the 'formContent' variable is defined."
        );
        assert.notStrictEqual(
          formContent,
          null,
          "Ensure that the 'formContent' variable is not null."
        );
        done();
      })
      .catch((error) => {
        console.error(error);
        assert.fail('Error in the getForm API Call!');
      });
  });

  // Negative testing
  it('Should throw an error when there is null account id passed in list forms', (done) => {
    assert.throws(() => formManagementApi.listForms(null), {
      message:
        "Missing the required parameter 'accountId' when calling listForms"
    });
    done();
  });

  it('Should throw an error when there is no account id passed in list forms', (done) => {
    assert.throws(() => formManagementApi.listForms(), {
      message:
        "Missing the required parameter 'accountId' when calling listForms"
    });
    done();
  });

  it('Should throw an error when there is wrong account id passed in list forms', (done) => {
    const wrongAccountId = '123abc';
    formManagementApi
      .listForms(wrongAccountId)
      .then((response) => {
        assert.fail('Expecting no response');
      })
      .catch(() => {
        assert.ok('Passed!');
        done();
      });
  });

  it('Should throw an error when there is null account id and form id passed in fetching a form', (done) => {
    assert.throws(() => formManagementApi.getForm(null, null), {
      message:
        "Missing the required parameter 'accountId' when calling getForm"
    });
    done();
  });

  it('Should throw an error when there is proper account id and null form id passed in fetching a form', (done) => {
    assert.throws(() => formManagementApi.getForm(ACCOUNT_ID, null), {
      message: "Missing the required parameter 'formId' when calling getForm"
    });
    done();
  });

  it('Should throw an error when there is null account id and proper form id passed in fetching a form', (done) => {
    assert.throws(() => formManagementApi.getForm(null, FORM_ID), {
      message:
        "Missing the required parameter 'accountId' when calling getForm"
    });
    done();
  });

  it('Should throw an error when there is proper account id and no form id passed in fetching a form', (done) => {
    assert.throws(() => formManagementApi.getForm(ACCOUNT_ID), {
      message: "Missing the required parameter 'formId' when calling getForm"
    });
    done();
  });

  it('Should throw an error when there is no account id and form id passed in fetching a form', (done) => {
    assert.throws(() => formManagementApi.getForm(), {
      message:
        "Missing the required parameter 'accountId' when calling getForm"
    });
    done();
  });

  it('Should throw an error when there is right account id but wrong form id passed in get forms', (done) => {
    const wrongFormId = '123xyz';
    formManagementApi
      .getForm(ACCOUNT_ID, wrongFormId)
      .then((response) => {
        assert.fail('Expecting no response');
      })
      .catch(() => {
        assert.ok('Passed!');
        done();
      });
  });
});
