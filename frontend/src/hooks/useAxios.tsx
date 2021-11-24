import axios, {
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

export default function useAxios() {
  interface ExecuteAxiosCallback<T = any> {
    (response: AxiosResponse<T>): void
  }

  const executeAxios = async <T extends unknown>(
    requestConfig: AxiosRequestConfig,
    successCallback?: ExecuteAxiosCallback<T>,
    failureCallback?: ExecuteAxiosCallback,
  ) => {
    try {
      const response: AxiosResponse<T> = await axios(requestConfig);

      if (successCallback) {
        successCallback(response);
      } else {
        console.log('success.', response);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (failureCallback) {
            failureCallback(error.response);
          } else {
            console.log('axios error.', error);
          }
        }
      } else {
        console.log('general error.', error);
      }
    }
  };

  return {
    executeAxios,
  };
}
