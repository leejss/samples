import { describe, it, expect } from "vitest";
import { createNanoEvents } from "nanoevents";

describe("nanoevents", () => {
  it("should on and emit", () => {
    type Events = {
      data: (data: string) => void;
    };
    const emitter = createNanoEvents<Events>();
    emitter.on("data", (data) => {
      expect(data).toBe("test");
    });
    emitter.emit("data", "test");
  });

  it("should get a value from the event using Promise", async () => {
    type Events = {
      data: (data: string) => void;
    };
    const emitter = createNanoEvents<Events>();

    const Source = {
      getValue: async () => {
        return new Promise((resolve) => {
          emitter.on("data", (data) => {
            return resolve(data);
          });
        });
      },
    };

    setTimeout(() => {
      // Mocking click event => Click event will emit data
      emitter.emit("data", "test");
    }, 500);

    const handleSomething = async () => {
      const value = await Source.getValue();
      expect(value).toBe("test");
    };

    await handleSomething();
  });
});
