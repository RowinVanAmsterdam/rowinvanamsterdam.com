import Link from 'next/link';

type RichContentLinkProps = {
    href: string;
    openExternalLinksInNewTab?: boolean;
    children?: React.ReactNode;
};

export const RichContentLink = (props: RichContentLinkProps) => {
    const { href, openExternalLinksInNewTab, children } = props;
    return (
        <Link
            href={href}
            target={openExternalLinksInNewTab ? '_blank' : undefined}
            rel={openExternalLinksInNewTab ? 'noopener noreferrer' : undefined}
        >
            {children}
        </Link>
    );
};
