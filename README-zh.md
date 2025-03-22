
---

# Aura Design面向AI的Web组件库

开源AI友好组件库，为下一代智能应用而生。

## 应用案例
[AM](https://a-m.love/).

## 核心特性
1. AI优先设计：专为 AI 场景优化的交互组件（如数据可视化图表、自然语言输入框、实时反馈面板），无缝集成 AI 模型输入输出。

2. 通用Web组件: 兼容React/Vue/Angular/Svelte等所有主流前端框架。

3. 高度可定制：提供便捷的定制选项，可根据特定需求灵活调整AI组件功能。

4. 现代化设计：采用时尚简约的界面风格，显著提升用户体验。

5. 智能Markdown渲染器：支持扩展的Markdown语法规范，可集成自定义组件功能。

## 安装

您可以通过npm安装Aura Design库。只需在您的项目目录中运行以下命令：

```bash
npm install @aura-group/aura-design @aura-group/aura-design-pro
```

## 使用

要在您的项目中使用来自 Aura 设计库的组件，您可以通过以下方式导入这些组件：

```javascript
// Aura Design Web Components
import {
    defineCustomElements,
    setupFontSymbol,
    Icon,
    Button,
    Card,
    ChatBubble,
    FlexBox,
    LayoutGrid,
    Textarea,
    Textfield,
} from '@aura-group/aura-design';
// Setup icon symbol
setupFontSymbol()
// Define the component which you need
// Use defineCustomElements() will define all the components
defineCustomElements({
    Icon,
    Button,
    Card,
    ChatBubble,
    FlexBox,
    LayoutGrid,
    Textarea,
    Textfield,
});

// Aura Design Pro Web Components
import { defineCustomElements as defineCustomElementsPro } from '@aura-group/aura-design-pro';
defineCustomElementsPro()

// Theme and style
import '@aura-group/aura-design/dist/style.css'
```

## 组件文档

如需查看各个组件及其属性的详细文档，请参阅[官方文档](https://aura-design.deno.dev/?path=/docs/components-button--docs).

## 贡献

我们欢迎您为Aura设计库贡献力量！如果您有任何创意构想、错误修复或改进建议，欢迎随时在[GitHub repository](https://github.com/fromatlantis/aura-group)中提出问题（issue）或提交拉取请求（pull request）。

---
