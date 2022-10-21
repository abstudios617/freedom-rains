//All of these tests are out dated and need to be redone. Please leave this for when ty gets


import axios from 'axios';
import { describe, expect, it } from '@jest/globals';
import * as request from '../api-request';
import {
  // accountBody,
  allProducts,
  // couponResponse,
  // createAccount,
  // defaultResponse,
  // getAllUsers,
  // getLeads,
  // printfulResponse,
  // printfulSpecificProdResponse,
  // uninstalledBody,
  // uninstalledResponse,
  // updateAccount,
  // updateToken,
} from '../__mocks__/api-request.mocks';

jest.mock('axios');

// describe('api-request - getUserInfo', () => {
//   it('should return user info', async () => {
//     axios.mockResolvedValueOnce({
//       data: getAllUsers,
//     });

//     const result = await request.getUserInfo('token');

//     expect(result).toEqual(getAllUsers);
//   });
// });

// describe('api-request - addLead', () => {
//   it('should add lead', async () => {
//     axios.mockResolvedValueOnce({
//       data: getLeads,
//     });

//     const result = await request.addLead({
//       first_name: 'john',
//       last_name: 'doe',
//       email: 'some@place.com',
//       affiliate: 'ABS',
//       zip: '10294',
//     });

//     expect(result).toEqual(getLeads);
//   });
// });

// describe('api-request - uninstallUser', () => {
//   it('should let user uninstall chrome extension', async () => {
//     axios.mockResolvedValueOnce({
//       data: uninstalledResponse,
//     });

//     const result = await request.uninstallUser(uninstalledBody);

//     expect(result).toEqual(uninstalledResponse);
//   });
// });

// describe('api-request - couponScraper', () => {
//   it('should scrape coupons', async () => {
//     axios.mockResolvedValueOnce({
//       data: couponResponse,
//     });

//     const result = await request.couponScraper({
//       site: 'google.com'
//     });

//     expect(result).toEqual(couponResponse);
//   });
// });

// describe('api-request - createAccount', () => {
//   it('should create account', async () => {
//     axios.mockResolvedValueOnce({
//       data: createAccount,
//     });

//     const result = await request.createAccount({
//       username: 'some@place.com',
//       password: '20eofkvn85',
//     });

//     expect(result).toEqual(createAccount);
//   });
// });

// describe('api-request - forgotPassword', () => {
//   it('should redirect user to forgot password page', async () => {
//     axios.mockResolvedValueOnce({
//       data: defaultResponse,
//     });

//     const result = await request.forgotPassword({
//       email: 'some@place.com',
//     });

//     expect(result).toEqual(defaultResponse);
//   });
// });

// describe('api-request - signIn', () => {
//   it('should sign in', async () => {
//     axios.mockResolvedValueOnce({
//       data: createAccount,
//     });

//     const result = await request.signIn({
//       username: 'some@place.com',
//       password: 'ndf89ner',
//     });

//     expect(result).toEqual(createAccount);
//   });
// });

// describe('api-request - updateAccountCategory', () => {
//   it('should update account category', async () => {
//     axios.mockResolvedValueOnce({
//       data: defaultResponse,
//     });

//     const result = await request.updateAccountCategory({
//       categories: '[3,5,7,10]',
//     });

//     expect(result).toEqual(defaultResponse);
//   });
// });

// describe('api-request - updateTokens', () => {
//   it('should update tokens', async () => {
//     axios.mockResolvedValueOnce({
//       data: updateToken,
//     });

//     const result = await request.updateTokens({
//       total: '100',
//       tasks: '{"account":true,"shop":true}',
//     });

//     expect(result).toEqual(updateToken);
//   });
// });

// describe('api-request - updateAccount', () => {
//   it('should update account', async () => {
//     axios.mockResolvedValueOnce({
//       data: updateAccount,
//     });

//     const result = await request.updateAccount(accountBody);

//     expect(result).toEqual(updateAccount);
//   });
// });

// describe('api-request - updateLockedItems', () => {
//   it('should update locked items', async () => {
//     axios.mockResolvedValueOnce({
//       data: defaultResponse,
//     });

//     const result = await request.updateLockedItems({
//       unlocked:
//         '{"games":[1,2,3,7,6,4,5],"tvShows":[1,2,3],"music":[1,2,3],"vlogs":[1,2,3],"podcast":[1,2,3],"reels":[1,2,3]}',
//     });

//     expect(result).toEqual(defaultResponse);
//   });
// });

describe('api-request - getAllProducts', () => {
  it('should get all products', async () => {
    axios.mockResolvedValueOnce({
      data: allProducts,
    });

    const result = await request.getAllProducts();

    expect(result).toEqual(allProducts);
  });
});

// describe('api-request - updateFavorites', () => {
//   it('should update favorites', async () => {
//     axios.mockResolvedValueOnce({
//       data: defaultResponse,
//     });

//     const result = await request.updateFavorites({
//       favorites:
//         '["prod_L02g4odjdk6EXy","prod_KzjerxJxMY9MmC","prod_Jty71KKG2wCRD3"]',
//     });

//     expect(result).toEqual(defaultResponse);
//   });
// });

// describe('api-request - getPrintfulProducts', () => {
//   it('should get printful products', async () => {
//     axios.mockResolvedValueOnce({
//       data: printfulResponse,
//     });

//     const result = await request.getPrintfulProducts({
//       store_id: 98654366,
//     });

//     expect(result).toEqual(printfulResponse);
//   });
// });

// describe('api-request - getSpecificPrintfulProduct', () => {
//   it('should get specific printful product', async () => {
//     axios.mockResolvedValueOnce({
//       data: printfulSpecificProdResponse,
//     });

//     const result = await request.getSpecificPrintfulProducts({
//       store_id: 98654366,
//     });

//     expect(result).toEqual(printfulSpecificProdResponse);
//   });
// });
