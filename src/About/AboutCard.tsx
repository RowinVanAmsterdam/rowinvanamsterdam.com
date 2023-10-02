import { IconButton } from '@/shared/Buttons/IconButton';
import { Socials } from '@/shared/Socials/Socials';
import { Typography } from '@/shared/Typography';
import { AboutTypes } from '@/shared/types/AboutTypes';
import Image from 'next/image';

export const AboutCard = (props: AboutTypes) => {
    const { profilePicture, name, contact, tags } = props;

    return (
        <div className="top-10 z-10 mx-auto -mt-32 flex h-fit max-w-[300px] flex-col items-center justify-center rounded-lg p-2.5 text-center lg:sticky lg:-mt-20 lg:bg-white">
            <Image
                src={profilePicture}
                alt="Profile picture"
                width={0}
                height={0}
                sizes="100vw"
                className="my-3 h-40 w-40 rounded-full"
                priority
            />

            <Typography component="h2" variant="h6" className="mt-2">
                {name}
            </Typography>

            <ul className=" mt-2 flex flex-wrap justify-center gap-1">
                {tags.map((tag) => (
                    <li key={tag} className="rounded bg-slate-100 px-2 py-1 text-slate-400">
                        <Typography variant="text-xs">{tag}</Typography>
                    </li>
                ))}
            </ul>

            <IconButton variant="primary" icon="mail" href={`mailto:${contact.email}`} className="mt-6">
                <Typography>Get in touch</Typography>
            </IconButton>

            <Socials className="mt-4 text-slate-400" />
        </div>
    );
};
