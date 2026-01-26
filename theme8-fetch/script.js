const button = document.getElementById("sendBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST", // ← POSTがここ！
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "おはようございます(^^)",
      body: "POST通信のテスト",
      userId: 1
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data); // コンソール確認用
      result.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      console.error("エラー:", error);
    });
});
