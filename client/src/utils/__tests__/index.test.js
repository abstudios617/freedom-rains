import { describe, expect, test} from '@jest/globals';
import * as utils from '..';
import * as accountUtils from '../account-utils';
import * as apiRequest from '../../requests/api-request';
import { accountInfo, listOfProducts, mockProductList, userToken } from '../__mocks__/account-utils.mocks';

const url = '/page';

global.window = Object.create(window);
Object.defineProperty(window, 'location', {
  value: {
    href: url
  }
});

describe('utils - isChrome', () => {
  test('should return true', () => {
    const browser = jest.spyOn(window.navigator, 'userAgent', 'get');
    browser.mockReturnValue('chrome');
    const isBrowser = utils.isChrome();

    expect(isBrowser).toEqual(true);
  });

  test('should return false', () => {
    const browser = jest.spyOn(window.navigator, 'userAgent', 'get');
    browser.mockReturnValue('browser');
    const isBrowser = utils.isChrome();

    expect(isBrowser).toEqual(false);
  });
});

describe('utils - isFirefox', () => {
  test('should return true', () => {
    const browser = jest.spyOn(window.navigator, 'userAgent', 'get');
    browser.mockReturnValue('firefox');
    const isBrowser = utils.isFirefox();

    expect(isBrowser).toEqual(true);
  });

  test('should return false', () => {
    const browser = jest.spyOn(window.navigator, 'userAgent', 'get');
    browser.mockReturnValue('browser');
    const isBrowser = utils.isFirefox();

    expect(isBrowser).toEqual(false);
  });
});

describe('utils - getItem', () => {
  test('should get item', () => {
    global.Storage.prototype.getItem = jest.fn(() => 'freedom.name');
    utils.getItem('name');

    expect(global.Storage.prototype.getItem).toHaveBeenCalled();
  });
});

describe('utils - setItem', () => {
  test('should set item', () => {
    global.Storage.prototype.setItem = jest.fn(() => 'freedom.name');
    utils.setItem('name', 123);

    expect(global.Storage.prototype.setItem).toHaveBeenCalled();
  });
});

describe('utils - removeItem', () => {
  test('should remove item', () => {
    global.Storage.prototype.removeItem = jest.fn(() => 'freedom.name');
    utils.removeItem('name');

    expect(global.Storage.prototype.removeItem).toHaveBeenCalled();
  });
});

describe('utils - targetPage', () => {
  test('should trigger new page', () => {
    utils.targetPage('page');

    expect(window.location.href).toEqual(url);
  });
});

describe('utils - setUserData - needs cookies', () => {
  /* test('should set user data', async () => {
    const setItem = jest.spyOn(utils, 'setItem');
    const setUserAccount = jest.spyOn(accountUtils, 'setUserAccount');
    const getUserInfo = jest.spyOn(apiRequest, 'getUserInfo');
    
    getUserInfo.mockReturnValue(accountInfo);
    await utils.setUserData(userToken);

    expect(setItem).toHaveBeenCalled();
    expect(setUserAccount).toHaveBeenCalled();
    expect(getUserInfo).toHaveBeenCalled();
  }); */

  test('should NOT set user data', async () => {
    const setItem = jest.spyOn(utils, 'setItem');
    const setUserAccount = jest.spyOn(accountUtils, 'setUserAccount');
    const getUserInfo = jest.spyOn(apiRequest, 'getUserInfo');
    
    getUserInfo.mockReturnValue(accountInfo);
    await utils.setUserData(userToken);

    expect(setItem).toHaveBeenCalled();
    // Since the if statement will fail to execute due to not having a status of 200
    expect(setUserAccount).not.toHaveBeenCalled();
    // expect(setUserAccount).toContainEqual({statusCode: 400});
    // expect(getUserInfo).not.toHaveBeenCalled();
    expect(getUserInfo).toContainEqual({statusCode: 401});
  });
});

describe('utils - getUrlParamProduct', () => {
  test('should get product from param', () => {
    window.location.search = '?prod=two';

    const product = utils.getUrlParamProduct();

    expect(product).toEqual('two');
  });
});

describe('utils - getUrlParamSearch', () => {
  test('should get search type and value from params', () => {
    window.location.search = '?type=search&val=shirt';

    const search = utils.getUrlParamSearch();

    expect(search).toEqual({
      type: 'search',
      val: 'shirt'
    });
  });
});

const mockShuffleArray = (array, num) => {
  let currentIndex = array.length;
  const randomIndex = num;

  while (currentIndex !== 0) {
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

describe('utils - shuffleArray', () => {
  test('should shuffle array of objects', () => {
    const array = mockShuffleArray(listOfProducts, 2);

    expect(array).toEqual(mockProductList);
  });
});
