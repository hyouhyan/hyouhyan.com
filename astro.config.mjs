// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // 公開URL。サイトマップやOGPの絶対URL生成に使われます。
  // 【重要】カスタムドメイン(apex)で配信するので `base` は設定しません。
  // もし `<username>.github.io/<repo>` のようなサブパスで公開する場合のみ
  // base: '/repo-name' を指定してください。
  site: 'https://hyouhyan.com',

  adapter: cloudflare()
});