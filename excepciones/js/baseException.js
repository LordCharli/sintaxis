// objeto error
class baseException {
  constructor() { }
  toString() {
    return this.name + ": " + this.messaje;
  }
}
baseException.prototype = new Error();
baseException.prototype.constructor = baseException;

