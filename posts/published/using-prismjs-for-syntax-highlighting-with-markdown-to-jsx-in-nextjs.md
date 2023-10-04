---
slug: 'using-prismjs-for-syntax-highlighting-with-markdown-to-jsx-in-nextjs'
date: '2023-10-04'
title: 'Using PrismJS for syntax highlighting with markdown-to-jsx in Next.js'
description: 'A comprehensive guide on implementing syntax highlighting using PrismJS in Next.js applications with markdown-to-jsx.'
author: 'Rowin van Amsterdam'
authorImage: '/images/profile-pictures/profile-picture.jpg'
banner: '/media/posts/using-prismjs-for-syntax-highlighting-with-markdown-to-jsx-in-nextjs-banner.jpg'
bannerAlt: 'Lights high up in the sky'
bannerCaption: ''
bannerCaptionLink: ''
---

In a [previous post](https://rowinvanamsterdam.com/blog/add-syntax-highlighting-in-react-using-markdown-to-jsx-and-react-syntax-highlighter), we explored how to achieve syntax highlighting in React applications using the markdown-to-jsx and react-syntax-highlighter packages. While that approach is effective, it's not always necessary to bring in another third-party library for syntax highlighting. 

In this post, we'll delve into using PrismJS directly to add syntax highlighting to your Markdown content when rendering it with markdown-to-jsx in a server-side rendered Next.js application.

## Step 1: Installation
First, make sure you have installed PrismJS and markdown-to-jsx in your Next.js project:

```bash
npm install prismjs markdown-to-jsx
```

## Step 2: Creating a SyntaxHighlight Component
We'll create a custom component called SyntaxHighlight to handle syntax highlighting using PrismJS. This component will utilize the useEffect hook to apply highlighting to code blocks on the client side. 

```tsx
// SyntaxHighlight.ts
'use client';

import Prism from 'prismjs';
import { useEffect } from 'react';

import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-typescript.min';

export const SyntaxHighlight = () => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return null;
};
```

> Note that I import the PrismJS components for the languages I need. To customize the appearance and behavior of PrismJS, you can refer to the official documentation on [PrismJS themes and configuration](https://prismjs.com/#themes).

## Step 3: Creating a markdown component
Now, let's integrate the SyntaxHighlight component into your Markdown rendering component. The markdown-to-jsx package allows you to provide a custom component for rendering Markdown elements. In the `markDownToJsxOptions` object, we can define a custom component for the `pre` element.

```tsx
// Markdown.tsx
type MarkdownProps = {
  value: string;
};

export const Markdown = (props: MarkdownProps) => {
  const { value } = props;

  const markDownToJsxOptions = {
    overrides: {
      pre: RichContentPreBlock, {/* Define a custom component for your code blocks */}
    },
  };

  return (
    <>
      <SyntaxHighlight /> {/* Include the SyntaxHighlight component */}
      <MarkdownToJsx options={markDownToJsxOptions}>
        {value}
      </MarkdownToJsx>
    </>
  );
};
```

## Step 4: Customizing Code Blocks
Now that we have the SyntaxHighlight component in place, we can customize the code blocks in our Markdown content. We'll use the `RichContentPreBlock` component to render the `pre` element. 

This component will render the `RichContentCodeBlock` component if the `pre` element contains a `code` element. If not, it will render the `pre` element as-is.

```tsx
// RichContentPreBlock.tsx
import { RichContentCodeBlock } from './RichContentCodeBlock';

type RichContentPreBlockProps = {
    children: JSX.Element | JSX.Element[];
};

export const RichContentPreBlock = ({ children, ...rest }: RichContentPreBlockProps) => {
    if ('type' in children && children['type'] === 'code') {
        return RichContentCodeBlock({ children: children['props']['children'], className: children['props']['className'] });
    }
    return <pre {...rest}>{children}</pre>;
};

```

Finally, the `RichContentCodeBlock` component will render the `pre` and `code` element with the `className` attribute and the `children` as its content. 

In order to keep the server-side equivalent to the client-side rendering, we need to add the `tabIndex` attribute and replace the `lang-` prefix with `language-`. By default markdown-to-jsx is using the `lang-` prefix to support [Highlight.js](https://highlightjs.org/) (which is another way to highlight syntax). Without replacing the prefix, it will end up with a hydration warning.

```tsx
// RichContentCodeBlock.tsx
type RichContentCodeBlockProps = {
    children: string;
    className: string;
};

export const RichContentCodeBlock = (props: RichContentCodeBlockProps) => {
    const { children, className } = props;
    const language = className?.replace('lang-', 'language-');

    return (
        <pre className={language} tabIndex={0}>
            <code className={language}>{children}</code>
        </pre>
    );
};
```

## Step 5: Usage
Now, you can use the Markdown component to render Markdown content with syntax highlighting in your Next.js application. For example:

```tsx
// Your Next.js page
import React from 'react';
import { Markdown } from '../components/Markdown';

const markdownContent = `
\`\`\`javascript
function greet() {
  console.log("Hello, world!");
}
\`\`\`
`;

const YourPage = () => {
  return (
    <div>
      <Markdown value={markdownContent} />
    </div>
  );
};

export default YourPage;
```

## Bonus Step: Using a custom theme
While the highlighting part works, it may not look very nice. This is where (custom) themes come in. You can find a list of themes in the [PrismJS themes repository](https://github.com/PrismJS/prism-themes). These themes are CSS files that you can import into your application to style the code blocks accordingly.

## Conclusion
By directly integrating PrismJS into your Next.js application with markdown-to-jsx, you can achieve efficient syntax highlighting. By using the `RichContentPreBlock` and `RichContentCodeBlock` components, you can customize the code blocks in your Markdown content and make sure the server-side rendering is equivalent to the client-side rendering. This approach provides greater flexibility and control over the highlighting process and allows you to create a seamless reading experience for your users.