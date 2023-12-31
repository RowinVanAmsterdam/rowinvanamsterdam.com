import { Typography } from '@/shared/Typography';
import { getEstimateReadingTime } from '@/shared/helpers/getEstimateReadingTime';
import { getFormattedDate } from '@/shared/helpers/getFormattedDate';
import { ArticleTypes } from '@/shared/types/ArticleTypes';
import Image from 'next/image';
import Link from 'next/link';

export const ArticleCard = (props: ArticleTypes) => {
    const { metadata, content } = props;
    const formattedDate = getFormattedDate(metadata.date);
    const estimatedReadingTime = getEstimateReadingTime(content);

    return (
        <Link
            href={'/blog/' + metadata.slug}
            className="shadow-sm hover:shadow group flex h-full flex-col rounded-lg bg-white duration-200 ease-in-out hover:-translate-y-0.5"
        >
            <div className="relative pb-[56.25%]">
                <Image
                    src={metadata.banner}
                    alt="Article thumbnail"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="absolute h-full w-full rounded-lg object-cover p-0.5"
                    priority
                />
            </div>

            <section className="px-4 pb-2 pt-4">
                <Typography
                    component="h2"
                    variant="text-sm"
                    className="font-bold normal-case duration-200 ease-in-out group-hover:text-rva-400 group-active:text-rva-500"
                >
                    {metadata.title}
                </Typography>
                <Typography component="time" variant="text-xs" className="text-slate-400">
                    {formattedDate} • {estimatedReadingTime} min read
                </Typography>
            </section>
        </Link>
    );
};
