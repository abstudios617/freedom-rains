import { client } from './client-request';
import { api, printfulUrl, printfulStoreId, printfulKey } from '../config';

/************************
	GET Method
************************/

export const getUserInfo = async (token) => {
  const url = `${api}/login`;
  const userInfo = await client(url, null, token);

  return userInfo;
};

/************************
	POST Method
************************/
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
  const url = `${api}/login/category`;

  return await client(url, val, token);
};

export const updateTokens = async (val, token) => {
  const url = `${api}/login/token`;

  return await client(url, val, token);
};

export const updateAccount = async (val, token) => {
  const url = `${api}/login/update`;

  return await client(url, val, token);
};

export const updateLockedItems = async (val, token) => {
  const url = `${api}/login/unlock`;

  return await client(url, val, token);
};

export const getAllProducts = async () => {
  const url = `${api}/products`;

  return await client(url, null);
};

export const updateFavorites = async (val, token) => {
  const url = `${api}/login/favs`;

  return await client(url, val, token);
};

export const getPrintfulProducts = async () => {
  const url = printfulUrl;
  const val = {
    'store_id': printfulStoreId
  };

  return await client(url, val, printfulKey);
};

export const getSpecificPrintfulProducts = async (productId) => {
  const url = `${printfulUrl}/${productId}`;
  const val = {
    'store_id': printfulStoreId
  };

  return await client(url, val, printfulKey);
};
