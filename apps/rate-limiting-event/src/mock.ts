function wait(ms: number = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function callCount(fn: Function, count: number = 0) {
  return (...args: any) => {
    count += 1;
    console.log("calling", count);
    return fn(...args);
  };
}

export async function mockGet() {
  await wait(1000);
  return "data";
}
