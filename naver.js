const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({defaultViewport: {
        width: 1920,
        height: 1080,
      },});
  
    const page = await browser.newPage(); // 신규 탭(페이지) 생성
  
    await page.goto("https://www.naver.com"); // 해당 URL로 이동
    await page.screenshot({ path: "screenshot1.png" }); // 해당 경로에 스크린 샷 저장
    await page.type('#query', 'lucy');
    //await page.waitForSelector("#topTalkArea .btn_talk"); // 클릭할 버튼이 로드 될 때까지 Wait
    await page.click("#search-btn"); // 썸네일 버튼 클릭
    await page.waitForSelector("#main_pack")
    await page.screenshot({ path: "screenshot2.png" }); // 해당 경로에 스크린 샷 저장
    await browser.close(); // 브라우저 종료
  })();