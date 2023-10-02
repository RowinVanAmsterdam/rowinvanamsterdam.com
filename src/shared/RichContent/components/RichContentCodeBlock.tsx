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
