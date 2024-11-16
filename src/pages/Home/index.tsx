import { Suspense } from "react";
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
        <Suspense fallback={<div>Loading </div>}>
          <HeroSection />
          <ServiceSection />
          <ReviewServiceSection />
          <ReserveSection />
          <SuscriptionSection />
        </Suspense>
      </main>
    </>
  );
};
