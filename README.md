# 小说创作台 · Novel Workbench

> 给 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 用的写作工作台：把「剧情因果」画成可拖拽的时间线，配角色卡与卷章大纲。纯客户端、零构建、数据只留在你自己的浏览器里。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![DSH plugin](https://img.shields.io/badge/DeepSeek%20Harness-plugin-4f6d8a)
![Version](https://img.shields.io/badge/version-1.3.0-b45f3c)
![i18n](https://img.shields.io/badge/i18n-中文%20%7C%20English-5f7a63)

---

## 它解决什么问题

大多数写作工具给你一棵大纲树——但故事不是树，是**因果**。读者真正在意的是「他为什么这么做、这一步导致了什么」。

这个插件把小说拆成三个互相咬合的视图：

| 视图 | 你在这里做什么 |
|---|---|
| **剧情因果** | 横轴是故事时间，事件卡的长度就是它持续的长度。拖右边缘改时长，拖卡片改发生时间，连线写「谁迫使谁」「什么揭示了什么」。 |
| **角色卡片** | 把人物的欲望、弱点、转变钉在卡片上，随时搜索对照。 |
| **小说大纲** | 自定义卷与章，标注构想 / 草稿 / 修订 / 完成。 |

## 功能

**剧情因果（Causal Timeline）**
- 时间轴即故事时间：节点起点可拖、右边缘可拉伸，节点宽度 = 事件持续时长
- 因果连线带关系动词：导致 / 迫使 / 揭示 / 阻碍 / 反转 / 余波
- 节点类型（铺垫 / 冲突 / 转折 / 高潮 / 收束）与所属幕
- 「因果完整度」与孤立节点提示——没接进因果链的事件会被点名
- 一键整理泳道，按时间自动排布

**角色卡片（Character Desk）**
- 目标、弱点、转变、外貌等结构化字段；按姓名 / 特质 / 目标搜索
- 角色定位：主角 / 次主角 / 配角 / 反派 / 导师 / 其他

**小说大纲（Outline）**
- 卷 → 章两级自定义结构，章节状态四档流转
- 字数统计与章节计数

**作品库（Projects）**
- 多部作品独立管理，一键切换；每部作品拥有各自的因果图、角色卡与大纲
- JSON 导入 / 导出，附 v1 → v2 数据迁移

**其他**
- 中英双语全量文案（跟随界面语言）
- 自动保存到浏览器本地，无需登录、不联网

## 安装

本插件以 DSH **bundle** 形式挂载，需要在你的 profile 里登记依赖与 bundle。

**方式 A：从 GitHub 直接装（推荐）**

在 profile 的 `package.json` 中：

```json
{
  "dependencies": {
    "@local/dsh-plugin-novel-assistant": "github:Y1MingSaMa184/dsh-plugin-novel-assistant#v1.3.0"
  },
  "dsh": {
    "profile": {
      "bundles": ["@local/dsh-plugin-novel-assistant"]
    }
  }
}
```

**方式 B：本地开发（link）**

```json
"@local/dsh-plugin-novel-assistant": "link:C:/path/to/dsh-plugin-novel-assistant"
```

改完依赖后重装 profile 依赖（`pnpm install` 或通过插件管理器），重启 DSH，侧边栏即出现「小说创作台」入口。

## 目录结构

```
dsh-plugin-novel-assistant/
├── index.js            # 宿主半边：空实现（数据模型全在客户端，宿主无需 service/tool 面）
├── client.js           # 客户端半边：单文件 React 模块，约 7k 行，零构建
├── cordis.patch.yml    # bundle patch：把本包插入插件列表
├── package.json        # exports: . / ./client / ./locale/*
├── icon.svg            # 侧边栏图标
└── locale/{zh,en}.json # 插件元信息文案
```

## 设计取舍

- **宿主半边故意是空的。** 作品数据、时间线布局、导入导出全部在客户端完成，宿主只做挂载，因此没有额外的 service 或 tool 暴露面。
- **单文件、不打包。** `client.js` 直接通过 `window.__ModuleLoader__.load({ id, factory })` 注册，插件加载器原样读取；代价是这个文件有 7000 行，读起来不轻。
- **数据只在浏览器。** 存储走 `localStorage`（`dsh.novel-assistant.v2`，兼容 v1 迁移），不上传、不同步。换浏览器或清缓存前**请先导出 JSON**。

## 已知限制

- 没有自动化测试，验证方式是真机加载 + 手动走查
- 数据不跨设备同步（这是隐私选择，不是遗漏）
- 大纲暂不支持导出 Word / Markdown，也不支持多幕时间轴缩放

## 路线图

- [ ] 大纲导出为 Markdown / Word
- [ ] 角色关系图（谁欠谁、谁恨谁）
- [ ] 时间轴缩放与多幕并排视图
- [ ] 导出项目为单文件 `.novel.json` 带版本号

## 许可

[MIT](LICENSE) © 2026 林一鸣 (Y1MingSaMa184)

---

# Novel Workbench (English)

> A writing workbench plugin for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness). Turns your plot into a **draggable causal timeline**, with character cards and volume/chapter outlines. Client-only, zero-build, and your data never leaves the browser.

## What it solves

Most writing tools give you an outline tree — but a story is not a tree, it's a **causal chain**. What readers care about is *why someone acted* and *what that set off*.

## Features

- **Causal timeline** — the x-axis is story time and each event card's width is its duration. Drag a card to move it, drag its right edge to stretch it. Link events with causal verbs: causes / forces / reveals / blocks / reverses / echoes.
- **Node kinds & acts** — setup, conflict, turn, climax, resolution, each assigned to an act. A "causal completeness" meter calls out orphan nodes that never joined the chain.
- **Character desk** — goal, flaw, arc and more, searchable by name, trait or goal, grouped by role (protagonist, deuteragonist, supporting, antagonist, mentor, other).
- **Outline** — custom volumes and chapters with a four-stage status flow and live word/chapter counts.
- **Project library** — multiple novels side by side, each with its own graph, cast and outline.
- **Import / export** — JSON round-trip, with a v1 → v2 migration path.
- **Bilingual** — full zh / en copy.
- **Local-first** — autosaved to `localStorage`, no login, no network.

## Install

Register the package as a DSH profile dependency and bundle:

```json
{
  "dependencies": {
    "@local/dsh-plugin-novel-assistant": "github:Y1MingSaMa184/dsh-plugin-novel-assistant#v1.3.0"
  },
  "dsh": {
    "profile": { "bundles": ["@local/dsh-plugin-novel-assistant"] }
  }
}
```

Then reinstall profile dependencies (`pnpm install` or via the plugin manager), restart DeepSeek Harness, and the **Novel Workbench** entry appears in the sidebar. For local development, use `"link:/absolute/path"` instead.

## Design notes

- The host half is intentionally a no-op: the entire data model lives in the client, so no service or tool surface is needed.
- `client.js` registers itself through `window.__ModuleLoader__.load({ id, factory })` with no build step — a single 7k-line module.
- Data lives in `localStorage` under `dsh.novel-assistant.v2`. Export your project to JSON before clearing browser storage.

## Limitations

- No automated tests; verified by loading in a real profile and walking the UI.
- No cross-device sync (a privacy choice).
- Outline export to Markdown/Word and timeline zoom are not implemented yet.

## License

[MIT](LICENSE) © 2026 林一鸣 (Y1MingSaMa184)
