class Hex {
  constructor(num) {
    this.num = num;
  }

  _toHEXString() {
    return "0x" + this.num.toString(16).toUpperCase();
  }

  toString() {
    return this._toHEXString();
  }

  valueOf() {
    return this.num;
  }

  toJSON() {
    return this._toHEXString();
  }

  plus(hIns) {
    this.num += hIns.valueOf();
    return this; 
  }

  minus(hIns) {
    this.num -= hIns.valueOf();
    return this;
  }

  static parse(hexNum) {
    return parseInt (hexNum,16);
  }
}

var FF = new Hex(255);
let a = new Hex(20);
let b = new Hex(10);
console.log(FF.toString(), FF.toString() === "0xFF");
console.log(FF.toJSON(), FF.toJSON() === "0xFF");
console.log(FF.valueOf(), FF.valueOf() + 1 === 256);
console.log(a.toJSON());
console.log(a.plus(b).toJSON());
console.log(a.minus(b).toJSON());
console.log(Hex.parse("0xFF") === 255);
console.log(Hex.parse("FF") === 255);