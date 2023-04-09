import { getFirestore } from 'firebase/firestore';

import { firebaseApp } from '../app';

export const db = getFirestore(firebaseApp);

export * from './useCreateAuthUser';
export * from './useWriteBatchData';
export * from './useCreateData';
export * from './useReadData';
export * from './useUpdateData';
export * from './useDeleteData';
export * from './useDataState';
