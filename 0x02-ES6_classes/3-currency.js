export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(val) {
    if (typeof val !== 'string') {
      throw new TypeError('code must be a string');
    }
    this._code = val;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = val;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
