//コンポーネント内でスタイルをカプセル化したい場合は、CSS Modules を使用できる
import React from 'react';
import styles from './MyComponent.module.css';

const MyComponent = () => {
  return (
    <div>
      <h1>タイトル</h1>
      <p>内容</p>
    </div>
  );
};
//returnでコンポーネントのJSXを返す
export default MyComponent;
