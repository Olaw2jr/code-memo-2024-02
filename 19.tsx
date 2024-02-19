//Suspenseコンポーネント：コンポーネントの遅延読み込み実現。ページ全体の読み込み速度を向上させることができる。
import { lazy, Suspense } from "react"
//import List from "./List"

const List = lazy(() => import("./List"))
//List コンポーネントを lazy 関数を使って遅延読み込みするように定義している
const App = () => {
    return (
        <>
            <Suspense fallback={<p>ローディング</p>}
                <List />
            </Suspense>    
        </>
    )
}
//fallback プロパティには、List コンポーネントが読み込まれるまでの間表示される fallback コンテンツとして、<p>ローディング</p> を指定。
export default App

//Suspenseコンポーネントのfallbackプロパティには、コンポーネントが読み込まれるまでの間表示されるfallbackコンテンツを指定できる。