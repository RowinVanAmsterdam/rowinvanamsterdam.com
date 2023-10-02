import { ArticleMetadata } from '@/Article/ArticleMetadata';
import { Comments } from '@/Article/Comments';
import { findDirectoryOfPost } from '@/Article/helpers/getBlogArticles';
import { parseMarkdown } from '@/Article/helpers/parseMarkdown';
import { Container } from '@/shared/Container';
import { Markdown } from '@/shared/RichContent/Markdown';
import { ShareOnSocials } from '@/shared/Socials/ShareOnSocials';
import { Typography } from '@/shared/Typography';
import { estimateReadingTime } from '@/shared/helpers/estimateReadingTime';
import { formatDate } from '@/shared/helpers/formatDate';
import fs from 'fs';
import Image from 'next/image';

type BlogArticleProps = {
    params: {
        slug: string;
    };
};

const Slug = (props: BlogArticleProps) => {
    const { params } = props;
    
    const directory = findDirectoryOfPost(params.slug);
    const fileContent = fs.readFileSync(`posts/${directory}/` + params.slug + '.md').toString();
    const currentArticle = parseMarkdown(fileContent);
    const { metadata, content } = currentArticle;

    const formattedDate = formatDate(metadata.date);
    const estimatedReadingTime = estimateReadingTime(content);

    // add 404 page if slug doesn't exist

    return (
        <>
           
            <Image
                src={metadata.banner}
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
                        url={`https://rowinvanamsterdam.com/blog/${metadata.slug}`}
                        text={metadata.title}
                        platforms={['twitter', 'facebook', 'linkedin', 'whatsapp']}
                    />
                </div>

                <div className="md:col-start-1 md:col-end-4">
                    <Typography component="h1" variant="h3" className="col-span-3 text-center">
                        {metadata.title}
                    </Typography>

                    <ArticleMetadata
                        author={metadata.author}
                        authorImage={metadata.authorImage}
                        date={formattedDate}
                        readingTimeInMinutes={estimatedReadingTime}
                    />
                </div>

                <div className="self-center pb-3 md:col-start-2 md:col-end-2">
                    <Markdown value={content} wrapper="article" openExternalLinksInNewTab />
                    <Comments />
                </div>
            </Container>
        </>
    );
};

export default Slug;
