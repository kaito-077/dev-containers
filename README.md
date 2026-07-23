# プログラミングセミナー 環境構築リポジトリ

Next.js（TypeScript）+ Spring Boot（Maven）+ PostgreSQL の開発環境を、
Dev Containers を使って**インストール作業なし**で用意するためのリポジトリです。

## 事前準備（セミナー参加前に済ませておくこと）

1. **Docker Desktop** をインストールして起動しておく
   - Mac: https://www.docker.com/products/docker-desktop/
   - Windows: 上記から同じくダウンロード。インストール時に **WSL2 backend** を使う設定にしてください（インストーラーの指示に従えばOK）
2. **VS Code** をインストールしておく
   - https://code.visualstudio.com/
3. VS Code に **Dev Containers** 拡張機能を入れておく
   - 拡張機能タブで `Dev Containers`（発行元: Microsoft）を検索してインストール
4. このリポジトリを `git clone` しておく

> Windowsの方へ: Docker Desktopのインストール後、PCの再起動を求められることがあります。再起動後に「WSL2 is not installed」等のエラーが出た場合は、表示されるリンクからWSL2を追加インストールしてください。

## 使い方

このリポジトリには **2つのDev Container設定** があります。用途に応じて開き分けてください。

### フロントエンド（Next.js）を触るとき

1. VS Codeでこのリポジトリのフォルダを開く
2. `Cmd/Ctrl + Shift + P` → `Dev Containers: Reopen in Container` を選択
3. 設定候補が2つ出るので **「frontend (Next.js)」** を選ぶ
4. コンテナのビルドが終わったら、ターミナルで以下を実行

   ```bash
   cd frontend
   npm run dev
   ```

5. ブラウザで http://localhost:3000 を開く

### バックエンド（Spring Boot）を触るとき

1. VS Codeでこのリポジトリのフォルダを開く
2. `Cmd/Ctrl + Shift + P` → `Dev Containers: Reopen in Container` を選択
3. 設定候補から **「backend (Spring Boot)」** を選ぶ
4. コンテナのビルドが終わったら、ターミナルで以下を実行

   ```bash
   cd backend
   mvn spring-boot:run
   ```

5. ブラウザで http://localhost:8080 を開く（`{"message":"Spring Boot is running!","status":"ok"}` が表示されればOK）

> どちらの設定で開いても、裏側では frontend / backend / db の**3つすべて**が同時に起動しています。片方の窓で作業していても、もう片方は動き続けています。

## データベースについて

- 初回起動時に `db/init/001_create_tables.sql` が自動実行され、`items` テーブルとサンプルデータが作成されます。
- データは Docker のボリュームに保存されるため、コンテナを再起動してもデータは消えません。
- 完全にリセットしたい場合は、以下をホスト側のターミナル（Docker Desktopが動いているMac/Windows本体）で実行してください。

  ```bash
  docker compose -f .devcontainer/docker-compose.yml down -v
  ```

  ※ `-v` はボリュームごと削除するオプションです。実行するとDBの中身は完全に消えます。

## 接続情報一覧

| 項目 | 値 |
|---|---|
| フロントエンド | http://localhost:3000 |
| バックエンドAPI | http://localhost:8080 |
| DBホスト（コンテナ間） | `db` |
| DBホスト（PC側から接続する場合） | `localhost` |
| DBポート | `5432` |
| DB名 | `seminar_db` |
| DBユーザー | `seminar` |
| DBパスワード | `seminar` |

## よくあるトラブル

- **ポートが使われていると言われる**: 他のアプリ（別のPostgreSQLなど）がすでに5432番などを使っている可能性があります。該当アプリを終了してから再度お試しください。
- **コンテナのビルドがずっと終わらない**: Docker Desktopの設定でメモリ割り当てが少なすぎる可能性があります（Docker Desktop → Settings → Resources でメモリを4GB以上に）。
- **Windowsでファイルの変更が反映されない/遅い**: WSL2 backendが有効になっているか確認してください。
