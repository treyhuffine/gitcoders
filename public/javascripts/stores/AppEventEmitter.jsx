import { EventEmitter } from "events";

const EVENT = "CHANGE";

export default class AppEventEmitter extends EventEmitter {
  emitChange() {
    this.emit(EVENT);
  }
  addChangeListener(cb) {
    this.on(EVENT, cb);
  }
  removeChangeListener(cb) {
    this.removeListener(EVENT, cb);
  }
}
