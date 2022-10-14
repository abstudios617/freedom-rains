import axios from 'axios';
import { describe, expect, it } from '@jest/globals';
import * as request from '../api-request';
import {
  accountBody,
  allProducts,
  couponResponse,
  createAccount,
  defaultResponse,
  getAllUsers,
  getLeads,
  printfulResponse,
  printfulSpecificProdResponse,
  sampleAccountData,
  uninstalledBody,
  uninstalledResponse,
  updateAccount,
  updateToken,
} from '../__mocks__/api-request.mocks';
import { removeLoginCredentials, simpleLogin } from '../../utils/__tests__/account-utils.test';

jest.mock('axios');

/* TODO: Review Change the way getUserInfo works */
describe('api-request - getUserInfo', () => {
  it('should return user info - when we have cookies from login', async () => {
    // Login to generate cookies...
    simpleLogin();

    axios.mockResolvedValueOnce({
      data: sampleAccountData,
    });

    const result = await request.getUserInfo();

    expect(result).toEqual(sampleAccountData);

    // Be sure to sign out...
    removeLoginCredentials();
  });

  it('should NOT return userinfo - no cookies', async () => {
    const result = await request.getUserInfo();
    expect(result).toHaveProperty("statusCode", 401);
  })
});

describe('api-request - addLead', () => {
  it('should add lead', async () => {
    axios.mockResolvedValueOnce({
      data: getLeads,
    });

    const result = await request.addLead({
      first_name: 'john',
      last_name: 'doe',
      email: 'some@place.com',
      affiliate: 'ABS',
      zip: '10294',
    });

    expect(result).toEqual(getLeads);
  });
});

describe('api-request - uninstallUser', () => {
  it('should let user uninstall chrome extension', async () => {
    axios.mockResolvedValueOnce({
      data: uninstalledResponse,
    });

    const result = await request.uninstallUser(uninstalledBody);

    expect(result).toEqual(uninstalledResponse);
  });
});

describe('api-request - couponScraper', () => {
  it('should scrape coupons', async () => {
    axios.mockResolvedValueOnce({
      data: couponResponse,
    });

    const result = await request.couponScraper({
      site: 'google.com'
    });

    expect(result).toEqual(couponResponse);
  });
});

/* TODO: Review Change the way createAccount works */
describe('api-request - createAccount', () => {
  it('should create new account', async () => {
    axios.mockResolvedValueOnce({
      data: createAccount,
    });

    const result = await request.createAccount({
      first_name: "Three",
      last_name: "Two",
      email: 'three@twoone.com',
      password: '20eofkvn85',
    });

    expect(result).toHaveProperty("statusCode", 200);
  });

  it('should NOT create new account - same email', async () => {
    const result = await request.createAccount({
      first_name: "First",
      last_name: "Last",
      email: "test2@test.com",
      password: '20eofkvn85',
    });

    expect(result).toHaveProperty("statusCode", 400);
  });
});

describe('api-request - forgotPassword', () => {
  it('should redirect user to forgot password page', async () => {
    axios.mockResolvedValueOnce({
      data: defaultResponse,
    });

    const result = await request.forgotPassword({
      email: 'some@place.com',
    });

    expect(result).toEqual(defaultResponse);
  });
});

/* TODO: Check if signIn test is valid */
describe('api-request - signIn', () => {
  it('should sign in - returns cookie', async () => {
    // axios.mockResolvedValueOnce({
    //   data: createAccount,
    // });

    const result = await request.signIn({
      email: 'test2@test.com',
      password: 'Whoops1234',
    });

    // expect(result).toEqual(createAccount);
    expect(result).toHaveProperty("statusCode", 201);
  });
});

/* TODO: Review the way UpdateAccountCategory is setup */
describe('api-request - updateAccountCategory', () => {
  // Login...
  simpleLogin();

  it('should update account category', async () => {
    axios.mockResolvedValueOnce({
      data: defaultResponse,
    });

    const result = await request.updateAccountCategory({
      categories: '[3,5,7,10]',
    });

    expect(result).toEqual(defaultResponse);

    // Logout...
    removeLoginCredentials();
  });
});

/* TODO: Review updateTokens test */
describe('api-request - updateTokens', () => {
  it('should update tokens', async () => {
    // Login
    simpleLogin();

    const result = await request.updateTokens({
      total: '100',
      tasks: '{"account":true,"shop":true}',
    });

    expect(result).toHaveProperty("statusCode", 200);

    // Logout...
    removeLoginCredentials();
  });
  /* TODO: Review Test Case where updateTokens return 401 because of unauthorized */
  it('should NOT update tokens', async () => {
    const result = await request.updateTokens({
      total: '100',
      tasks: '{"account":true,"shop":true}',
    });

    expect(result).toHaveProperty("statusCode", 401);
  });
});

/* TODO: Review UpdateAccount uses cookies which is received from sign in */
describe('api-request - updateAccount', () => {
  it('should update account', async () => {
    // Login
    simpleLogin();

    const result = await request.updateAccount(accountBody);

    expect(result).toHaveProperty("statusCode", 200);

    // Logout
    removeLoginCredentials();
  });
  /* TODO: Review Case where updateAccount is 401 because no cookies */
  it('should NOT update account - no user found', async () => {
    const result = await request.updateAccount(accountBody);

    expect(result).toHaveProperty("statusCode", 401);
  });
});

/* TODO: Review updateLockedItems uses Community endpoint instead of account endpoint */
describe('api-request - updateLockedItems', () => {
  it('should update locked items', async () => {
    // login
    simpleLogin();
    axios.mockResolvedValueOnce({
      data: defaultResponse,
    });

    const result = await request.updateLockedItems({
      unlocked:
        '{"games":[1,2,3,7,6,4,5],"tvShows":[1,2,3],"music":[1,2,3],"vlogs":[1,2,3],"podcast":[1,2,3],"reels":[1,2,3]}',
    });

    expect(result).toEqual(defaultResponse);
    // logout
    removeLoginCredentials();
  });
  /* TODO: Review Case of 401; no cookies */
  it('should NOT update locked items - no user found', async () => {
    const result = await request.updateLockedItems({
      unlocked:
        '{"games":[1,2,3,7,6,4,5],"tvShows":[1,2,3],"music":[1,2,3],"vlogs":[1,2,3],"podcast":[1,2,3],"reels":[1,2,3]}',
    });

    expect(result).toHaveProperty("statusCode", 401);
  });
});

describe('api-request - getAllProducts', () => {
  it('should get all products', async () => {
    axios.mockResolvedValueOnce({
      data: allProducts,
    });

    const result = await request.getAllProducts();

    expect(result).toEqual(allProducts);
  });
});

/* TODO: Review See if we need to change the way updateFavorties is called */
describe('api-request - updateFavorites', () => {
  it('should update favorites', async () => {
    // Login
    simpleLogin();

    axios.mockResolvedValueOnce({
      data: defaultResponse,
    });

    const result = await request.updateFavorites({
      favorites:
        '["prod_L02g4odjdk6EXy","prod_KzjerxJxMY9MmC","prod_Jty71KKG2wCRD3"]',
    });

    expect(result).toEqual(defaultResponse);

    // Logout
    removeLoginCredentials();
  });
  /* TODO: Review case of 401; no cookie */
  it('should update favorites', async () => {
    const result = await request.updateFavorites({
      favorites:
        '["prod_L02g4odjdk6EXy","prod_KzjerxJxMY9MmC","prod_Jty71KKG2wCRD3"]',
    });

    expect(result).toHaveProperty("statusCode", 401);
  });
});

describe('api-request - getPrintfulProducts', () => {
  it('should get printful products', async () => {
    axios.mockResolvedValueOnce({
      data: printfulResponse,
    });

    const result = await request.getPrintfulProducts({
      store_id: 98654366,
    });

    expect(result).toEqual(printfulResponse);
  });
});

describe('api-request - getSpecificPrintfulProduct', () => {
  it('should get specific printful product', async () => {
    axios.mockResolvedValueOnce({
      data: printfulSpecificProdResponse,
    });

    const result = await request.getSpecificPrintfulProducts({
      store_id: 98654366,
    });

    expect(result).toEqual(printfulSpecificProdResponse);
  });
});
