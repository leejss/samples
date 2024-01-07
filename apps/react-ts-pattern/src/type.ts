export type AsyncState<P = any, E = Error> = AsyncSuccessState<P> | AsyncErrorState<E> | AsyncLoadingState | AsyncIdleState;
export type AsyncSuccessState<P = any> = {
  status: "success";
  data: P;
};
export type AsyncErrorState<E = Error> = {
  status: "error";
  error: E;
};

export type AsyncLoadingState = {
  status: "loading";
};

export type AsyncIdleState = {
  status: "idle";
};
