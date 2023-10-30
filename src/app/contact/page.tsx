import { Container } from '@/shared/Layout/Container';
import profile from '../../assets/static/rowinvanamsterdam.json';
import { getPageTitle } from '@/utils/getPageTitle';
import { Metadata } from 'next';
import { ContactForm } from '@/Pages/Contact/ContactForm';
import { Box } from '@/shared/Layout/Box';
import { ContactDetails } from '@/Pages/Contact/ContactDetails';

export const metadata: Metadata = {
    title: getPageTitle('Contact'),
    description: profile.subtitle
};

const Contact = () => {
    return (
        <>
            <Container maxWidth="6xl">
                <Box className="mt-8 md:mt-28 flex flex-col gap-10 md:flex-row">
                    <Box className="w-full">
                        <ContactDetails />
                    </Box>

                    <Box className="w-full pt-0.5">
                        <ContactForm />
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default Contact;
