import { useCallback, useEffect, useRef } from "react";
import { data } from "./data";

export const debounce = (cb: any, ms: number) => {
  let timeout: number | null = null;
  return (...args: any) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
      if (timeout) clearTimeout(timeout);
    }, ms);
  };
};

export class Axios {
  constructor() {}
  get(url: string, params: string) {
    return new Promise((resolve) => {
      resolve(
        params
          ? data.filter(
              (item) => item.name.toLocaleLowerCase().indexOf(params.toLocaleLowerCase()) > -1,
            )
          : [],
      );
    });
  }
}
