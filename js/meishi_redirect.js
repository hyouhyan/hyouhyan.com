// 現在のURLのパラメーターを取得
const urlParams = new URLSearchParams(window.location.search);
const meishiParam = urlParams.get('meishi');

// Twitterリダイレクト
if (meishiParam == '3' || meishiParam == '4') {
    window.location.href = "https://x.com/hyouhyan";
}
