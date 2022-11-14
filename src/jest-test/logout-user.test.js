import { expect, jest, it } from '@jest/globals';
import clearDataFromStorage from '../js/utils/clear-storage';

it('Check if mockToken is removed when clicking logoutBtn', () => {
  const MOK_KEY = 'token';
  const MOK_VALUE = 'B2heh!rk8943ffg';
  localStorage.setItem(MOK_KEY, MOK_VALUE);
  expect(localStorage.__STORE__[MOK_KEY]).toEqual(MOK_VALUE);
  console.log('Token before: ', localStorage.__STORE__[MOK_KEY]);
  clearDataFromStorage();
  expect(localStorage.__STORE__[MOK_KEY]).toBeUndefined();
  console.log('Token after: ', localStorage.__STORE__[MOK_KEY]);
});
