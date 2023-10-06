import { ArticleMetadata } from '@/Article/ArticleMetadata';
import { Comments } from '@/Article/Comments';
import { getPostBySlug } from '@/api/api';
import { Container } from '@/shared/Container';
import { Markdown } from '@/shared/RichContent/Markdown';
import { ShareOnSocials } from '@/shared/Socials/ShareOnSocials';
import { Typography } from '@/shared/Typography';
import { getEstimateReadingTime } from '@/shared/helpers/getEstimateReadingTime';
import { getFormattedDate } from '@/shared/helpers/getFormattedDate';
import { getPageTitle } from '@/utils/getPageTitle';
import { Metadata } from 'next';
import Image from 'next/image';
import profile from '../../../assets/static/rowinvanamsterdam.json';
import { notFound } from 'next/navigation';

type BlogPostProps = {
    params: {
        slug: string;
    };
};

const Slug = (props: BlogPostProps) => {
    const { params } = props;

    return (
        <>
          <h1>hellow {params.slug}</h1>
        </>
    );
};

export default Slug;
