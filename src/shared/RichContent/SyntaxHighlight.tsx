'use client';

import Prism from 'prismjs';
import { useEffect } from 'react';

import 'prismjs/components/prism-css.min';
import 'prismjs/components/prism-scss.min';
import 'prismjs/components/prism-solidity.min';
import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-tsx.min';
import 'prismjs/components/prism-markdown.min';
import 'prismjs/components/prism-json.min';

export const SyntaxHighlight = () => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return null;
};
