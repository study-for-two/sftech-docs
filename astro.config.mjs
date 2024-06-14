import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      /**
       * プロパティの詳細はStarlightの公式ドキュメントを見て設定
       * https://starlight.astro.build/ja/reference/configuration/
       */
      title: "SFTech Docs",
      lastUpdated: true,
      favicon: "/icons/favicon.ico",
      head: [
        // webmanifest
        {
          tag: "link",
          attrs: {
            rel: "manifest",
            href: "/manifest.webmanifest",
          },
        },
        // icon
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/icons/favicon.ico",
            sizes: "any",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/icons/icon-500x500.svg",
            type: "image/svg+xml",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            href: "/icons/apple-touch-icon.png",
            sizes: "180x180",
          },
        },
      ],
      logo: {
        light: "./src/assets/logos/logo-sftech-rectangle-light.png",
        dark: "./src/assets/logos/logo-sftech-rectangle-dark.png",
        alt: "ロゴ-sftech",
        replacesTitle: true,
      },
      locales: {
        root: {
          label: "日本語",
          lang: "ja",
        },
      },
      social: {
        github: "https://github.com/connect0459",
      },
      sidebar: [
        {
          label: "ガイド",
          autogenerate: { directory: "guides" },
        },
        {
          label: "開発環境",
          autogenerate: { directory: "environments" },
        },
        {
          label: "SSH",
          autogenerate: { directory: "secure-shell" },
        },
        {
          label: "LOLIPOP!",
          autogenerate: { directory: "lolipop" },
          badge: "New",
        },
      ],
    }),
  ],
});
