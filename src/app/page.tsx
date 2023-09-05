import { RVALogoAnimated } from "@/shared/Logo/RVALogoAnimated";

const Home = () => {
    return (
        <>
            <section className="container flex w-full h-full max-w-2xl flex-col items-center justify-center">
                <RVALogoAnimated initialRgbaColor="rgba(49, 49, 49, 0)" rgbaColor="rgba(49, 49, 49, 1)" />
            </section>
        </>
    );
};

export default Home;
