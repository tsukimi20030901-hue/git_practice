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
