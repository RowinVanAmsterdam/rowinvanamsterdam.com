import fs from 'fs';
import { parseMarkdown } from '../Article/helpers/parseMarkdown';
import { environment } from '@/utils/environment';

const publishedPostsList = fs.readdirSync('posts/published');
const draftPostsList = fs.readdirSync('posts/drafts');
const showDraftPosts = environment.isDevelopment && process.env.SHOW_DRAFTS === 'true';

const getPosts = (directory: string, fileList: string[]) => {
    return fileList.map((file) => {
        try {
            const fileContent = fs.readFileSync(`posts/${directory}/${file}`, 'utf8');
            return parseMarkdown(fileContent);
        } catch (error) {
            console.error(`Error reading or parsing ${directory} post: ${file}`);
            return null; // Handle the error or return an appropriate value
        }
    });
};

export const getAllBlogPosts = () => {
    const publishedPosts = getPosts('published', publishedPostsList);
    const draftPosts = showDraftPosts ? getPosts('drafts', draftPostsList) : [];
    const allPosts = [...publishedPosts, ...draftPosts];
    const postsSortedByDate = allPosts.sort((a, b) => Number(new Date(b!.metadata.date)) - Number(new Date(a!.metadata.date)));

    return postsSortedByDate;
};

export function getPostBySlug(slug: string) {
    const allPosts = getAllBlogPosts();
    const post = allPosts.find((post) => post?.metadata.slug === slug);
    return post;
}
