// URLからデータを取得する
fetch('https://example.com/data')
  // レスポンスのPromiseが解決されたら、レスポンスオブジェクトを受け取る
  .then(response => {
    // レスポンスがOK（HTTPステータスコードが200の範囲）であるかをチェック
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    // レスポンスボディをJSONとして読み込む
    return response.json();
  })
  // JSONデータが解決されたら、そのデータを処理する
  .then(data => {
    console.log(data);
    // ここでデータをウェブページに表示するなどの処理を行う
  })
  // エラーが発生した場合の処理
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
