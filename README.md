# sandbox

## PlayWright x GitHub Actions

[Playwrightの導入からGitHub Actions上でテストを実行するまで](https://zenn.dev/keita_hino/articles/d38956a2f1880e)

## 備考

- Windows上だとWebkitのテストが上手く行かなかったが、GitHub Runner(Ubuntu)上ではエラーが出なかった

## 課題

- GitHub Actions → Slack通知
  - [この記事](https://qiita.com/seratch/items/28d09eacada09134c96c)が参考になりそう
  - 今回はRunner内でlocalhostを立てたが、実運用ではステージング環境にデプロイしてテストしたい
    - GitHub Actionsでデプロイする方法
    - URL指定をlocalhostからデプロイ先に変更するだけで問題なく動作するか？
