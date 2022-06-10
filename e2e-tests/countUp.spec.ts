import { test, expect } from "@playwright/test";

// GitHub Secrets を playwright.yml 経由で読み込む
var STAGING_URL = process.env["STAGING_URL"];

test.beforeEach(async ({ page }) => {
  await page.goto(STAGING_URL);
});

test("カウントアップボタンをクリックすると、カウントが増加すること", async ({
  page,
}, testInfo) => {
  // data-testid 属性が count-up-button な要素をクリックする
  await page.locator("data-testid=count-up-button").click();
  // data-testid 属性が count な要素のテキストが1になっていることを確認
  await expect(page.locator("data-testid=count")).toContainText("1");

  await page.screenshot({
    path: testInfo.outputPath("screenshot/1_main.png"),
    fullPage: true,
  });
});
