// app/firebase.ts
//getApps()の呼び出し後のinitializeAppとgetApps()[0]の記述に警告が出たとき

import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Initialize Firebase with environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Use this to initialize the app only once
const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };

//TypeScriptの型チェックの結果、期待される型が一致しない場合に発生。
/*app 変数の型としてFirebaseAppを指定。
/*Firebaseでは、アプリケーションを開始（初期化）する際に、「アプリケーションインスタンス」というものが生成される */
/*appがFirebaseApp型であることが保証され、getFirestore関数に渡す際の型の不一致による警告が解消。*/
/*getApps()[0] の部分は、初期化済みのFirebaseアプリケーションインスタンスの配列から最初の要素を取得していますが、
この配列が空でないことを確認した後でのみアクセスすることを保証するために、条件演算子（三項演算子）を使用しています。 */