import { Icon } from '@/utils/Icon/Icon';

type RichContentBlockquoteProps = {
    children?: React.ReactNode;
};

export const RichContentBlockquote = (props: RichContentBlockquoteProps) => {
    return (
        <blockquote>
            <Icon name={'bell'} />
            <span>{props.children}</span>
        </blockquote>
    );
};
