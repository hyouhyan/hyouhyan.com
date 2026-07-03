// ビルド時に URL の OGP 画像（og:image）を取得するユーティリティ。
// 完全な静的サイトなので実行時ではなく、Astro のフロントマター（ビルド / dev サーバ）で解決される。
// ネットワーク不通・取得失敗時は undefined を返すだけでビルドは壊さない。
import type { OshiItem } from '../data/oshi';

// dev サーバでの再フェッチを避けるためのモジュールキャッシュ
const cache = new Map<string, string | undefined>();

/** meta タグから属性を取り出す（属性順・シングル/ダブルクォート両対応） */
function metaAttr(tag: string, attr: string): string | undefined {
  const m =
    tag.match(new RegExp(`${attr}\\s*=\\s*"([^"]*)"`, 'i')) ??
    tag.match(new RegExp(`${attr}\\s*=\\s*'([^']*)'`, 'i'));
  return m?.[1];
}

/** HTML から og:image（無ければ twitter:image）を抽出 */
function extractOgImage(html: string): string | undefined {
  let twitterImage: string | undefined;
  for (const tag of html.match(/<meta[^>]+>/gi) ?? []) {
    const key = (metaAttr(tag, 'property') ?? metaAttr(tag, 'name'))?.toLowerCase();
    if (!key) continue;
    const content = metaAttr(tag, 'content');
    if (!content) continue;
    if (key === 'og:image' || key === 'og:image:url') return content;
    if (key === 'twitter:image' && !twitterImage) twitterImage = content;
  }
  return twitterImage;
}

/** 指定 URL のページから og:image を取得。相対パスは絶対 URL に解決 */
export async function fetchOgImage(pageUrl: string): Promise<string | undefined> {
  if (cache.has(pageUrl)) return cache.get(pageUrl);

  let image: string | undefined;
  try {
    const res = await fetch(pageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; hyouhyan.com build)',
        'Accept-Language': 'ja,en;q=0.9',
      },
    });
    if (res.ok) {
      const raw = extractOgImage(await res.text());
      if (raw) image = new URL(raw, pageUrl).href;
    }
  } catch {
    // フェッチ失敗はフォールバック（呼び出し側でハート表示）
  }

  cache.set(pageUrl, image);
  return image;
}

/**
 * 推しデータを解決する。
 * img が空で url があるものは、ビルド時に url の og:image を img として補完する。
 * img を手動指定した場合はそちらを優先。
 */
export async function resolveOshi(items: OshiItem[]): Promise<OshiItem[]> {
  return Promise.all(
    items.map(async (o) => {
      if (o.img || !o.url) return o;
      return { ...o, img: await fetchOgImage(o.url) };
    }),
  );
}
