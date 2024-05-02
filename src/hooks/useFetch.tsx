import React from 'react';

interface Data<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  request: () => Promise<() => void>;
}

function useFetch<T>(url: RequestInfo | URL, options?: RequestInit): Data<T> {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState<null | string>(null);
  const [loading, setLoading] = React.useState(false);
  const optionsCurrent = React.useRef(options);
  optionsCurrent.current = options;

  const request = React.useCallback(async () => {
    let response;
    let json = null;
    const controler = new AbortController();
    const signal = controler.signal;
    try {
      if (!signal.aborted) setLoading(true);
      setData(null);
      setError(null);
      response = await fetch(url, { signal, ...optionsCurrent.current });
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      json = await response.json();
    } catch (e) {
      if (e instanceof Error && !signal.aborted) {
        setError(`Error: ${e.message}`);
      }
    } finally {
      if (!signal.aborted) {
        setLoading(false);
        setData(json);
      }
    }
    return () => {
      controler.abort();
    };
  }, [url]);

  return { data, error, loading, request };
}
export default useFetch;
