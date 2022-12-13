import { describe, expect, test } from '@jest/globals';
import * as accountUtils from '../account-utils';
import * as utils from '..';
import * as apiRequest from '../../requests/api-request';
import * as analyticsRequest from '../../requests/analytics-request';
import { accountInfo, hasAvailableTokens, noAvailableTokens, sampleAccount } from '../__mocks__/account-utils.mocks';

export const simpleLogin = async () => {
  const setTempCookie = (token) => {
    accountUtils.setLoginCookie(token);
  };
  const response = await apiRequest.signIn({email: sampleAccount.email, password: sampleAccount.password});
  setTempCookie(response.token);
  // return response;
};
export const removeLoginCredentials = () => {
  accountUtils.removeLoginToken();
};

/* TODO: Needs a Review */
describe('account - setUserAccount', () => {
  test('should set user account', () => {
    const setItem = jest.spyOn(utils, 'setItem');
    accountUtils.setUserAccount(accountInfo);

    expect(setItem).toHaveBeenCalled();
  });
});

/* TODO: Need a Review */
describe('account - updateUserTokens', () => {
  // TODO: Needs a Review
  test('should update user tokens - cookie', async () => {
    // First login to generate a cookie for test requests...
    simpleLogin();

    const getItem = jest.spyOn(utils, 'getItem');
    const setItem = jest.spyOn(utils, 'setItem');
    const updateTokens = jest.spyOn(apiRequest, 'updateTokens');
    
    getItem.mockReturnValue(100);
    updateTokens.mockReturnValue(hasAvailableTokens);
    
    const updateUser = await accountUtils.updateUserTokens(3, {});

    expect(getItem).toHaveBeenCalled();
    expect(updateTokens).toHaveBeenCalled();
    expect(setItem).toHaveBeenCalled();
    expect(updateUser).toEqual(true);

    // BE SURE TO REMOVE THE LOGIN CREDENTIALS
    removeLoginCredentials();
  });

  test('should not update user token - no cookie', async () => {
    const getItem = jest.spyOn(utils, 'getItem');
    const updateTokens = jest.spyOn(apiRequest, 'updateTokens');
    
    getItem.mockReturnValue(100);
    updateTokens.mockReturnValue(noAvailableTokens);
    
    const updateUser = await accountUtils.updateUserTokens(3, {});

    expect(getItem).toHaveBeenCalled();
    expect(updateTokens).toHaveBeenCalled();
    expect(updateUser).toEqual(false);
  });
});

describe('account - goToSignIn', () => {
  test('should take user to sign in page', () => {
    const addEvent = jest.spyOn(analyticsRequest, 'addEvent');
    const targetPage = jest.spyOn(utils, 'targetPage');
    
    targetPage.mockReturnValue(null);
    accountUtils.goToSignIn('page', 'screen');

    expect(addEvent).toHaveBeenCalled();
    expect(targetPage).toHaveBeenCalled();
  });
});
