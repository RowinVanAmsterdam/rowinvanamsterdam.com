import { ElementType } from 'react';
import MarkdownToJsx from 'markdown-to-jsx';
import { RichContentLink } from './components/RichContentLink';
import { RichContentBlockquote } from './components/RichContentBlockquote';
import { RichContentPreBlock } from './components/RichContentPreBlock';
import { SyntaxHighlight } from './SyntaxHighlight';

type MarkdownProps = {
    value: string;
    openExternalLinksInNewTab?: boolean;
    wrapper?: ElementType;
    className?: string;
};

export const Markdown = (props: MarkdownProps) => {
    const { wrapper, openExternalLinksInNewTab, value, className } = props;

    const markDownToJsxOptions = {
        forceBlock: true,
        wrapper: wrapper,
        forceWrapper: true,
        overrides: {
            blockquote: RichContentBlockquote,
            a: {
                component: RichContentLink,
                props: { openExternalLinksInNewTab: openExternalLinksInNewTab }
            },
            pre: RichContentPreBlock
        }
    };

    return (
        <>
            <SyntaxHighlight />
            <MarkdownToJsx className="rich-article" options={markDownToJsxOptions}>
                {value}
            </MarkdownToJsx>
        </>
    );
};
