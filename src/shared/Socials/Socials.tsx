import { Icon, IconNames } from '@/utils/Icon/Icon';
import profile from '../../assets/static/rowinvanamsterdam.json';
import Link from 'next/link';

type MySocialsProps = {
    className?: string;
};

export const Socials = (props: MySocialsProps) => {
    const { className } = props;

    return (
        <ul className={`${className ?? ''} flex justify-end gap-2 lg:flex-1`}>
            {profile.socials.map((social) => (
                <li key={social.name}>
                    <Link
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-md p-2 duration-150 ease-in-out hover:bg-white hover:text-secondary-100 hover:shadow-md active:text-secondary-150"
                    >
                        <Icon name={social.name.toLowerCase() as (typeof IconNames)[number]} />
                    </Link>
                </li>
            ))}
        </ul>
    );
};
