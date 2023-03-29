import { selectorFamily, atom, selector } from 'recoil';

import {
  isBirthDay,
  isCheck,
  isEmail,
  isId,
  isPassword,
  isPhoneNumber,
} from '@/util/validator';

export const idState = atom({
  key: 'idState',
  default: '',
  effects: [
    ({ onSet }) => {
      onSet((newValue) => {
        console.log('new Id State Value', newValue);
      });
    },
  ],
});
export const pwState = atom({ key: 'pwState', default: '' });
export const repwState = atom({ key: 'repwState', default: '' });
export const nameState = atom({ key: 'nameState', default: '' });
export const emailState = atom({ key: 'emailState', default: '' });
export const phoneState = atom({ key: 'phoneState', default: '' });
export const addressState = atom({ key: 'addressState', default: '' });
export const genderState = atom({ key: 'genderState', default: '2' });
export const birthState = atom({ key: 'birthState', default: '' });
export const additionalState = atom({
  key: 'additionalState',
  default: [false, false],
});

export const etcState = atom({
  key: 'etcState',
  default: [false, false, false, false],
});

export const etcIsAllAgree = selector({
  key: 'etcIsAllAgree',
  get: ({ get }) => {
    const etcStateList = get(etcState);

    return !etcStateList.includes(false);
  },
});

/* ------------------------------- validation ------------------------------- */
export const idValidation = selectorFamily({
  key: 'idValidation',
  get:
    ({ min, max } = {}) =>
    ({ get }) => {
      return isId(get(idState), { min, max });
    },
});

/* -------------------------------------------------------------------------- */

export const pwValidation = selectorFamily({
  key: 'pwValidation',
  get:
    ({ min, max, isStrong } = {}) =>
    ({ get }) => {
      return isPassword(get(pwState), { min, max, isStrong });
    },
});

export const repwValidation = selector({
  key: 'repwValidation',
  get: ({ get }) => {
    return get(pwState) === get(repwState);
  },
});

export const nameValidation = selector({
  key: 'nameValidation',
  get: ({ get }) => {
    return isCheck(get(nameState), '한영');
  },
});

export const emailValidation = selector({
  key: 'emailValidation',
  get: ({ get }) => {
    return isEmail(get(emailState));
  },
});

export const phoneValidation = selectorFamily({
  key: 'phoneValidation',
  get:
    ({ withoutHypen }) =>
    ({ get }) => {
      return isPhoneNumber(get(phoneState), withoutHypen);
    },
});

export const birthValidation = selector({
  key: 'birthValidation',
  get: ({ get }) => {
    return isBirthDay(get(birthState));
  },
});

/* -------------------------------------------------------------------------- */

export const isLoading = atom({
  key: 'isLoading',
  default: false
});

export const error = atom({
  key: 'error',
  default: null
});

export const userInfo = atom({
  key: 'userInfo',
  default: null
});