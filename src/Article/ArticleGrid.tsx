import { ArticleTypes } from "@/shared/types/ArticleTypes";
import { ArticleCard } from "./ArticleCard";

type ArticleGridProps = {
    articles: ArticleTypes[];
};

export const ArticleGrid = (props: ArticleGridProps) => {
    const { articles } = props;

    return (
        <ol className="w-full grid grid-cols-fit-64 gap-4 h-fit">
            {articles.map((article: ArticleTypes) => {
                return (
                    <li key={article.metadata.slug}>
                        <ArticleCard {...article} />
                    </li>
                );
            })}
        </ol>
    );
};