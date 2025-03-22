
---

# Aura Design AI Web Components

An open-source AI-friendly component library for next-generation intelligent applications. 

## Use Case
[AM](https://a-m.love/).

## Key Features
1. AI-First Design:  AI-optimized interactive components (e.g., data visualization charts, NLP input fields, real-time feedback panels) designed for seamless integration with AI model I/O..

2. Universal Web Components: Works with React/Vue/Angular/Svelte and any web framework.

3. Customizable: Tailor the AI components to suit your specific requirements with easy customization options.

4. Modern Design: The components are designed with a modern and sleek interface, enhancing the overall user experience.

5. Smart Markdown Renderer: Extended markdown syntax with custom components support.


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

## Documentation

For detailed documentation on each component and their props, please refer to the [official documentation](https://aura-design.deno.dev/?path=/docs/components-button--docs).

## Contributing

We welcome contributions to the Aura Design Library! If you have any ideas, bug fixes, or improvements, feel free to open an issue or submit a pull request on our [GitHub repository](https://github.com/fromatlantis/aura-group).

---
