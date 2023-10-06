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

// export async function generateMetadata(props: BlogPostProps): Promise<Metadata> {
//     const { params } = props;
//     const post = getPostBySlug(params.slug);

//     return {
//         title: getPageTitle(post?.metadata.title || ''),
//         description: profile.subtitle
//     };
// }

const Slug = (props: BlogPostProps) => {
    const { params } = props;
  

    // if (!post) {
    //     notFound();
    // }

    return (
        <>
            <h1>Hello world</h1>
            {/* <Image
                src={post.metadata.banner}
                alt="Article thumbnail"
                width={0}
                height={0}
                sizes="100vw"
                className="h-56 w-full object-cover lg:h-96"
                priority
            />

            <Container maxWidth="5xl" className=" mb-12 grid grid-cols-1 gap-8 md:mt-12 md:grid-cols-[1fr_minmax(0,_700px)_1fr]">
                <div className="ml-auto md:row-start-2 md:ml-0">
                    <ShareOnSocials
                        url={`https://rowinvanamsterdam.com/blog/${post.metadata.slug}`}
                        text={post.metadata.title}
                        platforms={['twitter', 'facebook', 'linkedin', 'whatsapp']}
                    />
                </div>

                <div className="md:col-start-1 md:col-end-4">
                    <Typography component="h1" variant="h3" className="col-span-3 text-center">
                        {post.metadata.title}
                    </Typography>

                    <ArticleMetadata
                        author={post.metadata.author}
                        authorImage={post.metadata.authorImage}
                        date={getFormattedDate(post.metadata.date)}
                        readingTimeInMinutes={getEstimateReadingTime(post.content)}
                    />
                </div>

                <div className="self-center pb-3 md:col-start-2 md:col-end-2">
                    <Markdown value={post.content} wrapper="article" openExternalLinksInNewTab />
                    <Comments />
                </div>
            </Container> */}
        </>
    );
};

export default Slug;
