import { useState, useCallback, useMemo } from 'react';

import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification as firebaseSendEmailVerification,
  getAuth,
} from 'firebase/auth';

import { firebaseApp } from '../app';

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
  const firebaseAuth = getAuth(firebaseApp);

  const signUp = useCallback(
    async (email, password, displayName) => {
      setIsLoading(true);
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          firebaseAuth,
          email,
          password
        );

        const { user } = userCredentials;

        // eslint-disable-next-line max-depth
        if (displayName && user) {
          await updateProfile(user, { displayName });
        }

        // eslint-disable-next-line max-depth
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
