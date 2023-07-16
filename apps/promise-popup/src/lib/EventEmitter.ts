type Handler = <T>(...args: T[]) => void;
class EventEmitter {
  private listeners: { [eventName: string]: Handler[] } = {};

  on(eventName: string, handler: Handler) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(handler);
  }

  emit<T>(eventName: string, ...args: T[]) {
    if (this.listeners[eventName]) {
      this.listeners[eventName].forEach((handler) => handler(...args));
    }
  }

  off(eventName: string, handler: Handler) {
    if (this.listeners[eventName]) {
      this.listeners[eventName] = this.listeners[eventName].filter((h) => h !== handler);
    }
  }
}

const eventEmitter = new EventEmitter();
export default eventEmitter;
