import profile from '../assets/static/rowinvanamsterdam.json';

export const getPageTitle = (pageTitle: string) => {
    return `${pageTitle} • ${profile.title}`;
};
