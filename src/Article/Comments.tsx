'use client';

import Giscus from '@giscus/react';

export const Comments = () => {
    return (
        <Giscus
            id="comments"
            repo="RowinVanAmsterdam/rowinvanamsterdam.com"
            repoId="R_kgDOKMkRdg"
            category="General"
            categoryId="DIC_kwDOKMkRds4CZLoZ"
            mapping="pathname"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme={'light'}
            lang="en"
            loading="lazy"
        />
    );
};
