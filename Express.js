//Next.jsカスタムサーバー例

const express = require('express');
const next = require('next');

const app = express();
const port = 3000;

const dev = process.env.NODE_ENV !== 'production';
const appNext = next({ dev });

appNext.prepare().then(() => {

  app.get('*', (req, res) => {
    return appNext.getRequestHandler()(req, res);
  });
//このルートパターンは全てのパス (*) にマッチします。つまり、どのURLにアクセスしてもこの処理が実行されます。
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});

//prepare() メソッドを呼び出し、Next.jsアプリケーションの準備を行います。これは非同期処理ですので、Promise を用いて準備完了時の処理を定義しています。
//カスタムサーバーを利用することで、Express.jsのミドルウェアや独自のロジックを組み込んだより柔軟なアプリケーションを構築できます。