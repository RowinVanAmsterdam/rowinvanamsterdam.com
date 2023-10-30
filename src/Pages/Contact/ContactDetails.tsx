import { Button } from '@/shared/Buttons/Button';
import { Box } from '@/shared/Layout/Box';
import { Socials } from '@/shared/Socials/Socials';
import { Typography } from '@/shared/Typography';
import profile from '../../assets/static/rowinvanamsterdam.json';

export const ContactDetails = () => {
    return (
        <Box className="">
            <Typography variant="h2" component="h1" className="mb-2">
                Leave a message.
            </Typography>
            <Typography className="mb-2">
                I would love to hear from you. You can get in touch by filling in the form or contact me through one of the options below.
            </Typography>

            <Button startIcon="mail" className="px-0" href={`mailto:${profile.contact.email}`}>
                {profile.contact.email}
            </Button>

            <Socials className="mt-8" />
        </Box>
    );
};
