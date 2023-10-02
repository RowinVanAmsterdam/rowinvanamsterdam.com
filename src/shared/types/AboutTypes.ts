type SocialsTypes = {
    name: string;
    username: string;
    url: string;
}

export type AboutTypes = {
    name: string;
    profilePicture: string;
    contact: {
        email: string;
        phone: string;
    };
    tags: string[];
    socials: SocialsTypes[];
}
