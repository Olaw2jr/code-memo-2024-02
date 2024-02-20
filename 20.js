//setInterval使用の非同期処理
let count = 0;

const interval = setInterval(() => {
  count++;
  console.log(count);

  if (count === 10) {
    clearInterval(interval); // 10回カウントしたらclearInterval()で停止
  }
}, 1000); // 1秒間隔で処理を実行
//スクロールアニメーション、自動更新などの際setInterval関数が使える
