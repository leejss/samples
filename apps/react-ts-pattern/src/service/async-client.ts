import ky from "ky";
type API_URL = "/api/counter" | "/api/counter/increment" | "/api/counter/decrement";

export type AsyncState<P = any, E = Error> = AsyncSuccessState<P> | AsyncErrorState<E>;
export type AsyncSuccessState<P = any> = {
  status: "success";
  data: P;
};
export type AsyncErrorState<E = Error> = {
  status: "error";
  error: E;
};

export function createAsyncClient() {
  const success = <D>(data: D) => ({
    status: "success" as const,
    data,
  });

  const error = <E = Error>(error: E) => ({
    status: "error" as const,
    error,
  });

  // TODO: higher order function

  const get = async <R>(url: API_URL): Promise<AsyncState<R>> => {
    try {
      const res = await ky.get(url).json<R>();
      return success<R>(res);
    } catch (e) {
      console.error("asyncClient.get error: ", e);
      if (e instanceof Error) return error(e);
      throw e;
    }
  };

  const post = async <R>(url: API_URL): Promise<AsyncState<R>> => {
    try {
      const res = await ky.post(url).json<R>();
      return success<R>(res);
    } catch (e) {
      console.error("asyncClient.post error: ", e);
      if (e instanceof Error) return error(e);
      throw e;
    }
  };

  return {
    get,
    post,
  };
}

export const asyncClient = createAsyncClient();
