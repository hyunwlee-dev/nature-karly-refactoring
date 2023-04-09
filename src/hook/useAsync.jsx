import { useState, useEffect, useCallback, useMemo } from 'react';

export const useAsync = (asyncFunction, immediate = true) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [isLoading, setIsLoading] = useState(false);

  const execute = useCallback(async () => {
    setIsLoading(true);
    setStatus('pending');
    try {
      const result = await asyncFunction();
      setData(result);
      setStatus('success');

      return result;
    } catch (error) {
      setError(error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) execute();
  }, [execute, immediate]);

  return useMemo(
    () => ({
      data,
      error,
      status,
      isLoading,
      execute,
    }),
    [data, error, status, isLoading, execute]
  );
};
