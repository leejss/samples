export function createCounterService() {
  const storage = window.localStorage;
  const DELAY = 1000;

  const increment = async () => {
    await new Promise((resolve) => setTimeout(resolve, DELAY));
    // count++;
    const count = storage.getItem("count");

    if (!count) {
      storage.setItem("count", "1");
      return 1;
    }
    const newCount = Number(count) + 1;
    storage.setItem("count", String(newCount));
    return newCount;
  };

  const decrement = async () => {
    await new Promise((resolve) => setTimeout(resolve, DELAY));
    const count = storage.getItem("count");

    if (!count) {
      throw new Error("Count not found");
    }

    const newCount = Number(count) - 1;
    storage.setItem("count", String(newCount));
    return newCount;
  };

  const getCount = async () => {
    await new Promise((resolve) => setTimeout(resolve, DELAY));
    const count = storage.getItem("count");

    if (!count) {
      throw new Error("Count not found");
    }

    return Number(count);
  };

  return {
    increment,
    decrement,
    getCount,
  };
}

export const counterService = createCounterService();
