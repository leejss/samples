export const debounce = (func: Function, wait: number) => {
  let timerId: null | ReturnType<typeof setTimeout> = null;
  return (...args: unknown[]) => {
    timerId && clearTimeout(timerId);
    timerId = setTimeout(func.bind(undefined, ...args), wait);
  };
};
