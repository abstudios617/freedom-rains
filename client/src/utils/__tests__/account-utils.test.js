import { describe, expect, test } from '@jest/globals';
import * as accountUtils from '../account-utils';
import * as utils from '..';
import * as apiRequest from '../../requests/api-request';
import * as analyticsRequest from '../../requests/analytics-request';
import { accountInfo, hasAvailableTokens, noAvailableTokens, userToken } from '../__mocks__/account-utils.mocks';

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
  /* test('should update user token - no cookie', async () => {
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
  });
  */

  test('should not update user token - no cookie', async () => {
    const getItem = jest.spyOn(utils, 'getItem');
    const updateTokens = jest.spyOn(apiRequest, 'updateTokens');
    
    getItem.mockReturnValue(100);
    updateTokens.mockReturnValue(noAvailableTokens);
    
    const updateUser = await accountUtils.updateUserTokens(3, {});

    expect(getItem).not.toHaveBeenCalled();
    expect(updateTokens).not.toHaveBeenCalled();
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
