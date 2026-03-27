// 配列を用意
const items = [];

// 要素の取得
const input = document.getElementById("itemInput");
const button = document.getElementById("addButton");
const list = document.getElementById("itemList");

// ボタンを押すと配列に追加してリスト表示
button.addEventListener("click", () => {
    const value = input.value.trim(); // 前後の空白を削除
    if (value === "") return;         // 空文字は追加しない

    items.push(value);                // 配列に追加
    input.value = "";                 // 入力欄を空にする

    // 表示更新
    list.innerHTML = "";              // 一度リストを空にする
    items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
});

