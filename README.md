
---

# Aura Design AI Web Components

Our AI Component Library is designed to provide a seamless integration of AI capabilities into your web applications. Built with SolidJS and Web Components, our library offers a simple and clean solution for incorporating advanced AI features into your projects.

## Use Case
[AM](https://a-m.love/).

## Key Features
1. Effortless Integration: Easily add AI components to your web applications without complex setup or configuration.

2. High Performance: Utilizing SolidJS for efficient rendering and Web Components for encapsulation, our library ensures high performance.

3. Customizable: Tailor the AI components to suit your specific requirements with easy customization options.

4. Modern Design: The components are designed with a modern and sleek interface, enhancing the overall user experience.

5. Scalable: Whether you're building a small project or a large-scale application, our AI Component Library scales effortlessly.

6. UI Agnostic: Supports React, Preact, Svelte, Vue, Solid, Lit, HTMX, and more.

## Installation

You can install the Aura Design Library via npm. Simply run the following command in your project directory:

```bash
npm install @aura-group/aura-design @aura-group/aura-design-pro
```

## Usage

To use the components from the Aura Design Library in your project, you can import them as follows:

```javascript
// Aura Design Web Components
import {
    defineCustomElements,
    registerIcon,
    Icon,
    Button,
    Card,
    ChatBubble,
    FlexBox,
    LayoutGrid,
    Textarea,
    Textfield,
} from '@aura-group/aura-design';
// Register svg icon
registerIcon('/iconfont.svg');
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

## Documentation

For detailed documentation on each component and their props, please refer to the [official documentation](https://aura-design.deno.dev/?path=/docs/components-button--docs).

## Contributing

We welcome contributions to the Aura Design Library! If you have any ideas, bug fixes, or improvements, feel free to open an issue or submit a pull request on our [GitHub repository](https://github.com/fromatlantis/aura-group).

---
