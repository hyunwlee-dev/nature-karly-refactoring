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

export const isIdDuplication = atom({
  key: 'isIdDuplication',
  default: false,
});

export const idTotalValidation = selector({
  key: 'idTotalValidation',
  get: ({ get }) => {
    const idValid = get(idValidation());
    const idDuplicatedValid = get(isIdDuplication);
    if (idValid && idDuplicatedValid) return 'perfect';
    if (idValid) return 'nice';

    return 'good';
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

/* -------------------------------------------------------------------------- */

export const repwValidation = selector({
  key: 'repwValidation',
  get: ({ get }) => {
    const pwStateVal = get(pwState);
    const repwStateVal = get(repwState);

    return repwStateVal.length > 0 && pwStateVal === repwStateVal;
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
