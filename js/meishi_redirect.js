// 現在のURLのパラメーターを取得
const urlParams = new URLSearchParams(window.location.search);
const meishiParam = urlParams.get('meishi');

// 今日の日付を取得
const today = new Date();
const targetDate = new Date('2024-10-20');

// パラメーターが「meishi=2」で、今日が2024年10月20日である場合、リダイレクト
if (meishiParam === '2' && today.toDateString() === targetDate.toDateString()) {
    window.location.href = "https://x.com/hyouhyan";
}
