# sandbox

## PlayWright

[Playwrightの導入からGitHub Actions上でテストを実行するまで](https://zenn.dev/keita_hino/articles/d38956a2f1880e)

## S3 デプロイ

[GitHub ActionsでウェブサイトをAmazon S3にデプロイする](https://dev.classmethod.jp/articles/deploy-web-site-with-github-actions/)

## Slack通知

[Slack が提供する GitHub Action "slack-send" を使って GitHub から Slack に通知する](https://qiita.com/seratch/items/28d09eacada09134c96c)

## 備考

- Windows上だとWebkitのテストが上手く行かなかったが、GitHub Runner(Ubuntu)上ではエラーが出なかった

## テストに必要な秘密情報について

- ローカルで動作させるときは.envファイルに情報を入力して利用する
- GitHubで動作させるときはsecretsに入力して利用する
  - workflowファイルでsecretsをランナーの環境変数として設定し、それをテストファイルで参照する形になる
