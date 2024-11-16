import {
  HeroSection,
  ServiceSection,
  ReviewServiceSection,
  ReserveSection,
  SuscriptionSection,
} from "../../components/Sections/index";

export const Home = () => {
  return (
    <>
      <main className="main">
        <HeroSection />
        <ServiceSection />
        <ReviewServiceSection />
        <ReserveSection />
        <SuscriptionSection />
      </main>
    </>
  );
};
