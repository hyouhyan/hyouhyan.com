// [data-email] を持つ要素を復号して mailto リンク化する（クライアント側）。
// data-email-text 付きの要素は表示テキストもアドレスに差し替える。
const decode = (s: string) => [...atob(s)].reverse().join('');

document.querySelectorAll<HTMLElement>('[data-email]').forEach((el) => {
  const addr = decode(el.dataset.email ?? '');
  if (!addr.includes('@')) return;
  if (el instanceof HTMLAnchorElement) el.href = `mailto:${addr}`;
  if (el.hasAttribute('data-email-text')) el.textContent = addr;
  el.style.display = '';
});
