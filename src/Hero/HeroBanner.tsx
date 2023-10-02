import { Container } from '@/shared/Container';
import { Typography } from '@/shared/Typography';

type HeroBannerProps = {
    title?: string;
    subtitle?: string;
};

export const HeroBanner = (props: HeroBannerProps) => {
    const { title, subtitle } = props;

    return (
        <section className="mb-12 h-[24rem] w-full bg-primary-150 text-white">
            <Container maxWidth="4xl" className="flex h-full w-full flex-col items-center justify-center text-center">
                {subtitle && (
                    <Typography component="h2" variant="h5" className="mb-1 font-light tracking-[.625em]">
                        {subtitle}
                    </Typography>
                )}

                {title && (
                    <Typography component="h1" variant="h3">
                        {title}
                    </Typography>
                )}
            </Container>
        </section>
    );
};
