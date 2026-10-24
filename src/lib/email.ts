// スパム対策: メールアドレスは HTML に平文で出さず、ビルド時にエンコードして埋め込む。
// ブラウザ側 (email-decode.ts) で復号して mailto リンク化する。
const EMAIL = 'hyouhyan@hyouhyan.com';

// 逆順 → base64。HTML には data-email としてこの文字列だけが載る。
export const encodedEmail = Buffer.from([...EMAIL].reverse().join('')).toString('base64');

// JS 無効時のフォールバック表示（クリック不可・平文アドレスは出さない）
export const fallbackEmail = EMAIL.replace('@', '[at]');
