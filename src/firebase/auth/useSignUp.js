import { useState, useCallback, useMemo } from 'react';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification as firebaseSendEmailVerification,
} from 'firebase/auth';
import { auth } from './index';
import { emailState, error, idState, isLoading,  pwState,  userInfo } from '@/@store/signUpState';
import { useRecoilValue, useSetRecoilState } from 'recoil';

/* -------------------------------------------------------------------------- */

/**
 * Firebase 인증: 이메일/패스워드 회원가입 유틸리티 훅
 * @param {boolean} sendEmailVerification 이메일 확인 메일 보내기 (기본 값: false)
 * @returns {{
 *  isLoading: boolean;
 *  error: null | Error;
 *  user: null | import('firebase/auth').UserCredential;
 *  signUp: (email: string, password: string, displayName?: string) => Promise<import('firebase/auth').UserCredential>;
 * }}
 */
export function useSignUp(sendEmailVerification = false) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const signUp = useCallback(
    async (email, password, displayName) => {
      setIsLoading(true);
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const { user } = userCredentials;

        if (displayName && user) {
          await updateProfile(user, { displayName });
        }

        if (sendEmailVerification && user) {
          await firebaseSendEmailVerification(user);
        }

        setUser(user);
        return user;
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [sendEmailVerification]
  );

  return useMemo(
    () => ({
      isLoading,
      error,
      user,
      signUp,
    }),
    [isLoading, error, user, signUp]
  );
}

export function useRecoilSignUp(sendEmailVerification = false) {
  const setIsLoading = useSetRecoilState(isLoading);
  const setError = useSetRecoilState(error);
  const setUserInfo = useSetRecoilState(userInfo);
  const email = useRecoilValue(emailState);
  const password = useRecoilValue(pwState);

  
  const signUp = useCallback(
    async ( email, password) => {
      setIsLoading(true);
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
          
        const { user } = userCredentials;
        console.log('user', user);

        if (displayName && user) {
          await updateProfile(user, {displayName: 'testests'});
        }

        if (sendEmailVerification && user) {
          const result = await firebaseSendEmailVerification(user);
        }

        setUser(user);
        return user;
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
  );

  return useMemo(
    () => ({
      signUp,
    }),
    [signUp]
  );
}