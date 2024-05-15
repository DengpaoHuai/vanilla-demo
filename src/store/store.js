export class Store {
  constructor(initialState = {}) {
    this.state = initialState;
    this.listeners = {};

    this.proxy = new Proxy(this.state, {
      set: (target, property, value) => {
        target[property] = value;
        this.notify(property, value);
        return true;
      },
      get: (target, property) => {
        return target[property];
      },
    });
  }

  subscribe(property, callback) {
    if (!this.listeners[property]) {
      this.listeners[property] = [];
    }
    this.listeners[property].push(callback);
  }

  unsubscribe(property, callback) {
    if (this.listeners[property]) {
      this.listeners[property] = this.listeners[property].filter(
        (cb) => cb !== callback
      );
    }
  }

  notify(property, value) {
    if (this.listeners[property]) {
      this.listeners[property].forEach((callback) => callback(value));
    }
  }

  getState() {
    return this.proxy;
  }
  setState(newState) {
    for (let property in newState) {
      if (newState.hasOwnProperty(property)) {
        this.proxy[property] = newState[property];
      }
    }
  }
}
