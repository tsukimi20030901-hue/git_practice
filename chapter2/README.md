# 2章
## 10　HTTPとは何か調べてまとめる
HTTP（HyperText Transfer Protocol）とは、Web上で情報を送受信するための通信規約である。
主にWebブラウザとWebサーバの間で、HTMLファイル、画像、動画、スタイルシートなどのデータをやり取りする際に利用される。
HTTPは、クライアントがリクエストを送り、サーバがレスポンスを返すという仕組みで動作している。
たとえば、ユーザがWebサイトのURLを入力すると、ブラウザがサーバにリクエストを送り、サーバが該当するWebページのデータを返す。
この通信は、通常テキスト形式で行われ、誰でも内容を閲覧できるという特徴がある。
そのため、セキュリティを強化したHTTPS（HTTP Secure）が広く利用されており、通信内容を暗号化することで第三者による盗聴や改ざんを防ぐことができる。HTTPはインターネットの基盤を支える重要なプロトコルである。


## 11章: ブラウザのデベロッパーツールで通信を観察する


アクセスしたURL: `https://abehiroshi.la.coocan.jp/`

### 主要なHTTPヘッダー

**Request Headers（送信側）**
- User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/53  
  → ブラウザやOSの情報を示す。Webサーバー側で対応する表示を変える際に使用される。
- Accept: text/html,application/xhtml+xml,application/xml;q=0.9,...  
  → ブラウザが受け入れ可能なデータ形式を示す。
- Referer: https://www.google.com/  
  → リクエスト元ページのURL。どのページから遷移したかを示す。

**Response Headers（受信側）**
- Content-Type: text/html  
  → 返ってきたデータの種類。今回はHTML文書であることを示す。
- Content-Length: 538  
  → レスポンスのサイズ（バイト単位）。
- Server: Apache  
  → Webサーバーのソフトウェア情報。
- Last-Modified: Wed, 09 Jul 2025 05:12:05 GMT  
  → ファイルの最終更新日時。
