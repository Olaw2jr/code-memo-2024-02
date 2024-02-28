//about ラッパーオブジェクト
// 数値リテラルをラッパーオブジェクトに変換
const num = 10;
const numObj = new Number(num);

// ラッパーオブジェクトのプロパティにアクセス
console.log(numObj.valueOf()); // 10

// ラッパーオブジェクトのメソッドを使用
console.log(numObj.toFixed(2)); // "10.00"

// 文字列リテラルをラッパーオブジェクトに変換
const str = "Hello";
const strObj = new String(str);

// ラッパーオブジェクトのプロパティにアクセス
console.log(strObj.length); // 5

// ラッパーオブジェクトのメソッドを使用
console.log(strObj.toUpperCase()); // "HELLO"

// 真偽値リテラルをラッパーオブジェクトに変換
const bool = true;
const boolObj = new Boolean(bool);

// ラッパーオブジェクトのプロパティにアクセス
console.log(boolObj.valueOf()); // true

// ラッパーオブジェクトのメソッドを使用
console.log(boolObj.toString()); // "true"
