export type AsyncState<P = any, E = Error> = AsyncSuccessState<P> | AsyncErrorState<E>;
export type AsyncSuccessState<P = any> = {
  status: "success";
  data: P;
};
export type AsyncErrorState<E = Error> = {
  status: "error";
  error: E;
};
