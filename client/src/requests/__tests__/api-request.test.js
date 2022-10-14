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
  uninstalledBody,
  uninstalledResponse,
  updateAccount,
  updateToken,
} from '../__mocks__/api-request.mocks';

jest.mock('axios');

/* TODO: Change the way getUserInfo works */
describe('api-request - getUserInfo', () => {
  it('should return user info - when we have cookies from login', async () => {
    axios.mockResolvedValueOnce({
      data: getAllUsers,
    });

    const result = await request.getUserInfo();

    expect(result).toEqual(getAllUsers);
  });
  it('should NOT return userinfo - no cookies', async () => {
    const result = await request.getUserInfo();
    expect(result).toContainEqual({statusCode: 401});
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

/* TODO: Change the way createAccount works */
describe('api-request - createAccount', () => {
  it('should create account', async () => {
    axios.mockResolvedValueOnce({
      data: createAccount,
    });

    const result = await request.createAccount({
      username: 'some@place.com',
      password: '20eofkvn85',
    });

    expect(result).toEqual(createAccount);
  });
});

describe('api-request - forgotPassword', () => {
  it('should redirect user to forgot password page', async () => {f
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
      username: 'some@place.com',
      password: 'ndf89ner',
    });

    // expect(result).toEqual(createAccount);
    expect(result).toContainEqual({statusCode: 201});
  });
});

/* TODO: Change the way UpdateAccountCategory is setup */
describe('api-request - updateAccountCategory', () => {
  it('should update account category', async () => {
    axios.mockResolvedValueOnce({
      data: defaultResponse,
    });

    const result = await request.updateAccountCategory({
      categories: '[3,5,7,10]',
    });

    expect(result).toEqual(defaultResponse);
  });
});

/* TODO: updateTokens uses CommunityTokens, so need to change that */
describe('api-request - updateTokens', () => {
  it('should update tokens', async () => {
    axios.mockResolvedValueOnce({
      data: updateToken,
    });

    const result = await request.updateTokens({
      total: '100',
      tasks: '{"account":true,"shop":true}',
    });

    expect(result).toEqual(updateToken);
  });
  /* TODO: Test Case where updateTokens return 401 because of unauthorized */
});

/* TODO: UpdateAccount uses cookies which is received from sign in */
describe('api-request - updateAccount', () => {
  it('should update account', async () => {
    axios.mockResolvedValueOnce({
      data: updateAccount,
    });

    const result = await request.updateAccount(accountBody);

    expect(result).toEqual(updateAccount);
  });
  /* TODO: Case where updateAccount is 401 because no cookies */
});

/* TODO: updateLockedItems uses Community endpoint instead of account endpoint */
describe('api-request - updateLockedItems', () => {
  it('should update locked items', async () => {
    axios.mockResolvedValueOnce({
      data: defaultResponse,
    });

    const result = await request.updateLockedItems({
      unlocked:
        '{"games":[1,2,3,7,6,4,5],"tvShows":[1,2,3],"music":[1,2,3],"vlogs":[1,2,3],"podcast":[1,2,3],"reels":[1,2,3]}',
    });

    expect(result).toEqual(defaultResponse);
  });
  /* TODO: Case of 401; no cookies */
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

/* TODO: See if we need to change the way updateFavorties is called */
describe('api-request - updateFavorites', () => {
  it('should update favorites', async () => {
    axios.mockResolvedValueOnce({
      data: defaultResponse,
    });

    const result = await request.updateFavorites({
      favorites:
        '["prod_L02g4odjdk6EXy","prod_KzjerxJxMY9MmC","prod_Jty71KKG2wCRD3"]',
    });

    expect(result).toEqual(defaultResponse);
  });
  /* TODO: case of 401; no cookie */
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
