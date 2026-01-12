const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");
const session = require("express-session");

const app = express();
const PORT = 3000;

app.use(express.json());

// セッション設定
app.use(
    session({
        secret: "ojosama-secret-key", // 適当な文字列でOK
        resave: false,
        saveUninitialized: false,
    })
);

const db = new sqlite3.Database("./users.db");

/* ===== ログインAPI ===== */
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    db.get(
        "SELECT * FROM users WHERE username = ?",
        [username],
        async (err, user) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (!user) {
                return res.status(401).json({ message: "ログイン失敗" });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                // セッションにユーザ情報を保存
                req.session.userId = user.id;
                req.session.username = user.username;

                res.json({ message: "ログイン成功" });
            } else {
                res.status(401).json({ message: "ログイン失敗" });
            }
        }
    );
});

/* ===== 認証済みユーザ専用API ===== */
app.get("/mypage", (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ message: "未ログインです" });
    }

    res.json({
        message: "認証済みユーザのみアクセス可能",
        username: req.session.username,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.use(
    session({
        secret: "ojosama-secret-key",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,   // JavaScriptからアクセス不可（XSS対策）
            secure: false,    // https通信時のみ true（今回はローカルなので false）
            maxAge: 60 * 60 * 1000 // 1時間有効
        }
    })
);


app.post("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ error: "ログアウト失敗" });
        }

        res.clearCookie("connect.sid"); // セッションIDクッキー削除
        res.json({ message: "ログアウト成功" });
    });
});