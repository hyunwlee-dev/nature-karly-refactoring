import { useId, Fragment } from 'react';

import { useSetRecoilState } from 'recoil';

import classes from './SignUp.module.css';
import {
  additionalState,
  addressState,
  birthState,
  emailState,
  etcState,
  genderState,
  idState,
  nameState,
  phoneState,
  pwState,
  repwState,
} from '@/@store/signUpState';
import { Button, Label } from '@/components';
import { Fieldset } from '@/components/Fieldset/Fieldset';
import { IconComponent } from '@/components/IconComponent/IconComponent';
import { AdditionalInput } from '@/components/Input/Checkbox/AdditionalInput';
import { EtcInput } from '@/components/Input/Checkbox/EtcInput';
import { BirthInput } from '@/components/Input/General/BirthInput';
import { EmailInput } from '@/components/Input/General/EmailInput';
import { IdInput } from '@/components/Input/General/IdInput';
import { NameInput } from '@/components/Input/General/NameInput';
import { PhoneInput } from '@/components/Input/General/PhoneInput';
import { PwInput } from '@/components/Input/General/PwInput';
import { RepwInput } from '@/components/Input/General/RepwInput';
import { GenderInput } from '@/components/Input/Radio/GenderInput';
import { BirthValidation } from '@/components/InputValidation/Birth/BirthValidation';
import { EmailValidation } from '@/components/InputValidation/Email/EmailValidation';
import { IdValidation } from '@/components/InputValidation/Id/IdValidation';
import { NameValidation } from '@/components/InputValidation/Name/NameValidation';
import { PasswordValidation } from '@/components/InputValidation/Password/passwordValidation';
import { PhoneValidation } from '@/components/InputValidation/Phone/PhoneValidation';
import { RePasswordValidation } from '@/components/InputValidation/RePassword/RePasswordValidation';
import { useDocumentTitle } from '@/hook/useDocumentTitle';
import { SubmitButton } from '@/components/Button/SubmitButton';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth';
import { firebaseApp } from '@/firebase/app';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { useSignUp } from '@/firebase/auth/useSignUp';
import { useRecoilCallback } from 'recoil';
import { useRecoilSnapshot } from 'recoil';
import { db, useCreateAuthUser } from '@/firebase/firestore';
import { useAsync } from '@/hook/useAsync';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';

export default function SignUp() {
  const idId = useId();
  const passwordId = useId();
  const rePasswordId = useId();
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const addressId = useId();
  const genderId = useId();
  const maleId = useId();
  const femaleId = useId();
  const noneId = useId();
  const birthId = useId();
  const additionalInputId = useId();
  const recommendFriendId = useId();
  const eventId = useId();
  const etcId = useId();
  const etcAllId = useId();
  const etcFirstId = useId();
  const etcSecondId = useId();
  const etcThirdId = useId();
  const etcFourthId = useId();

  const setId = useSetRecoilState(idState);
  const setPw = useSetRecoilState(pwState);
  const setRepw = useSetRecoilState(repwState);
  const setName = useSetRecoilState(nameState);
  const setEmail = useSetRecoilState(emailState);
  const setPhone = useSetRecoilState(phoneState);
  const setGender = useSetRecoilState(genderState);
  const setBirth = useSetRecoilState(birthState);

  const dataProps = {
    width: '54px',
    height: '19px',
    fontSize: '0.7rem',
    backgroundPositionX: '95%',
    backgroundPositionY: 'center',
  };

  useDocumentTitle('회원가입 - 칼리');

  const handleExpandTerms = () => {
    // console.log('expand terms');
  };

  const handleIdInput = (event) => {
    event.preventDefault();
    setId(event.target.value);
  };

  const handlePwInput = (event) => {
    event.preventDefault();
    setPw(event.target.value);
  };

  const handleRepwInput = (event) => {
    event.preventDefault();
    setRepw(event.target.value);
  };

  const handleNameInput = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmailInput = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePhoneInput = (event) => {
    event.preventDefault();
    setPhone(event.target.value);
  };

  const handleBirthInput = (event) => {
    event.preventDefault();
    setBirth(event.target.value);
  };

  const handleGenderInput = (event) => {
    setGender(event.target.value);
  };

  const addtionInfo = [
    {
      id: recommendFriendId,
      className: 'recommendFriend',
      content: '친구초대 추천인 아이디',
    },
    { id: eventId, className: 'event', content: '참여 이벤트명' },
  ];

  const etcInfo = [
    { id: etcFirstId, className: 'etcFirst', content: '이용약관 동의(필수)' },
    {
      id: etcSecondId,
      className: 'etcSecond',
      content: '개인정보 수집 · 이용 동의 (필수)',
    },
    {
      id: etcThirdId,
      className: 'etcThird',
      content: '무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)',
    },
    {
      id: etcFourthId,
      className: 'etcFourth',
      content: '본인은 만 14세 이상입니다. (필수)',
    },
  ];

  const firebaseAuth = getAuth(firebaseApp);
  const { isLoading, error, user, signUp } = useSignUp(false);
  const {
    isLoading: isCreateLoading,
    error: createError,
    createAuthUser,
  } = useCreateAuthUser('users');

  const getSnapshotEmailAndPwState = useRecoilCallback(({ snapshot }) => () => {
    const id = snapshot.getLoadable(idState).contents;
    const pw = snapshot.getLoadable(pwState).contents;
    return { id, pw };
  });

  const getSnapshotOthersState = useRecoilCallback(({ snapshot }) => () => {
    const name = snapshot.getLoadable(nameState).contents;
    const email = snapshot.getLoadable(emailState).contents;
    const phone = snapshot.getLoadable(phoneState).contents;
    const address = snapshot.getLoadable(addressState).contents;
    const gender = snapshot.getLoadable(genderState).contents;
    const birth = snapshot.getLoadable(birthState).contents;
    const addtional = snapshot.getLoadable(additionalState).contents;
    const etc = snapshot.getLoadable(etcState).contents;
    return ({ name, email, phone, address, gender, birth, address, addtional, etc});
  })

  const signUpUser = async () => {
    const { id, pw } = getSnapshotEmailAndPwState();
    const updatedIdValue = id + '@natureKarly.com';
    const userAuth = await signUp(updatedIdValue, pw);
    await createAuthUser(userAuth, {id: updatedIdValue, pw, ...getSnapshotOthersState()});
  };

  const checkIsExistsUser = async() => {
    const q = query(collection(db, 'users'), where("id", "==", "toto1234@natureKarly.com"));
    try {
      const { docs } = await getDocs(q);
      return new Promise((resolve) => {
        resolve(docs.length > 0);
      })
    }
    catch(e) {
      return new Promise((resolve, reject) => {
        reject('error: ' + e.message);
      });
    }
  };

  const {
    data,
    error: duplicatedIdError,
    status: duplicatedIdStatus,
    isLoading: duplicatedIdIsLoading,
    execute
  } = useAsync(checkIsExistsUser, false);

  const checkIsDuplicatedId = async() => {
    try {
      const result = await execute();
      console.log('data', data);
    }
    catch(e) {
      
    }
  }

  if (isLoading || isCreateLoading || duplicatedIdIsLoading) {
    return <div role="alert">페이지를 준비 중입니다.</div>;
  }

  if (error || createError || duplicatedIdError) {
    return <div role="alert">오류! {error + ''}</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '80px' }}>
      <div className={classes.signUp}>
        <h2>회원가입</h2>
        <Label fontSize="sm" isEssential="left">
          필수입력사항
        </Label>
        <form>
          <Fieldset className={classes.fieldset} legend="회원가입 폼 입니다.">
            <div className={classes.inputWrapper}>
              <Label
                className={classes.idLabel}
                htmlFor={idId}
                isEssential="right"
              >
                아이디
              </Label>
              <div className={classes.idInputWrapper}>
                <IdInput
                  className={classes.idInput}
                  id={idId}
                  placeholder="아이디를 입력해주세요"
                  onChange={handleIdInput}
                />
                <IdValidation className={classes.idValidation} />
              </div>
              <Button isSecondary className={classes.idButton} onClick={checkIsDuplicatedId}>
                중복확인
              </Button>

              <Label
                className={classes.pwLabel}
                htmlFor={passwordId}
                isEssential="right"
              >
                비밀번호
              </Label>
              <div className={classes.pwInputWrapper}>
                <PwInput
                  className={classes.pwInput}
                  id={passwordId}
                  placeholder="비밀번호를 입력해주세요"
                  onChange={handlePwInput}
                />
                <PasswordValidation className={classes.pwValidation} />
              </div>

              <Label
                className={classes.repwLabel}
                htmlFor={rePasswordId}
                isEssential="right"
              >
                비밀번호 확인
              </Label>
              <div className={classes.repwInputWrapper}>
                <RepwInput
                  className={classes.repwInput}
                  id={rePasswordId}
                  placeholder="비밀번호를 한번 더 입력해주세요"
                  onChange={handleRepwInput}
                />
                <RePasswordValidation className={classes.repwValidation} />
              </div>

              <Label
                className={classes.nameLabel}
                htmlFor={nameId}
                isEssential="right"
              >
                이름
              </Label>
              <div className={classes.nameInputWrapper}>
                <NameInput
                  className={classes.nameInput}
                  id={nameId}
                  placeholder="이름을 입력해주세요"
                  onChange={handleNameInput}
                />
                <NameValidation className={classes.nameValidation} />
              </div>

              <Label
                className={classes.emailLabel}
                htmlFor={emailId}
                isEssential="right"
              >
                이메일
              </Label>
              <div className={classes.emailInputWrapper}>
                <EmailInput
                  className={classes.emailInput}
                  id={emailId}
                  placeholder="예) marketkarly@karly.com"
                  onChange={handleEmailInput}
                />
                <EmailValidation className={classes.emailValidation} />
              </div>
              <Button isSecondary className={classes.emailButton}>
                중복확인
              </Button>

              <Label
                className={classes.phoneLabel}
                htmlFor={phoneId}
                isEssential="right"
              >
                휴대폰
              </Label>
              <div className={classes.phoneInputWrapper}>
                <PhoneInput
                  className={classes.phoneInput}
                  id={phoneId}
                  placeholder="숫자만 입력해주세요"
                  onChange={handlePhoneInput}
                />
                <PhoneValidation className={classes.phoneValidation} />
              </div>
              <Button isSecondary className={classes.phoneButton}>
                인증번호 받기
              </Button>

              <Label
                className={classes.addressLabel}
                htmlFor={addressId}
                isEssential="right"
              >
                주소
              </Label>
              <Button isSecondary className={classes.addressButton}>
                주소 검색
              </Button>

              <Label className={classes.genderLabel} htmlFor={genderId}>
                성별
              </Label>
              <div className={classes.genderWrapper}>
                <GenderInput
                  className={classes.maleInput}
                  id={maleId}
                  name={genderId}
                  value="0"
                  onClick={handleGenderInput}
                />
                <Label
                  data-is-need-curosr-pointer
                  className={classes.maleLabel}
                  htmlFor={maleId}
                >
                  남자
                </Label>
                <GenderInput
                  className={classes.femaleInput}
                  id={femaleId}
                  name={genderId}
                  value="1"
                  onClick={handleGenderInput}
                />
                <Label
                  data-is-need-curosr-pointer
                  className={classes.femaleLabel}
                  htmlFor={femaleId}
                >
                  여자
                </Label>
                <GenderInput
                  className={classes.noneInput}
                  id={noneId}
                  name={genderId}
                  value="2"
                  onClick={handleGenderInput}
                />
                <Label
                  data-is-need-curosr-pointer
                  className={classes.noneLabel}
                  htmlFor={noneId}
                >
                  선택안함
                </Label>
              </div>

              <Label className={classes.birthLabel} htmlFor={birthId}>
                생년월일
              </Label>
              <div className={classes.birthInputWrapper}>
                <BirthInput
                  className={classes.birthInput}
                  id={birthId}
                  placeholder="YYYY / MM / DD"
                  onChange={handleBirthInput}
                />
                <BirthValidation className={classes.birthValidation} />
              </div>

              <Label
                className={classes.additionalLabel}
                htmlFor={additionalInputId}
              >
                추가입력 사항
              </Label>
              <div className={classes.additionalWrapper}>
                {addtionInfo.map((item, index) => (
                  <Fragment key={item.id}>
                    <AdditionalInput
                      className={classes[`${item.className}Input`]}
                      id={item.id}
                      index={index}
                    />
                    <Label
                      data-is-need-curosr-pointer
                      className={classes[`${item.className}Label`]}
                      htmlFor={item.id}
                      id={item.id}
                    >
                      {item.content}
                    </Label>
                  </Fragment>
                ))}
              </div>
            </div>
            <div className={classes.termsWrapper}>
              <Label className={classes.etcLabel} htmlFor={etcId}>
                이용약관동의
              </Label>
              <EtcInput
                data-is-checked-default
                isControllAll
                className={classes.etcAllInput}
                id={etcAllId}
              />
              <Label
                data-is-need-curosr-pointer
                className={classes.etcAllLabel}
                htmlFor={etcAllId}
              >
                전체 동의합니다.
              </Label>
              {etcInfo.map((item, index) => (
                <Fragment key={item.id}>
                  <EtcInput
                    data-is-checked-default
                    className={classes[`${item.className}Input`]}
                    id={item.id}
                    index={index}
                  />
                  <Label
                    data-is-need-curosr-pointer
                    className={classes[`${item.className}Label`]}
                    htmlFor={item.id}
                  >
                    {item.content}
                  </Label>
                  <IconComponent
                    data-is-need-curosr-pointer
                    className={classes[`${item.className}Icon`]}
                    data-image="Direction=Right"
                    dataProps={dataProps}
                    onMouseOver={handleExpandTerms}
                  >
                    약관보기
                  </IconComponent>
                </Fragment>
              ))}
            </div>
            <SubmitButton onClick={signUpUser} className={classes.submit}>
              가입하기
            </SubmitButton>
          </Fieldset>
        </form>
      </div>
    </div>
  );
}
