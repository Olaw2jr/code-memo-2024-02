//すべてのページに共通して適用したいスタイルは、pages/_app.js ファイルに記述できます。

import React from 'react';
import App from 'next/app';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: Arial, sans-serif;
        }
      `}</style>
    </div>
  );
};

MyApp.getInitialProps = async (appContext) => {
  // ...
};

export default MyApp;
//