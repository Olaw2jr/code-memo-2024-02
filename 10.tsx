//サイトの設定、ユーザーデータ保存するのに便利なlocalStorage

const arr = ["東京", "大阪", "京都", "岡山"]

//保存
localStorage.setItem("city", JSON.stringify(arr))

//読み取り
JSON.parse(localStorage.getItem("city"))