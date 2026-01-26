# テーマ8 React（JSフレームワーク）入門非同期通信とフロントエンド連携

## 80 fetchを用いたAPIからのデータ取得

#### jsコード

'''
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    return response.json(); // JSON形式に変換
  })
  .then(data => {
    console.log(data); // 取得したデータを表示
  })
  .catch(error => {
    console.error("エラーが発生しました", error);
  });
'''

#### HTMLコード

'''
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>fetch練習</title>
</head>
<body>
  <h1>fetch API テスト</h1>

  <!-- JavaScriptを読み込む -->
  <script src="script.js"></script>
</body>
</html>
'''

#### 実行画面
![80実行画面](./images/80.png)