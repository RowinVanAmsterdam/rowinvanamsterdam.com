import { AboutCard } from '@/About/AboutCard';
import { HeroBanner } from '@/Hero/HeroBanner';
import { Container } from '@/shared/Container';
import profile from '../../assets/static/rowinvanamsterdam.json';
import { getBlogArticles } from '@/Article/helpers/getBlogArticles';
import { ArticleGrid } from '@/Article/ArticleGrid';

const Blog = () => {
    const posts = getBlogArticles();
    const blogaArticlesSortedByDate = posts.sort((a, b) => Number(new Date(b.metadata.date)) - Number(new Date(a.metadata.date)));
    
    return (
        <>
            <HeroBanner title="Sharing code-related learnings" subtitle="Web2 • Web3" />

            <Container maxWidth="max-w-screen-2xl" className="flex flex-1 flex-col gap-10 lg:flex-row">
                <AboutCard {...profile} />
                <ArticleGrid articles={blogaArticlesSortedByDate} />
            </Container>
        </>
    );
};

export default Blog;
