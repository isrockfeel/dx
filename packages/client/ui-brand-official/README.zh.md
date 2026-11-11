---
description: "RIOTWORK 侧栏标识与共享 dsh 客户端的语义主题配色。"
kind: "package-reference"
---

# @deepseek-ai/dsh-client-ui-brand-official

[English](README.md) | 中文

## 概述

本包提供 RIOTWORK 侧栏补丁标记与字标，并通过共享主题运行时应用 RIOTWORK 的浅色和深色语义配色。随产品提供的 Web 与 Desktop 组合默认加载本包。本包不会替换会话内容、修改会话数据或增加模型请求。内部包标识为保持运行时组合兼容而保留；它是历史名称，不代表与 DeepSeek 有关联或获得其背书。

## 使用本包

随产品提供的 Web 与 Desktop 组合通过 `ui-brand-official` 行挂载本插件。无需单独安装、配置 profile 标志或在 Plugins 页面启用。

### 品牌插槽

浏览器插件将 `RiotworkBrandMark` 注册到 `sidebar.brand.mark`，并将 `RiotworkBrandName` 注册到 `sidebar.brand.name`。注册会等待侧栏声明，插件释放时会撤销。此包不占用会话内容的首屏插槽；会话内容及其回退由对应包管理。

### 主题配色

插件以自身包标识调用 `ThemeRuntime.overrideTokens`。它为基础和抬高表面、边框、主要品牌操作、文字、链接、悬停状态和侧栏填充提供成对的浅色与深色值。错误、警告、成功等语义状态颜色仍由 ui-theme 管理；字体和布局偏好仍由用户控制。插件释放时会移除覆盖层并恢复此前的主题配色。

### 运行时行为

本包只贡献浏览器呈现。Host 入口仍为空的 Loader 席位，不增加 Host API 或持久化设置。现有包标识、会话格式和 `dsh` 协议保持不变。

## 实现说明

`src/client/Brand.tsx` 管理补丁标记、字标和语义配色。`src/client/index.ts` 声明主题与插槽服务，安装可撤销的配色覆盖，并注册两个侧栏组件。浏览器测试覆盖服务依赖、配色注册与释放、延迟到达的插槽声明以及标记尺寸。

## 模型体验

无。本包不会修改提示词、模型请求、Token 使用、工具权限或会话事件。

## 已知限制与延期工作

- 为保持组合兼容，内部包标识仍为 `ui-brand-official`；用户可见品牌为 RIOTWORK。
- 品牌覆盖共享侧栏插槽和语义主题配色；产品专属图稿与第三方插件仍由各自所有者管理。
- 本包依赖宿主提供的侧栏插槽和 ui-theme 运行时。
