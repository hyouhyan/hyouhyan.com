import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Work（制作物）コレクション。
// 1作品 = src/content/works/ 配下の1 Markdown ファイル。
// frontmatter がカード用メタ情報、本文が詳細ページの記事になる。
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // カードや一覧に出る短い説明
    img: z.string(), // サムネイル画像（public 配下の絶対パス）
    liveUrl: z.string().url().optional(), // 公開中の本番サイト（あれば詳細ページにボタン表示）
    date: z.coerce.date().optional(), // 公開・制作日
    order: z.number().default(0), // 一覧の表示順（小さいほど先頭）
  }),
});

export const collections = { works };
