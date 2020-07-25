import useSWR from 'swr';

import api from '../services/api';

function useFetch<Data = any, Error = any>(url: string) {

  const { data, error, mutate } = useSWR<Data, Error>(url, async (url) => {

    const response = await api.get(url);

    return response.data;

  }, {
    revalidateOnFocus: true
  });

  return { data, error, mutate };

}

export default useFetch;
