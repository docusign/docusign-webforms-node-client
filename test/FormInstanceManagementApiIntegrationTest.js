const docusign = require('../src/index');
const assert = require('assert');
const { JWTAuth } = require('./helpers');
const { apiClient } = require('./constants');

let ACCOUNT_ID = '';
let FORM_ID = '';
let INSTANCE_ID = '';
let CLIENT_ID = '';

describe('FormInstanceManagementApi tests:', () => {
  before((done) => {
    try {
      JWTAuth(done)
        .then((response) => {
          ACCOUNT_ID = response.ACCOUNT_ID;
          if (ACCOUNT_ID) {
            const formManagementApi = new docusign.FormManagementApi(apiClient);
            formManagementApi
              .listForms(ACCOUNT_ID)
              .then((data) => {
                const forms = data && data.items;
                if (forms && Array.isArray(forms) && forms.length) {
                  const formObject =
                    forms.find((each) => each.isPublished === true) || {};
                  FORM_ID = formObject.id;
                } else {
                  throw new Error('FORM data not found in order!');
                }

                if (!FORM_ID) {
                  throw new Error(
                    'FORM_ID not found! Can not proceed with the test.'
                  );
                }
                done();
              })
              .catch((error) => {
                console.error(error);
                assert.fail('Could not get forms or suitable form id!');
              });
          } else {
            throw new Error('ACCOUNT_ID not found!');
          }
          // console.log(JSON.stringify(response, null, 2));
          // done();
        })
        .catch((err) => {
          console.error(err);
          assert.fail('Error in fetching account id or form id!');
        });
    } catch (err) {
      console.error(err);
      assert.fail('Error in obtaining authorization!');
    }
  });

  var formInstanceManagementApi = new docusign.FormInstanceManagementApi(
    apiClient
  );

  it('Should create an webform instance when correct account_id and form_id is passed', (done) => {
    const instanceBody = {
      clientUserId: `asif.sajjad${new Date()}`,
      tags: ['general_details']
    };
    CLIENT_ID = instanceBody.clientUserId;
    formInstanceManagementApi
      .createInstance(instanceBody, ACCOUNT_ID, FORM_ID)
      .then((instance) => {
        assert.notStrictEqual(
          instance,
          undefined,
          'Ensure that the instance is defined.'
        );
        const {
          id,
          formUrl,
          instanceToken,
          tokenExpirationDateTime,
          formId,
          accountId,
          clientUserId,
          status,
          instanceMetadata
        } = instance || {};
        INSTANCE_ID = id;
        assert.strictEqual(
          formId,
          FORM_ID,
          'Ensure that the formId matches the expected FORM_ID.'
        );
        assert.strictEqual(
          accountId,
          ACCOUNT_ID,
          'Ensure that the accountId matches the expected ACCOUNT_ID.'
        );
        assert.strictEqual(
          clientUserId,
          CLIENT_ID,
          'Ensure that the clientUserId matches the expected CLIENT_ID.'
        );
        assert.notStrictEqual(
          formUrl,
          undefined,
          'Ensure that the formUrl is defined.'
        );
        assert.notStrictEqual(
          instanceToken,
          undefined,
          'Ensure that the instanceToken is defined.'
        );
        assert.notStrictEqual(
          tokenExpirationDateTime,
          undefined,
          'Ensure that the tokenExpirationDateTime is defined.'
        );
        assert.notStrictEqual(
          clientUserId,
          undefined,
          'Ensure that the clientUserId is defined.'
        );
        assert.notStrictEqual(
          status,
          undefined,
          'Ensure that the status is defined.'
        );
        assert.notStrictEqual(
          instanceMetadata,
          undefined,
          'Ensure that the instanceMetadata is defined.'
        );
        assert.notStrictEqual(
          instanceMetadata,
          null,
          'Ensure that the instanceMetadata is not null.'
        );
        done();
      })
      .catch((error) => {
        console.error(error);
        assert.fail('Error in createInstance API Call!');
      });
  });

  it('Should get instances after passing account_id and form_id', (done) => {
    formInstanceManagementApi
      .listInstances(ACCOUNT_ID, FORM_ID)
      .then((instances) => {
        assert.notStrictEqual(
          instances,
          undefined,
          'Ensure that the instances is present.'
        );
        const instance = (instances && instances.items && instances.items[0]) || {};
        const {
          id,
          formId,
          accountId,
          clientUserId,
          status,
          instanceMetadata
        } = instance;
        assert.strictEqual(
          accountId,
          ACCOUNT_ID,
          'Ensure that the accountId matches the expected ACCOUNT_ID.'
        );
        assert.strictEqual(
          formId,
          FORM_ID,
          'Ensure that the formId matches the expected FORM_ID.'
        );
        assert.notStrictEqual(id, undefined, 'Ensure that the id is defined.');
        assert.notStrictEqual(
          clientUserId,
          undefined,
          'Ensure that the clientUserId is defined.'
        );
        assert.notStrictEqual(
          status,
          undefined,
          'Ensure that the status is defined.'
        );
        assert.notStrictEqual(
          instanceMetadata,
          undefined,
          'Ensure that the instanceMetadata is defined.'
        );
        assert.notStrictEqual(
          instanceMetadata,
          null,
          'Ensure that the instanceMetadata is not null.'
        );
        done();
      })
      .catch((error) => {
        console.error(error);
        assert.fail('Error in listInstances API Call!');
      });
  });

  it('Should get form instance when the correct account_id, form_id and instance_id is passed', (done) => {
    formInstanceManagementApi
      .getInstance(ACCOUNT_ID, FORM_ID, INSTANCE_ID)
      .then((instance) => {
        assert.notStrictEqual(
          instance,
          undefined,
          'Ensure that the instance is defined.'
        );
        const {
          id,
          formId,
          accountId,
          clientUserId,
          status,
          instanceMetadata
        } = instance;
        assert.strictEqual(
          accountId,
          ACCOUNT_ID,
          'Ensure that the accountId matches the expected ACCOUNT_ID.'
        );
        assert.strictEqual(
          id,
          INSTANCE_ID,
          'Ensure that the id matches the expected INSTANCE_ID.'
        );
        assert.strictEqual(
          formId,
          FORM_ID,
          'Ensure that the formId matches the expected FORM_ID.'
        );
        assert.notStrictEqual(
          clientUserId,
          undefined,
          'Ensure that the clientUserId is defined.'
        );
        assert.notStrictEqual(
          status,
          undefined,
          'Ensure that the status is defined.'
        );
        assert.notStrictEqual(
          instanceMetadata,
          undefined,
          'Ensure that the instanceMetadata is defined.'
        );
        assert.notStrictEqual(
          instanceMetadata,
          null,
          'Ensure that the instanceMetadata is not null.'
        );
        done();
      })
      .catch((error) => {
        console.error(error);
        assert.fail('Error in getInstance API Call!');
      });
  });

  it('Should get the instance refresh token when proper request is made', (done) => {
    formInstanceManagementApi
      .refreshToken(ACCOUNT_ID, FORM_ID, INSTANCE_ID)
      .then((instance) => {
        assert.notStrictEqual(
          instance,
          undefined,
          'Ensure that the instance is defined.'
        );
        const { id, formUrl, instanceToken, tokenExpirationDateTime } =
          instance || {};
        assert.strictEqual(
          id,
          INSTANCE_ID,
          'Ensure that the id matches the expected INSTANCE_ID.'
        );
        assert.notStrictEqual(
          formUrl,
          undefined,
          'Ensure that the formUrl is defined.'
        );
        assert.notStrictEqual(
          instanceToken,
          undefined,
          'Ensure that the instanceToken is defined.'
        );
        assert.notStrictEqual(
          tokenExpirationDateTime,
          undefined,
          'Ensure that the tokenExpirationDateTime is defined.'
        );
        done();
      })
      .catch((error) => {
        console.error(error);
        assert.fail('Error in refreshToken API Call!');
      });
  });

  // Negative testing

  it('Should throw an error when there is null account id passed in create form instance', (done) => {
    const instanceBody = {
      clientUserId: `asif.sajjad${new Date()}`,
      tags: ['general_details']
    };
    assert.throws(
      () =>
        formInstanceManagementApi.createInstance(instanceBody, null, FORM_ID),
      {
        message:
          "Missing the required parameter 'accountId' when calling createInstance"
      }
    );
    done();
  });

  it('Should throw an error when there is null form id passed in create form instance', (done) => {
    const instanceBody = {
      clientUserId: `asif.sajjad${new Date()}`,
      tags: ['general_details']
    };
    assert.throws(
      () =>
        formInstanceManagementApi.createInstance(
          instanceBody,
          ACCOUNT_ID,
          null
        ),
      {
        message:
          "Missing the required parameter 'formId' when calling createInstance"
      }
    );
    done();
  });

  it('Should throw an error when there is null instance body passed in create form instance', (done) => {
    assert.throws(
      () => formInstanceManagementApi.createInstance(null, ACCOUNT_ID, FORM_ID),
      {
        message:
          "Missing the required parameter 'createInstanceBody' when calling createInstance"
      }
    );
    done();
  });

  it('Should throw an error when there is wrong account id passed in create form instance', (done) => {
    const wrongAccountId = '123abc';
    const instanceBody = {
      clientUserId: `asif.sajjad${new Date()}`,
      tags: ['general_details']
    };
    formInstanceManagementApi
      .createInstance(instanceBody, wrongAccountId, FORM_ID)
      .then((response) => {
        assert.fail('Expecting no response');
      })
      .catch(() => {
        assert.ok('Passed!');
        done();
      });
  });

  it('Should throw an error when there is wrong form id passed in create form instance', (done) => {
    const wrongFormId = '123xyz';
    const instanceBody = {
      clientUserId: `asif.sajjad${new Date()}`,
      tags: ['general_details']
    };
    formInstanceManagementApi
      .createInstance(instanceBody, ACCOUNT_ID, wrongFormId)
      .then((response) => {
        assert.fail('Expecting no response');
      })
      .catch(() => {
        assert.ok('Passed!');
        done();
      });
  });

  it('Should throw an error when there is null account id passed in list form instances', (done) => {
    assert.throws(
      () => formInstanceManagementApi.listInstances(null, FORM_ID),
      {
        message:
          "Missing the required parameter 'accountId' when calling listInstances"
      }
    );
    done();
  });

  it('Should throw an error when there is null form id passed in list form instances', (done) => {
    assert.throws(
      () => formInstanceManagementApi.listInstances(ACCOUNT_ID, null),
      {
        message:
          "Missing the required parameter 'formId' when calling listInstances"
      }
    );
    done();
  });

  it('Should throw an error when there is wrong form id passed in list form instance', (done) => {
    const wrongFormId = '123xyz';

    formInstanceManagementApi
      .listInstances(ACCOUNT_ID, wrongFormId)
      .then((response) => {
        assert.fail('Expecting no response');
      })
      .catch(() => {
        assert.ok('Passed!');
        done();
      });
  });

  it('Should throw an error when there is wrong account id passed in list form instance', (done) => {
    const wrongAccountId = '123abc';

    formInstanceManagementApi
      .listInstances(wrongAccountId, FORM_ID)
      .then((response) => {
        assert.fail('Expecting no response');
      })
      .catch(() => {
        assert.ok('Passed!');
        done();
      });
  });

  it('Should throw an error when there is null account id passed in get form instance', (done) => {
    assert.throws(
      () => formInstanceManagementApi.getInstance(null, FORM_ID, INSTANCE_ID),
      {
        message:
          "Missing the required parameter 'accountId' when calling getInstance"
      }
    );
    done();
  });

  it('Should throw an error when there is null form id passed in get form instance', (done) => {
    assert.throws(
      () =>
        formInstanceManagementApi.getInstance(ACCOUNT_ID, null, INSTANCE_ID),
      {
        message:
          "Missing the required parameter 'formId' when calling getInstance"
      }
    );
    done();
  });

  it('Should throw an error when there is null instance id passed in get form instance', (done) => {
    assert.throws(
      () => formInstanceManagementApi.getInstance(ACCOUNT_ID, FORM_ID, null),
      {
        message:
          "Missing the required parameter 'instanceId' when calling getInstance"
      }
    );
    done();
  });

  it('Should throw an error when there is wrong account id passed in get form instance', (done) => {
    const wrongAccountId = '123abc';

    formInstanceManagementApi
      .getInstance(wrongAccountId, FORM_ID, INSTANCE_ID)
      .then((response) => {
        assert.fail('Expecting no response');
      })
      .catch(() => {
        assert.ok('Passed!');
        done();
      });
  });

  it('Should throw an error when there is wrong form id passed in get form instance', (done) => {
    const wrongFormId = '123xyz';

    formInstanceManagementApi
      .getInstance(ACCOUNT_ID, wrongFormId, INSTANCE_ID)
      .then((response) => {
        assert.fail('Expecting no response');
      })
      .catch(() => {
        assert.ok('Passed!');
        done();
      });
  });

  it('Should throw an error when there is wrong instance id passed in get form instance', (done) => {
    const wrongInstanceId = '123lmn';

    formInstanceManagementApi
      .getInstance(ACCOUNT_ID, FORM_ID, wrongInstanceId)
      .then((response) => {
        assert.fail('Expecting no response');
      })
      .catch(() => {
        assert.ok('Passed!');
        done();
      });
  });

  it('Should throw an error when there is null account id passed in refresh token', (done) => {
    assert.throws(
      () => formInstanceManagementApi.refreshToken(null, FORM_ID, INSTANCE_ID),
      {
        message:
          "Missing the required parameter 'accountId' when calling refreshToken"
      }
    );
    done();
  });

  it('Should throw an error when there is null form id passed in refresh token', (done) => {
    assert.throws(
      () =>
        formInstanceManagementApi.refreshToken(ACCOUNT_ID, null, INSTANCE_ID),
      {
        message:
          "Missing the required parameter 'formId' when calling refreshToken"
      }
    );
    done();
  });

  it('Should throw an error when there is null instance id passed in refresh token', (done) => {
    assert.throws(
      () => formInstanceManagementApi.refreshToken(ACCOUNT_ID, FORM_ID, null),
      {
        message:
          "Missing the required parameter 'instanceId' when calling refreshToken"
      }
    );
    done();
  });

  it('Should throw an error when there is wrong account id passed in refresh token', (done) => {
    const wrongAccountId = '123abc';

    formInstanceManagementApi
      .refreshToken(wrongAccountId, FORM_ID, INSTANCE_ID)
      .then((response) => {
        assert.fail('Expecting no response');
      })
      .catch(() => {
        assert.ok('Passed!');
        done();
      });
  });

  it('Should throw an error when there is wrong form id passed in refresh token', (done) => {
    const wrongFormId = '123xyz';

    formInstanceManagementApi
      .refreshToken(ACCOUNT_ID, wrongFormId, INSTANCE_ID)
      .then((response) => {
        assert.fail('Expecting no response');
      })
      .catch(() => {
        assert.ok('Passed!');
        done();
      });
  });

  it('Should throw an error when there is wrong instance id passed in refresh token', (done) => {
    const wrongInstanceId = '123lmn';

    formInstanceManagementApi
      .refreshToken(ACCOUNT_ID, FORM_ID, wrongInstanceId)
      .then((response) => {
        assert.fail('Expecting no response');
      })
      .catch(() => {
        assert.ok('Passed!');
        done();
      });
  });
});
