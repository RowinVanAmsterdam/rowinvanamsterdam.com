export type ArticleMetadataTypes = {
    slug: string;
    date: Date;
    title: string;
    description: string;
    author: string;
    authorImage: string;
    banner: string;
    bannerAlt: string;
    bannerCaption?: string;
    bannerCaptionLink?: string;
    discussOnTwitterId?: string;
};

export type ArticleTypes = {
    metadata: ArticleMetadataTypes;
    content: string;
};
