import { test, expect } from "@playwright/test";

// 環境変数を読み込む
// local -> .envファイルを作成
// GitHub -> Secretsを作成
require("dotenv").config();
var STAGING_URL = process.env["STAGING_URL"];

test.beforeEach(async ({ page }) => {
  await page.goto(STAGING_URL);
});

test("Count Up Check", async ({ page }, testInfo) => {
  // data-testid 属性が count-up-button な要素をクリックする
  await page.locator("data-testid=count-up-button").click();
  // data-testid 属性が count な要素のテキストが1になっていることを確認
  await expect(page.locator("data-testid=count")).toContainText("1");

  await page.screenshot({
    path: testInfo.outputPath("screenshot.png"),
    fullPage: true,
  });
});
