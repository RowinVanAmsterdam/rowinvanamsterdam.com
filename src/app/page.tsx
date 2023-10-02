import { FloatingCTA } from '@/shared/CTA/FloatingCTA';
import { Container } from '@/shared/Container';
import { RVALogoAnimated } from '@/shared/Logo/RVALogoAnimated';

const Home = () => {
    return (
        <>
            <div className="relative h-full w-full">
                <Container maxWidth='2xl' className="flex h-full w-full flex-col items-center justify-center">
                    <RVALogoAnimated initialRgbaColor="rgba(49, 49, 49, 0)" rgbaColor="rgba(49, 49, 49, 1)" />
                </Container>

                <FloatingCTA
                    title="Empower your mind with insights"
                    subtitle="Developer blog"
                    buttonLabel="Visit"
                    buttonLink="/blog"
                    className="absolute bottom-2 left-4 right-4 lg:left-auto lg:right-8"
                />
            </div>
        </>
    );
};

export default Home;
