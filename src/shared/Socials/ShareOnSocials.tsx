import { Icon } from '@/utils/Icon/Icon';
import profile from '../../assets/static/rowinvanamsterdam.json';
import Link from 'next/link';
import { Typography } from '../Typography';

type SupportedPlatforms = 'facebook' | 'linkedin' | 'twitter' | 'whatsapp';

type ShareOnSocialsType = {
    url: string;
    text: string;
    platforms: SupportedPlatforms[];
};

export const getShareUrl = (platform: SupportedPlatforms, url: ShareOnSocialsType['url'], text: ShareOnSocialsType['text']) => {
    const twitterUsername = profile.socials.find((social) => social.name.toLowerCase() === 'twitter')?.username;

    switch (platform) {
        case 'facebook':
            return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        case 'twitter':
            return `https://twitter.com/intent/tweet?url=${url}&text=${text}&via=${twitterUsername}`;
        case 'linkedin':
            return `https://www.linkedin.com/shareArticle?url=${url}`;
        case 'whatsapp':
            return `https://api.whatsapp.com/send?text=${url}`;
    }
};

export const ShareOnSocials = (props: ShareOnSocialsType) => {
    return (
        <div className="mt-2 flex h-fit w-fit flex-wrap items-center justify-end gap-6 justify-self-end md:sticky md:top-16 md:mt-8 md:flex-col">
            <Typography variant='h2' className='text-xs text-gray-300'>Share</Typography>

            <ul className="flex flex-row gap-1 md:flex-col">
                {props.platforms.map((platform, i) => (
                    <li key={`${platform}-${i}`}>
                        <Link
                            className="block rounded-md p-3 text-primary duration-150 ease-in-out hover:bg-white hover:text-secondary-100 hover:shadow active:text-secondary-150"
                            href={getShareUrl(platform, props.url, props.text)}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon name={platform} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
