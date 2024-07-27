import puppeteer from 'puppeteer';

async function autoClick(url: string, selector: string, interval: number): Promise<void> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  while (true) {
    try {
      await page.waitForSelector(selector, { timeout: 5000 });
      await page.click(selector);
      console.log('버튼이 클릭되었습니다.');
    } catch (error) {
      console.error('오류 발생:', error);
    }

    await new Promise(resolve => setTimeout(resolve, interval * 1000));
  }
}

// 사용 예시
const url = 'https://example.com';
const selector = '#button-id';  // 클릭할 버튼의 CSS 선택자
const interval = 60;  // 클릭 간격 (초)

autoClick(url, selector, interval).catch(console.error);