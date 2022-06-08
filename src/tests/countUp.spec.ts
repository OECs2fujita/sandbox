import { test, expect } from "@playwright/test";

// 各テストを実行する前に http://localhost:3000 に遷移する
test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000");
});

test("カウントアップボタンをクリックすると、カウントが増加すること", async ({
  page,
}) => {
  // data-testid 属性が count-up-button な要素をクリックする
  await page.locator("data-testid=count-up-button").click();
  // data-testid 属性が count な要素のテキストが1になっていることを確認
  await expect(page.locator("data-testid=count")).toContainText("1");
});
