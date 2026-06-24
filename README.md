<br><p align="center">
<img height="100px" src="./public/movies.webp" />
</p>

<h1 align="center">Nuxt Movies</h1>
<br>

> 基于 [Nuxt 3](https://github.com/nuxt/nuxt)、[Vue 3](https://github.com/vuejs/core)、[UnoCSS](https://github.com/unocss/unocss)、[Image Module](https://v1.image.nuxtjs.org) 和 [The Movie Database](https://www.themoviedb.org) [API](https://www.themoviedb.org/documentation/api) 构建的电影应用演示，使用 [TypeScript](https://github.com/microsoft/TypeScript)。

> A movies app demo built with [Nuxt 3](https://github.com/nuxt/nuxt), [Vue 3](https://github.com/vuejs/core), [UnoCSS](https://github.com/unocss/unocss), [Image Module](https://v1.image.nuxtjs.org), [The Movie Database](https://www.themoviedb.org) [API](https://www.themoviedb.org/documentation/api) and [TypeScript](https://github.com/microsoft/TypeScript).

**🍿 在线预览 Live preview:** https://movies.nuxt.space

---

## 截图 Screenshots

<img width="1191" src="https://user-images.githubusercontent.com/11247099/171109597-ee4fb47c-48b5-4dba-94b3-a56e0083c142.png">
<img width="1191" src="https://user-images.githubusercontent.com/11247099/171109632-d9b480c4-e640-4812-8ea6-ccc6d17daa6a.png">
<img width="1191" src="https://user-images.githubusercontent.com/11247099/171109644-c586de96-04be-4ae7-8a7b-c0d615a2ecba.png">
<img width="764" src="https://user-images.githubusercontent.com/11247099/171109653-7137e2e5-ca06-4a30-9caa-bacdbc739121.png">

---

## 代理服务器 Proxy Server

> 本项目需要一个代理服务器来安全地处理 TMDB API 请求。详细说明请查看 [proxy/README](./proxy)。

> This project requires a proxy server to securely handle TMDB API requests. Check [proxy/README](./proxy) for details.

---

## 启动项目 Setup

```bash
# 启用 pnpm
# Enable pnpm
$ corepack enable

# 安装依赖
# Install dependencies
$ pnpm install

# 启动代理服务器（必须先启动）
# Start proxy server (must start first)
$ pnpm dev:proxy

# 启动开发服务器，热重载于 localhost:3000
# Start dev server with hot reload at localhost:3000
$ pnpm dev
```

---

## 技术栈 Tech Stack

| 类别 Category | 技术 Technology |
|---------------|-----------------|
| 框架 Framework | Nuxt 3 (Vue 3 + SSR) |
| 样式 Styling | UnoCSS (原子化 CSS / Atomic CSS) |
| 类型 Types | TypeScript |
| 测试 Testing | Vitest (单元 / Unit) + Playwright (E2E) |
| 国际化 i18n | @nuxtjs/i18n (13 种语言 / 13 languages) |
| 图片 Images | @nuxt/image (IPX) |
| 包管理 Package Manager | pnpm |

---

## 感谢 Credits

> 基于 [jasonujmaalvis/vue-movies](https://github.com/jasonujmaalvis/vue-movies) 和 [tastejs/nuxt-movies](https://github.com/tastejs/nuxt-movies)。

> Based on [jasonujmaalvis/vue-movies](https://github.com/jasonujmaalvis/vue-movies) and [tastejs/nuxt-movies](https://github.com/tastejs/nuxt-movies).

<img height="50px" src="./public/tmdb.svg">

> 数据由 [The Movie Database](https://www.themoviedb.org) 提供。本项目使用 TMDB API，但未经 TMDB 认可或认证。

> Data provided by [The Movie Database](https://www.themoviedb.org). This project uses the TMDB API but is not endorsed or certified by TMDB.
