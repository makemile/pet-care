import { HeroSection } from "../../components/Sections/HeroSection";
import { ServiceSection } from "../../components/Sections/ServiceSection";
import { ReviewServiceSection } from "../../components/Sections/ReviewService";
import { ReserveSection } from "../../components/Sections/ReserveSection";
import { SuscriptionSection } from "../../components/Sections/SuscriptionSection";

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
