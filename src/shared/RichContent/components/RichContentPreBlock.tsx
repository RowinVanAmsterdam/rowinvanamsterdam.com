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
