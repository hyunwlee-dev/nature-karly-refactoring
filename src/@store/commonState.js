import { atom } from 'recoil';

export const isLoadingState = atom({
  key: 'isLoading',
  default: false,
});

export const errorState = atom({
  key: 'error',
  default: null,
});

export const userInfoState = atom({
  key: 'userInfo',
  default: null,
});
