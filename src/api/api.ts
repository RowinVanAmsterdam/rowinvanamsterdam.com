import fs from 'fs';
import { parseMarkdown } from '../Article/helpers/parseMarkdown';
import { environment } from '@/utils/environment';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'posts');
const publishedPostsDirectory = path.join(postsDirectory, 'published');
const draftsPostsDirectory = path.join(postsDirectory, 'drafts');

const allPublishedPosts = fs.existsSync(publishedPostsDirectory) ? fs.readdirSync(publishedPostsDirectory) : [];
const allDraftPosts = fs.existsSync(draftsPostsDirectory) ? fs.readdirSync(draftsPostsDirectory) : [];
const showDraftPosts = environment.isDevelopment && process.env.SHOW_DRAFTS === 'true';

const getPosts = (directory: string, fileList: string[]) => {
    return fileList
        .filter((file) => file.endsWith('.md')) // Only include .md files
        .map((file) => {
            const fileContent = fs.readFileSync(path.join(directory, file), 'utf8');
            return parseMarkdown(fileContent);
        });
};

export const getAllBlogPosts = () => {
    const publishedPosts = getPosts(publishedPostsDirectory, allPublishedPosts);
    const draftPosts = showDraftPosts ? getPosts(draftsPostsDirectory, allDraftPosts) : [];
    const allPosts = [...publishedPosts, ...draftPosts];
    const postsSortedByDate = allPosts.sort((a, b) => Number(new Date(b.metadata.date)) - Number(new Date(a.metadata.date)));

    return postsSortedByDate;
};

export const getPostBySlug = (slug: string) => {
    const allPosts = getAllBlogPosts();
    return allPosts.find((post) => post.metadata.slug === slug);
};
