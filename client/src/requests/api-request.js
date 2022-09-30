import { client } from './client-request';
import { api, printfulUrl, printfulStoreId, printfulKey } from '../config';

/************************
	GET Method
************************/

export const getUserInfo = async () => {
  const url = `${api}/user`;
  const userInfo = await client(url, null);

  return userInfo;
};

export const getCommunityInfo = async () => {
  const url = `${api}/community/user`;

  return await client(url, null);
}

/************************
	POST Method
************************/
export const createCommunityUser = async (val) => {
  const url = `${api}/community/user`;

  return await client(url, val);
}

export const contactUs = async (val) => {
  const url = `${api}/users/contactUs`;

  return await client(url, val);
};

export const addLead = async (val) => {
  const url = `${api}/leads/create`;

  return await client(url, val);
};

export const uninstallUser = async (val) => {
  const url = `${api}/uninstalled/create`;

  return await client(url, val);
};

export const couponScraper = async (val) => {
  const url = `${api}/scrap/coupon/${val}`;

  return await client(url);
};

export const createAccount = async (val) => {
  const url = `${api}/users/create`;

  return await client(url, val);
};

export const forgotPassword = async (val) => {
  const url = `${api}/login/forgot`;

  return await client(url, val);
};

export const signIn = async (val) => {
  const url = `${api}/users/login`;

  return await client(url, val);
};

export const updateAccountCategory = async (val, token) => {
  const url = `${api}/users/update`;

  return await client(url, val, {key: "update"});
};

export const updateTokens = async (val, token) => { /* Community */
  const url = `${api}/community/user/update`;

  return await client(url, val, {key: "update"});
};

export const updateAccount = async (val, token) => {
  const url = `${api}/users/update`;

  return await client(url, val, {key: "update"});
};

export const updateLockedItems = async (val, token) => {
  const url = `${api}/community/user/update`; /* Community_Tokens has access to it, will change it later... */

  return await client(url, val, {key: "update"});
};

export const getAllProducts = async () => {
  const url = `${api}/products`;

  return await client(url, null);
};

export const updateFavorites = async (val, token) => {
  const url = `${api}/users/update`;

  return await client(url, val, {key: "update"});
};

export const getPrintfulProducts = async () => {
  const url = printfulUrl;
  const val = {
    'store_id': printfulStoreId
  };

  return await client(url, val, {key: "printful", value: printfulKey});
};

export const getSpecificPrintfulProducts = async (productId) => {
  const url = `${printfulUrl}/${productId}`;
  const val = {
    'store_id': printfulStoreId
  };

  return await client(url, val, {key: "printful", value: printfulKey});
};
