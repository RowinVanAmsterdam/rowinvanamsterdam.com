import fs from 'fs';
import { parseMarkdown } from '../Article/helpers/parseMarkdown';
import { environment } from '@/utils/environment';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'posts');
const allPublishedPosts = fs.readdirSync(postsDirectory + '/published');
const allDraftPosts = fs.readdirSync(postsDirectory + '/drafts');
const showDraftPosts = environment.isDevelopment && process.env.SHOW_DRAFTS === 'true';

const getPosts = (directory: string, fileList: string[]) => {
    return fileList.map((file) => {
        const fileContent = fs.readFileSync(postsDirectory + `/${directory}/${file}`, 'utf8');
        return parseMarkdown(fileContent);
    });
};

export const getAllBlogPosts = () => {
    const publishedPosts = getPosts('published', allPublishedPosts);
    const draftPosts = showDraftPosts ? getPosts('drafts', allDraftPosts) : [];
    const allPosts = [...publishedPosts, ...draftPosts];
    const postsSortedByDate = allPosts.sort((a, b) => Number(new Date(b.metadata.date)) - Number(new Date(a.metadata.date)));

    return postsSortedByDate;
};

export const getPostBySlug = (slug: string) => {
    const allPosts = getAllBlogPosts();
    return allPosts.find((post) => post.metadata.slug === slug);
};
