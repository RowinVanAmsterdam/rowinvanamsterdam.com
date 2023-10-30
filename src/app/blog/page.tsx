import { AboutCard } from '@/About/AboutCard';
import { HeroBanner } from '@/Hero/HeroBanner';
import { Container } from '@/shared/Layout/Container';
import profile from '../../assets/static/rowinvanamsterdam.json';
import { getAllBlogPosts } from '@/api/api';
import { ArticleGrid } from '@/Article/ArticleGrid';
import { getPageTitle } from '@/utils/getPageTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: getPageTitle('Blog'),
    description: profile.subtitle
};

const Blog = () => {
    const posts = getAllBlogPosts();

    return (
        <>
            <HeroBanner title="Sharing code-related learnings" subtitle="Web2 • Web3" />

            <Container maxWidth="max-w-screen-2xl" className="flex flex-1 flex-col gap-10 lg:flex-row">
                <AboutCard {...profile} />
                <ArticleGrid articles={posts} />
            </Container>
        </>
    );
};

export default Blog;
