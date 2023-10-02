import { ArticleMetadataTypes, ArticleTypes } from '@/shared/types/ArticleTypes';
import matter from 'gray-matter';

export const parseMarkdown = (content: string): ArticleTypes => {
    const { data, content: markdownContent } = matter(content);

    return {
        metadata: {
            ...(data as ArticleMetadataTypes)
        },
        content: markdownContent
    };
};
