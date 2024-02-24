//XMLHttpRequest (XHR) オブジェクトを使用の非同期HTTP GETリクエスト
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://example.com/api");
//.openメソッドはリクエストの種類(GET)と送信するURLを指定するために使用。
xhr.onload = () => {
  // 処理
};

xhr.send();
/*.sendメソッド呼び出し後、ブラウザはバックグラウンドでサーバーに対してHTTPリクエストを行い、
応答を待つ。応答が受信されると、設定したonload関数がトリガされる。*/
