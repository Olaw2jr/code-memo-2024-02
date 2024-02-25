//Nextで非同期処理を書く
//SWRと呼ばれるライブラリをラップしたnextのカスタムフック
import useSWR from "swr";

export default function MyComponent() {
  const { data, error } = useSWR("/api/data");

  if (error) return <div>エラーが発生しました</div>;

  if (!data) return <div>データを取得中...</div>;

  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
//useSWR フックを使って /api/data エンドポイントからデータを取得。