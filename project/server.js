const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");

const app = express();
const PORT = 3000;

app.use(express.json());

const db = new sqlite3.Database("./users.db");

/* ===== ユーザ登録API（すでにあるはず） ===== */
app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.run(
        "INSERT INTO users (username, password) VALUES (?, ?)",
        [username, hashedPassword],
        function (err) {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: "ユーザ登録成功", userId: this.lastID });
        }
    );
});

/* ===== ログインAPI（ここが課題64） ===== */
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    db.get(
        "SELECT * FROM users WHERE username = ?",
        [username],
        async (err, user) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            // ユーザが存在しない
            if (!user) {
                return res.status(401).json({ message: "ログイン失敗" });
            }

            // パスワード照合
            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                res.json({ message: "ログイン成功" });
            } else {
                res.status(401).json({ message: "ログイン失敗" });
            }
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
