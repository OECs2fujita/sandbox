import { test, expect } from "@playwright/test";

var dateObj = new Date();
var testUser =
  dateObj.getFullYear() +
  ("00" + (dateObj.getMonth() + 1)).slice(-2) +
  ("00" + dateObj.getDate()).slice(-2) +
  ("00" + dateObj.getHours()).slice(-2) +
  ("00" + dateObj.getMinutes()).slice(-2) +
  ("00" + dateObj.getSeconds()).slice(-2) +
  "@playwright.test";

var basicUser = process.env["NOUKATU_TEST_BASIC_USER"];
var basicPass = process.env["NOUKATU_TEST_BASIC_PASS"];
var testURL = process.env["NOUKATU_TEST_URL"];
var testPass = process.env["NOUKATU_TEST_PASS"];

test.beforeEach(async ({ page }) => {
  await page.goto("https://" + basicUser + ":" + basicPass + "@" + testURL);
});

test.describe("Noukatu", () => {
  test("Regist and Login", async ({ page }, testInfo) => {
    await page.screenshot({
      path: testInfo.outputPath("screenshot/1_main.png"),
      fullPage: true,
    });

    // Click #main_content >> text=新規会員登録
    await page.locator("#main_content >> text=新規会員登録").click();
    await expect(page).toHaveURL("https://" + testURL + "register/");

    // Click input[name="user_email-1358"]
    await page.locator('input[name="user_email-1358"]').click();

    // Fill input[name="user_email-1358"]
    await page.locator('input[name="user_email-1358"]').fill(`${testUser}`);

    // Press Tab
    await page.locator('input[name="user_email-1358"]').press("Tab");

    // Fill [placeholder="メールアドレス（確認）"]
    await page
      .locator('[placeholder="メールアドレス（確認）"]')
      .fill(`${testUser}`);

    // Click input[name="user_password-1358"]
    await page.locator('input[name="user_password-1358"]').click();

    // Fill input[name="user_password-1358"]
    await page.locator('input[name="user_password-1358"]').fill(`${testPass}`);

    // Press Tab
    await page.locator('input[name="user_password-1358"]').press("Tab");

    await page.waitForTimeout(1000);

    // Fill [placeholder="パスワード の確認"]
    await page.locator('[placeholder="パスワード の確認"]').fill(`${testPass}`);

    // Click input[name="nickname-1358"]
    await page.locator('input[name="nickname-1358"]').click();

    // Fill input[name="nickname-1358"]
    await page
      .locator('input[name="nickname-1358"]')
      .fill("testUser20220603170300");

    // Click label:has-text("女性")
    await page.locator('label:has-text("女性")').click();

    // Click text=指定なし
    await page.locator("text=指定なし").click();

    // Press Tab
    await page.locator('input[name="sex\\[\\]"]').nth(2).press("Tab");

    // Click [placeholder="\38 100000"]
    await page.locator('[placeholder="\\38 100000"]').click();

    // Fill [placeholder="\38 100000"]
    await page.locator('[placeholder="\\38 100000"]').fill("8700005");

    // Click text=生年を選択もしくは入力してください
    await page.locator("text=生年を選択もしくは入力してください").click();

    // Click input[role="searchbox"]
    await page.locator('input[role="searchbox"]').click();

    // Fill input[role="searchbox"]
    await page.locator('input[role="searchbox"]').fill("1994");

    // Click li[role="option"]:has-text("1994(平成6年)")
    await page.locator('li[role="option"]:has-text("1994(平成6年)")').click();

    // Click text=月010203040506070809101112 >> span[role="combobox"]
    await page
      .locator('text=月010203040506070809101112 >> span[role="combobox"]')
      .click();

    // Click li[role="option"]:has-text("02")
    await page.locator('li[role="option"]:has-text("02")').click();

    // Click text=日01020304050607080910111213141516171819202122232425262728293031 >> span[role="combobox"]
    await page
      .locator(
        'text=日01020304050607080910111213141516171819202122232425262728293031 >> span[role="combobox"]'
      )
      .click();

    // Click li[role="option"]:has-text("08")
    await page.locator('li[role="option"]:has-text("08")').click();

    // Click text=利用規約を表示
    await page.locator("text=利用規約を表示").click();

    // Click text=メールアドレス 確認用メールアドレス パスワード ※半角文字の英数字記号8文字以上で入力してください パスワード の確認ニックネーム 性別男性女性指定なし郵便番 >> i >> nth=3
    await page
      .locator(
        "text=メールアドレス 確認用メールアドレス パスワード ※半角文字の英数字記号8文字以上で入力してください パスワード の確認ニックネーム 性別男性女性指定なし郵便番 >> i"
      )
      .nth(3)
      .click();

    await page.screenshot({
      path: testInfo.outputPath("screenshot/2_register.png"),
      fullPage: true,
    });

    // Click input:has-text("登録")
    await page.locator('input:has-text("登録")').click();
    await expect(page).toHaveURL("https://" + testURL + "complete/");

    await page.screenshot({
      path: testInfo.outputPath("screenshot/3_complete.png"),
      fullPage: true,
    });

    // Go to https://" + testURL + "mypage/
    await page.goto("https://" + testURL + "mypage/");

    await page.screenshot({
      path: testInfo.outputPath("screenshot/4_mypage.png"),
      fullPage: true,
    });

    // Click #gnav >> text=ログアウト
    await page.locator("#gnav >> text=ログアウト").click();
    await expect(page).toHaveURL("https://" + testURL + "");

    await page.screenshot({
      path: testInfo.outputPath("screenshot/5_logout.png"),
      fullPage: true,
    });

    // Click #main_content >> text=ログイン
    await page.locator("#main_content >> text=ログイン").click();
    await expect(page).toHaveURL("https://" + testURL + "login/");

    // Click input[name="username-1359"]
    await page.locator('input[name="username-1359"]').click();

    // Fill input[name="username-1359"]
    await page.locator('input[name="username-1359"]').fill(`${testUser}`);

    // Press Tab
    await page.locator('input[name="username-1359"]').press("Tab");

    // Fill input[name="user_password-1359"]
    await page.locator('input[name="user_password-1359"]').fill(`${testPass}`);

    // Click text=ログイン状態を保存する ログイン >> i
    await page.locator("text=ログイン状態を保存する ログイン >> i").click();

    await page.screenshot({
      path: testInfo.outputPath("screenshot/6_login.png"),
      fullPage: true,
    });

    // Click input:has-text("ログイン")
    await page.locator('input:has-text("ログイン")').click();
    await expect(page).toHaveURL("https://" + testURL + "");

    await page.screenshot({
      path: testInfo.outputPath("screenshot/7_main.png"),
      fullPage: true,
    });
  });
});
